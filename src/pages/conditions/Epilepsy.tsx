import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Sparkles } from "lucide-react";
import childCounselingHeader from "@/assets/child-counseling-header.jpg";

const conditionData: ConditionData = {
  title: "Деца с епилепсия",
  subtitle: "Детско консултиране",
  description: "Психологическа подкрепа за деца с епилепсия и техните семейства.",
  heroImage: childCounselingHeader,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Психологическа подкрепа при епилепсия",
    content: `Епилепсията е неврологично състояние, което може да повлияе значително на емоционалното и социално развитие на детето. Психологическата подкрепа е ключова за справяне с предизвикателствата.

Области на подкрепа:
• Справяне със страха от припадъци
• Приемане на диагнозата
• Преодоляване на социална изолация
• Работа със самооценката
• Управление на тревожността
• Подкрепа на семейството`,
  },
  howWeHelp: [
    {
      icon: Brain,
      title: "Разбиране на състоянието",
      description: "Помагаме на детето да разбере и приеме епилепсията."
    },
    {
      icon: Heart,
      title: "Емоционална подкрепа",
      description: "Работим със страховете и тревожността свързани с припадъците."
    },
    {
      icon: Shield,
      title: "Стратегии за справяне",
      description: "Развиваме умения за управление на стреса и тревожността."
    },
    {
      icon: Sparkles,
      title: "Социално включване",
      description: "Подкрепяме социалната интеграция и връстниковите отношения."
    },
  ],
  benefits: [
    "Намалена тревожност",
    "По-добро приемане на диагнозата",
    "Повишена самооценка",
    "Подобрени социални умения",
    "Семейна подкрепа",
    "По-добро качество на живот",
  ],
};

const Epilepsy = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default Epilepsy;
