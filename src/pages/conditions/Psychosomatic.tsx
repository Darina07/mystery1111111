import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Activity, Brain, Heart, Shield } from "lucide-react";
import psychosomaticHeader from "@/assets/psychosomatic-header.jpg";

const conditionData: ConditionData = {
  title: "Психосоматика",
  subtitle: "Психологично консултиране",
  description: "Разбиране и лечение на физически симптоми с психологичен произход.",
  heroImage: psychosomaticHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява психосоматиката?",
    content: `Психосоматичните симптоми са физически оплаквания, които са свързани с емоционални фактори. Стресът, тревожността и потиснатите емоции могат да се проявят в тялото.

Чести психосоматични симптоми:
• Главоболие и мигрена
• Болки в гърба и врата
• Стомашни проблеми
• Сърцебиене
• Задъхване
• Кожни проблеми
• Хронична умора
• Мускулно напрежение

Разбирането на връзката ум-тяло е ключово за пълноценното възстановяване.`
  },
  howWeHelp: [
    { icon: Activity, title: "Разбиране на симптомите", description: "Изследване на връзката между емоции и физически оплаквания." },
    { icon: Brain, title: "Работа с емоциите", description: "Разпознаване и изразяване на потиснати чувства." },
    { icon: Heart, title: "Техники за тялото", description: "Упражнения за освобождаване на напрежението." },
    { icon: Shield, title: "Управление на стреса", description: "Превенция на бъдещи психосоматични реакции." }
  ],
  benefits: [
    "Облекчаване на физическите симптоми",
    "По-добро разбиране на тялото",
    "Ефективно управление на стреса",
    "Подобрено цялостно здраве",
    "Предотвратяване на хронични проблеми",
    "Хармония между ум и тяло"
  ]
};

const Psychosomatic = () => <ConditionPageTemplate data={conditionData} />;
export default Psychosomatic;
