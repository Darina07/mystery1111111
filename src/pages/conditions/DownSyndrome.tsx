import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Users, Sparkles } from "lucide-react";
import childCounselingHeader from "@/assets/child-counseling-header.jpg";

const conditionData: ConditionData = {
  title: "Синдром на Даун",
  subtitle: "Детско консултиране",
  description: "Специализирана подкрепа за деца със синдром на Даун и техните семейства.",
  heroImage: childCounselingHeader,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Какво е синдром на Даун?",
    content: `Синдромът на Даун е генетично състояние, причинено от наличието на допълнителна копие на хромозома 21. Той влияе на физическото и когнитивното развитие, но всяко дете с Даун е уникално със свои силни страни и личност.

С правилната подкрепа и ранна интервенция децата със синдром на Даун могат да постигнат значителен напредък и да водят пълноценен живот.

Области на подкрепа:
• Развитие на комуникационни умения
• Когнитивно стимулиране
• Социални и игрови умения
• Емоционално развитие
• Самостоятелност в ежедневието
• Подготовка за училище`,
  },
  howWeHelp: [
    {
      icon: Brain,
      title: "Когнитивно развитие",
      description: "Стимулиране на ученето чрез игра и адаптирани методи."
    },
    {
      icon: Sparkles,
      title: "Развитие на умения",
      description: "Работа върху комуникация, моторика и самостоятелност."
    },
    {
      icon: Heart,
      title: "Емоционална подкрепа",
      description: "Изграждане на самочувствие и емоционална интелигентност."
    },
    {
      icon: Users,
      title: "Семейно консултиране",
      description: "Подкрепа и обучение на родителите за оптимално развитие на детето."
    },
  ],
  benefits: [
    "Подобрено когнитивно развитие",
    "Развитие на комуникационни умения",
    "По-голяма самостоятелност",
    "Повишено самочувствие",
    "Подкрепа за цялото семейство",
    "Стратегии за включване в обществото",
  ],
};

const DownSyndrome = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default DownSyndrome;
