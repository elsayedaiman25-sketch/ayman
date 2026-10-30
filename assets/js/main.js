// Bilingual Portfolio JavaScript (English & Arabic)
// Owner: Ayman Ayman El-Sayed | Computer Science Student at Galala University

// Translation Dictionary
const i18nData = {
  en: {
    // Nav
    navAbout: "About Me",
    navSkills: "Skills",
    navProjects: "Projects",
    navCv: "CV",
    navContact: "Contact",
    navCta: "Get in Touch",
    langToggle: "العربية",

    // Hero
    heroBadge: "Computer Science Student • Galala University",
    heroGreeting: "Hi, I'm",
    heroName: "Ayman Ayman El-Sayed",
    heroRole: "Computer Science Student & Aspiring Software Engineer",
    heroQuote: "“I don't compare myself to anyone. I want to show that even at a young age, you can achieve anything.”",
    btnProjects: "Explore Projects",
    btnCv: "CV / Resume",
    btnContact: "Contact Me",
    heroConnect: "Connect:",
    heroLocation: "Galala University • Egypt",

    // Terminal Card
    terminalTitle: "student_profile.json",
    termName: "Ayman Ayman El-Sayed",
    termUni: "Galala University",
    termFaculty: "Computer Science",
    termMindset: "Boundless ambition & relentless curiosity",
    termStatus: "Learning, building, and open to opportunities",
    termBadgeFast: "Young & Ambitious",
    termBadgeFastSub: "No limits to what can be achieved",

    // Stats
    stat1Label: "Curiosity & Focus",
    stat2Label: "Clean Code & Learning",
    stat3Label: "Academic & Personal Projects",
    stat4Label: "Belief in Excellence",

    // About
    aboutBadge: "MY JOURNEY & AMBITION",
    aboutTitle: "Driven by Passion, Focused on <span class='gradient-text-rainbow'>Growth</span>",
    aboutSubtitle: "Studying Computer Science at Galala University with a strong desire to master technology and make an impact.",
    aboutP1: "I am Ayman Ayman El-Sayed, a Computer Science student at Galala University. My core philosophy is simple: I don't compare myself to anyone. I want to show that even at a young age, you can achieve anything through dedication, discipline, and a deep curiosity for computing.",
    aboutP2: "My university journey gives me a solid foundation in computer science fundamentals—algorithms, data structures, and software principles—while I continuously spend my time outside the classroom building projects and exploring modern technologies.",
    aboutPillar1Title: "Strong Academic Foundations",
    aboutPillar1Desc: "Committed to deep mastery of computer science fundamentals, data structures, and algorithmic problem-solving at Galala University.",
    aboutPillar2Title: "Relentless Ambition",
    aboutPillar2Desc: "Believing that youth is an advantage of energy, high adaptability, and limitless potential.",
    aboutPillar3Title: "Hands-on Builder",
    aboutPillar3Desc: "Constantly turning theoretical computer science concepts into functional software and practical applications.",

    // Skills
    skillsBadge: "TECHNICAL TOOLBOX",
    skillsTitle: "Core Competencies & <span class='gradient-text-cyan'>Skills</span>",
    skillsSubtitle: "Continuous learning and active development in computer science.",
    skillsMessage: "I’m currently developing my programming and computer science skills.",
    skillsStatusBadge: "Active Learning & Practice",
    skillsSubNote: "Focused on core fundamentals, algorithms, and practical software engineering at Galala University.",

    // Projects
    projectsBadge: "PORTFOLIO WORK",
    projectsTitle: "Featured <span class='gradient-text-purple'>Projects</span>",
    projectsSubtitle: "Academic coursework and personal software projects in active development.",
    filterAll: "All Projects",
    filterAcademic: "Academic / Coursework",
    filterPersonal: "Personal Projects",
    projectsComingSoon: "My projects are coming soon.",
    projectsComingSoonSub: "Currently building and refining software projects. Stay tuned!",
    projectsStatusBadge: "In Active Development",
    btnDetails: "Project Details & Specs",
    btnLive: "Live Demo",
    btnSource: "Source Code",

    // CV Section
    cvBadge: "CURRICULUM VITAE",
    cvTitle: "My Resume & <span class='gradient-text-rainbow'>Credentials</span>",
    cvSubtitle: "Academic preparation and computer science studies at Galala University.",
    cvMessage: "My CV will be available soon.",
    cvStatusBadge: "In Preparation",
    cvSubNote: "Currently compiling academic coursework, technical milestones, and project summaries at Galala University.",

    // Contact
    contactBadge: "GET IN TOUCH",
    contactTitle: "Let's <span class='gradient-text-cyan'>Connect</span>",
    contactSubtitle: "Have an internship, project opportunity, or want to collaborate? Feel free to reach out anytime.",
    contactEmailLabel: "Direct Email",
    contactEmailValue: "elsayedaiman25@gmail.com",
    contactEmailNote: "Click to copy email address",
    contactLocationLabel: "Location & Study",
    contactLocationValue: "Galala University, Egypt",
    contactSocialLabel: "Professional Profiles",
    contactFormTitle: "Send a Message",
    contactFormSub: "Leave a note and I will get back to you as soon as possible.",
    formName: "Your Name *",
    formEmail: "Your Email *",
    formSubject: "Subject",
    formMessage: "Message *",
    btnSend: "Send Message",
    formMailtoNotice: "Clicking Send will open your email app with your message prepared.",
    responseRate: "Open to student internships, mentorship, and tech collaborations",

    // Footer
    footerRights: "Built by Ayman Ayman El-Sayed • Computer Science at Galala University",
    footerBackToTop: "Back to Top",

    // Modal
    modalTechTitle: "Technologies & Tools",
    modalProblemTitle: "Project Objective & Overview",
    modalSolutionTitle: "Implementation & Architecture",
    modalHighlightsTitle: "Key Technical Highlights",

    // Toast
    toastCopied: "Email address copied to clipboard!",
    toastOpeningEmail: "Opening your email app with your message prepared...",
  },

  ar: {
    // Nav
    navAbout: "عنّي",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navCv: "السيرة الذاتية",
    navContact: "تواصل معي",
    navCta: "تواصل معي",
    langToggle: "English",

    // Hero
    heroBadge: "طالب علوم الحاسب • جامعة الجلالة",
    heroGreeting: "مرحبًا، أنا",
    heroName: "أيمن أيمن السيد",
    heroRole: "طالب علوم حاسب ومطور برمجيات طموح",
    heroQuote: "«لا أقارن نفسي بأحد. أريد أن أثبت أنه حتى في سن مبكرة، يمكنك تحقيق أي شيء.»",
    btnProjects: "استكشف المشاريع",
    btnCv: "السيرة الذاتية",
    btnContact: "تواصل معي",
    heroConnect: "تواصل:",
    heroLocation: "جامعة الجلالة • مصر",

    // Terminal Card
    terminalTitle: "student_profile.json",
    termName: "أيمن أيمن السيد",
    termUni: "جامعة الجلالة",
    termFaculty: "علوم الحاسب (Computer Science)",
    termMindset: "طموح لا حدود له وشغف مستمر بالتعلم",
    termStatus: "أتعلم، أبني، ومنفتح على الفرص الجديدة",
    termBadgeFast: "شاب وطموح",
    termBadgeFastSub: "لا حدود لما يمكن تحقيقه بالعمل والاجتهاد",

    // Stats
    stat1Label: "شغف وتركيز مستمر",
    stat2Label: "كتابة كود نظيف وتطوير دائم",
    stat3Label: "مشاريع أكاديمية وشخصية",
    stat4Label: "إيمان تام بالتميز والإنجاز",

    // About
    aboutBadge: "مسيرتي وطموحي",
    aboutTitle: "مدفوع بالشغف، ومُركّز على <span class='gradient-text-rainbow'>التطور والنمو</span>",
    aboutSubtitle: "أدرس علوم الحاسب بجامعة الجلالة مع رغبة حقيقية في إتقان التكنولوجيا وترك أثر ملموس.",
    aboutP1: "أنا أيمن أيمن السيد، طالب علوم حاسب بجامعة الجلالة. مبدئي الأساسي في الحياة بسيط: لا أقارن نفسي بأحد. أريد أن أثبت أنه حتى في سن مبكرة، يمكنك تحقيق أي شيء بالالتزام والانضباط وحب التعلم العميق في مجال البرمجيات والحوسبة.",
    aboutP2: "تمنحني دراستي الجامعية أساساً قوياً في المبادئ الجوهرية لعلوم الحاسب—كالخوارزميات، وهياكل البيانات، ومبادئ هندسة البرمجيات—وفي نفس الوقت أستثمر وقتي باستمرار خارج قاعات الدراسة في بناء المشاريع واستكشاف أحدث التقنيات.",
    aboutPillar1Title: "أساس أكاديمي راسخ",
    aboutPillar1Desc: "الالتزام بالفهم العميق لأساسيات علوم الحاسب، وهياكل البيانات، وحل المشكلات البرمجية بجامعة الجلالة.",
    aboutPillar2Title: "طموح لا يعرف المستحيل",
    aboutPillar2Desc: "الإيمان بأن صغر السن يمنح طاقة هائلة، وقدرة سريعة على التكيف، وإمكانيات غير محدودة للنجاح.",
    aboutPillar3Title: "بناء وتطبيق عملي",
    aboutPillar3Desc: "تحويل المفاهيم النظرية في علوم الحاسب إلى برمجيات حقيقية وتطبيقات قابلة للاستخدام الفعلي.",

    // Skills
    skillsBadge: "مجموعتي التقنية",
    skillsTitle: "المهارات والقدرات <span class='gradient-text-cyan'>التقنية</span>",
    skillsSubtitle: "تعلم وتطوير مستمر في مجال البرمجة وعلوم الحاسب.",
    skillsMessage: "أعمل حاليًا على تطوير مهاراتي في البرمجة وعلوم الحاسب.",
    skillsStatusBadge: "تعلم وتطبيق مستمر",
    skillsSubNote: "التركيز على المفاهيم الجوهرية، الخوارزميات، وتطبيقات هندسة البرمجيات بجامعة الجلالة.",

    // Projects
    projectsBadge: "سجل الأعمال",
    projectsTitle: "المشاريع <span class='gradient-text-purple'>المميزة</span>",
    projectsSubtitle: "مشاريع برمجية وتطبيقات دراسية وشخصية قيد التطوير والعمل.",
    filterAll: "كل المشاريع",
    filterAcademic: "أكاديمية / دراسية",
    filterPersonal: "مشاريع شخصية",
    projectsComingSoon: "مشاريعي قريبًا.",
    projectsComingSoonSub: "أعمل حاليًا على تطوير وتجهيز مشاريع برمجية جديدة. ترقبوها قريبًا!",
    projectsStatusBadge: "قيد التطوير والعمل",
    btnDetails: "تفاصيل المشروع والمواصفات",
    btnLive: "معاينة حية",
    btnSource: "الكود المصدري",

    // CV Section
    cvBadge: "السيرة الذاتية",
    cvTitle: "السيرة الذاتية <span class='gradient-text-rainbow'>والمؤهلات</span>",
    cvSubtitle: "الخلفية الأكاديمية ودراسة علوم الحاسب بجامعة الجلالة.",
    cvMessage: "سأضيف سيرتي الذاتية قريبًا.",
    cvStatusBadge: "قيد التجهيز والإعداد",
    cvSubNote: "أعمل حاليًا على توثيق المقررات الأكاديمية والمشاريع التقنية بجامعة الجلالة.",

    // Contact
    contactBadge: "تواصل معي",
    contactTitle: "دعنا <span class='gradient-text-cyan'>نتواصل معًا</span>",
    contactSubtitle: "سواء كانت لديك فرصة تدريبية، فكرة مشروع، أو ترغب في التعاون التقني، يسعدني تواصلك دائمًا.",
    contactEmailLabel: "البريد الإلكتروني المباشر",
    contactEmailValue: "elsayedaiman25@gmail.com",
    contactEmailNote: "اضغط لنسخ البريد الإلكتروني",
    contactLocationLabel: "الموقع والدراسة",
    contactLocationValue: "جامعة الجلالة، مصر",
    contactSocialLabel: "الملفات المهنية",
    contactFormTitle: "أرسل رسالة",
    contactFormSub: "اترك رسالتك وسأقوم بالرد عليك في أقرب وقت ممكن.",
    formName: "الاسم الكريم *",
    formEmail: "بريدك الإلكتروني *",
    formSubject: "موضوع الرسالة",
    formMessage: "نص الرسالة *",
    btnSend: "إرسال الرسالة",
    formMailtoNotice: "سيؤدي الضغط على إرسال إلى فتح تطبيق البريد الإلكتروني مع تجهيز رسالتك.",
    responseRate: "منفتح للفرص التدريبية، التوجيه البرمجي، والتعاون في المشاريع التقنية",

    // Footer
    footerRights: "تم التطوير بواسطة أيمن أيمن السيد • طالب علوم الحاسب بجامعة الجلالة",
    footerBackToTop: "العودة للأعلى",

    // Modal
    modalTechTitle: "التقنيات والأدوات المستخدمة",
    modalProblemTitle: "هدف المشروع ونظرة عامة",
    modalSolutionTitle: "التنفيذ والبنية البرمجية",
    modalHighlightsTitle: "أهم المميزات التقنية",

    // Toast
    toastCopied: "تم نسخ البريد الإلكتروني للحافظة بنجاح!",
    toastOpeningEmail: "جارٍ فتح تطبيق البريد الإلكتروني لديك مع تجهيز الرسالة...",
  }
};

// Projects Data Store - sample projects removed as requested
// When you build and want to display your real projects, add them to this array!
const projectsData = [];

// Current active language: read from localStorage or default to 'en'
let currentLang = localStorage.getItem('ayman_portfolio_lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  initLanguageToggle();
  initMobileMenu();
  initScrollSpy();
  initProjectFiltering();
  initProjectModal();
  initContactForm();
  initCopyEmail();
  initStatsCounter();
});

// Switch & Apply Language
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('ayman_portfolio_lang', lang);

  const isRtl = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

  // Update text translations via [data-i18n]
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[lang] && i18nData[lang][key] !== undefined) {
      el.innerHTML = i18nData[lang][key];
    }
  });

  // Update placeholder attributes via [data-i18n-placeholder]
  const inputElements = document.querySelectorAll('[data-i18n-placeholder]');
  inputElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18nData[lang] && i18nData[lang][key] !== undefined) {
      el.placeholder = i18nData[lang][key];
    }
  });

  // Update Language Toggle Button Text
  const langToggleBtns = document.querySelectorAll('.lang-toggle-btn');
  langToggleBtns.forEach(btn => {
    const label = btn.querySelector('.lang-label');
    if (label) {
      label.textContent = i18nData[lang].langToggle;
    }
  });

  // Re-render projects section in current language
  renderProjectCards(lang);

  // Refresh Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Language Toggle Setup
function initLanguageToggle() {
  const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      applyLanguage(nextLang);
    });
  });
}

// Render Project Cards dynamically or show the clean "Coming Soon" state
function renderProjectCards(lang) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const isRtl = lang === 'ar';
  const t = i18nData[lang];

  // If no projects are loaded yet, render the clean bilingual "Coming Soon" card
  if (!projectsData || projectsData.length === 0) {
    container.innerHTML = `
      <div class="col-span-full w-full">
        <div class="glass-panel rounded-3xl p-8 sm:p-14 border border-white/10 text-center relative overflow-hidden shadow-2xl flex flex-col items-center justify-center max-w-3xl mx-auto">
          
          <!-- Ambient glowing background orb inside card -->
          <div class="absolute -top-10 -right-10 w-44 h-44 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-10 -left-10 w-44 h-44 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <!-- Pulsing Status Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-purple-500/30 mb-6 shadow-sm">
            <span class="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></span>
            <span class="text-xs font-mono font-semibold text-purple-300">
              ${t.projectsStatusBadge}
            </span>
          </div>

          <!-- Icon Graphic -->
          <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-indigo-600/20 to-pink-500/20 border border-white/15 flex items-center justify-center mb-6 shadow-2xl shadow-indigo-950/50">
            <i data-lucide="sparkles" class="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 animate-pulse"></i>
          </div>

          <!-- Prominent Main Message -->
          <h3 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            <span class="gradient-text-rainbow">${t.projectsComingSoon}</span>
          </h3>

          <!-- Subtitle / Context Note -->
          <p class="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed font-normal">
            ${t.projectsComingSoonSub}
          </p>

          <!-- University Tag -->
          <div class="mt-8 pt-6 border-t border-white/10 w-full flex items-center justify-center gap-2 text-xs font-mono text-cyan-300/80">
            <i data-lucide="graduation-cap" class="w-4 h-4 text-cyan-400"></i>
            <span>Galala University • Computer Science</span>
          </div>

        </div>
      </div>
    `;
    return;
  }

  // If projectsData contains real projects, render them
  container.innerHTML = projectsData.map(project => {
    const content = project[lang] || project.en;
    return `
      <div class="project-card glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between" data-category="${project.category}">
        <div>
          <!-- Visual Gradient Header -->
          <div class="h-44 bg-gradient-to-br ${project.colorFrom} via-slate-900 ${project.colorTo} p-6 flex flex-col justify-between relative overflow-hidden border-b border-white/5">
            <div class="flex items-center justify-between z-10">
              <span class="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/10 text-slate-200 border border-white/15 backdrop-blur-md">
                ${content.categoryLabel}
              </span>
              <div class="flex items-center gap-2">
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-xl bg-black/40 text-slate-300 hover:text-white hover:bg-black/60 transition-colors" title="${t.btnSource}">
                  <i data-lucide="github" class="w-4 h-4"></i>
                </a>
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-xl bg-black/40 text-slate-300 hover:text-white hover:bg-black/60 transition-colors" title="${t.btnLive}">
                  <i data-lucide="external-link" class="w-4 h-4"></i>
                </a>
              </div>
            </div>
            <div class="z-10">
              <h3 class="text-xl font-bold text-white tracking-tight">${content.title}</h3>
              <p class="text-xs text-indigo-300 font-medium mt-0.5">${content.subtitle}</p>
            </div>
            <div class="absolute -right-8 -bottom-8 w-32 h-32 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none"></div>
          </div>

          <!-- Body -->
          <div class="p-6 space-y-4">
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ${content.shortDesc}
            </p>
            <div class="flex flex-wrap gap-2">
              ${project.tags.map(tag => `<span class="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-800/90 text-slate-300 border border-white/5">${tag}</span>`).join('')}
            </div>
          </div>
        </div>

        <!-- Action Button -->
        <div class="px-6 pb-6 pt-2">
          <button class="open-project-modal w-full py-3 px-4 rounded-xl text-xs font-semibold glass-pill text-indigo-300 hover:text-white hover:bg-indigo-600/30 border border-indigo-500/20 transition-all flex items-center justify-center gap-2" data-project-id="${project.id}">
            <span>${t.btnDetails}</span>
            <i data-lucide="${isRtl ? 'chevron-left' : 'chevron-right'}" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Re-attach modal listeners if any cards were rendered
  initProjectModal();
}

// Project Details Modal Walkthrough
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const detailButtons = document.querySelectorAll('.open-project-modal');

  if (!modal || detailButtons.length === 0) return;

  const openModal = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    const content = project[currentLang] || project.en;

    document.getElementById('modal-title').textContent = content.title;
    document.getElementById('modal-desc').textContent = content.subtitle;
    document.getElementById('modal-problem').textContent = content.problem;
    document.getElementById('modal-solution').textContent = content.solution;

    const liveLink = document.getElementById('modal-live-link');
    const githubLink = document.getElementById('modal-github-link');
    if (liveLink) liveLink.href = project.liveUrl;
    if (githubLink) githubLink.href = project.githubUrl;

    const highlightsContainer = document.getElementById('modal-highlights');
    if (highlightsContainer) {
      highlightsContainer.innerHTML = content.highlights
        .map(h => `<li class="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i> <span>${h}</span></li>`)
        .join('');
    }

    const tagsContainer = document.getElementById('modal-tags');
    if (tagsContainer) {
      tagsContainer.innerHTML = project.tags
        .map(t => `<span class="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/25">${t}</span>`)
        .join('');
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }

    modal.classList.remove('modal-closed');
    modal.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('modal-open');
    modal.classList.add('modal-closed');
    document.body.style.overflow = '';
  };

  detailButtons.forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-project-id');
      openModal(id);
    };
  });

  if (closeBtn) closeBtn.onclick = closeModal;

  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  window.onkeydown = (e) => {
    if (e.key === 'Escape') closeModal();
  };
}

// Project Filtering Setup
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-500/25');
        b.classList.add('bg-slate-800/60', 'text-slate-300');
      });
      btn.classList.add('bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-500/25');
      btn.classList.remove('bg-slate-800/60', 'text-slate-300');

      const filter = btn.getAttribute('data-filter');
      const cards = document.querySelectorAll('.project-card');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  const toggle = (open) => {
    if (open) {
      mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
      document.body.style.overflow = '';
    }
  };

  menuBtn.onclick = () => toggle(true);
  if (closeBtn) closeBtn.onclick = () => toggle(false);
  mobileLinks.forEach(link => {
    link.onclick = () => toggle(false);
  });
}

// ScrollSpy Active Link Tracking
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-cyan-400', 'font-semibold');
          link.classList.add('text-slate-400');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-cyan-400', 'font-semibold');
            link.classList.remove('text-slate-400');
          }
        });
      }
    });
  }, { passive: true });
}

// Contact Form Handler via mailto
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = (document.getElementById('name')?.value || '').trim();
    const email = (document.getElementById('email')?.value || '').trim();
    const subject = (document.getElementById('subject')?.value || '').trim() || `Portfolio Message from ${name}`;
    const message = (document.getElementById('message')?.value || '').trim();

    const recipient = 'elsayedaiman25@gmail.com';
    const emailBody = `Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Inform the visitor that their email app is opening (no claim that message was already sent)
    showToast(i18nData[currentLang].toastOpeningEmail, 'info');

    // Open the visitor's mail client
    window.location.href = mailtoUrl;
  });
}

// Copy Email Utility
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('.copy-email-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'elsayedaiman25@gmail.com';

      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(i18nData[currentLang].toastCopied, 'success');
        }).catch(() => {
          showToast(email, 'info');
        });
      } else {
        showToast(email, 'info');
      }
    });
  });
}

// Toast Helper
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const toastMessage = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');

  if (toastMessage) toastMessage.textContent = message;

  if (toastIcon) {
    if (type === 'success') {
      toastIcon.setAttribute('data-lucide', 'check-circle-2');
      toastIcon.className = 'w-5 h-5 text-emerald-400 flex-shrink-0';
    } else {
      toastIcon.setAttribute('data-lucide', 'info');
      toastIcon.className = 'w-5 h-5 text-cyan-400 flex-shrink-0';
    }
    if (window.lucide) window.lucide.createIcons();
  }

  toast.classList.remove('hidden-toast');
  toast.classList.add('show-toast');

  setTimeout(() => {
    toast.classList.remove('show-toast');
    toast.classList.add('hidden-toast');
  }, 3500);
}

// Stats Counter
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const duration = 1500;
        const stepTime = 20;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
          } else {
            counter.textContent = Math.ceil(current);
          }
        }, stepTime);

        obs.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}
