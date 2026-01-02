import ConditionPageTemplate, { ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, MessageCircle, BookOpen, Users, Sparkles } from "lucide-react";
import speechTherapyHeader from "@/assets/speech-therapy-header.jpg";

const conditionData: ConditionData = {
  title: "Деца със СОП",
  subtitle: "Логопедична подкрепа",
  description: "Специализирана логопедична помощ за деца със специални образователни потребности",
  heroImage: speechTherapyHeader,
  parentService: {
    name: "Логопед",
    href: "/services/speech-therapy"
  },
  whatIs: {
    title: "Какво включва логопедичната работа при деца със СОП?",
    content: "Децата със специални образователни потребности (СОП) често се нуждаят от специализирана логопедична подкрепа. Това включва работа с деца с аутизъм, ADHD, интелектуални затруднения, сензорни нарушения и други състояния, които влияят на речевото и езиковото развитие. Логопедичната терапия се адаптира спрямо индивидуалните нужди и възможности на всяко дете."
  },
  howWeHelp: [
    {
      icon: Heart,
      title: "Индивидуален подход",
      description: "Програма, съобразена с конкретните нужди на детето"
    },
    {
      icon: MessageCircle,
      title: "Алтернативна комуникация",
      description: "Методи за подпомагане на комуникацията"
    },
    {
      icon: BookOpen,
      title: "Езиково развитие",
      description: "Стимулиране на речта и езиковите умения"
    },
    {
      icon: Users,
      title: "Екипна работа",
      description: "Сътрудничество с други специалисти и училище"
    },
    {
      icon: Sparkles,
      title: "Подкрепа за семейството",
      description: "Насоки и обучение за родителите"
    }
  ],
  benefits: [
    "Подобрена комуникация",
    "Развитие на речевите умения",
    "По-добра социална интеграция",
    "Подкрепа в образователния процес",
    "Повишено самочувствие на детето",
    "Подкрепа за цялото семейство"
  ]
};

const SpecialNeedsSpeech = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default SpecialNeedsSpeech;
