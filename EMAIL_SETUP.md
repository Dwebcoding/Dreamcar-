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
<h2>📋 Nuova Richiesta di Preventivo</h2>

<h3>Dati Cliente</h3>
<p><strong>Nome:</strong> {{customer_name}}</p>
<p><strong>Email:</strong> {{customer_email}}</p>
<p><strong>Telefono:</strong> {{customer_phone}}</p>

<h3>Veicolo</h3>
<p><strong>Marca:</strong> {{vehicle_make}}</p>
<p><strong>Modello:</strong> {{vehicle_model}}</p>
<p><strong>Anno:</strong> {{vehicle_year}}</p>
<p><strong>Allestimento:</strong> {{vehicle_trim}}</p>

<h3>Informazioni Sinistri</h3>
<p><strong>Sinistri Precedenti:</strong> {{previous_accidents}}</p>
<p><strong>Dettagli:</strong> {{accidents_description}}</p>

<h3>Assicurazione</h3>
<p><strong>Compagnia:</strong> {{insurance_company}}</p>

<h3>Descrizione Danno</h3>
<p>{{damage_description}}</p>

<hr>
<p><small>Data: {{submission_date}}</small></p>
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
    TEMPLATE_ID: 'template_abc123xyz',      // Il tuo Template ID
    PUBLIC_KEY: 'xyz123abc',                // La tua Public Key
    SHOP_EMAIL: 'info@dreamcar.it'          // L'email dell'autofficina
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
