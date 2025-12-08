# QR Code Component — Frontend Mentor Practice + Custom Enhancements

This project is a practice challenge based on the **Frontend Mentor QR Code Component** design.  
The goal is to build a **pixel-perfect**, **accessible**, and **responsive** implementation while learning the fundamentals of:

- HTML (semantic structure)
- CSS (variables, layout, flex, responsive design)
- JavaScript (DOM, events, dynamic QR generation)
- Git workflows (feature → develop → main)
- GitHub Pages deployment
- GitHub Actions CI automation

We also add **our own custom features** on top of the original challenge to build real-world experience.

---

## 🚀 Live Demo (GitHub Pages)

> This project auto-deploys to **GitHub Pages** whenever code is merged from `develop` → `main`.  
> (Pages works on all public repositories under the free plan.)

🔗 **Live URL:**  
https://<your-username>.github.io/qr-code-component/

Replace `<your-username>` with your GitHub name after deployment runs.

---

## 📁 Project Structure

qr-code-component/
├── assets/
│ └── images/
│ └── image-qr-code.png
├── css/
│ └── styles.css
├── js/
│ └── script.js
├── index.html
└── README.md

---

## 🎨 Style Guide

### Colors (from challenge)
- **White:** hsl(0, 0%, 100%)
- **Slate 300:** hsl(212, 45%, 89%)
- **Slate 500:** hsl(216, 15%, 48%)
- **Slate 900:** hsl(218, 44%, 22%)

### Typography
- Font: **Outfit** (weights 400, 700)
- Base size: **15px**

---

## 🧩 Custom Functionality Added

This project extends the original challenge with additional features:

### ✔ Click-to-Copy URL  
Clicking the QR code copies its encoded link to the clipboard.

### ✔ Dynamic QR code generation  
You can swap the static PNG for a **generated QR** using JavaScript/QRCode.js.

### ✔ Visual "Copied!" feedback  
The QR temporarily displays a message when clicked.

### ✔ GitHub Actions CI  
- HTML validation (`tidy`)
- Optional CSS linting (stylelint)
- Optional JS linting (ESLint)

### ✔ Auto-Deployment to GitHub Pages  
Every merge into `main` triggers a Pages deployment.

---

## 🛠️ Tech Stack

- **HTML5** (semantic layout)
- **CSS3** (variables, flexbox)
- **JavaScript** (DOM events, QR generation)
- **QRCode.js** (optional)
- **Git & GitHub**
- **GitHub Actions** (CI/CD)
- **GitHub Pages** (hosting)

---

## 🌱 How to Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/Jason-Omondi/qr-code-component.git
cd qr-code-component
