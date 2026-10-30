# 🎓 Ayman Ayman El-Sayed — Personal Portfolio Website
### Computer Science Student • Galala University

A modern, colorful, bilingual (**English & Arabic**) personal portfolio engineered with **HTML5, Tailwind CSS, and Vanilla JavaScript**. Featuring dark glassmorphism styling, vibrant neon gradients, smooth RTL/LTR layout transitions, filterable projects, and a dedicated CV showcase.

> **Motto:**
> *“I don’t compare myself to anyone. I want to show that even at a young age, you can achieve anything.”*
> 
> *«لا أقارن نفسي بأحد. أريد أن أثبت أنه حتى في سن مبكرة، يمكنك تحقيق أي شيء.»*

---

## 🌟 Features Included

- **Bilingual & Instant RTL/LTR Toggle:** Switch between English and Arabic at any moment with one click (`🌐 العربية` / `🌐 English`). The layout, typography (Cairo font for Arabic, Plus Jakarta Sans for English), text direction, and icons adjust seamlessly.
- **Colorful Tech Aesthetic:** Vibrant ambient glows and gradients (Cyan, Indigo, Magenta, Amber, and Emerald) combined with clean glassmorphism.
- **Curated Sections:**
  1. **Hero:** Introduction, Galala University status, personal quote highlight, and terminal card.
  2. **About Me:** Academic focus, youth ambition, and core learning pillars.
  3. **Skills:** Programming languages, CS foundations, and developer tools.
  4. **Projects:** Filterable showcase (`All`, `Academic`, `Personal`) with deep case study modals.
  5. **CV / Resume:** Dedicated resume card currently displaying coming soon status.
  6. **Contact:** Direct email copy, social links, location, and functional contact form.
- **Zero Build Tools Needed:** Runs in any browser right out of the box with zero npm packages or complex installations.

---

## ⚡ Quick Start: How to Run Locally

### Using Python (Built-in Server)
Open PowerShell in this folder and run:
```powershell
py -m http.server 3000
```
Then visit **[http://localhost:3000](http://localhost:3000)** in your browser.

*(Or simply double-click `index.html` to open it in Chrome, Edge, or Firefox).*

---

## ✏️ Simple Customization Guide (Replacing Placeholders)

### 1. Contact Information
- **Email:** Configured as `elsayedaiman25@gmail.com` with a direct `mailto:` link and 1-click clipboard copy in both English and Arabic.
- **Contact Form:** Connected directly to `elsayedaiman25@gmail.com` via `mailto:`. Submitting the form pre-fills the visitor's Name, Email, and Message into their default email app ready for sending.
- **Social Profiles:** Placeholder GitHub and LinkedIn links have been removed. When you are ready to link your GitHub or LinkedIn, you can easily add them to the Contact section in [index.html](file:///d:/portopholio/index.html).

### 2. CV Section (Currently Showing "Coming Soon")
Currently, the CV section displays:
- **English:** “My CV will be available soon.”
- **Arabic:** “سأضيف سيرتي الذاتية قريبًا.”

When you prepare your CV PDF in the future, you can add a download button or link inside `<section id="cv">` in [index.html](file:///d:/portopholio/index.html).

### 3. Adding Your Real Projects (Currently Showing "Coming Soon")
Currently, the Projects section displays a clean placeholder:
- **English:** “My projects are coming soon.”
- **Arabic:** “مشاريعي قريبًا.”

When you are ready to showcase your real software projects, open [assets/js/main.js](file:///d:/portopholio/assets/js/main.js), find the `projectsData` array at line 250, and paste your project objects:
```javascript
{
  id: 'project-1',
  category: 'academic', // 'academic' or 'personal'
  tags: ['C++', 'Data Structures', 'OOP'],
  liveUrl: 'https://your-demo-link.com', // or '#'
  githubUrl: 'https://github.com/your-username/repo-name',
  en: {
    categoryLabel: 'Academic Project',
    title: 'Your Real Project Title (English)',
    subtitle: 'Short one-line subtitle',
    shortDesc: 'Brief summary of what this project does.',
    problem: 'What problem or challenge did you solve?',
    solution: 'How did you build it and what technologies did you use?',
    highlights: ['Key feature 1', 'Key feature 2', 'Key feature 3']
  },
  ar: {
    categoryLabel: 'مشروع أكاديمي',
    title: 'عنوان مشروعك بالعربية',
    subtitle: 'وصف فرعي مختصر',
    shortDesc: 'نبذة مختصرة عن المشروع.',
    problem: 'ما المشكلة التي يحلها المشروع؟',
    solution: 'كيف قمت ببنائه وما التقنيات المستخدمة؟',
    highlights: ['ميزة تقنية 1', 'ميزة تقنية 2', 'ميزة تقنية 3']
  }
}
```
You can add as many projects as you like by copying and pasting this block.

### 4. Skills Section
The Skills section displays a clean, honest learning message:
- **English:** “I’m currently developing my programming and computer science skills.”
- **Arabic:** “أعمل حاليًا على تطوير مهاراتي في البرمجة وعلوم الحاسب.”

When you want to display confirmed technical skill categories or badges in the future, you can customize the `<section id="skills">` in [index.html](file:///d:/portopholio/index.html) or [assets/js/main.js](file:///d:/portopholio/assets/js/main.js).

### 5. Managing Translations
All text content for both English and Arabic is organized neatly in [assets/js/main.js](file:///d:/portopholio/assets/js/main.js) under `i18nData.en` and `i18nData.ar`. If you want to change any wording or add new text, just edit the corresponding property in both dictionaries!

---

## 🌐 Free Deployment Options

- **GitHub Pages:**
  Push this folder to a GitHub repository named `username.github.io` and enable GitHub Pages in Settings -> Pages.
- **Netlify:**
  Go to [Netlify.com](https://www.netlify.com/), sign in, and drag & drop the `portopholio` folder into the Netlify dashboard for instant live publishing with free HTTPS.
- **Vercel:**
  Import the repository directly onto [Vercel.com](https://vercel.com/) for zero-config deployment.
