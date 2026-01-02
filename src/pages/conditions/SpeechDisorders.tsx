import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, MessageCircle, Sparkles, Users } from "lucide-react";
import speechDisordersHeader from "@/assets/speech-disorders-header.jpg";

const conditionData: ConditionData = {
  title: "Говорни нарушения",
  subtitle: "Детско консултиране",
  description: "Специализирана подкрепа за деца с говорни и езикови нарушения.",
  heroImage: speechDisordersHeader,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Какво са говорните нарушения?",
    content: `Говорните и езиковите нарушения обхващат широк спектър от затруднения, свързани с произношението, разбирането и използването на езика. Те могат да засегнат артикулацията, гласа, плавността на речта или езиковите умения.

Ранната интервенция е ключова за успешното преодоляване на тези затруднения и предотвратяване на вторични проблеми в ученето и социализацията.

Видове говорни нарушения:
• Артикулационни нарушения - трудности с произнасяне на звуци
• Фонологични нарушения - проблеми с звуковите модели
• Гласови нарушения - проблеми с качеството на гласа
• Езикови нарушения - затруднения с разбирането или изразяването
• Нарушения на плавността - заекване, запъване`,
  },
  howWeHelp: [
    {
      icon: Brain,
      title: "Логопедична оценка",
      description: "Цялостна диагностика на говорните и езикови умения."
    },
    {
      icon: MessageCircle,
      title: "Артикулационна терапия",
      description: "Упражнения за правилно произнасяне на звуци и думи."
    },
    {
      icon: Sparkles,
      title: "Езиково развитие",
      description: "Стимулиране на речниковото и граматично развитие."
    },
    {
      icon: Users,
      title: "Семейни насоки",
      description: "Обучение на родителите за подкрепа на езиковото развитие у дома."
    },
  ],
  benefits: [
    "Подобрено произношение",
    "Разширен речник",
    "По-ясна и разбираема реч",
    "По-добра комуникация",
    "Повишена увереност",
    "Успех в училище",
  ],
};

const SpeechDisorders = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default SpeechDisorders;
