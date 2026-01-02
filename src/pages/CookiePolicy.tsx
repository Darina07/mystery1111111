import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <div className="container py-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
            Политика за бисквитки
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                1. Какво са бисквитките?
              </h2>
              <p>
                Бисквитките (cookies) са малки текстови файлове, които се съхраняват на вашето устройство (компютър, таблет или телефон), когато посещавате уебсайт. Те позволяват на сайта да запомни вашите предпочитания и да подобри потребителското изживяване.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                2. Видове бисквитки, които използваме
              </h2>
              
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 mt-6">
                Необходими бисквитки
              </h3>
              <p className="mb-4">
                Тези бисквитки са от съществено значение за функционирането на уебсайта. Без тях някои функции на сайта няма да работят правилно.
              </p>
              
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Аналитични бисквитки
              </h3>
              <p className="mb-4">
                Използваме аналитични бисквитки, за да разберем как посетителите използват нашия уебсайт. Това ни помага да подобрим съдържанието и навигацията.
              </p>
              
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Функционални бисквитки
              </h3>
              <p>
                Тези бисквитки запомнят вашите предпочитания, като език и регион, за да осигурят персонализирано изживяване.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                3. Как управляваме бисквитките
              </h2>
              <p className="mb-4">
                При първото ви посещение на нашия уебсайт ще ви бъде показано съобщение за бисквитките. Можете да приемете или откажете използването на незадължителни бисквитки.
              </p>
              <p>
                Освен това можете да управлявате бисквитките чрез настройките на вашия браузър. Повечето браузъри ви позволяват да:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Видите какви бисквитки са съхранени</li>
                <li>Изтриете бисквитки поотделно или всички</li>
                <li>Блокирате бисквитки от определени сайтове</li>
                <li>Блокирате всички бисквитки</li>
                <li>Получавате известие преди съхраняване на бисквитка</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                4. Бисквитки на трети страни
              </h2>
              <p>
                Нашият уебсайт може да съдържа връзки към външни сайтове или вградено съдържание (например карти). Тези сайтове могат да поставят свои собствени бисквитки. Нямаме контрол над бисквитките на трети страни и ви препоръчваме да прочетете техните политики за поверителност.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                5. Срок на съхранение
              </h2>
              <p className="mb-4">Бисквитките имат различен срок на валидност:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Сесийни бисквитки:</strong> Изтриват се автоматично, когато затворите браузъра</li>
                <li><strong>Постоянни бисквитки:</strong> Остават на устройството ви за определен период (обикновено от няколко дни до 2 години)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                6. Въздействие при отказ от бисквитки
              </h2>
              <p>
                Ако изберете да блокирате бисквитките, някои функции на уебсайта може да не работят правилно. Необходимите бисквитки не могат да бъдат деактивирани, тъй като са от съществено значение за работата на сайта.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                7. Промени в политиката
              </h2>
              <p>
                Запазваме си правото да актуализираме тази политика за бисквитки по всяко време. Всички промени ще бъдат публикувани на тази страница с актуализирана дата.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                8. Контакт
              </h2>
              <p>
                Ако имате въпроси относно нашата политика за бисквитки, моля свържете се с нас:
              </p>
              <p className="mt-4">
                <strong>Имейл:</strong> info@dar-psiholog.com<br />
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

export default CookiePolicy;