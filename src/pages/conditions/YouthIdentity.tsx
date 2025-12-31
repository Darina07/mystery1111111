import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Brain, Sparkles, Target } from "lucide-react";
import lgbtCounseling from "@/assets/lgbt-counseling.jpg";

const conditionData: ConditionData = {
  title: "Идентичност и себеприемане",
  subtitle: "Детско консултиране",
  description: "Подкрепа за деца и юноши в процеса на изграждане на идентичност и себеприемане.",
  heroImage: lgbtCounseling,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Изграждане на идентичност и себеприемане",
    content: `Юношеството е период на интензивно себеоткриване и формиране на идентичност. Този процес може да бъде труден и объркващ, особено когато младият човек се чувства различен от връстниците си.

Ние подкрепяме в:
• Изследване на полова и сексуална идентичност
• Приемане на себе си такъв, какъвто си
• Справяне с вътрешни конфликти
• Преодоляване на срам и вина
• Развиване на автентичност
• Изграждане на здрава самооценка`,
  },
  howWeHelp: [
    {
      icon: Heart,
      title: "Безусловно приемане",
      description: "Предоставяме пространство за автентично себеизразяване."
    },
    {
      icon: Brain,
      title: "Себеопознаване",
      description: "Помагаме за разбиране на мислите, чувствата и желанията."
    },
    {
      icon: Target,
      title: "Изграждане на идентичност",
      description: "Подкрепяме формирането на автентична идентичност."
    },
    {
      icon: Sparkles,
      title: "Себеприемане",
      description: "Работим за развиване на любов и уважение към себе си."
    },
  ],
  benefits: [
    "По-ясна представа за себе си",
    "Повишено себеприемане",
    "Намален вътрешен конфликт",
    "По-добра самооценка",
    "Автентично себеизразяване",
    "Емоционална устойчивост",
  ],
};

const YouthIdentity = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default YouthIdentity;
