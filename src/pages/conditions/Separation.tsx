import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Shield, Compass, Sunrise } from "lucide-react";
import conditionsHeader from "@/assets/conditions-support.jpg";

const conditionData: ConditionData = {
  title: "Раздяла",
  subtitle: "Психологично консултиране",
  description: "Професионална помощ при преживяване на раздяла и възстановяване на емоционалното благополучие.",
  heroImage: conditionsHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява раздялата?",
    content: `Раздялата, независимо дали е развод или край на дългогодишна връзка, е един от най-стресиращите житейски преживявания.

Какво засяга раздялата:
• Емоционалното състояние
• Идентичността и самооценката
• Социалния кръг
• Финансите и бита
• Отношенията с децата (ако има такива)
• Ежедневието и рутината

Чести емоции при раздяла:
• Тъга и скръб
• Гняв и обида
• Облекчение
• Страх от бъдещето
• Самота
• Съмнения в себе си

Възстановяването изисква време, грижа за себе си и често – професионална подкрепа.`
  },
  howWeHelp: [
    { icon: Heart, title: "Емоционална подкрепа", description: "Преработване на болката, гнева, тъгата и другите сложни емоции." },
    { icon: Shield, title: "Възстановяване на идентичността", description: "Преоткриване на себе си извън контекста на връзката." },
    { icon: Compass, title: "Практически стратегии", description: "Справяне с ежедневните предизвикателства след раздялата." },
    { icon: Sunrise, title: "Поглед напред", description: "Подготовка за нови отношения и възможности." }
  ],
  benefits: [
    "Преработване на болката по здравословен начин",
    "Възстановяване на самочувствието",
    "Яснота относно научените уроци",
    "Готовност за нови начала",
    "Изграждане на по-здрави бъдещи отношения",
    "Нова перспектива за живота"
  ]
};

const Separation = () => <ConditionPageTemplate data={conditionData} />;
export default Separation;
