import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Moon, Users } from "lucide-react";
import childSleepHeader from "@/assets/child-sleep-header.jpg";

const conditionData: ConditionData = {
  title: "Проблеми със съня при деца",
  subtitle: "Детско консултиране",
  description: "Специализирана подкрепа за деца с нарушения на съня.",
  heroImage: childSleepHeader,
  parentService: {
    name: "Детско и юношеско консултиране",
    href: "/services/child-counseling"
  },
  whatIs: {
    title: "Какво са проблемите със съня при деца?",
    content: `Проблемите със съня при деца са често срещани и могат да повлияят на развитието, поведението, настроението и способността за учене. Те могат да включват затруднения при заспиване, нощни събуждания, кошмари, нощни ужаси или други нарушения.

Добрият сън е от съществено значение за детското здраве и развитие. Навременното адресиране на проблемите със съня е важно.

Видове проблеми със съня:
• Затруднения при заспиване
• Чести нощни събуждания
• Кошмари и нощни ужаси
• Сомнамбулизъм (ходене насън)
• Енурезис (нощно напикаване)
• Страх от спане сам
• Неправилен режим на сън`,
  },
  howWeHelp: [
    {
      icon: Brain,
      title: "Оценка на съня",
      description: "Анализ на навиците за сън и идентифициране на проблемите."
    },
    {
      icon: Moon,
      title: "Хигиена на съня",
      description: "Изграждане на здравословни рутини и навици преди лягане."
    },
    {
      icon: Heart,
      title: "Справяне с тревожността",
      description: "Техники за намаляване на страховете и тревогите, свързани със съня."
    },
    {
      icon: Users,
      title: "Родителско консултиране",
      description: "Насоки за създаване на подкрепяща среда за сън у дома."
    },
  ],
  benefits: [
    "По-лесно заспиване",
    "По-качествен сън през нощта",
    "Намаляване на кошмарите",
    "По-добро настроение през деня",
    "Подобрена концентрация",
    "По-спокойни вечери за семейството",
  ],
};

const ChildSleepProblems = () => {
  return <ConditionPageTemplate data={conditionData} />;
};

export default ChildSleepProblems;
