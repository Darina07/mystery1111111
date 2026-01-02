import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Target, PenTool, Sparkles } from "lucide-react";
import dysgraphiaHeader from "@/assets/dysgraphia-header.jpg";

const conditionData: ConditionData = {
  title: "Дисграфия",
  subtitle: "Детско консултиране",
  description: "Специализирана подкрепа за деца с дисграфия и затруднения в писането.",
  heroImage: dysgraphiaHeader,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Какво е дисграфия?",
    content: `Дисграфията е специфично нарушение на способността за учене, което засяга писмените умения. Децата с дисграфия имат затруднения с почерка, правописа и организирането на мислите на хартия.

Това не е въпрос на мързел или липса на старание - дисграфията е неврологично състояние, което изисква специализиран подход и подкрепа.

Признаци на дисграфия:
• Нечетлив или неравномерен почерк
• Неправилно държане на молива
• Бавно и уморително писане
• Затруднения с разстоянията между букви и думи
• Чести грешки в правописа
• Трудности при копиране на текст
• Избягване на писмени задачи`,
  },
  howWeHelp: [
    {
      icon: Brain,
      title: "Оценка на уменията",
      description: "Диагностика на специфичните затруднения и силните страни на детето."
    },
    {
      icon: PenTool,
      title: "Моторни упражнения",
      description: "Развиване на фината моторика и координацията око-ръка."
    },
    {
      icon: Target,
      title: "Техники за писане",
      description: "Обучение в ефективни стратегии за подобряване на почерка."
    },
    {
      icon: Sparkles,
      title: "Алтернативни методи",
      description: "Използване на технологии и помощни средства за компенсиране."
    },
  ],
  benefits: [
    "Подобрен почерк",
    "По-бързо и лесно писане",
    "Намалена умора при писане",
    "Стратегии за справяне в училище",
    "Повишена самооценка",
    "Алтернативни методи за изразяване",
  ],
};

const Dysgraphia = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default Dysgraphia;
