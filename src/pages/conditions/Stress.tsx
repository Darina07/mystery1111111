import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Gauge, Brain, Heart, Wind } from "lucide-react";
import conditionsHeader from "@/assets/conditions-support.jpg";

const conditionData: ConditionData = {
  title: "Стрес",
  subtitle: "Психологично консултиране",
  description: "Ефективни стратегии за справяне с ежедневния и хроничния стрес.",
  heroImage: conditionsHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява стресът?",
    content: `Стресът е реакция на организма към предизвикателства и заплахи. Макар краткосрочният стрес да е нормален, хроничният стрес може да доведе до здравословни проблеми.

Симптоми на хроничен стрес:
• Главоболие и мускулно напрежение
• Проблеми със съня
• Тревожност и раздразнителност
• Затруднена концентрация
• Храносмилателни проблеми
• Отслабен имунитет
• Сърдечно-съдови проблеми

Научаването да управлявате стреса е ключово за здравето и благополучието.`
  },
  howWeHelp: [
    { icon: Gauge, title: "Оценка на стреса", description: "Идентифициране на източниците и нивото на стрес в живота ви." },
    { icon: Brain, title: "Когнитивни техники", description: "Промяна на стресогенните мисловни модели." },
    { icon: Wind, title: "Релаксация", description: "Дихателни упражнения и техники за успокояване." },
    { icon: Heart, title: "Lifestyle промени", description: "Промени в начина на живот за устойчиво намаляване на стреса." }
  ],
  benefits: [
    "Намалено напрежение и безпокойство",
    "По-добър сън",
    "Повишена продуктивност",
    "Подобрено физическо здраве",
    "Баланс между работа и личен живот",
    "По-голяма устойчивост на стрес"
  ]
};

const Stress = () => <ConditionPageTemplate data={conditionData} />;
export default Stress;
