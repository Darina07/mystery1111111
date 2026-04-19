import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Target, Brain, Heart, Shield } from "lucide-react";
import perfectionismHeader from "@/assets/perfectionism-header.jpg";

const conditionData: ConditionData = {
  title: "Perfectionism",
  subtitle: "Psychological counseling",
  description: "Free yourself from impossible standards and find peace with imperfection.",
  heroImage: perfectionismHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is perfectionism?",
    content: `Perfectionism is the relentless pursuit of flawlessness combined with harsh self-criticism. While striving for excellence can be healthy, perfectionism becomes a problem when it causes suffering.

Signs of unhealthy perfectionism:
• "All or nothing" thinking
• Procrastination from fear of imperfection
• Strong self-criticism
• Difficulty completing tasks
• Constant dissatisfaction
• Fear of failure
• Difficulty accepting compliments

Perfectionism is often linked to anxiety, depression, and burnout.`
  },
  howWeHelp: [
    { icon: Target, title: "Realistic standards", description: "Learning to set achievable, healthy goals." },
    { icon: Brain, title: "Working with the inner critic", description: "Softening the harsh inner voice." },
    { icon: Heart, title: "Self-compassion", description: "Developing a kinder, more accepting attitude toward yourself." },
    { icon: Shield, title: "Accepting imperfection", description: "Learning to live with mistakes and limitations." }
  ],
  benefits: [
    "Less self-criticism",
    "Greater satisfaction with achievements",
    "Reduced anxiety",
    "More productivity (without procrastination)",
    "Healthier relationships",
    "A more enjoyable life"
  ]
};

const Perfectionism = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Perfectionism;
