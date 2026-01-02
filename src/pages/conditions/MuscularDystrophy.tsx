import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Users, Sparkles } from "lucide-react";
import muscularDystrophyHeader from "@/assets/muscular-dystrophy-header.jpg";

const conditionData: ConditionData = {
  title: "Деца с мускулна дистрофия",
  subtitle: "Детско консултиране",
  description: "Психологическа подкрепа за деца с мускулна дистрофия и техните семейства.",
  heroImage: muscularDystrophyHeader,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Психологическа подкрепа при мускулна дистрофия",
    content: `Мускулната дистрофия е група генетични заболявания, които причиняват прогресивна слабост и загуба на мускулна маса. Децата с това състояние се нуждаят от специализирана психологическа подкрепа.

Психологическата помощ е насочена към:
• Приемане на диагнозата и адаптация
• Справяне с емоционалните предизвикателства
• Поддържане на позитивна самооценка
• Развиване на социални умения
• Подкрепа при промени в ежедневието
• Работа с цялото семейство`,
  },
  howWeHelp: [
    {
      icon: Heart,
      title: "Емоционална подкрепа",
      description: "Помагаме на детето да се справи с емоциите и да приеме състоянието си."
    },
    {
      icon: Brain,
      title: "Когнитивни стратегии",
      description: "Развиваме умения за справяне и позитивно мислене."
    },
    {
      icon: Users,
      title: "Семейно консултиране",
      description: "Подкрепяме цялото семейство в процеса на адаптация."
    },
    {
      icon: Sparkles,
      title: "Социална интеграция",
      description: "Помагаме за поддържане на социални връзки и активности."
    },
  ],
  benefits: [
    "Подобрено емоционално състояние",
    "Стратегии за справяне с предизвикателствата",
    "По-силна семейна подкрепа",
    "Повишена самооценка",
    "Социална интеграция",
    "Подобрено качество на живот",
  ],
};

const MuscularDystrophy = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default MuscularDystrophy;
