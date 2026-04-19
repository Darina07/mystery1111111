import type { Lang } from "./types";

// Compact dictionary used by all shared UI components.
// Keep keys stable; English values are professional translations of the
// Bulgarian original site copy for "Дар – Психологичен и консултативен център".
export const dict = {
  // -------- Common / generic --------
  "common.learnMore": { bg: "Научи повече", en: "Learn more" },
  "common.readMore": { bg: "Прочетете повече", en: "Read more" },
  "common.bookNow": { bg: "ЗАПАЗИ ЧАС", en: "BOOK A SESSION" },
  "common.contacts": { bg: "КОНТАКТИ", en: "CONTACT US" },
  "common.services": { bg: "УСЛУГИ", en: "SERVICES" },
  "common.callUs": { bg: "Обадете се", en: "Call us" },
  "common.send": { bg: "ИЗПРАТИ", en: "SEND" },
  "common.sending": { bg: "Изпращане...", en: "Sending..." },
  "common.loading": { bg: "Зареждане...", en: "Loading..." },
  "common.required": { bg: "*", en: "*" },
  "common.viewAll": { bg: "Виж всички", en: "View all" },
  "common.allArticles": { bg: "ВСИЧКИ СТАТИИ", en: "ALL ARTICLES" },
  "common.viewAllServices": { bg: "ВИЖТЕ ВСИЧКИ УСЛУГИ", en: "VIEW ALL SERVICES" },
  "common.viewAllApproaches": { bg: "ВИЖТЕ ВСИЧКИ ПОДХОДИ", en: "VIEW ALL APPROACHES" },
  "common.bookViaContact": { bg: "СВЪРЖЕТЕ СЕ С НАС ЗА ЧАС", en: "CONTACT US TO BOOK" },
  "common.mostPopular": { bg: "Най-популярно", en: "Most popular" },
  "common.success": { bg: "Успешно изпратено!", en: "Successfully sent!" },
  "common.successMessage": {
    bg: "Вашето запитване беше изпратено успешно!",
    en: "Your inquiry has been sent successfully!",
  },
  "common.successMessageLong": {
    bg: "Вашето запитване беше изпратено успешно! Ще се свържем с вас скоро.",
    en: "Your inquiry has been sent successfully! We will get in touch with you soon.",
  },
  "common.error": { bg: "Грешка", en: "Error" },
  "common.errorMessage": {
    bg: "Възникна грешка при изпращането. Моля, опитайте отново.",
    en: "An error occurred while sending. Please try again.",
  },
  "common.errorRequiredFields": {
    bg: "Моля, попълнете всички задължителни полета.",
    en: "Please fill in all required fields.",
  },

  // -------- Header navigation --------
  "nav.home": { bg: "Начало", en: "Home" },
  "nav.about": { bg: "За нас", en: "About" },
  "nav.services": { bg: "Услуги", en: "Services" },
  "nav.professional": { bg: "Професионално развитие", en: "Professional Development" },
  "nav.prices": { bg: "Цени", en: "Pricing" },
  "nav.blog": { bg: "Блог", en: "Blog" },
  "nav.contact": { bg: "Контакти", en: "Contact" },
  "nav.toggleMenu": { bg: "Меню", en: "Toggle menu" },

  // -------- Services submenu --------
  "services.psychological": {
    bg: "Психологично консултиране и психотерапия",
    en: "Psychological Counseling & Psychotherapy",
  },
  "services.family": {
    bg: "Семейно и партньорско консултиране",
    en: "Family & Couples Counseling",
  },
  "services.child": {
    bg: "Детско - юношеско консултиране",
    en: "Child & Adolescent Counseling",
  },
  "services.groupPrograms": { bg: "Групови програми", en: "Group Programs" },
  "services.speech": { bg: "Логопед", en: "Speech Therapy" },
  "services.psychodiagnostics": { bg: "Психодиагностика", en: "Psychodiagnostics" },
  "services.career": { bg: "Кариерно консултиране", en: "Career Counseling" },
  "services.corporate": { bg: "Корпоративни услуги", en: "Corporate Services" },

  // Group programs
  "groups.addictions": { bg: "Зависимости", en: "Addictions" },
  "groups.relationships": {
    bg: "Необвързани и взаимоотношения (matchmaking)",
    en: "Singles & Relationships (Matchmaking)",
  },
  "groups.parenting": {
    bg: "Бременност и родителство",
    en: "Pregnancy & Parenting",
  },
  "groups.nlp": {
    bg: "НЛП и личностно развитие",
    en: "NLP & Personal Development",
  },

  // -------- Hero --------
  "hero.eyebrow": {
    bg: "Психологичен и консултативен център ДАР",
    en: "DAR Psychological & Counseling Center",
  },
  "hero.title1": { bg: "Подкрепа,", en: "Support" },
  "hero.title2": { bg: "която работи", en: "that works" },
  "hero.subtitle": {
    bg: "Предлагаме професионално психологично консултиране и психотерапия за деца, възрастни и семейства. Работим за вашето емоционално благополучие в безопасна, спокойна и подкрепяща среда.",
    en: "We provide professional psychological counseling and psychotherapy for children, adults and families. We work for your emotional well-being in a safe, calm and supportive environment.",
  },

  // -------- About section --------
  "about.eyebrow": { bg: "ЗА НАС", en: "ABOUT US" },
  "about.titlePart1": { bg: 'Център „Дар" – вашият', en: '"Dar" Center – your' },
  "about.titlePart2": { bg: "партньор", en: "partner" },
  "about.titlePart3": {
    bg: "в грижата за психичното здраве",
    en: "in caring for mental health",
  },
  "about.p1": {
    bg: 'Психологичен и консултативен център „Дар" предоставя професионални услуги в областта на психологията, консултирането и обучението. Работим с индивидуални клиенти, деца, семейства и бизнес организации.',
    en: '"Dar" Psychological and Counseling Center provides professional services in the fields of psychology, counseling and training. We work with individual clients, children, families and business organizations.',
  },
  "about.p2": {
    bg: "Нашата мисия е да предоставяме качествена психологическа подкрепа, базирана на доверие, уважение и доказани терапевтични методи.",
    en: "Our mission is to provide quality psychological support based on trust, respect and proven therapeutic methods.",
  },
  "about.value1.title": { bg: "Емпатия и разбиране", en: "Empathy & Understanding" },
  "about.value1.desc": {
    bg: "Всеки клиент е уникален. Слушаме без осъждане и създаваме безопасно пространство.",
    en: "Every client is unique. We listen without judgment and create a safe space.",
  },
  "about.value2.title": { bg: "Конфиденциалност", en: "Confidentiality" },
  "about.value2.desc": {
    bg: "Гарантираме пълна дискретност и защита на личната информация.",
    en: "We guarantee full discretion and protection of personal information.",
  },
  "about.value3.title": { bg: "Професионализъм", en: "Professionalism" },
  "about.value3.desc": {
    bg: "Работим с доказани методи и непрекъснато надграждаме квалификацията си.",
    en: "We work with proven methods and continuously upgrade our qualifications.",
  },
  "about.value4.title": { bg: "Гъвкавост", en: "Flexibility" },
  "about.value4.desc": {
    bg: "Предлагаме удобни часове, включително вечер и в почивни дни.",
    en: "We offer convenient hours, including evenings and weekends.",
  },

  // -------- Services section --------
  "servicesSec.eyebrow": { bg: "Нашите услуги", en: "Our Services" },
  "servicesSec.titlePart1": {
    bg: "Комплексна грижа за вашето",
    en: "Comprehensive care for your",
  },
  "servicesSec.titlePart2": { bg: "психично здраве", en: "mental health" },
  "servicesSec.subtitle": {
    bg: 'В център „Дар" предлагаме широк спектър от услуги, насочени към емоционалното здраве, взаимоотношенията и личностното развитие.',
    en: 'At "Dar" Center we offer a wide range of services focused on emotional health, relationships and personal development.',
  },
  "servicesSec.s1.desc": {
    bg: "Индивидуална психологична подкрепа при тревожност, депресия, стрес, бърнаут, житейски кризи и други емоционални затруднения.",
    en: "Individual psychological support for anxiety, depression, stress, burnout, life crises and other emotional difficulties.",
  },
  "servicesSec.s1.title": {
    bg: "Психологично консултиране и психотерапия",
    en: "Psychological Counseling & Psychotherapy",
  },
  "servicesSec.s2.title": { bg: "За двойки и семейства", en: "For Couples & Families" },
  "servicesSec.s4.title": { bg: "Групови програми", en: "Group Programs" },
  "servicesSec.s5.title": { bg: "Логопед", en: "Speech Therapy" },
  "servicesSec.s6.title": { bg: "Психодиагностика", en: "Psychodiagnostics" },
  "servicesSec.s2.desc": {
    bg: "Консултиране за двойки и семейства с брачен консултант, семеен психолог и сексолог – при партньорски, семейни и интимни проблеми.",
    en: "Counseling for couples and families with a marriage counselor, family psychologist and sexologist – for relationship, family and intimate issues.",
  },
  "servicesSec.s3.title": {
    bg: "Детско-юношеско консултиране",
    en: "Child & Adolescent Counseling",
  },
  "servicesSec.s3.desc": {
    bg: "Психологична подкрепа за деца и тийнейджъри с емоционални, поведенчески, социални и училищни затруднения.",
    en: "Psychological support for children and teenagers with emotional, behavioral, social and school difficulties.",
  },
  "servicesSec.s4.desc": {
    bg: "Групови програми за споделяне, подкрепа и развитие – зависимости, отношения, родителство и личностно развитие.",
    en: "Group programs for sharing, support and growth – addictions, relationships, parenting and personal development.",
  },
  "servicesSec.s5.desc": {
    bg: "Диагностика и терапия на говорни, езикови и комуникативни нарушения при деца и възрастни.",
    en: "Diagnosis and therapy of speech, language and communication disorders in children and adults.",
  },
  "servicesSec.s6.desc": {
    bg: "Психологични оценки и изследвания на когнитивни способности, емоционално състояние и личностови характеристики.",
    en: "Psychological assessments and evaluations of cognitive abilities, emotional state and personality characteristics.",
  },

  // -------- Business section --------
  "biz.eyebrow": { bg: "ЗА БИЗНЕСА", en: "FOR BUSINESS" },
  "biz.titlePart1": { bg: "Професионално", en: "Professional" },
  "biz.titlePart2": { bg: "развитие", en: "development" },
  "biz.subtitle": {
    bg: "Специализирани услуги за кариерно развитие и корпоративни решения.",
    en: "Specialized services for career development and corporate solutions.",
  },
  "biz.career.title": { bg: "Кариерно консултиране", en: "Career Counseling" },
  "biz.corp.title": { bg: "Корпоративни услуги", en: "Corporate Services" },
  "biz.career.desc": {
    bg: "Помагаме ви да откриете професионалния си път, да се развивате и да постигнете баланс между работа и личен живот.",
    en: "We help you discover your professional path, grow, and achieve a healthy work-life balance.",
  },
  "biz.career.tag1": { bg: "Кариерна ориентация", en: "Career Orientation" },
  "biz.career.tag2": { bg: "Професионално развитие", en: "Professional Growth" },
  "biz.career.tag3": { bg: "Коучинг", en: "Coaching" },
  "biz.corp.desc": {
    bg: "Подкрепяме организации в развитието на екипи, управление на стреса и изграждане на здравословна работна среда.",
    en: "We support organizations in team development, stress management and building a healthy workplace.",
  },
  "biz.corp.tag1": { bg: "Екипни тренинги", en: "Team Trainings" },
  "biz.corp.tag2": { bg: "Управление на стрес", en: "Stress Management" },
  "biz.corp.tag3": { bg: "HR консултации", en: "HR Consulting" },
  "biz.cta": { bg: "Научете повече", en: "Learn more" },

  // -------- Therapeutic approaches section --------
  "ta.eyebrow": { bg: "ТЕРАПЕВТИЧНИ ПОДХОДИ", en: "THERAPEUTIC APPROACHES" },
  "ta.titlePart1": { bg: "Индивидуален подход за", en: "Individual approach for" },
  "ta.titlePart2": { bg: "всеки клиент", en: "every client" },
  "ta.subtitle": {
    bg: "Работим с различни психотерапевтични подходи, съобразени с конкретните нужди на всеки човек.",
    en: "We work with various psychotherapeutic approaches tailored to the specific needs of each person.",
  },
  "ta.cat.classic": { bg: "Класически подходи", en: "Classical approaches" },
  "ta.cat.cognitive": { bg: "Когнитивни подходи", en: "Cognitive approaches" },
  "ta.cat.humanistic": { bg: "Хуманистични подходи", en: "Humanistic approaches" },
  "ta.cat.systemic": { bg: "Системни подходи", en: "Systemic approaches" },
  "ta.cat.trauma": { bg: "Травма-фокусирани", en: "Trauma-focused" },
  "ta.cat.body": { bg: "Телесно-ориентирани", en: "Body-oriented" },
  "ta.cat.creative": { bg: "Креативни подходи", en: "Creative approaches" },
  "approach.psychoanalysis": { bg: "Психоанализа", en: "Psychoanalysis" },
  "approach.psychodynamic": { bg: "Психодинамична терапия", en: "Psychodynamic Therapy" },
  "approach.cbt": {
    bg: "Когнитивно-поведенческа терапия",
    en: "Cognitive-Behavioral Therapy",
  },
  "approach.schema": { bg: "Схема терапия", en: "Schema Therapy" },
  "approach.gestalt": { bg: "Гещалт терапия", en: "Gestalt Therapy" },
  "approach.existential": { bg: "Екзистенциална терапия", en: "Existential Therapy" },
  "approach.positive": { bg: "Позитивна психотерапия", en: "Positive Psychotherapy" },
  "approach.family": { bg: "Семейна терапия", en: "Family Therapy" },
  "approach.transgenerational": {
    bg: "Трансгенерационна терапия",
    en: "Transgenerational Therapy",
  },
  "approach.couples": { bg: "Терапия на двойки", en: "Couples Therapy" },
  "approach.emdr": { bg: "EMDR терапия", en: "EMDR Therapy" },
  "approach.somatic": { bg: "Соматично преживяване", en: "Somatic Experiencing" },
  "approach.bioenergetic": { bg: "Биоенергийна терапия", en: "Bioenergetic Therapy" },
  "approach.body": { bg: "Телесна психотерапия", en: "Body Psychotherapy" },
  "approach.dance": { bg: "Танцово-двигателна терапия", en: "Dance-Movement Therapy" },
  "approach.art": { bg: "Арт терапия", en: "Art Therapy" },
  "approach.music": { bg: "Музикотерапия", en: "Music Therapy" },
  "approach.play": { bg: "Игрова терапия", en: "Play Therapy" },

  // -------- Pricing --------
  "pricing.eyebrow": { bg: "Цени", en: "Pricing" },
  "pricing.titlePart1": { bg: "Ясни и", en: "Clear and" },
  "pricing.titlePart2": { bg: "прозрачни условия", en: "transparent terms" },
  "pricing.subtitle": {
    bg: 'В Психологичен и консултативен център „Дар" държим на открита и ясна информация за цените на нашите услуги.',
    en: 'At "Dar" Psychological & Counseling Center we believe in clear and transparent pricing for our services.',
  },
  "pricing.currency": { bg: "евро", en: "EUR" },
  "pricing.duration": { bg: "60 минути", en: "60 minutes" },
  "pricing.note": {
    bg: "Консултациите на",
    en: "Consultations in",
  },
  "pricing.noteLang": { bg: "английски език", en: "English" },
  "pricing.noteSurcharge": {
    bg: "се провеждат срещу допълнително заплащане от",
    en: "are available for an additional fee of",
  },
  "pricing.noteAmount": { bg: "+10 евро", en: "+€10" },
  "pricing.askGroup": {
    bg: "Попитайте ни за цени за групови програми и корпоративни услуги",
    en: "Ask us about pricing for group programs and corporate services",
  },
  "pricing.item1.title": {
    bg: "Индивидуални и семейни консултации",
    en: "Individual & Family Consultations",
  },
  "pricing.item1.subtitle": { bg: "(присъствено)", en: "(in-person)" },
  "pricing.item1.f1": { bg: "Консултация с психолог", en: "Consultation with a psychologist" },
  "pricing.item1.f2": { bg: "Психотерапия", en: "Psychotherapy" },
  "pricing.item1.f3": {
    bg: "Консултиране за двойки и семейства",
    en: "Couples and family counseling",
  },
  "pricing.item1.f4": { bg: "Работа със сексолог", en: "Sex therapy" },
  "pricing.item1.f5": {
    bg: "Детско и юношеско консултиране",
    en: "Child and adolescent counseling",
  },
  "pricing.item1.f6": {
    bg: "Логопед – диагностика и терапия",
    en: "Speech therapy – assessment and therapy",
  },
  "pricing.item1.f7": { bg: "Кариерно консултиране", en: "Career counseling" },
  "pricing.item2.title": { bg: "Онлайн консултации", en: "Online Consultations" },
  "pricing.item2.subtitle": {
    bg: "(телефон, Viber, WhatsApp, Skype, Google Meet)",
    en: "(phone, Viber, WhatsApp, Skype, Google Meet)",
  },
  "pricing.item2.f1": {
    bg: "Индивидуално психологично консултиране",
    en: "Individual psychological counseling",
  },
  "pricing.item2.f2": { bg: "Психотерапия", en: "Psychotherapy" },
  "pricing.item2.f3": { bg: "Консултиране за двойки", en: "Couples counseling" },
  "pricing.item2.f4": { bg: "Кариерно консултиране", en: "Career counseling" },
  "pricing.item3.title": { bg: "Хипнотерапия", en: "Hypnotherapy" },
  "pricing.item3.f1": {
    bg: "Самостоятелен терапевтичен метод",
    en: "Standalone therapeutic method",
  },
  "pricing.item3.f2": {
    bg: "Допълващ метод при определени теми",
    en: "Complementary method for specific topics",
  },
  "pricing.item3.f3": {
    bg: "След предварителна консултация",
    en: "After a preliminary consultation",
  },
  "pricing.item4.title": {
    bg: "Арт терапия и музикотерапия",
    en: "Art Therapy & Music Therapy",
  },
  "pricing.item4.f1": {
    bg: "Изразяване на емоции чрез творчество",
    en: "Expressing emotions through creativity",
  },
  "pricing.item4.f2": {
    bg: "Намаляване на напрежението",
    en: "Reducing tension",
  },
  "pricing.item4.f3": {
    bg: "Подкрепа на емоционалния баланс",
    en: "Supporting emotional balance",
  },
  "pricing.item4.f4": {
    bg: "Подходящо за деца, юноши и възрастни",
    en: "Suitable for children, teens and adults",
  },

  // -------- Blog homepage section --------
  "blogSec.title": { bg: "Блог", en: "Blog" },
  "blogSec.subtitle": {
    bg: "Полезни статии, съвети и новини от нашите специалисти",
    en: "Helpful articles, advice and news from our specialists",
  },

  // -------- Contact section --------
  "contact.eyebrow": { bg: "Контакти", en: "Contact" },
  "contact.titlePart1": { bg: "Свържете се", en: "Get in" },
  "contact.titlePart2": { bg: "с нас", en: "touch" },
  "contact.subtitle": {
    bg: "Направете първата стъпка към по-добро психично здраве. Свържете се с нас за консултация или запазете час.",
    en: "Take the first step toward better mental health. Contact us for a consultation or to book an appointment.",
  },
  "contact.phone": { bg: "Телефон", en: "Phone" },
  "contact.email": { bg: "Имейл", en: "Email" },
  "contact.address": { bg: "Адрес", en: "Address" },
  "contact.addressValue": {
    bg: "България, София, квартал Лозенец, улица Кишинев 18",
    en: "18 Kishinev St., Lozenets, Sofia, Bulgaria",
  },
  "contact.hours": { bg: "Работно време", en: "Working hours" },
  "contact.hoursValue": {
    bg: "Понеделник – Неделя | 08:00 – 22:00",
    en: "Monday – Sunday | 08:00 – 22:00",
  },
  "contact.formTitle": { bg: "Изпратете запитване", en: "Send an inquiry" },
  "contact.name": { bg: "Име", en: "Name" },
  "contact.lastName": { bg: "Фамилия", en: "Last name" },
  "contact.namePlaceholder": { bg: "Вашето име", en: "Your name" },
  "contact.message": { bg: "Съобщение", en: "Message" },
  "contact.messagePlaceholder": {
    bg: "Как можем да ви помогнем?",
    en: "How can we help you?",
  },
  "contact.mapTitle": {
    bg: "Локация на център Дар - ул. Кишинев 18, ж.к. Лозенец, София",
    en: "Location of Dar Center - 18 Kishinev St., Lozenets, Sofia",
  },

  // -------- Footer --------
  "footer.popular": { bg: "Най-търсени", en: "Most Requested" },
  "footer.services": { bg: "Услуги", en: "Services" },
  "footer.groups": { bg: "Групови програми", en: "Group Programs" },
  "footer.approaches": { bg: "Терапевтични подходи", en: "Therapeutic Approaches" },
  "footer.prices": { bg: "Цени", en: "Pricing" },
  "footer.professional": {
    bg: "Професионално развитие",
    en: "Professional Development",
  },
  "footer.contact": { bg: "Контакти", en: "Contact" },
  "footer.address": {
    bg: "София, кв. Лозенец, ул. Кишинев 18",
    en: "Sofia, Lozenets, 18 Kishinev St.",
  },
  "footer.hours": {
    bg: "Понеделник – Неделя: 08:00 – 22:00",
    en: "Monday – Sunday: 08:00 – 22:00",
  },
  "footer.copyright": {
    bg: "© 2025 Дар – Подкрепа, която работи. Всички права запазени.",
    en: "© 2025 Dar – Support that works. All rights reserved.",
  },
  "footer.privacy": { bg: "Политика за поверителност", en: "Privacy Policy" },
  "footer.terms": { bg: "Общи условия", en: "Terms & Conditions" },
  "footer.cookies": { bg: "Политика за бисквитки", en: "Cookie Policy" },
  "footer.popular.autism": {
    bg: "Аутизъм и аутистичен спектър",
    en: "Autism & Autism Spectrum",
  },
  "footer.popular.adhd": { bg: "Хиперактивност (ADHD)", en: "Hyperactivity (ADHD)" },
  "footer.popular.anxiety": {
    bg: "Тревожност и паник атаки",
    en: "Anxiety & Panic Attacks",
  },
  "footer.popular.depression": { bg: "Депресивни състояния", en: "Depression" },
  "footer.popular.addictions": { bg: "Зависимости", en: "Addictions" },
  "footer.popular.burnout": { bg: "Бърнаут", en: "Burnout" },
  "footer.popular.stuttering": { bg: "Заекване", en: "Stuttering" },
  "footer.career": {
    bg: "Кариерно и професионално развитие",
    en: "Career & Professional Development",
  },
  "footer.corporate": {
    bg: "Работа с екипи и организации",
    en: "Working with Teams & Organizations",
  },

  // -------- Condition / Approach template shared text --------
  "tmpl.home": { bg: "Начало", en: "Home" },
  "tmpl.howWeHelp": { bg: "Как", en: "How we" },
  "tmpl.howWeHelp2": { bg: "помагаме?", en: "help?" },
  "tmpl.howWeHelpDesc": {
    bg: "Нашият подход е индивидуален и съобразен с вашите нужди",
    en: "Our approach is individual and tailored to your needs",
  },
  "tmpl.benefits": { bg: "Какво ще", en: "What will you" },
  "tmpl.benefits2": { bg: "постигнете?", en: "achieve?" },
  "tmpl.benefitsDesc": {
    bg: "Резултатите от работата с нашите специалисти",
    en: "Results from working with our specialists",
  },
  "tmpl.cta.title1": { bg: "Свържете се", en: "Get in touch" },
  "tmpl.cta.title2": { bg: "с нас", en: "with us" },
  "tmpl.cta.subtitle": {
    bg: "Направете първата стъпка към по-добро психическо здраве.",
    en: "Take the first step toward better mental health.",
  },
  "tmpl.ta.what": { bg: "Какво е", en: "What is" },
  "tmpl.ta.benefits": { bg: "Ползи от", en: "Benefits of" },
  "tmpl.ta.suitable1": { bg: "За кого е", en: "Who is it" },
  "tmpl.ta.suitable2": { bg: "подходяща?", en: "suitable for?" },
  "tmpl.ta.process1": { bg: "Как протича", en: "How does the" },
  "tmpl.ta.process2": { bg: "процесът?", en: "process work?" },

  // -------- 404 --------
  "notfound.title": { bg: "404", en: "404" },
  "notfound.message": { bg: "Страницата не е намерена", en: "Page not found" },
  "notfound.cta": { bg: "Към началната страница", en: "Back to home" },

  // -------- Cookie consent --------
  "cookie.title": { bg: "Използваме бисквитки", en: "We use cookies" },
  "cookie.message": {
    bg: 'Използваме бисквитки, за да подобрим вашето изживяване на сайта. Продължавайки да разглеждате, вие се съгласявате с използването на бисквитки.',
    en: "We use cookies to improve your experience on the site. By continuing to browse you agree to the use of cookies.",
  },
  "cookie.close": { bg: "Затвори", en: "Close" },
  "cookie.accept": { bg: "Приемам", en: "Accept" },
  "cookie.decline": { bg: "Отказвам", en: "Decline" },
  "cookie.learnMore": { bg: "Научете повече", en: "Learn more" },

  // Language switcher
  "langSwitcher.bg": { bg: "БГ", en: "BG" },
  "langSwitcher.en": { bg: "EN", en: "EN" },
  "langSwitcher.aria": { bg: "Смяна на език", en: "Change language" },
} as const satisfies Record<string, Record<Lang, string>>;

export type DictKey = keyof typeof dict;

export function translate(key: DictKey, lang: Lang): string {
  const entry = dict[key];
  if (!entry) return key;
  return entry[lang] ?? entry.bg;
}
