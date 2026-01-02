import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Target, Brain, Heart, Shield } from "lucide-react";
import perfectionismHeader from "@/assets/perfectionism-header.jpg";

const conditionData: ConditionData = {
  title: "Перфекционизъм",
  subtitle: "Психологично консултиране",
  description: "Научете се да постигате високи стандарти без самокритика и изтощение.",
  heroImage: perfectionismHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представлява перфекционизмът?",
    content: `Перфекционизмът е стремеж към безупречност, придружен от прекомерна самокритика. Въпреки че може да мотивира, той често води до проблеми.

Признаци на перфекционизъм:
• Невъзможност да се радвате на постиженията
• Прекомерна самокритика
• Страх от грешки
• Прокрастинация
• Чувство, че никога не е достатъчно
• Изтощение от прекомерни усилия
• Проблеми в отношенията заради високи очаквания

Здравословният стремеж към високи постижения е различен от разрушителния перфекционизъм.`
  },
  howWeHelp: [
    { icon: Target, title: "Реалистични стандарти", description: "Научаване да поставяте постижими и здравословни цели." },
    { icon: Brain, title: "Работа с вътрешния критик", description: "Смекчаване на самокритичния вътрешен глас." },
    { icon: Heart, title: "Самосъстрадание", description: "Развиване на по-мека и приемаща нагласа към себе си." },
    { icon: Shield, title: "Приемане на несъвършенството", description: "Научаване да живеете с грешки и ограничения." }
  ],
  benefits: [
    "По-малко стрес и тревожност",
    "По-висока продуктивност",
    "Способност да завършвате проекти",
    "По-добри взаимоотношения",
    "Баланс между амбиция и благополучие",
    "Радост от постиженията"
  ]
};

const Perfectionism = () => <ConditionPageTemplate data={conditionData} />;
export default Perfectionism;
