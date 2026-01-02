import ConditionPageTemplate, { ConditionData } from "@/components/ConditionPageTemplate";
import { Mic, MessageCircle, BookOpen, Users, Heart } from "lucide-react";
import articulationHeader from "@/assets/articulation-header.jpg";

const conditionData: ConditionData = {
  title: "Артикулационни затруднения",
  subtitle: "Логопедична подкрепа",
  description: "Професионална помощ за деца с трудности в произношението на звукове",
  heroImage: articulationHeader,
  parentService: {
    name: "Логопед",
    href: "/services/speech-therapy"
  },
  whatIs: {
    title: "Какво са артикулационните затруднения?",
    content: "Артикулационните затруднения представляват трудности в правилното произнасяне на определени звукове. Детето може да заменя, пропуска или изкривява звукове, което прави речта му трудно разбираема. Тези затруднения са често срещани в детска възраст и при навременна логопедична работа се преодоляват успешно."
  },
  howWeHelp: [
    {
      icon: Mic,
      title: "Артикулационна терапия",
      description: "Специализирани упражнения за правилно произношение"
    },
    {
      icon: MessageCircle,
      title: "Фонетична корекция",
      description: "Работа върху конкретни проблемни звукове"
    },
    {
      icon: BookOpen,
      title: "Орална моторика",
      description: "Упражнения за укрепване на говорния апарат"
    },
    {
      icon: Users,
      title: "Домашни упражнения",
      description: "Насоки за практикуване у дома"
    },
    {
      icon: Heart,
      title: "Игрови подход",
      description: "Учене чрез забавни дейности и игри"
    }
  ],
  benefits: [
    "Ясно и разбираемо произношение",
    "Правилна артикулация на всички звукове",
    "По-добра комуникация с околните",
    "Повишена увереност при говорене",
    "Подготовка за четене и писане",
    "По-лесна социална адаптация"
  ]
};

const Articulation = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default Articulation;
