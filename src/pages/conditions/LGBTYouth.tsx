import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Users, Shield, Sparkles } from "lucide-react";
import lgbtCounseling from "@/assets/lgbt-counseling.jpg";

const conditionData: ConditionData = {
  title: "Психологична подкрепа за ЛГБТ+ деца и юноши",
  subtitle: "Детско консултиране",
  description: "Специализирана психологическа подкрепа за ЛГБТ+ деца и юноши.",
  heroImage: lgbtCounseling,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Подкрепа за ЛГБТ+ деца и юноши",
    content: `ЛГБТ+ децата и юношите често се сблъскват с уникални предизвикателства в процеса на израстване. Ние предоставяме безопасно и приемащо пространство за изследване на идентичността и справяне с трудностите.

Области на подкрепа:
• Изследване на сексуална ориентация и полова идентичност
• Справяне с вътрешни конфликти
• Подкрепа при тормоз или дискриминация
• Комуникация със семейството
• Изграждане на позитивна идентичност
• Подкрепа при coming out`,
  },
  howWeHelp: [
    {
      icon: Heart,
      title: "Приемащо пространство",
      description: "Създаваме безопасна среда за споделяне и себеизследване."
    },
    {
      icon: Shield,
      title: "Справяне с трудности",
      description: "Подкрепяме при тормоз, дискриминация и социален стрес."
    },
    {
      icon: Users,
      title: "Семейна медиация",
      description: "Помагаме за подобряване на комуникацията в семейството."
    },
    {
      icon: Sparkles,
      title: "Позитивна идентичност",
      description: "Подкрепяме изграждането на здрава и автентична идентичност."
    },
  ],
  benefits: [
    "Приемане на идентичността",
    "Намалена тревожност и депресия",
    "По-добри семейни отношения",
    "Стратегии за справяне с дискриминация",
    "Изграждане на подкрепяща общност",
    "Повишена самооценка и самоприемане",
  ],
};

const LGBTYouth = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default LGBTYouth;
