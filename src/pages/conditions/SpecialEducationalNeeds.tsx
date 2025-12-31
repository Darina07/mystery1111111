import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, BookOpen, Sparkles } from "lucide-react";
import learningDifficulties from "@/assets/learning-difficulties.jpg";

const conditionData: ConditionData = {
  title: "Специални образователни потребности (СОП)",
  subtitle: "Детско консултиране",
  description: "Психологическа подкрепа за деца със специални образователни потребности.",
  heroImage: learningDifficulties,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Какво са специалните образователни потребности?",
    content: `Специалните образователни потребности (СОП) обхващат широк спектър от състояния, които изискват индивидуален подход в образованието. Това включва деца с обучителни трудности, физически увреждания, разстройства от аутистичния спектър и други.

Области на подкрепа:
• Оценка на индивидуалните потребности
• Разработване на индивидуален план
• Работа със самооценката
• Социални умения
• Подготовка за включващо образование
• Консултиране на родители и учители`,
  },
  howWeHelp: [
    {
      icon: Brain,
      title: "Индивидуална оценка",
      description: "Диагностика на специфичните потребности и силни страни."
    },
    {
      icon: BookOpen,
      title: "Обучителни стратегии",
      description: "Разработване на индивидуализирани методи за учене."
    },
    {
      icon: Heart,
      title: "Емоционална подкрепа",
      description: "Работа със самооценката и справяне с фрустрациите."
    },
    {
      icon: Sparkles,
      title: "Социална интеграция",
      description: "Развиване на социални умения и приятелства."
    },
  ],
  benefits: [
    "Индивидуализиран подход",
    "Подобрени учебни резултати",
    "Повишена мотивация за учене",
    "По-добра самооценка",
    "Успешна социална интеграция",
    "Подкрепа за семейството и училището",
  ],
};

const SpecialEducationalNeeds = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default SpecialEducationalNeeds;
