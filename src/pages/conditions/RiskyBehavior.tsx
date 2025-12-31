import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childCounselingHeader from "@/assets/child-counseling-header.jpg";

const conditionData: ConditionData = {
  title: "Лъжи, кражби и рисково поведение",
  subtitle: "Детско консултиране",
  description: "Подкрепа при поведенчески проблеми и рисково поведение при деца.",
  heroImage: childCounselingHeader,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Какво представлява рисковото поведение?",
    content: `Лъжите, кражбите и другите форми на рисково поведение при деца често са симптоми на по-дълбоки емоционални или социални трудности. Важно е да се разбере какво стои зад тези поведения.

Рисковото поведение може да бъде начин за привличане на внимание, изразяване на бунт, справяне с тревожност или резултат от негативно влияние от връстници.

Признаци за рисково поведение:
• Честа лъжа, дори когато няма очевидна причина
• Кражби от дома, училището или магазини
• Унищожаване на чужда собственост
• Употреба на алкохол или цигари
• Асоцииране с рискови групи
• Агресивно или насилствено поведение`,
  },
  howWeHelp: [
    {
      icon: Brain,
      title: "Разбиране на мотивацията",
      description: "Изследване на причините за рисковото поведение."
    },
    {
      icon: Heart,
      title: "Емоционална работа",
      description: "Работа с емоциите, които стоят зад поведението."
    },
    {
      icon: Shield,
      title: "Изграждане на ценности",
      description: "Развиване на морална разсъдливост и емпатия."
    },
    {
      icon: Users,
      title: "Семейна подкрепа",
      description: "Насоки за родителите за справяне и превенция."
    },
  ],
  benefits: [
    "Разбиране на причините за поведението",
    "Намаляване на проблемното поведение",
    "По-добра връзка с родителите",
    "Развиване на отговорност",
    "Подобрени социални умения",
    "По-здравословни избори",
  ],
};

const RiskyBehavior = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default RiskyBehavior;
