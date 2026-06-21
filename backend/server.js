require('dotenv').config();

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = Number(process.env.PORT || 3000);

const requiredEnvVars = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USER',
    'SMTP_PASS'
];

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

app.use(cors({
    origin(origin, callback) {
        if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes('*')) {
            callback(null, true);
            return;
        }

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
            return;
        }

        callback(new Error('Origin non consentita'));
    }
}));

app.use(express.json({ limit: '1mb' }));

const escapeHtml = (value) => String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const normalizeText = (value, fallback = 'N/A') => {
    const text = typeof value === 'string' ? value.trim() : '';
    return text || fallback;
};

const normalizeBooleanText = (value) => {
    const normalized = String(value || '').trim().toLowerCase();
    if (!normalized) {
        return 'No';
    }

    if (['si', 'sì', 'yes', 'true', '1'].includes(normalized)) {
        return 'Si';
    }

    return 'No';
};

const isSafeHttpUrl = (value) => /^https?:\/\//i.test(String(value || '').trim());

const normalizeAttachments = (attachments, attachmentsList) => {
    if (Array.isArray(attachments) && attachments.length > 0) {
        return attachments
            .map((item) => ({
                name: normalizeText(item && item.name, 'Allegato'),
                url: isSafeHttpUrl(item && item.url) ? item.url.trim() : '',
                isImage: Boolean(item && item.isImage)
            }))
            .filter((item) => item.name || item.url);
    }

    if (typeof attachmentsList !== 'string' || !attachmentsList.trim()) {
        return [];
    }

    return attachmentsList
        .split(/\r?\n|,\s*/)
        .map((item) => item.trim())
        .filter(Boolean)
        .map((item) => ({
            name: item,
            url: '',
            isImage: false
        }));
};

const buildAttachmentsHtml = (attachments) => {
    if (!attachments.length) {
        return '<p style="margin:0;color:#6b7280;">Nessun allegato</p>';
    }

    return attachments.map((item) => {
        const safeName = escapeHtml(item.name);

        if (item.url && item.isImage) {
            const safeUrl = escapeHtml(item.url);
            return '<div style="margin-bottom:16px;">' +
                `<p style="margin:0 0 8px;font-size:13px;color:#111827;font-weight:600;">${safeName}</p>` +
                `<img src="${safeUrl}" alt="${safeName}" style="max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;display:block;" />` +
                '</div>';
        }

        if (item.url) {
            const safeUrl = escapeHtml(item.url);
            return `<p style="margin:6px 0;"><a href="${safeUrl}" target="_blank" rel="noopener noreferrer" style="color:#1d4ed8;text-decoration:none;">${safeName}</a></p>`;
        }

        return `<p style="margin:6px 0;color:#111827;">${safeName}</p>`;
    }).join('');
};

const buildAttachmentsText = (attachments) => {
    if (!attachments.length) {
        return 'Nessun allegato';
    }

    return attachments.map((item) => {
        if (item.url) {
            return `${item.name}: ${item.url}`;
        }

        return item.name;
    }).join('\n');
};

const buildMailHtml = (payload, attachments) => {
    const fields = [
        ['Nome', `${normalizeText(payload.name)} ${normalizeText(payload.surname, '')}`.trim()],
        ['Email', normalizeText(payload.email)],
        ['Telefono', normalizeText(payload.phone)],
        ['Marca', normalizeText(payload.make)],
        ['Modello', normalizeText(payload.model)],
        ['Anno', normalizeText(payload.year)],
        ['Allestimento', normalizeText(payload.trim)],
        ['Compagnia assicurativa', normalizeText(payload.insuranceCompany)],
        ['Incidenti precedenti', normalizeBooleanText(payload.previousAccidents)],
        ['Dettagli incidenti precedenti', normalizeText(payload.accidentsDescription)],
        ['Descrizione del danno', normalizeText(payload.description)],
        ['Data invio', new Date().toLocaleString('it-IT')]
    ];

    const detailsHtml = fields.map(([label, value]) => {
        return '<tr>' +
            `<td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;background:#f9fafb;font-weight:600;width:220px;">${escapeHtml(label)}</td>` +
            `<td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(value)}</td>` +
            '</tr>';
    }).join('');

    return '<div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;">' +
        '<h1 style="margin:0 0 16px;font-size:24px;">Nuova richiesta di preventivo DreamCar</h1>' +
        '<table style="width:100%;border-collapse:collapse;margin-bottom:24px;">' +
        detailsHtml +
        '</table>' +
        '<h2 style="margin:0 0 12px;font-size:18px;">Allegati</h2>' +
        buildAttachmentsHtml(attachments) +
        '</div>';
};

const buildMailText = (payload, attachments) => {
    return [
        'Nuova richiesta di preventivo DreamCar',
        '',
        `Nome: ${normalizeText(payload.name)} ${normalizeText(payload.surname, '')}`.trim(),
        `Email: ${normalizeText(payload.email)}`,
        `Telefono: ${normalizeText(payload.phone)}`,
        `Marca: ${normalizeText(payload.make)}`,
        `Modello: ${normalizeText(payload.model)}`,
        `Anno: ${normalizeText(payload.year)}`,
        `Allestimento: ${normalizeText(payload.trim)}`,
        `Compagnia assicurativa: ${normalizeText(payload.insuranceCompany)}`,
        `Incidenti precedenti: ${normalizeBooleanText(payload.previousAccidents)}`,
        `Dettagli incidenti precedenti: ${normalizeText(payload.accidentsDescription)}`,
        `Descrizione del danno: ${normalizeText(payload.description)}`,
        `Allegati:\n${buildAttachmentsText(attachments)}`,
        `Data invio: ${new Date().toLocaleString('it-IT')}`
    ].join('\n');
};

const validatePayload = (payload) => {
    const missingFields = ['name', 'surname', 'email', 'phone', 'description']
        .filter((field) => !normalizeText(payload[field], '').trim());

    if (missingFields.length > 0) {
        return `Campi obbligatori mancanti: ${missingFields.join(', ')}`;
    }

    return null;
};

const getMailer = () => {
    const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);
    if (missingEnvVars.length > 0) {
        throw new Error(`Configurazione SMTP incompleta: ${missingEnvVars.join(', ')}`);
    }

    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
};

app.get('/api/health', (req, res) => {
    res.json({
        ok: true,
        service: 'dreamcar-backend'
    });
});

app.post('/api/quotes', async (req, res) => {
    try {
        const payload = req.body || {};
        const validationError = validatePayload(payload);
        if (validationError) {
            res.status(400).json({ ok: false, error: validationError });
            return;
        }

        const attachments = normalizeAttachments(payload.attachments, payload.attachmentsList);
        const transporter = getMailer();
        const mailTo = process.env.MAIL_TO || process.env.SMTP_USER;
        const mailFrom = process.env.MAIL_FROM || process.env.SMTP_USER;

        await transporter.sendMail({
            from: mailFrom,
            to: mailTo,
            replyTo: normalizeText(payload.email),
            subject: `Nuovo preventivo DreamCar - ${normalizeText(payload.name)} ${normalizeText(payload.surname, '')}`.trim(),
            text: buildMailText(payload, attachments),
            html: buildMailHtml(payload, attachments)
        });

        res.status(200).json({ ok: true });
    } catch (error) {
        console.error('Errore invio preventivo:', error);
        res.status(500).json({
            ok: false,
            error: 'Invio email fallito'
        });
    }
});

app.listen(port, () => {
    console.log(`DreamCar backend in ascolto sulla porta ${port}`);
});