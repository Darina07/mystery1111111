import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Stethoscope, Brain, Heart, Shield } from "lucide-react";
import conditionsHeader from "@/assets/conditions-support.jpg";

const conditionData: ConditionData = {
  title: "Хипохондрия",
  subtitle: "Психологично консултиране",
  description: "Помощ при преодоляване на страха от болести и прекомерната загриженост за здравето.",
  heroImage: conditionsHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява хипохондрията?",
    content: `Хипохондрията (здравна тревожност) е състояние, при което човек е прекомерно загрижен, че има или ще развие сериозно заболяване.

Признаци на хипохондрия:
• Постоянна загриженост за здравето
• Интерпретиране на нормални усещания като симптоми на болест
• Чести посещения при лекари
• Търсене на успокоение от близки
• Прекомерно изследване на симптоми в интернет
• Избягване на медицински прегледи от страх
• Невъзможност да се успокоите след добри резултати

Здравната тревожност е лечимо състояние с когнитивно-поведенческа терапия.`
  },
  howWeHelp: [
    { icon: Stethoscope, title: "Разбиране на симптомите", description: "Научаване да разпознавате разликата между тревожност и реална болест." },
    { icon: Brain, title: "Когнитивна терапия", description: "Работа с катастрофичните мисли за здравето." },
    { icon: Heart, title: "Управление на тревожността", description: "Техники за намаляване на здравната тревожност." },
    { icon: Shield, title: "Промяна на поведението", description: "Намаляване на проверяването и търсенето на успокоение." }
  ],
  benefits: [
    "Освобождаване от постоянната загриженост",
    "По-малко посещения при лекари",
    "Доверие в собственото тяло",
    "По-спокоен ум",
    "Качествен живот без страх от болести",
    "Способност да се радвате на настоящето"
  ]
};

const Hypochondria = () => <ConditionPageTemplate data={conditionData} />;
export default Hypochondria;
