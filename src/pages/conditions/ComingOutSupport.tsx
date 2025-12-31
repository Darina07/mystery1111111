import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Users, MessageCircle, Sparkles } from "lucide-react";
import lgbtCounseling from "@/assets/lgbt-counseling.jpg";

const conditionData: ConditionData = {
  title: "Coming out подкрепа",
  subtitle: "Детско консултиране",
  description: "Специализирана подкрепа за деца и юноши в процеса на coming out.",
  heroImage: lgbtCounseling,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Подкрепа при coming out",
    content: `Coming out е процесът на споделяне на сексуалната ориентация или половата идентичност с другите. Това може да бъде както освобождаващо, така и стресиращо преживяване за младите хора.

Ние помагаме в:
• Подготовка за разговора
• Справяне с тревожността преди coming out
• Избор на подходящо време и място
• Подготовка за различни реакции
• Преработване на опита след coming out
• Справяне с негативни реакции`,
  },
  howWeHelp: [
    {
      icon: Heart,
      title: "Емоционална подкрепа",
      description: "Подкрепяме през целия процес на coming out."
    },
    {
      icon: MessageCircle,
      title: "Подготовка за разговора",
      description: "Помагаме да планирате как и кога да споделите."
    },
    {
      icon: Users,
      title: "Семейна медиация",
      description: "Подкрепяме комуникацията със семейството след coming out."
    },
    {
      icon: Sparkles,
      title: "Изграждане на увереност",
      description: "Укрепваме самочувствието и автентичността."
    },
  ],
  benefits: [
    "Подготвеност за разговора",
    "Намалена тревожност",
    "Стратегии за различни реакции",
    "Емоционална подкрепа",
    "Подобрени семейни отношения",
    "Укрепена идентичност и самоприемане",
  ],
};

const ComingOutSupport = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default ComingOutSupport;
