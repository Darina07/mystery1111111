import ConditionPageTemplate, { ConditionData } from "@/components/ConditionPageTemplate";
import { MessageCircle, BookOpen, Users, Heart, Sparkles } from "lucide-react";
import speechDelayHeader from "@/assets/speech-delay-header.jpg";

const conditionData: ConditionData = {
  title: "Забавено говорно развитие",
  subtitle: "Логопедична подкрепа",
  description: "Професионална помощ за деца със забавено говорно и езиково развитие",
  heroImage: speechDelayHeader,
  parentService: {
    name: "Логопед",
    href: "/services/speech-therapy"
  },
  whatIs: {
    title: "Какво е забавено говорно развитие?",
    content: "Забавеното говорно развитие е състояние, при което детето не достига очакваните за възрастта си езикови и речеви етапи. Това може да включва късно проговаряне, ограничен речников запас, трудности в съставянето на изречения или проблеми с разбирането на речта. Ранната интервенция е от ключово значение за успешното преодоляване на тези затруднения."
  },
  howWeHelp: [
    {
      icon: MessageCircle,
      title: "Логопедична оценка",
      description: "Цялостна диагностика на говорното и езиковото развитие"
    },
    {
      icon: BookOpen,
      title: "Стимулиране на речта",
      description: "Целенасочени упражнения за развитие на говора"
    },
    {
      icon: Users,
      title: "Работа с родители",
      description: "Насоки за подкрепа на речевото развитие у дома"
    },
    {
      icon: Heart,
      title: "Игрова терапия",
      description: "Развитие на речта чрез игра и забавление"
    },
    {
      icon: Sparkles,
      title: "Индивидуален подход",
      description: "Програма, съобразена с темпото на детето"
    }
  ],
  benefits: [
    "Навременна подкрепа за говорното развитие",
    "Разширяване на речниковия запас",
    "Подобряване на комуникативните умения",
    "По-добра социална адаптация",
    "Подготовка за училище",
    "Повишена увереност на детето"
  ]
};

const SpeechDelay = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default SpeechDelay;
