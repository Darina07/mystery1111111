import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { MessageCircle, Users, Heart, Target } from "lucide-react";
import communicationHeader from "@/assets/communication-difficulties-header.jpg";

const conditionData: ConditionData = {
  title: "Трудности в общуването",
  subtitle: "Психологично консултиране",
  description: "Професионална помощ за преодоляване на трудности в комуникацията и изграждане на пълноценни взаимоотношения.",
  heroImage: communicationHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представляват трудностите в общуването?",
    content: `Трудностите в общуването могат да се проявят по различни начини и да засегнат всички области на живота.

Признаци на комуникационни затруднения:
• Страх от започване на разговор
• Трудност при поддържане на контакт
• Затруднено изразяване на мнение
• Страх от конфликти
• Неспособност да казвате "не"
• Недоразумения в отношенията
• Избягване на социални ситуации
• Чувство за неразбиране

Те могат да засегнат личните отношения, професионалния живот и цялостното благополучие.`
  },
  howWeHelp: [
    { icon: MessageCircle, title: "Комуникационни умения", description: "Развиване на ефективни техники за водене на разговор и изразяване на мисли." },
    { icon: Users, title: "Социални умения", description: "Изграждане на увереност в социални ситуации и групови взаимодействия." },
    { icon: Heart, title: "Емоционална интелигентност", description: "Разпознаване и управление на емоциите в общуването." },
    { icon: Target, title: "Асертивност", description: "Научаване да изразявате нуждите си уважително и ефективно." }
  ],
  benefits: [
    "По-лесно създаване на нови контакти",
    "Подобрени лични и професионални отношения",
    "Увереност в социални ситуации",
    "Ефективно разрешаване на конфликти",
    "По-дълбоки и смислени връзки",
    "Свобода да бъдете себе си"
  ]
};

const CommunicationDifficulties = () => <ConditionPageTemplate data={conditionData} />;
export default CommunicationDifficulties;
