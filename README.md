# Mohammad Junaid Isha — Portfolio

> **AI/ML Engineer · GenAI Builder · AI Agents Developer**
> B.Tech AIML · Apex University, Jaipur (2023–2027)
> Open to remote internships, freelance AI/ML projects, and full-time engineering roles globally.

---

## Live Preview

Open `index.html` in any modern browser — no build step, no dependencies to install.

---

## About

Personal portfolio website for **Mohammad Junaid Isha**, an AI/ML Engineer specializing in Generative AI, AI Agents, and Google Cloud. Built as a fully static multi-file portfolio with zero frameworks or bundlers.

---

## Features

| Feature | Details |
|---|---|
| **Theme Toggle** | Dark / Light mode via CSS custom properties |
| **Typewriter Hero** | Cycles through 5 roles with type/delete animation |
| **Scroll Animations** | Intersection Observer–based reveal on scroll |
| **Contact Form** | EmailJS (email) + Telegram bot notification |
| **Toast Notification** | Success feedback after form submission |
| **Responsive** | Mobile menu, fluid grids, breakpoints at 768px / 480px |
| **Certificate Page** | Printable certificate (`pages/certificate.html`) with PDF export |

---

## Sections

- **Hero** — Typewriter intro, CTA buttons, animated rings
- **About** — Background, education, stats (5+ projects, 2 internships, 5 certs)
- **Skills** — Categorized tech stack with color-coded tags
- **Projects** — 6 featured projects with tech, description, and links
- **Experience** — Work history and internships
- **Certifications** — 5 credentials with issuers
- **Contact** — Contact info + working form with email & Telegram delivery

---

## Projects

| Project | Tech Stack |
|---|---|
| AI Health Agent | Python, LLMs, AI Agents, Google Cloud, FastAPI |
| Demystifying Legal Documents | Vertex AI, React.js, TypeScript, FastAPI, GenAI |
| MNIST CNN Classifier | TensorFlow, CNN, Python, Computer Vision |
| Image Captioning System | PyTorch, InceptionV3, NLP, Deep Learning |
| Color Changer App | JavaScript, HTML/CSS, DOM API |
| Data Visualization Dashboards | Python, Power BI, Pandas, Matplotlib |

---

## Certifications

| Certificate | Issuer |
|---|---|
| 5-Day AI Agents Intensive Course | Google Cloud |
| Intermediate Machine Learning | Kaggle |
| Python (Basic & Advanced) | HackerRank / Kaggle |
| Employability Skills & Digital Literacy with AI | IBM · Sponsored by Edunet Foundation |
| Machine Learning Introduction for Everyone | Online Course Platform |

---

## Tech Stack

```
Languages     Python · SQL · JavaScript · TypeScript · HTML/CSS
AI / ML       GenAI · AI Agents · LLMs · TensorFlow · PyTorch · Scikit-learn · XGBoost · NLP · CV
Cloud         Google Cloud (GCP) · Vertex AI · Docker · FastAPI · REST APIs
Data          NumPy · Pandas · Matplotlib · Power BI · Data Visualization
Frontend      React.js · Node.js (Basics) · Prompt Engineering
```

---

## External Dependencies

All loaded via CDN — no npm install required.

| Library | Purpose |
|---|---|
| Google Fonts (Syne, DM Sans, JetBrains Mono) | Typography |
| Font Awesome 6.5.0 | Icons |
| EmailJS Browser v4 | Contact form email delivery |

---

## Contact Form Setup

The form sends messages to `mdjunaid.isha@gmail.com` via **EmailJS** and fires a **Telegram notification** via the Bot API.

### EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Connect Gmail → note the **Service ID**
3. Create a template using `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}` → note the **Template ID**
4. Copy your **Public Key** from Account → General
5. Fill in `assets/js/main.js`:
```js
emailjs.init({ publicKey: "YOUR_PUBLIC_KEY" });
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
```

### Telegram
1. Create a bot via [@BotFather](https://t.me/BotFather) → note the **Bot Token**
2. Get your **Chat ID** via [@userinfobot](https://t.me/userinfobot)
3. Fill in `assets/js/main.js`:
```js
const TELEGRAM_BOT_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
const TELEGRAM_CHAT_ID   = "YOUR_TELEGRAM_CHAT_ID";
```

---

## Files

```
Portfolio_Website/
├── index.html              # Main portfolio page
├── assets/
│   ├── css/
│   │   └── style.css       # All styles
│   ├── js/
│   │   └── main.js         # Typewriter, theme, form logic (EmailJS + Telegram)
│   └── images/             # Place project/profile images here
├── pages/
│   └── certificate.html    # Printable IBM · Edunet Foundation certificate
└── README.md               # This file
```

---

## Deployment

This is a static site — deploy anywhere that serves HTML:

- **GitHub Pages** — push to a repo, enable Pages in Settings
- **Netlify** — drag and drop the folder at [netlify.com/drop](https://app.netlify.com/drop)
- **Vercel** — `vercel --prod` from the project folder

No build step. No configuration needed.

---

## Contact

**Mohammad Junaid Isha**
📧 mdjunaid.isha@gmail.com
💼 [linkedin.com/in/mohammad-junaid-isha-aiml](https://www.linkedin.com/in/mohammad-junaid-isha-aiml/)
🐙 [github.com/mdjunaidisha](https://github.com/mdjunaidisha)
📍 Jaipur, India · Remote Worldwide

---

*Designed & built by Mohammad Junaid Isha · AI/ML Engineer & GenAI Builder*
