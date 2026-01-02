import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import socialRejectionStressHeader from "@/assets/social-rejection-stress-header.jpg";

const conditionData: ConditionData = {
  title: "Стрес от социално отхвърляне",
  subtitle: "Психологично консултиране за ЛГБТ+",
  description: "Професионална подкрепа за справяне със стреса от дискриминация и социално отхвърляне.",
  heroImage: socialRejectionStressHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво е стрес от малцинствен статус?",
    content: `Стресът от малцинствен статус (minority stress) описва хроничния стрес, който ЛГБТ+ хората изпитват поради принадлежността си към стигматизирана група. Този стрес е уникален, социално базиран и добавен към обичайните житейски стресори.

Изследванията показват, че този тип стрес значително влияе върху психичното и физическото здраве. Важно е да се разпознае и адресира, за да се подобри качеството на живот.

Източници на стрес:
• Пряка дискриминация и тормоз
• Страх от отхвърляне и скриване на идентичността
• Вътрешна хомофобия/трансфобия
• Микроагресии в ежедневието
• Липса на социална подкрепа и изолация
• Семейно отхвърляне`,
  },
  howWeHelp: [
    {
      icon: Brain,
      title: "Разпознаване на стреса",
      description: "Помагаме да разберете как малцинственият стрес влияе на вашето здраве и благополучие."
    },
    {
      icon: Heart,
      title: "Емоционална обработка",
      description: "Работим върху преработване на травматични преживявания и болезнени събития."
    },
    {
      icon: Shield,
      title: "Изграждане на копинг стратегии",
      description: "Развиваме ефективни начини за справяне с дискриминация и микроагресии."
    },
    {
      icon: Users,
      title: "Укрепване на връзките",
      description: "Подкрепяме изграждането на здравословни отношения и общност."
    },
  ],
  benefits: [
    "Намаляване на стреса и тревожността",
    "По-добри копинг механизми",
    "Повишена устойчивост",
    "По-здравословни отношения",
    "Подобрено психично здраве",
    "По-силно чувство за общност",
  ],
};

const SocialRejectionStress = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default SocialRejectionStress;
