import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Shield, Users, Sparkles } from "lucide-react";
import socialRejectionSupportHeader from "@/assets/social-rejection-support-header.jpg";

const conditionData: ConditionData = {
  title: "Подкрепа при социално отхвърляне",
  subtitle: "Детско консултиране",
  description: "Психологическа подкрепа за деца и юноши, които изпитват социално отхвърляне.",
  heroImage: socialRejectionSupportHeader,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Справяне със социално отхвърляне",
    content: `Социалното отхвърляне може да бъде особено болезнено за децата и юношите, независимо дали е свързано с тяхната идентичност, различност или други причини. То може да доведе до сериозни емоционални последици.

Признаци, че детето има нужда от подкрепа:
• Изолация от връстници
• Тъга и депресивни симптоми
• Ниска самооценка
• Страх от социални ситуации
• Гняв и агресия
• Училищен отказ`,
  },
  howWeHelp: [
    {
      icon: Heart,
      title: "Емоционална подкрепа",
      description: "Помагаме за преработване на болката от отхвърляне."
    },
    {
      icon: Shield,
      title: "Изграждане на устойчивост",
      description: "Развиваме умения за справяне с негативен опит."
    },
    {
      icon: Users,
      title: "Социални умения",
      description: "Работим върху комуникация и изграждане на връзки."
    },
    {
      icon: Sparkles,
      title: "Самооценка",
      description: "Възстановяваме увереността и позитивния образ за себе си."
    },
  ],
  benefits: [
    "Преработване на травматичен опит",
    "Повишена емоционална устойчивост",
    "Подобрени социални умения",
    "Възстановена самооценка",
    "Намалена тревожност",
    "Изграждане на нови връзки",
  ],
};

const SocialRejectionSupport = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default SocialRejectionSupport;
