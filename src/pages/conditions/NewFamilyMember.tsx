import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childNewFamilyMemberHeader from "@/assets/child-new-family-member-header.jpg";

const conditionData: ConditionData = {
  title: "Нов член в семейството",
  subtitle: "Детско консултиране",
  description: "Подкрепа за деца при адаптация към ново братче, сестриче или член на семейството.",
  heroImage: childNewFamilyMemberHeader,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Как новият член в семейството влияе на детето?",
    content: `Появата на ново братче или сестриче, нов партньор на родител или дете от предишен брак може да бъде значително предизвикателство за детето. Промяната в семейната динамика изисква адаптация от всички.

Децата могат да изпитват ревност, страх от загуба на внимание, объркване относно новите роли или трудности в приемането на новия член.

Признаци за трудности при адаптация:
• Ревност и съперничество
• Регресия към по-детски поведения
• Гняв или агресия към новия член
• Търсене на повече внимание
• Проблеми със съня или храненето
• Оттегляне или тъга`,
  },
  howWeHelp: [
    {
      icon: Brain,
      title: "Разбиране на чувствата",
      description: "Помагаме на детето да осмисли своите реакции и емоции."
    },
    {
      icon: Heart,
      title: "Изграждане на връзка",
      description: "Подкрепа за създаване на положителна връзка с новия член."
    },
    {
      icon: Shield,
      title: "Запазване на идентичността",
      description: "Укрепване на чувството за важност и уникалност на детето."
    },
    {
      icon: Users,
      title: "Семейна работа",
      description: "Насоки за родителите за балансиране на вниманието."
    },
  ],
  benefits: [
    "По-лесна адаптация към промяната",
    "Намаляване на ревността",
    "Изграждане на положителни взаимоотношения",
    "Запазване на чувството за сигурност",
    "По-добра семейна динамика",
    "Развиване на емпатия и споделяне",
  ],
};

const NewFamilyMember = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default NewFamilyMember;
