import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Star, Brain, Heart, Target } from "lucide-react";
import insecurityHeader from "@/assets/insecurity-header.jpg";

const conditionData: ConditionData = {
  title: "Неувереност",
  subtitle: "Психологично консултиране",
  description: "Подкрепа за преодоляване на несигурността и развиване на здравословна самооценка.",
  heroImage: insecurityHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява неувереността?",
    content: `Неувереността е съмнение в собствените способности, стойност и решения. Тя може да се прояви по различни начини и да ограничава живота ви.

Признаци на неувереност:
• Страх от провал
• Избягване на предизвикателства
• Трудност при вземане на решения
• Зависимост от одобрението на другите
• Самокритичност
• Сравняване с другите
• Подценяване на постиженията

Работата върху себеоценката може да доведе до значителна промяна в качеството на живот.`
  },
  howWeHelp: [
    { icon: Star, title: "Разбиране на корените", description: "Изследване на произхода и моделите на неувереността." },
    { icon: Brain, title: "Промяна на мислите", description: "Работа с негативните убеждения за себе си." },
    { icon: Heart, title: "Себеприемане", description: "Развиване на състрадание и приемане към себе си." },
    { icon: Target, title: "Практически стъпки", description: "Изграждане на увереност чрез постепенни действия." }
  ],
  benefits: [
    "По-висока самооценка",
    "Увереност в решенията",
    "Смелост да преследвате целите си",
    "По-автентични взаимоотношения",
    "Вътрешна сигурност и спокойствие",
    "Свобода да бъдете себе си"
  ]
};

const Insecurity = () => <ConditionPageTemplate data={conditionData} />;
export default Insecurity;
