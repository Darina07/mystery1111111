import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Battery, Brain, Heart, Target } from "lucide-react";
import conditionsHeader from "@/assets/conditions-support.jpg";

const conditionData: ConditionData = {
  title: "Бърнаут",
  subtitle: "Психологично консултиране",
  description: "Помощ при преодоляване на бърнаут и възстановяване на енергията и мотивацията.",
  heroImage: conditionsHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява бърнаут?",
    content: `Бърнаут (професионално изгаряне) е състояние на хронично физическо и емоционално изтощение, причинено от продължителен стрес на работното място.

Симптоми на бърнаут:
• Постоянна умора и изтощение
• Цинизъм и негативизъм към работата
• Намалена ефективност и продуктивност
• Чувство на безсмислие
• Емоционално дистанциране
• Физически симптоми (главоболие, безсъние)
• Загуба на мотивация

Важно е да се адресира навреме, преди да доведе до сериозни здравословни последици.`
  },
  howWeHelp: [
    { icon: Battery, title: "Възстановяване на енергията", description: "Стратегии за физическо и емоционално възстановяване." },
    { icon: Brain, title: "Преоценка на приоритети", description: "Преразглеждане на работните навици и очаквания." },
    { icon: Heart, title: "Самогрижа", description: "Изграждане на устойчиви практики за грижа за себе си." },
    { icon: Target, title: "Граници на работното място", description: "Научаване да поставяте здравословни граници." }
  ],
  benefits: [
    "Възстановена енергия и мотивация",
    "Баланс между работа и личен живот",
    "Яснота относно кариерните цели",
    "Превенция на бъдещо изгаряне",
    "Подобрено качество на живот",
    "Удовлетворение от работата"
  ]
};

const Burnout = () => <ConditionPageTemplate data={conditionData} />;
export default Burnout;
