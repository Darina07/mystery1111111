import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Flame, Brain, Heart, Shield } from "lucide-react";
import conditionsHeader from "@/assets/conditions-support.jpg";

const conditionData: ConditionData = {
  title: "Гняв и автоагресия",
  subtitle: "Психологично консултиране",
  description: "Научете се да управлявате интензивните емоции по здравословен начин.",
  heroImage: conditionsHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представляват гневът и автоагресията?",
    content: `Гневът е нормална емоция, но когато става неконтролируем, може да навреди на взаимоотношенията и здравето. Автоагресията е начин за справяне с емоционална болка, който изисква специализирана помощ.

Признаци на проблемен гняв:
• Чести избухвания
• Физическа или вербална агресия
• Трудност да се успокоите
• Съжаление след избухване
• Проблеми в отношенията заради гнева

Признаци на автоагресия:
• Самонараняване
• Рисково поведение
• Пренебрегване на нуждите си

И двете състояния могат да бъдат успешно преодолени с правилния подход.`
  },
  howWeHelp: [
    { icon: Flame, title: "Разпознаване на тригери", description: "Идентифициране на ситуациите и мислите, които предизвикват гнева." },
    { icon: Brain, title: "Когнитивни техники", description: "Промяна на мислите, които подхранват гнева и автоагресията." },
    { icon: Heart, title: "Алтернативни стратегии", description: "Здравословни начини за справяне с интензивни емоции." },
    { icon: Shield, title: "Безопасност", description: "Създаване на план за кризисни моменти." }
  ],
  benefits: [
    "Контрол върху емоционалните реакции",
    "По-здрави взаимоотношения",
    "Намалено напрежение",
    "Алтернативи на самонараняването",
    "По-висока самооценка",
    "По-спокоен живот"
  ]
};

const Anger = () => <ConditionPageTemplate data={conditionData} />;
export default Anger;
