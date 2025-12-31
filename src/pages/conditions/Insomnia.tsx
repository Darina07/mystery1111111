import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Moon, Brain, Clock, Shield } from "lucide-react";
import conditionsHeader from "@/assets/conditions-support.jpg";

const conditionData: ConditionData = {
  title: "Безсъние",
  subtitle: "Психологично консултиране",
  description: "Ефективни методи за преодоляване на безсънието и подобряване качеството на съня.",
  heroImage: conditionsHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява безсънието?",
    content: `Безсънието включва трудности при заспиване, чести събуждания през нощта или ранно събуждане с невъзможност за повторно заспиване.

Видове безсъние:
• Трудности при заспиване
• Чести събуждания през нощта
• Ранно събуждане сутрин
• Неосвежаващ сън

Последици от хроничното безсъние:
• Умора и липса на енергия
• Затруднена концентрация
• Раздразнителност
• Влошено здраве

Когнитивно-поведенческата терапия за безсъние (КПТ-Б) е доказано ефективен метод за лечение.`
  },
  howWeHelp: [
    { icon: Moon, title: "Хигиена на съня", description: "Изграждане на здравословни навици и рутина за сън." },
    { icon: Brain, title: "Когнитивна терапия", description: "Работа с тревожните мисли, които пречат на съня." },
    { icon: Clock, title: "Регулиране на режима", description: "Стабилизиране на цикъла сън-бодърстване." },
    { icon: Shield, title: "Релаксационни техники", description: "Методи за успокояване на ума и тялото преди сън." }
  ],
  benefits: [
    "По-бързо заспиване",
    "По-качествен и дълбок сън",
    "Събуждане освежени",
    "Подобрена дневна енергия",
    "Дългосрочно решение без медикаменти",
    "По-добро настроение и концентрация"
  ]
};

const Insomnia = () => <ConditionPageTemplate data={conditionData} />;
export default Insomnia;
