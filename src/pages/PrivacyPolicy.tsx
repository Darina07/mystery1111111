import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <div className="container py-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
            Политика за поверителност
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                1. Въведение
              </h2>
              <p>
                Психологичен център „Дар" (наричан по-долу „ние", „нас" или „Центърът") се ангажира да защитава поверителността на личните данни на своите клиенти и посетители на уебсайта. Тази политика описва как събираме, използваме и защитаваме вашата лична информация.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                2. Какви данни събираме
              </h2>
              <p className="mb-4">Ние можем да събираме следните видове лични данни:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Име и фамилия</li>
                <li>Телефонен номер</li>
                <li>Имейл адрес</li>
                <li>Информация, предоставена по време на консултации</li>
                <li>Техническа информация за използването на уебсайта</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                3. Как използваме данните
              </h2>
              <p className="mb-4">Вашите лични данни се използват за:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Предоставяне на психологически услуги</li>
                <li>Комуникация относно записани часове</li>
                <li>Изпращане на информация за услуги (само с ваше съгласие)</li>
                <li>Подобряване на нашите услуги</li>
                <li>Спазване на законови изисквания</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                4. Защита на данните
              </h2>
              <p>
                Прилагаме строги мерки за сигурност за защита на вашите лични данни от неоторизиран достъп, промяна, разкриване или унищожаване. Всички данни от консултации са строго поверителни и се съхраняват в съответствие с професионалните етични стандарти.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                5. Вашите права
              </h2>
              <p className="mb-4">Съгласно GDPR, вие имате право да:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Получите достъп до вашите лични данни</li>
                <li>Поискате корекция на неточни данни</li>
                <li>Поискате изтриване на вашите данни</li>
                <li>Ограничите обработката на данните</li>
                <li>Възразите срещу обработката</li>
                <li>Преносимост на данните</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                6. Съхранение на данни
              </h2>
              <p>
                Съхраняваме вашите лични данни само толкова дълго, колкото е необходимо за целите, за които са събрани, или съгласно законовите изисквания за съхранение на медицинска документация.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                7. Контакт
              </h2>
              <p>
                За въпроси относно тази политика или вашите лични данни, моля свържете се с нас:
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

export default PrivacyPolicy;