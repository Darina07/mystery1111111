import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Compass, Shield, Target, Sunrise } from "lucide-react";
import adaptationHeader from "@/assets/adaptation-header.jpg";

const conditionData: ConditionData = {
  title: "Adapting to Change",
  subtitle: "Psychological counseling",
  description: "Professional help adapting to new circumstances and finding balance during periods of change.",
  heroImage: adaptationHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is adapting to change?",
    content: `Life changes require a period of adaptation. Even positive changes can trigger stress and uncertainty.

Types of major changes:
• Moving to a new city or country
• A new job or career change
• Retirement
• Birth of a child
• Health changes
• Change in family status
• Financial changes

Adaptation challenges:
• Loss of the familiar
• Uncertainty about the future
• Need for new skills
• Building new routines
• Overcoming fears

Adaptation is a process that takes flexibility, patience, and support.`
  },
  howWeHelp: [
    { icon: Compass, title: "Orientation in change", description: "Help understanding the new situation and its challenges." },
    { icon: Shield, title: "Emotional resilience", description: "Building the ability to cope with uncertainty." },
    { icon: Target, title: "Practical strategies", description: "Concrete steps for successful adaptation." },
    { icon: Sunrise, title: "Discovering opportunities", description: "Finding the positive aspects in your new situation." }
  ],
  benefits: [
    "Faster and easier adaptation",
    "Reduced stress during change",
    "Confidence in unfamiliar situations",
    "Flexibility and openness to the new",
    "Skill in turning challenges into opportunities",
    "Greater resilience to change"
  ]
};

const Adaptation = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Adaptation;
