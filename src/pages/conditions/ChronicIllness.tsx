import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Users, Sparkles } from "lucide-react";
import chronicIllnessHeader from "@/assets/chronic-illness-header.jpg";

const conditionData: ConditionData = {
  title: "Хронични физически заболявания",
  subtitle: "Детско консултиране",
  description: "Психологическа подкрепа за деца с хронични физически заболявания.",
  heroImage: chronicIllnessHeader,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Психологическа подкрепа при хронични заболявания",
    content: `Хроничните физически заболявания като диабет, астма, сърдечни проблеми и други могат значително да повлияят на психическото здраве на детето. Психологическата подкрепа е важна част от цялостната грижа.

Области на подкрепа:
• Адаптация към живота със заболяване
• Справяне с болка и дискомфорт
• Управление на тревожността
• Работа със самооценката
• Социална интеграция
• Подкрепа на семейството`,
  },
  howWeHelp: [
    {
      icon: Heart,
      title: "Емоционална подкрепа",
      description: "Помагаме на детето да се справи с емоциите свързани със заболяването."
    },
    {
      icon: Brain,
      title: "Когнитивни техники",
      description: "Развиваме умения за справяне с болка и тревожност."
    },
    {
      icon: Users,
      title: "Семейна терапия",
      description: "Подкрепяме цялото семейство в грижата за детето."
    },
    {
      icon: Sparkles,
      title: "Качество на живот",
      description: "Работим за подобряване на ежедневното функциониране."
    },
  ],
  benefits: [
    "По-добро справяне със заболяването",
    "Намалена тревожност и депресия",
    "Подобрено спазване на лечението",
    "Повишена самооценка",
    "По-силна семейна подкрепа",
    "Подобрено качество на живот",
  ],
};

const ChronicIllness = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default ChronicIllness;
