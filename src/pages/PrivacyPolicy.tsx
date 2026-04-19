import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";

const content = {
  bg: {
    title: "Политика за поверителност",
    sections: [
      {
        h: "1. Въведение",
        p: ['Психологичен център „Дар" (наричан по-долу „ние", „нас" или „Центърът") се ангажира да защитава поверителността на личните данни на своите клиенти и посетители на уебсайта. Тази политика описва как събираме, използваме и защитаваме вашата лична информация.'],
      },
      {
        h: "2. Какви данни събираме",
        p: ["Ние можем да събираме следните видове лични данни:"],
        list: ["Име и фамилия", "Телефонен номер", "Имейл адрес", "Информация, предоставена по време на консултации", "Техническа информация за използването на уебсайта"],
      },
      {
        h: "3. Как използваме данните",
        p: ["Вашите лични данни се използват за:"],
        list: ["Предоставяне на психологически услуги", "Комуникация относно записани часове", "Изпращане на информация за услуги (само с ваше съгласие)", "Подобряване на нашите услуги", "Спазване на законови изисквания"],
      },
      {
        h: "4. Защита на данните",
        p: ["Прилагаме строги мерки за сигурност за защита на вашите лични данни от неоторизиран достъп, промяна, разкриване или унищожаване. Всички данни от консултации са строго поверителни и се съхраняват в съответствие с професионалните етични стандарти."],
      },
      {
        h: "5. Вашите права",
        p: ["Съгласно GDPR, вие имате право да:"],
        list: ["Получите достъп до вашите лични данни", "Поискате корекция на неточни данни", "Поискате изтриване на вашите данни", "Ограничите обработката на данните", "Възразите срещу обработката", "Преносимост на данните"],
      },
      {
        h: "6. Съхранение на данни",
        p: ["Съхраняваме вашите лични данни само толкова дълго, колкото е необходимо за целите, за които са събрани, или съгласно законовите изисквания за съхранение на медицинска документация."],
      },
      {
        h: "7. Контакт",
        p: ["За въпроси относно тази политика или вашите лични данни, моля свържете се с нас:"],
        contact: { email: "Имейл", phone: "Телефон", address: "Адрес", addressValue: "София, кв. Лозенец, ул. Кишинев 18" },
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    sections: [
      {
        h: "1. Introduction",
        p: ['Psychological Center "Dar" (hereinafter "we", "us" or "the Center") is committed to protecting the privacy of the personal data of its clients and website visitors. This policy describes how we collect, use and protect your personal information.'],
      },
      {
        h: "2. What data we collect",
        p: ["We may collect the following types of personal data:"],
        list: ["First and last name", "Phone number", "Email address", "Information provided during consultations", "Technical information about website usage"],
      },
      {
        h: "3. How we use your data",
        p: ["Your personal data is used for:"],
        list: ["Providing psychological services", "Communication regarding scheduled appointments", "Sending information about services (only with your consent)", "Improving our services", "Complying with legal requirements"],
      },
      {
        h: "4. Data protection",
        p: ["We apply strict security measures to protect your personal data from unauthorized access, alteration, disclosure or destruction. All data from consultations is strictly confidential and stored in accordance with professional ethical standards."],
      },
      {
        h: "5. Your rights",
        p: ["Under GDPR, you have the right to:"],
        list: ["Access your personal data", "Request correction of inaccurate data", "Request deletion of your data", "Restrict the processing of your data", "Object to processing", "Data portability"],
      },
      {
        h: "6. Data retention",
        p: ["We store your personal data only for as long as necessary for the purposes for which it was collected, or in accordance with legal requirements for the retention of medical documentation."],
      },
      {
        h: "7. Contact",
        p: ["For questions regarding this policy or your personal data, please contact us:"],
        contact: { email: "Email", phone: "Phone", address: "Address", addressValue: "Sofia, Lozenets, 18 Kishinev Str." },
      },
    ],
  },
};

const PrivacyPolicy = () => {
  const { lang: language } = useLanguage();
  const data = content[language];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={language === "en" ? "Privacy Policy" : "Политика за поверителност"}
        description={language === "en"
          ? "Learn how Dar Psychological Center collects, uses, and protects your personal data in compliance with GDPR."
          : "Научете как Психологичен център Дар събира, използва и защитава вашите лични данни в съответствие с GDPR."}
        url="/privacy-policy"
        noindex
      />
      <Header />
      <main className="pt-24">
        <div className="container py-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">{data.title}</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            {data.sections.map((s, i) => (
              <section key={i} className="mb-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">{s.h}</h2>
                {s.p.map((p, j) => (
                  <p key={j} className={s.list ? "mb-4" : ""}>{p}</p>
                ))}
                {s.list && (
                  <ul className="list-disc pl-6 space-y-2">
                    {s.list.map((li, j) => <li key={j}>{li}</li>)}
                  </ul>
                )}
                {s.contact && (
                  <p className="mt-4">
                    <strong>{s.contact.email}:</strong> info@dar-psiholog.com<br />
                    <strong>{s.contact.phone}:</strong> +359 887 079 256<br />
                    <strong>{s.contact.address}:</strong> {s.contact.addressValue}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
