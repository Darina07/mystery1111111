import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <div className="container py-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
            Общи условия
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-6">
              Последна актуализация: Януари 2025
            </p>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                1. Общи разпоредби
              </h2>
              <p>
                Тези общи условия уреждат отношенията между Психологичен център „Дар" и неговите клиенти при предоставянето на психологически услуги. С използването на нашите услуги, вие се съгласявате с тези условия.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                2. Услуги
              </h2>
              <p className="mb-4">Психологичен център „Дар" предоставя следните услуги:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Индивидуално психологическо консултиране</li>
                <li>Семейно и брачно консултиране</li>
                <li>Детска и юношеска психотерапия</li>
                <li>Групови програми</li>
                <li>Логопедични услуги</li>
                <li>Психодиагностика</li>
                <li>Кариерно консултиране</li>
                <li>Корпоративни услуги</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                3. Записване на час
              </h2>
              <p>
                Записването на час се извършва по телефон, имейл или чрез контактната форма на уебсайта. Потвърждение за записания час ще получите по телефон или имейл.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                4. Отмяна и пренасрочване
              </h2>
              <p className="mb-4">
                Молим да уведомите за отмяна или пренасрочване на час минимум 24 часа предварително. При неявяване без предупреждение или отмяна в по-кратък срок, може да бъде начислена такса в размер на 50% от стойността на сесията.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                5. Плащане
              </h2>
              <p>
                Плащането се извършва след всяка сесия в брой или чрез банков превод. Цените на услугите са посочени в раздел „Цени" на уебсайта. Центърът си запазва правото да променя цените, като клиентите ще бъдат уведомени предварително.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                6. Поверителност
              </h2>
              <p>
                Всичко споделено по време на консултациите е строго поверително. Изключения се правят само в случаите, предвидени от закона – при риск за живота на клиента или трети лица, или по разпореждане на съд.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                7. Професионални стандарти
              </h2>
              <p>
                Всички специалисти в Психологичен център „Дар" работят в съответствие с етичния кодекс на българските психолози и спазват високи професионални стандарти.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                8. Ограничения на отговорността
              </h2>
              <p>
                Психологическите услуги не заместват медицинско лечение. При необходимост от психиатрична помощ, клиентът ще бъде насочен към съответен специалист. Центърът не носи отговорност за решения, взети от клиента въз основа на консултациите.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                9. Авторски права
              </h2>
              <p>
                Всички материали на този уебсайт, включително текстове, изображения и дизайн, са собственост на Психологичен център „Дар" и са защитени от авторско право. Забранено е копирането или разпространението без писмено разрешение.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                10. Промени в условията
              </h2>
              <p>
                Запазваме си правото да актуализираме тези общи условия по всяко време. Промените влизат в сила от момента на публикуването им на уебсайта.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                11. Контакт
              </h2>
              <p>
                За въпроси относно тези условия, моля свържете се с нас:
              </p>
              <p className="mt-4">
                <strong>Имейл:</strong> info@darpsiholog.bg<br />
                <strong>Телефон:</strong> +359 887 079 256<br />
                <strong>Адрес:</strong> София, кв. Лозенец, ул. Кишинев 18
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsConditions;