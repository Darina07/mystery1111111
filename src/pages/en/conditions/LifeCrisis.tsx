import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Compass, Heart, Target, Shield } from "lucide-react";
import lifeCrisisHeader from "@/assets/life-crisis-header.jpg";

const conditionData: ConditionData = {
  title: "Life Crises",
  subtitle: "Psychological counseling",
  description: "Support during turning points and difficult life transitions.",
  heroImage: lifeCrisisHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What are life crises?",
    content: `A life crisis is a period when familiar foundations are shaken and we are forced to reassess our values, goals, and direction.

Common life crises:
• Quarter-life crisis
• Midlife crisis
• Crisis of meaning
• Crisis after major loss
• Identity crisis
• Spiritual crisis

Although painful, crises are also opportunities for deep transformation and growth.`
  },
  howWeHelp: [
    { icon: Compass, title: "Finding direction", description: "Support in re-evaluating priorities and discovering new meaning." },
    { icon: Heart, title: "Emotional support", description: "A safe space for processing difficult emotions." },
    { icon: Target, title: "Practical strategies", description: "Concrete steps for navigating challenges." },
    { icon: Shield, title: "Building resilience", description: "Developing inner resources for future difficulties." }
  ],
  benefits: [
    "Clarity about your values and goals",
    "Deeper self-understanding",
    "New direction in life",
    "Greater inner resilience",
    "Authentic, meaningful living",
    "Personal transformation"
  ]
};

const LifeCrisis = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default LifeCrisis;
