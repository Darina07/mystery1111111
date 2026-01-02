import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childPeerCommunicationHeader from "@/assets/child-peer-communication-header.jpg";

const conditionData: ConditionData = {
  title: "Проблеми в общуването с връстници",
  subtitle: "Детско консултиране",
  description: "Подкрепа за деца с трудности в социалните взаимоотношения.",
  heroImage: childPeerCommunicationHeader,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Какво представляват проблемите в общуването с връстници?",
    content: `Социалните умения са ключови за здравословното развитие на детето. Когато детето изпитва трудности в общуването с връстници, това може да повлияе на самочувствието, академичния успех и емоционалното благополучие.

Проблемите могат да се изразяват в липса на приятели, конфликти с връстници, жертва на тормоз или трудности в разбирането на социалните сигнали.

Признаци за проблеми в общуването:
• Липса на близки приятелства
• Често оставане само по време на междучасия
• Избягване на социални ситуации
• Трудности в започването или поддържането на разговори
• Неразбиране на шеги или сарказъм
• Конфликти заради неуместно поведение`,
  },
  howWeHelp: [
    {
      icon: Brain,
      title: "Социални умения",
      description: "Обучение в комуникация, емпатия и разбиране на социални ситуации."
    },
    {
      icon: Heart,
      title: "Изграждане на увереност",
      description: "Работа върху самочувствието и уменията за себеизразяване."
    },
    {
      icon: Shield,
      title: "Справяне с тормоз",
      description: "Стратегии за реагиране при неприятни ситуации."
    },
    {
      icon: Users,
      title: "Ролеви игри",
      description: "Практикуване на социални сценарии в безопасна среда."
    },
  ],
  benefits: [
    "Подобрени социални умения",
    "По-лесно създаване на приятелства",
    "Повишена увереност в социални ситуации",
    "По-добро разбиране на другите",
    "Намалено чувство за самота",
    "По-успешна интеграция в училище",
  ],
};

const PeerCommunication = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default PeerCommunication;
