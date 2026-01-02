import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Shield, Brain, Heart, Eye } from "lucide-react";
import ptsdHeader from "@/assets/ptsd-header.jpg";

const conditionData: ConditionData = {
  title: "ПТСР",
  subtitle: "Психологично консултиране",
  description: "Специализирана помощ за възстановяване след травматични преживявания.",
  heroImage: ptsdHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява ПТСР?",
    content: `Посттравматичното стресово разстройство може да се развие след преживяване на травматично събитие – насилие, катастрофа, загуба или друго застрашаващо събитие.

Симптоми на ПТСР:
• Натрапчиви спомени и флашбекове
• Кошмари, свързани със събитието
• Избягване на напомнящи места и хора
• Свръхбдителност и лесно изплашване
• Емоционално вцепенение
• Негативни мисли за себе си и света
• Затруднена концентрация и сън

С правилната терапия възстановяването е възможно.`
  },
  howWeHelp: [
    { icon: Shield, title: "Създаване на безопасност", description: "Изграждане на усещане за сигурност и стабилност." },
    { icon: Brain, title: "Преработка на травмата", description: "Специализирани техники за обработка на травматичните спомени." },
    { icon: Eye, title: "EMDR терапия", description: "Десенсибилизация и преработка чрез движение на очите." },
    { icon: Heart, title: "Емоционална регулация", description: "Управление на интензивните емоционални реакции." }
  ],
  benefits: [
    "Намаляване на натрапчивите спомени",
    "По-добър сън без кошмари",
    "Възстановяване на чувството за безопасност",
    "Способност да живеете в настоящето",
    "Изграждане на нова перспектива",
    "Възвръщане на контрола над живота"
  ]
};

const PTSD = () => <ConditionPageTemplate data={conditionData} />;
export default PTSD;
