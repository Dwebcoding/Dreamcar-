# 📧 Setup EmailJS per Preventivi

Questo documento spiega come configurare EmailJS per inviare i preventivi alla tua email.

## 🚀 Step 1: Registrazione su EmailJS

1. Vai su https://www.emailjs.com
2. Clicca **Sign Up** → registrati con Google o email
3. Completa il setup

## 🔑 Step 2: Creare un Email Service

### Opzione A: Gmail (Consigliato)

1. In EmailJS, vai a **Email Services** (sinistra)
2. Clicca **Add Service** → **Gmail**
3. Connetti il tuo account Gmail
4. Salva il **Service ID** (es: `gmail`)

> **⚠️ Importante**: Se hai la 2FA attiva su Gmail, devi:
> - Generare una **Password Specifica** per App
> - Non usare la password di Gmail

### Opzione B: Altro provider (Outlook, Yahoo, etc.)

1. Vai a **Email Services**
2. Clicca **Add Service** → scegli il provider
3. Inserisci credenziali
4. Salva il **Service ID**

## 📝 Step 3: Creare un Email Template

1. Vai a **Email Templates** (sinistra)
2. Clicca **Create New Template**
3. Nomina il template (es: `Quote Request`)
4. Nel campo **Email Content**, incolla questo template:

```html
<style>
@media only screen and (max-width: 600px) {
  .mobile-hidden { display: none !important; }
  .mobile-center { text-align: center !important; }
  table[class="responsive-table"] { width: 100% !important; }
  td[class="responsive-td"] { display: block !important; width: 100% !important; padding: 8px 0 !important; }
  .label-mobile { display: block !important; font-weight: bold !important; margin-bottom: 4px !important; }
  .col-container { display: block !important; width: 100% !important; }
  .col-50 { display: block !important; width: 100% !important; padding-right: 0 !important; padding-left: 0 !important; margin-bottom: 16px !important; border-left: none !important; }
  h2 { font-size: 16px !important; }
  h3 { font-size: 14px !important; }
}
</style>

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:20px;font-family:Arial,Helvetica,sans-serif;">
    <tr>
        <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 20px rgba(0,0,0,.08);">
                <tr>
                    <td style="background:#1f2937;color:#fff;padding:18px 16px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="vertical-align:middle;">
                                    <h2 style="margin:0;font-size:20px;color:#ffffff;">📋 Nuova Richiesta di Preventivo</h2>
                                    <p style="margin:6px 0 0;font-size:12px;color:#ffffff;">Data: {{submission_date}}</p>
                                </td>
                                <td align="right" style="vertical-align:middle;padding-left:10px;">
                                    <img src="https://dwebcoding.github.io/Dreamcar-/Images/Logo/Dream%20Car%20Logo%20Nero%20Rosso.png" alt="DreamCar" style="height:60px;display:block;">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding:20px 16px;">
                        <!-- RIGA 1: Cliente e Veicolo affiancati -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="col-50" style="width:48%;padding-right:16px;vertical-align:top;">
                                    <h3 style="margin:0 0 12px;color:#111827;font-size:16px;">Dati Cliente</h3>
                                    <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;" class="responsive-table">
                                        <tr>
                                            <td style="padding:6px 0;color:#6b7280;width:140px;" class="responsive-td">
                                                <span class="label-mobile">Nome</span>
                                            </td>
                                            <td style="padding:6px 0;color:#111827;" class="responsive-td">
                                                <strong>{{customer_name}}</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:6px 0;color:#6b7280;width:140px;" class="responsive-td">
                                                <span class="label-mobile">Email</span>
                                            </td>
                                            <td style="padding:6px 0;color:#111827;" class="responsive-td">
                                                {{customer_email}}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:6px 0;color:#6b7280;width:140px;" class="responsive-td">
                                                <span class="label-mobile">Telefono</span>
                                            </td>
                                            <td style="padding:6px 0;color:#111827;" class="responsive-td">
                                                {{customer_phone}}
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="col-50" style="width:48%;padding-left:16px;vertical-align:top;border-left:1px solid #e5e7eb;">
                                    <h3 style="margin:0 0 12px;color:#111827;font-size:16px;">Veicolo</h3>
                                    <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;" class="responsive-table">
                                        <tr>
                                            <td style="padding:6px 0;color:#6b7280;width:140px;" class="responsive-td">
                                                <span class="label-mobile">Marca</span>
                                            </td>
                                            <td style="padding:6px 0;color:#111827;" class="responsive-td">
                                                <strong>{{vehicle_make}}</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:6px 0;color:#6b7280;width:140px;" class="responsive-td">
                                                <span class="label-mobile">Modello</span>
                                            </td>
                                            <td style="padding:6px 0;color:#111827;" class="responsive-td">
                                                {{vehicle_model}}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:6px 0;color:#6b7280;width:140px;" class="responsive-td">
                                                <span class="label-mobile">Anno</span>
                                            </td>
                                            <td style="padding:6px 0;color:#111827;" class="responsive-td">
                                                {{vehicle_year}}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:6px 0;color:#6b7280;width:140px;" class="responsive-td">
                                                <span class="label-mobile">Allestimento</span>
                                            </td>
                                            <td style="padding:6px 0;color:#111827;" class="responsive-td">
                                                {{vehicle_trim}}
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>

                        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;">

                        <!-- RIGA 2: Assicurazione e Descrizione Danno affiancati -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="col-50" style="width:48%;padding-right:16px;vertical-align:top;">
                                    <h3 style="margin:0 0 12px;color:#111827;font-size:16px;">Assicurazione & Sinistri</h3>
                                    <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;" class="responsive-table">
                                        <tr>
                                            <td style="padding:6px 0;color:#6b7280;width:160px;" class="responsive-td">
                                                <span class="label-mobile">Compagnia</span>
                                            </td>
                                            <td style="padding:6px 0;color:#111827;" class="responsive-td">
                                                {{insurance_company}}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:6px 0;color:#6b7280;width:160px;" class="responsive-td">
                                                <span class="label-mobile">Sinistri precedenti</span>
                                            </td>
                                            <td style="padding:6px 0;color:#111827;" class="responsive-td">
                                                {{previous_accidents}}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:6px 0;color:#6b7280;width:160px;" class="responsive-td">
                                                <span class="label-mobile">Dettagli sinistri</span>
                                            </td>
                                            <td style="padding:6px 0;color:#111827;" class="responsive-td">
                                                {{accidents_description}}
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="col-50" style="width:48%;padding-left:16px;vertical-align:top;border-left:1px solid #e5e7eb;">
                                    <h3 style="margin:0 0 12px;color:#111827;font-size:16px;">Descrizione Danno</h3>
                                    <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:12px;color:#111827;font-size:13px;line-height:1.6;word-wrap:break-word;overflow-wrap:break-word;height:100%;box-sizing:border-box;">
                                        {{damage_description}}
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="background:#1f2937;color:#e5e7eb;padding:12px 16px;font-size:12px;text-align:center;">
                        DreamCar • Richiesta generata automaticamente
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
```

5. Salva il template e annota il **Template ID** (es: `template_abc123xyz`)

## 🔐 Step 4: Ottenere Public Key

1. Vai a **Account** (sinistra, in basso)
2. Copia il **Public Key** (es: `xyz123abc`)

## ✏️ Step 5: Configurare il tuo sito

1. Apri `js/email-sender.js`
2. Sostituisci le costanti nella sezione `EMAILJS_CONFIG`:

```javascript
const EMAILJS_CONFIG = {
    SERVICE_ID: 'gmail',                    // Il tuo Service ID
    TEMPLATE_ID: 'template_Dreamcar',      // Il tuo Template ID
    PUBLIC_KEY: '675zZLSFZI89sVE3b',      // La tua Public Key
    SHOP_EMAIL: 'dwebcoding@gmail.com'   // L'email dell'autofficina
};
```

3. Salva il file
4. Fai un commit e push su GitHub

## 🧪 Test

1. Vai alla pagina **Preventivo** del sito
2. Compila il form
3. Clicca "Invia Richiesta"
4. Controlla la console (F12) per vedere se ci sono errori
5. Controlla l'email dell'autofficina per ricevere il preventivo

## 📊 Limitazioni

- **EmailJS gratis**: max 200 email/mese
- Per più email, considera un piano a pagamento o un backend custom

## 🆘 Troubleshooting

### Email non arriva
- Verifica che SERVICE_ID, TEMPLATE_ID e PUBLIC_KEY siano corretti
- Controlla lo spam
- Prova a testare da **EmailJS Dashboard** → **Email Services** → **Send Test Email**

### Errore CORS
- Non dovrebbe succedere con EmailJS
- Se accade, prova con un'altra email (non Gmail)

### Variabili non sostituite
- Verifica che il template usi `{{variable_name}}` correttamente
- Assicurati che `email-sender.js` invii tutte le variabili necessarie

## 🔐 Sicurezza

- La Public Key è pubblica (è nell'HTML), quindi è OK condividerla
- Le credenziali email rimangono private su EmailJS
- I dati non vengono salvati, solo inviati via email

---

**Domande?** Contatta il supporto EmailJS o rivedi la loro [documentazione ufficiale](https://www.emailjs.com/docs/)
