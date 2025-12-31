import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childCounselingHeader from "@/assets/child-counseling-header.jpg";

const conditionData: ConditionData = {
  title: "Занижена самооценка",
  subtitle: "Детско консултиране",
  description: "Подкрепа за деца с ниска самооценка и липса на увереност.",
  heroImage: childCounselingHeader,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Какво представлява занижената самооценка?",
    content: `Самооценката е начинът, по който детето възприема себе си - своите способности, ценност и място в света. Ниската самооценка може да повлияе на всички аспекти от живота на детето.

Децата с ниска самооценка често се чувстват недостатъчно добри, сравняват се неблагоприятно с другите и избягват нови предизвикателства от страх от провал.

Признаци за занижена самооценка:
• Честа употреба на негативни изрази за себе си
• Избягване на нови дейности ("Аз не мога")
• Свръхчувствителност към критика
• Перфекционизъм или пълен отказ от опит
• Трудности в приемането на комплименти
• Постоянно търсене на одобрение от другите`,
  },
  howWeHelp: [
    {
      icon: Brain,
      title: "Промяна на мисленето",
      description: "Работа с негативните убеждения за себе си."
    },
    {
      icon: Heart,
      title: "Откриване на силни страни",
      description: "Помагаме на детето да разпознае своите уникални качества."
    },
    {
      icon: Shield,
      title: "Изграждане на устойчивост",
      description: "Развиване на умения за справяне с неуспехи."
    },
    {
      icon: Users,
      title: "Работа с родители",
      description: "Насоки за подкрепящо поведение у дома."
    },
  ],
  benefits: [
    "По-позитивна представа за себе си",
    "Готовност за нови предизвикателства",
    "По-здравословни взаимоотношения",
    "Намалена тревожност",
    "По-голяма независимост",
    "Подобрен академичен успех",
  ],
};

const LowSelfEsteem = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default LowSelfEsteem;
