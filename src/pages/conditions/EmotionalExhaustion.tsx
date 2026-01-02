import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { BatteryLow, Heart, Sun, Shield } from "lucide-react";
import emotionalExhaustionHeader from "@/assets/emotional-exhaustion-header.jpg";

const conditionData: ConditionData = {
  title: "Емоционално изчерпване",
  subtitle: "Психологично консултиране",
  description: "Помощ при преодоляване на емоционалното изтощение и възстановяване на вътрешния баланс.",
  heroImage: emotionalExhaustionHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява емоционалното изчерпване?",
    content: `Емоционалното изчерпване е състояние на дълбока умора, при което се чувствате емоционално изтощени и неспособни да се справяте с ежедневните предизвикателства.

Признаци на емоционално изчерпване:
• Чувство на празнота и безразличие
• Неспособност да изпитвате радост
• Лесна раздразнителност
• Желание за изолация
• Липса на емоционални ресурси за другите
• Чувство на претоварване от всичко
• Физическа умора

То може да е резултат от продължителен стрес, грижа за други, травматични преживявания или липса на емоционална подкрепа.`
  },
  howWeHelp: [
    { icon: BatteryLow, title: "Оценка на състоянието", description: "Разбиране на причините и факторите за изчерпването." },
    { icon: Heart, title: "Емоционална подкрепа", description: "Пространство за изразяване и преработване на чувствата." },
    { icon: Sun, title: "Възстановителни практики", description: "Техники за презареждане на емоционалните ресурси." },
    { icon: Shield, title: "Здравословни граници", description: "Научаване да защитавате енергията си." }
  ],
  benefits: [
    "Възстановена емоционална енергия",
    "По-добро разбиране на собствените нужди",
    "Умения за предотвратяване на изчерпване",
    "По-балансиран начин на живот",
    "Подобрени взаимоотношения",
    "Способност отново да се радвате"
  ]
};

const EmotionalExhaustion = () => <ConditionPageTemplate data={conditionData} />;
export default EmotionalExhaustion;
