import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Activity, Brain, Heart, Shield } from "lucide-react";
import bipolarHeader from "@/assets/bipolar-header.jpg";

const conditionData: ConditionData = {
  title: "Биполярно афективно разстройство",
  subtitle: "Психологично консултиране",
  description: "Помощ за стабилизиране на настроението и управление на симптомите.",
  heroImage: bipolarHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява биполярното разстройство?",
    content: `Биполярното афективно разстройство се характеризира с екстремни промени в настроението – от маниакални до депресивни епизоди.

Симптоми при мания:
• Повишена енергия и еуфория
• Намалена нужда от сън
• Бързо говорене и мисли
• Импулсивно поведение

Симптоми при депресия:
• Тъга и безнадеждност
• Загуба на интерес
• Умора и липса на енергия
• Мисли за смърт

С правилно лечение и психологична подкрепа е възможно да се постигне стабилност и пълноценен живот.`
  },
  howWeHelp: [
    { icon: Activity, title: "Мониторинг на настроението", description: "Научаване да разпознавате ранните признаци на епизоди." },
    { icon: Brain, title: "Психоедукация", description: "Разбиране на разстройството и неговото управление." },
    { icon: Heart, title: "Управление на стреса", description: "Техники за намаляване на тригерите на епизоди." },
    { icon: Shield, title: "Подкрепа за близките", description: "Помощ за семейството в справянето с предизвикателствата." }
  ],
  benefits: [
    "Стабилизиране на настроението",
    "Ранно разпознаване на симптомите",
    "Подобрени взаимоотношения",
    "По-предвидим ежедневен живот",
    "Намален риск от епизоди",
    "По-добро качество на живот"
  ]
};

const Bipolar = () => <ConditionPageTemplate data={conditionData} />;
export default Bipolar;
