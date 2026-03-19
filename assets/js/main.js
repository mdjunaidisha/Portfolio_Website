/* ══════════════════════════════════════════
   EmailJS Init
══════════════════════════════════════════ */
(function () {
  emailjs.init({ publicKey: "uq4Gf25nngCXq55Il" });
})();

/* ══════════════════════════════════════════
   TYPEWRITER
══════════════════════════════════════════ */
const roles = [
  "AI/ML Engineer",
  "GenAI Builder",
  "AI Agents Developer",
  "Google Cloud · Vertex AI",
  "Python · FastAPI · Docker",
];
let ri = 0, ci = 0, deleting = false;
const el = document.getElementById("typewriter");
function type() {
  const role = roles[ri];
  if (!deleting) {
    ci++;
    el.innerHTML = role.slice(0, ci) + '<span class="cursor">|</span>';
    if (ci === role.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    ci--;
    el.innerHTML = role.slice(0, ci) + '<span class="cursor">|</span>';
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 40 : 80);
}
type();

/* ══════════════════════════════════════════
   SCROLL NAV
══════════════════════════════════════════ */
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 40);
});

/* ══════════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════════ */
document.getElementById("hamburger").onclick = () => document.getElementById("mobileMenu").classList.add("open");
document.getElementById("mobileClose").onclick = () => closeMobile();
function closeMobile() { document.getElementById("mobileMenu").classList.remove("open"); }

/* ══════════════════════════════════════════
   THEME TOGGLE
══════════════════════════════════════════ */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  toggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
};

/* ══════════════════════════════════════════
   REVEAL ON SCROLL
══════════════════════════════════════════ */
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); } });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

/* ══════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════ */
const EMAILJS_SERVICE_ID  = "service_mdow067";
const EMAILJS_TEMPLATE_ID = "template_ma7u4dd";
const TELEGRAM_BOT_TOKEN  = "YOUR_TELEGRAM_BOT_TOKEN";  // from @BotFather
const TELEGRAM_CHAT_ID    = "YOUR_TELEGRAM_CHAT_ID";    // from @userinfobot

function submitForm() {
  const name    = document.getElementById("fname").value.trim();
  const email   = document.getElementById("femail").value.trim();
  const subject = document.getElementById("fsubject").value.trim();
  const message = document.getElementById("fmessage").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  const btn = document.querySelector(".form-submit");
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

  // 1) Send email via EmailJS
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    from_name:  name,
    from_email: email,
    subject:    subject || "Portfolio Inquiry",
    message:    message,
    to_email:   "mdjunaid.isha@gmail.com"
  })
  .then(() => {
    // 2) Telegram notification
    const text = `📬 *New Portfolio Message!*\n\n👤 *From:* ${name}\n📧 *Email:* ${email}\n📌 *Subject:* ${subject || "Portfolio Inquiry"}\n\n💬 *Message:*\n${message}`;
    const tgUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    return fetch(tgUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: "Markdown" })
    });
  })
  .then(() => {
    showToast();
    document.getElementById("fname").value    = "";
    document.getElementById("femail").value   = "";
    document.getElementById("fsubject").value = "";
    document.getElementById("fmessage").value = "";
  })
  .catch(err => {
    console.error("Form error:", err);
    alert("Something went wrong. Please email me directly at mdjunaid.isha@gmail.com");
  })
  .finally(() => {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
  });
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}
