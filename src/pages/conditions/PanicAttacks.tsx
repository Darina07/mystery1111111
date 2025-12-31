import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Zap, Heart, Wind, Shield } from "lucide-react";
import conditionsHeader from "@/assets/conditions-support.jpg";

const conditionData: ConditionData = {
  title: "Паник атаки",
  subtitle: "Психологично консултиране",
  description: "Научете се да управлявате и преодолявате паническите атаки с доказани методи.",
  heroImage: conditionsHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представляват паник атаките?",
    content: `Паническата атака е внезапен епизод на интензивен страх, придружен от физически симптоми. Въпреки че са плашещи, паническите атаки не са опасни и могат да бъдат успешно лекувани.

Симптоми на паническа атака:
• Учестено сърцебиене
• Задъхване или хиперветилация
• Треперене и изпотяване
• Стягане в гърдите
• Световъртеж или замайване
• Усещане за загуба на контрол
• Страх от умиране
• Изтръпване на крайниците

Паниката е лечима – с правилния подход можете да се освободите от страха.`
  },
  howWeHelp: [
    { icon: Zap, title: "Разбиране на симптомите", description: "Научаване какво се случва в тялото по време на атака и защо не е опасно." },
    { icon: Wind, title: "Дихателни техники", description: "Овладяване на дишането за бързо успокояване по време на атака." },
    { icon: Heart, title: "Когнитивна преработка", description: "Промяна на катастрофичните мисли, които подхранват паниката." },
    { icon: Shield, title: "Превенция", description: "Стратегии за намаляване честотата и интензивността на атаките." }
  ],
  benefits: [
    "Контрол върху паническите симптоми",
    "Намаляване честотата на атаките",
    "Освобождаване от страха от паника",
    "Увереност в публични ситуации",
    "По-спокоен ежедневен живот",
    "Способност да се справяте сами"
  ]
};

const PanicAttacks = () => <ConditionPageTemplate data={conditionData} />;
export default PanicAttacks;
