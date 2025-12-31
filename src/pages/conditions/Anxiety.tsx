import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Wind, Shield } from "lucide-react";
import conditionsHeader from "@/assets/conditions-support.jpg";

const conditionData: ConditionData = {
  title: "Тревожност",
  subtitle: "Психологично консултиране",
  description: "Ефективни методи за справяне с тревожността и възстановяване на спокойствието.",
  heroImage: conditionsHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява тревожността?",
    content: `Тревожността е естествена реакция на стрес, но когато стане прекомерна или постоянна, тя може да попречи на ежедневния живот.

Симптоми на тревожността:
• Постоянно безпокойство и напрежение
• Затруднена концентрация
• Нарушения на съня
• Учестено сърцебиене
• Задъхване или стягане в гърдите
• Мускулно напрежение
• Избягване на ситуации, които предизвикват тревожност

Тревожността е едно от най-успешно лечимите състояния с правилния терапевтичен подход.`
  },
  howWeHelp: [
    { icon: Brain, title: "Когнитивни техники", description: "Разпознаване и промяна на тревожните мисли и катастрофичните сценарии." },
    { icon: Wind, title: "Релаксационни методи", description: "Дихателни упражнения и техники за бързо успокояване." },
    { icon: Heart, title: "Емоционална регулация", description: "Научаване да управлявате емоционалните реакции ефективно." },
    { icon: Shield, title: "Експозиционна терапия", description: "Постепенно преодоляване на избягващото поведение." }
  ],
  benefits: [
    "Намаляване на тревожните симптоми",
    "По-добър сън и релаксация",
    "Увереност в стресови ситуации",
    "Подобрено качество на живот",
    "Дългосрочни стратегии за справяне",
    "Възстановяване на вътрешния мир"
  ]
};

const Anxiety = () => <ConditionPageTemplate data={conditionData} />;
export default Anxiety;
