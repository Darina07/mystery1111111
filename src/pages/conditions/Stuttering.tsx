import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, MessageCircle, Sparkles } from "lucide-react";
import stutteringHeader from "@/assets/stuttering-header.jpg";

const conditionData: ConditionData = {
  title: "Заекване",
  subtitle: "Детско консултиране",
  description: "Специализирана подкрепа за деца със заекване и техните семейства.",
  heroImage: stutteringHeader,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Какво е заекване?",
    content: `Заекването е нарушение на плавността на речта, характеризиращо се с повторения на звуци, срички или думи, удължаване на звуци или блокажи в говора. То засяга около 1% от населението и е по-често при момчета.

Заекването може значително да повлияе на самочувствието и социалните взаимодействия на детето. С ранна интервенция и подходяща терапия много деца постигат значително подобрение.

Признаци на заекване:
• Повторения на звуци, срички или думи
• Удължаване на звуци
• Блокажи - невъзможност да се произнесе звук
• Напрежение в лицевите мускули при говорене
• Избягване на определени думи или ситуации
• Тревожност свързана с говоренето`,
  },
  howWeHelp: [
    {
      icon: Brain,
      title: "Оценка на говора",
      description: "Цялостна диагностика на типа и тежестта на заекването."
    },
    {
      icon: MessageCircle,
      title: "Техники за плавност",
      description: "Обучение в стратегии за по-плавна и уверена реч."
    },
    {
      icon: Heart,
      title: "Емоционална подкрепа",
      description: "Работа върху тревожността и изграждане на увереност при общуване."
    },
    {
      icon: Sparkles,
      title: "Семейно консултиране",
      description: "Насоки за родителите как да подкрепят детето у дома."
    },
  ],
  benefits: [
    "По-плавна реч",
    "Намалена тревожност при говорене",
    "Повишена увереност в комуникацията",
    "Стратегии за трудни ситуации",
    "Подкрепа за семейството",
    "По-добро социално функциониране",
  ],
};

const Stuttering = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default Stuttering;
