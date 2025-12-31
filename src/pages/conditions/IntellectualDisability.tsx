import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Users, Sparkles } from "lucide-react";
import childCounselingHeader from "@/assets/child-counseling-header.jpg";

const conditionData: ConditionData = {
  title: "Умствена изостаналост",
  subtitle: "Детско консултиране",
  description: "Специализирана подкрепа за деца с интелектуални затруднения и техните семейства.",
  heroImage: childCounselingHeader,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Какво е интелектуално затруднение?",
    content: `Интелектуалното затруднение (известно още като умствена изостаналост) е състояние, характеризиращо се със значителни ограничения в интелектуалното функциониране и адаптивното поведение. То се проявява преди 18-годишна възраст.

Всяко дете с интелектуално затруднение е уникално. С подходяща подкрепа и адаптирано обучение децата могат да развият своя потенциал и да водят удовлетворяващ живот.

Области на подкрепа:
• Развитие на когнитивни умения
• Комуникация и език
• Социални умения и поведение
• Умения за самообслужване
• Практически житейски умения
• Емоционално благополучие`,
  },
  howWeHelp: [
    {
      icon: Brain,
      title: "Адаптирано обучение",
      description: "Използваме методи, съобразени с индивидуалните способности на детето."
    },
    {
      icon: Sparkles,
      title: "Развитие на умения",
      description: "Работа върху практически умения за по-голяма самостоятелност."
    },
    {
      icon: Heart,
      title: "Емоционална подкрепа",
      description: "Изграждане на положителна самооценка и емоционална стабилност."
    },
    {
      icon: Users,
      title: "Семейно консултиране",
      description: "Подкрепа и насоки за родителите в грижата за детето."
    },
  ],
  benefits: [
    "Развитие според индивидуалния потенциал",
    "Подобрени комуникационни умения",
    "По-голяма самостоятелност",
    "Социална интеграция",
    "Подкрепа за семейството",
    "Подобрено качество на живот",
  ],
};

const IntellectualDisability = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default IntellectualDisability;
