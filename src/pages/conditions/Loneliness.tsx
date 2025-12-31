import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Users, Heart, MessageCircle, Target } from "lucide-react";
import conditionsHeader from "@/assets/conditions-support.jpg";

const conditionData: ConditionData = {
  title: "Самота",
  subtitle: "Психологично консултиране",
  description: "Подкрепа за изграждане на значими връзки и преодоляване на чувството за самота.",
  heroImage: conditionsHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява самотата?",
    content: `Самотата е субективно усещане за липса на значими социални връзки. Тя може да се изпитва дори сред много хора.

Видове самота:
• Емоционална – липса на близък, интимен човек
• Социална – липса на приятелски кръг
• Екзистенциална – чувство за изолация от света

Последици от хронична самота:
• Депресивни симптоми
• Тревожност
• Влошено физическо здраве
• Намалена самооценка
• Негативни мисловни модели

Самотата е състояние, което може да бъде променено с правилния подход и подкрепа.`
  },
  howWeHelp: [
    { icon: Users, title: "Разбиране на самотата", description: "Изследване на причините и моделите, които поддържат изолацията." },
    { icon: MessageCircle, title: "Социални умения", description: "Развиване на увереност в социални ситуации и комуникация." },
    { icon: Heart, title: "Качество на връзките", description: "Фокус върху дълбочината, а не количеството на взаимоотношенията." },
    { icon: Target, title: "Практически стъпки", description: "Изграждане на нови връзки и включване в общности." }
  ],
  benefits: [
    "Чувство за принадлежност",
    "По-дълбоки взаимоотношения",
    "Увереност в социални ситуации",
    "Намалена изолация",
    "По-богат социален живот",
    "Подобрено емоционално благополучие"
  ]
};

const Loneliness = () => <ConditionPageTemplate data={conditionData} />;
export default Loneliness;
