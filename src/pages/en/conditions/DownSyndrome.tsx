import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Users, Sparkles } from "lucide-react";
import downSyndromeHeader from "@/assets/down-syndrome-header.jpg";

const conditionData: ConditionData = {
  title: "Down Syndrome",
  subtitle: "Child counseling",
  description: "Specialized support for children with Down syndrome and their families.",
  heroImage: downSyndromeHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What is Down syndrome?",
    content: `Down syndrome is a genetic condition that affects cognitive development and physical characteristics. With proper support and stimulation, children with Down syndrome can develop their potential and lead fulfilling lives.

Areas of support:
• Cognitive and language development
• Social and emotional skills
• Independence in daily life
• School inclusion
• Family support
• Building self-esteem`
  },
  howWeHelp: [
    { icon: Brain, title: "Cognitive development", description: "Targeted activities to support thinking and learning." },
    { icon: Sparkles, title: "Skills development", description: "Building practical skills for everyday life." },
    { icon: Heart, title: "Emotional support", description: "A caring space for emotional growth." },
    { icon: Users, title: "Family counseling", description: "Guidance and support for the whole family." }
  ],
  benefits: [
    "Stronger cognitive development",
    "Better social skills",
    "Greater independence",
    "Successful school integration",
    "Higher self-esteem",
    "Stronger family bonds"
  ]
};

const DownSyndrome = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default DownSyndrome;
