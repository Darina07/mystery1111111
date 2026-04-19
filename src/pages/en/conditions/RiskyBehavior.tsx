import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childRiskyBehaviorHeader from "@/assets/child-risky-behavior-header.jpg";

const conditionData: ConditionData = {
  title: "Lying, Stealing and Risky Behavior",
  subtitle: "Child counseling",
  description: "Support for behavioral problems and risky behavior in children.",
  heroImage: childRiskyBehaviorHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What is risky behavior?",
    content: `Lying, stealing, and other forms of risky behavior in children are often symptoms of deeper emotional or social difficulties. It is important to understand what lies behind these behaviors.

Risky behavior may be a way to get attention, express rebellion, cope with anxiety, or result from negative peer influence.

Signs of risky behavior:
• Frequent lying, even without an obvious reason
• Stealing from home, school, or shops
• Damaging others' property
• Use of alcohol or cigarettes
• Associating with risky groups
• Aggressive or violent behavior`
  },
  howWeHelp: [
    { icon: Brain, title: "Understanding motivation", description: "Exploring the reasons behind risky behavior." },
    { icon: Heart, title: "Emotional work", description: "Working with the emotions behind the behavior." },
    { icon: Shield, title: "Building values", description: "Developing moral reasoning and empathy." },
    { icon: Users, title: "Family support", description: "Guidance for parents on coping and prevention." }
  ],
  benefits: [
    "Understanding the reasons for the behavior",
    "Reduction of problematic behavior",
    "Better relationship with parents",
    "Developing responsibility",
    "Improved social skills",
    "Healthier choices"
  ]
};

const RiskyBehavior = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default RiskyBehavior;
