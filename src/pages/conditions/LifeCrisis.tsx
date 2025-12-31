import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Compass, Heart, Target, Shield } from "lucide-react";
import conditionsHeader from "@/assets/conditions-support.jpg";

const conditionData: ConditionData = {
  title: "Житейски кризи",
  subtitle: "Психологично консултиране",
  description: "Професионална помощ при преодоляване на житейски кризи и намиране на нов смисъл и посока.",
  heroImage: conditionsHeader,
  parentService: {
    name: "Психологично консултиране",
    href: "/services/psychological-counseling"
  },
  whatIs: {
    title: "Какво представляват житейските кризи?",
    content: `Житейските кризи са периоди на значителна промяна или предизвикателство, които нарушават обичайния ни начин на функциониране.

Видове житейски кризи:
• Кариерна криза – загуба на работа, професионално неудовлетворение
• Криза на средната възраст
• Здравна криза – сериозно заболяване
• Криза в отношенията – развод, раздяла
• Криза на идентичността
• Финансова криза
• Екзистенциална криза – търсене на смисъл

Въпреки че са болезнени, кризите носят и възможност за растеж и трансформация.`
  },
  howWeHelp: [
    { icon: Compass, title: "Намиране на посока", description: "Подкрепа при преоценка на приоритети и откриване на нов смисъл." },
    { icon: Heart, title: "Емоционална подкрепа", description: "Безопасно пространство за преработване на трудни емоции." },
    { icon: Target, title: "Практически стратегии", description: "Конкретни стъпки за справяне с предизвикателствата." },
    { icon: Shield, title: "Изграждане на устойчивост", description: "Развиване на вътрешни ресурси за бъдещи трудности." }
  ],
  benefits: [
    "Яснота относно следващите стъпки",
    "Приемане на промяната",
    "Откриване на нови възможности",
    "По-силно усещане за смисъл",
    "Увереност в собствените способности",
    "Трансформация на кризата във възможност"
  ]
};

const LifeCrisis = () => <ConditionPageTemplate data={conditionData} />;
export default LifeCrisis;
