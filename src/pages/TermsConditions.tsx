import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";

const content = {
  bg: {
    title: "Общи условия",
    sections: [
      { h: "1. Общи разпоредби", p: ['Тези общи условия уреждат отношенията между Психологичен център „Дар" и неговите клиенти при предоставянето на психологически услуги. С използването на нашите услуги, вие се съгласявате с тези условия.'] },
      { h: "2. Услуги", p: ['Психологичен център „Дар" предоставя следните услуги:'], list: ["Индивидуално психологическо консултиране", "Семейно и брачно консултиране", "Детска и юношеска психотерапия", "Групови програми", "Логопедични услуги", "Психодиагностика", "Кариерно консултиране", "Корпоративни услуги"] },
      { h: "3. Записване на час", p: ["Записването на час се извършва по телефон, имейл или чрез контактната форма на уебсайта. Потвърждение за записания час ще получите по телефон или имейл."] },
      { h: "4. Отмяна и пренасрочване", p: ["Молим да уведомите за отмяна или пренасрочване на час минимум 24 часа предварително. При неявяване без предупреждение или отмяна в по-кратък срок, може да бъде начислена такса в размер на 50% от стойността на сесията."] },
      { h: "5. Плащане", p: ['Плащането се извършва след всяка сесия в брой или чрез банков превод. Цените на услугите са посочени в раздел „Цени" на уебсайта. Центърът си запазва правото да променя цените, като клиентите ще бъдат уведомени предварително.'] },
      { h: "6. Поверителност", p: ["Всичко споделено по време на консултациите е строго поверително. Изключения се правят само в случаите, предвидени от закона – при риск за живота на клиента или трети лица, или по разпореждане на съд."] },
      { h: "7. Професионални стандарти", p: ['Всички специалисти в Психологичен център „Дар" работят в съответствие с етичния кодекс на българските психолози и спазват високи професионални стандарти.'] },
      { h: "8. Ограничения на отговорността", p: ["Психологическите услуги не заместват медицинско лечение. При необходимост от психиатрична помощ, клиентът ще бъде насочен към съответен специалист. Центърът не носи отговорност за решения, взети от клиента въз основа на консултациите."] },
      { h: "9. Авторски права", p: ['Всички материали на този уебсайт, включително текстове, изображения и дизайн, са собственост на Психологичен център „Дар" и са защитени от авторско право. Забранено е копирането или разпространението без писмено разрешение.'] },
      { h: "10. Промени в условията", p: ["Запазваме си правото да актуализираме тези общи условия по всяко време. Промените влизат в сила от момента на публикуването им на уебсайта."] },
      { h: "11. Контакт", p: ["За въпроси относно тези условия, моля свържете се с нас:"], contact: { email: "Имейл", phone: "Телефон", address: "Адрес", addressValue: "София, кв. Лозенец, ул. Кишинев 18" } },
    ],
  },
  en: {
    title: "Terms and Conditions",
    sections: [
      { h: "1. General provisions", p: ['These terms and conditions govern the relationship between Psychological Center "Dar" and its clients regarding the provision of psychological services. By using our services, you agree to these terms.'] },
      { h: "2. Services", p: ['Psychological Center "Dar" provides the following services:'], list: ["Individual psychological counseling", "Family and marital counseling", "Child and adolescent psychotherapy", "Group programs", "Speech therapy services", "Psychodiagnostics", "Career counseling", "Corporate services"] },
      { h: "3. Booking an appointment", p: ["Appointments can be booked by phone, email, or through the contact form on the website. You will receive a confirmation of your appointment by phone or email."] },
      { h: "4. Cancellation and rescheduling", p: ["Please notify us of any cancellation or rescheduling at least 24 hours in advance. In case of no-show without notice or cancellation within a shorter period, a fee of 50% of the session price may be charged."] },
      { h: "5. Payment", p: ['Payment is made after each session in cash or by bank transfer. Service prices are listed in the "Prices" section of the website. The Center reserves the right to change prices, with clients being notified in advance.'] },
      { h: "6. Confidentiality", p: ["Everything shared during consultations is strictly confidential. Exceptions are made only in cases provided by law – when there is a risk to the life of the client or third parties, or by court order."] },
      { h: "7. Professional standards", p: ['All specialists at Psychological Center "Dar" work in accordance with the ethical code of Bulgarian psychologists and adhere to high professional standards.'] },
      { h: "8. Limitations of liability", p: ["Psychological services do not replace medical treatment. If psychiatric care is needed, the client will be referred to an appropriate specialist. The Center is not responsible for decisions made by the client based on the consultations."] },
      { h: "9. Copyright", p: ['All materials on this website, including texts, images and design, are the property of Psychological Center "Dar" and are protected by copyright. Copying or distribution without written permission is prohibited.'] },
      { h: "10. Changes to the terms", p: ["We reserve the right to update these terms and conditions at any time. Changes take effect from the moment they are published on the website."] },
      { h: "11. Contact", p: ["For questions regarding these terms, please contact us:"], contact: { email: "Email", phone: "Phone", address: "Address", addressValue: "Sofia, Lozenets, 18 Kishinev Str." } },
    ],
  },
};

const TermsConditions = () => {
  const { lang: language } = useLanguage();
  const data = content[language];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={language === "en" ? "Terms and Conditions" : "Общи условия"}
        description={language === "en"
          ? "Terms governing the use of services provided by Dar Psychological Center, including bookings, payment, and confidentiality."
          : "Общи условия за ползване на услугите на Психологичен център Дар – записване, плащане и поверителност."}
        url="/terms-and-conditions"
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

export default TermsConditions;
