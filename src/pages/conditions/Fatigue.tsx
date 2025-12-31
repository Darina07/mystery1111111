import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Zap, Brain, Heart, Sun } from "lucide-react";
import conditionsHeader from "@/assets/conditions-support.jpg";

const conditionData: ConditionData = {
  title: "Умора",
  subtitle: "Психологично консултиране",
  description: "Възстановяване на енергията и жизнеността чрез разбиране на причините за умората.",
  heroImage: conditionsHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява хроничната умора?",
    content: `Хроничната умора е постоянно чувство на изтощение, което не се облекчава от почивка. Тя може да има физически, емоционални или психологични причини.

Признаци на хронична умора:
• Постоянно чувство на изтощение
• Липса на енергия дори след почивка
• Затруднена концентрация
• Мускулна слабост
• Раздразнителност
• Намалена мотивация
• Влошена памет

Разбирането на основната причина е ключово за възстановяването.`
  },
  howWeHelp: [
    { icon: Zap, title: "Оценка на причините", description: "Изследване на факторите, които допринасят за умората." },
    { icon: Brain, title: "Когнитивни промени", description: "Работа с мислите и нагласите, които изчерпват." },
    { icon: Heart, title: "Емоционален баланс", description: "Справяне с емоционалните източници на умора." },
    { icon: Sun, title: "Lifestyle промени", description: "Практични стъпки за възстановяване на енергията." }
  ],
  benefits: [
    "Възстановена енергия и жизненост",
    "По-добър сън",
    "Яснота относно причините за умората",
    "Устойчиви навици за енергия",
    "Подобрено качество на живот",
    "Повишена продуктивност"
  ]
};

const Fatigue = () => <ConditionPageTemplate data={conditionData} />;
export default Fatigue;
