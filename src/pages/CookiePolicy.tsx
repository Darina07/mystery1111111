import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

type Block = { h?: string; sub?: string; p?: string; list?: string[] };

const content = {
  bg: {
    title: "Политика за бисквитки",
    sections: [
      { h: "1. Какво са бисквитките?", blocks: [{ p: "Бисквитките (cookies) са малки текстови файлове, които се съхраняват на вашето устройство (компютър, таблет или телефон), когато посещавате уебсайт. Те позволяват на сайта да запомни вашите предпочитания и да подобри потребителското изживяване." }] as Block[] },
      { h: "2. Видове бисквитки, които използваме", blocks: [
        { sub: "Необходими бисквитки", p: "Тези бисквитки са от съществено значение за функционирането на уебсайта. Без тях някои функции на сайта няма да работят правилно." },
        { sub: "Аналитични бисквитки", p: "Използваме аналитични бисквитки, за да разберем как посетителите използват нашия уебсайт. Това ни помага да подобрим съдържанието и навигацията." },
        { sub: "Функционални бисквитки", p: "Тези бисквитки запомнят вашите предпочитания, като език и регион, за да осигурят персонализирано изживяване." },
      ] as Block[] },
      { h: "3. Как управляваме бисквитките", blocks: [
        { p: "При първото ви посещение на нашия уебсайт ще ви бъде показано съобщение за бисквитките. Можете да приемете или откажете използването на незадължителни бисквитки." },
        { p: "Освен това можете да управлявате бисквитките чрез настройките на вашия браузър. Повечето браузъри ви позволяват да:", list: ["Видите какви бисквитки са съхранени", "Изтриете бисквитки поотделно или всички", "Блокирате бисквитки от определени сайтове", "Блокирате всички бисквитки", "Получавате известие преди съхраняване на бисквитка"] },
      ] as Block[] },
      { h: "4. Бисквитки на трети страни", blocks: [{ p: "Нашият уебсайт може да съдържа връзки към външни сайтове или вградено съдържание (например карти). Тези сайтове могат да поставят свои собствени бисквитки. Нямаме контрол над бисквитките на трети страни и ви препоръчваме да прочетете техните политики за поверителност." }] as Block[] },
      { h: "5. Срок на съхранение", blocks: [{ p: "Бисквитките имат различен срок на валидност:", list: ["Сесийни бисквитки: Изтриват се автоматично, когато затворите браузъра", "Постоянни бисквитки: Остават на устройството ви за определен период (обикновено от няколко дни до 2 години)"] }] as Block[] },
      { h: "6. Въздействие при отказ от бисквитки", blocks: [{ p: "Ако изберете да блокирате бисквитките, някои функции на уебсайта може да не работят правилно. Необходимите бисквитки не могат да бъдат деактивирани, тъй като са от съществено значение за работата на сайта." }] as Block[] },
      { h: "7. Промени в политиката", blocks: [{ p: "Запазваме си правото да актуализираме тази политика за бисквитки по всяко време. Всички промени ще бъдат публикувани на тази страница с актуализирана дата." }] as Block[] },
    ],
    contactHeading: "8. Контакт",
    contactIntro: "Ако имате въпроси относно нашата политика за бисквитки, моля свържете се с нас:",
    contactLabels: { email: "Имейл", phone: "Телефон", address: "Адрес" },
    addressValue: "София, кв. Лозенец, ул. Кишинев 18",
  },
  en: {
    title: "Cookie Policy",
    sections: [
      { h: "1. What are cookies?", blocks: [{ p: "Cookies are small text files that are stored on your device (computer, tablet or phone) when you visit a website. They allow the site to remember your preferences and improve the user experience." }] as Block[] },
      { h: "2. Types of cookies we use", blocks: [
        { sub: "Necessary cookies", p: "These cookies are essential for the functioning of the website. Without them, some features of the site will not work properly." },
        { sub: "Analytical cookies", p: "We use analytical cookies to understand how visitors use our website. This helps us improve the content and navigation." },
        { sub: "Functional cookies", p: "These cookies remember your preferences, such as language and region, to provide a personalized experience." },
      ] as Block[] },
      { h: "3. How we manage cookies", blocks: [
        { p: "On your first visit to our website, you will be shown a cookie notice. You can accept or decline the use of optional cookies." },
        { p: "You can also manage cookies through your browser settings. Most browsers allow you to:", list: ["See which cookies are stored", "Delete cookies individually or all of them", "Block cookies from specific sites", "Block all cookies", "Receive a notification before a cookie is stored"] },
      ] as Block[] },
      { h: "4. Third-party cookies", blocks: [{ p: "Our website may contain links to external sites or embedded content (e.g. maps). These sites may place their own cookies. We have no control over third-party cookies and recommend that you read their privacy policies." }] as Block[] },
      { h: "5. Storage period", blocks: [{ p: "Cookies have different validity periods:", list: ["Session cookies: Automatically deleted when you close your browser", "Persistent cookies: Remain on your device for a specific period (usually from a few days up to 2 years)"] }] as Block[] },
      { h: "6. Impact of refusing cookies", blocks: [{ p: "If you choose to block cookies, some features of the website may not work properly. Necessary cookies cannot be disabled as they are essential for the operation of the site." }] as Block[] },
      { h: "7. Changes to the policy", blocks: [{ p: "We reserve the right to update this cookie policy at any time. All changes will be published on this page with an updated date." }] as Block[] },
    ],
    contactHeading: "8. Contact",
    contactIntro: "If you have questions regarding our cookie policy, please contact us:",
    contactLabels: { email: "Email", phone: "Phone", address: "Address" },
    addressValue: "Sofia, Lozenets, 18 Kishinev Str.",
  },
};

const CookiePolicy = () => {
  const { language } = useLanguage();
  const data = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container py-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">{data.title}</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            {data.sections.map((s, i) => (
              <section key={i} className="mb-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">{s.h}</h2>
                {s.blocks.map((b, j) => (
                  <div key={j}>
                    {b.sub && <h3 className="font-heading text-xl font-semibold text-foreground mb-3 mt-6">{b.sub}</h3>}
                    {b.p && <p className={b.list ? "mb-4" : "mb-4"}>{b.p}</p>}
                    {b.list && (
                      <ul className="list-disc pl-6 space-y-2 mt-4">
                        {b.list.map((li, k) => <li key={k}>{li}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </section>
            ))}
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">{data.contactHeading}</h2>
              <p>{data.contactIntro}</p>
              <p className="mt-4">
                <strong>{data.contactLabels.email}:</strong> info@dar-psiholog.com<br />
                <strong>{data.contactLabels.phone}:</strong> +359 887 079 256<br />
                <strong>{data.contactLabels.address}:</strong> {data.addressValue}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
