import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childRunningAwayHeader from "@/assets/child-running-away-header.jpg";

const conditionData: ConditionData = {
  title: "Running Away from School or Home",
  subtitle: "Child counseling",
  description: "Support for running away from school or home, or refusing to attend.",
  heroImage: childRunningAwayHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What does running away from school or home mean?",
    content: `Running away from school or home is a serious signal that a child is experiencing significant distress. This behavior is rarely just "bad parenting" — deeper causes usually lie behind it.

Running away can be a response to bullying, family problems, academic difficulties, social anxiety, or a desire for attention and autonomy.

Important warning signs:
• Frequent absences from school
• Leaving home without permission
• Threats to run away
• Hiding or avoiding certain places
• Strong resistance to going to school
• Faking illness to stay home`
  },
  howWeHelp: [
    { icon: Brain, title: "Understanding causes", description: "Exploring the factors leading to running away." },
    { icon: Heart, title: "Emotional support", description: "Creating a safe space for sharing." },
    { icon: Shield, title: "Coping strategies", description: "Developing alternative ways to express needs." },
    { icon: Users, title: "Family work", description: "Improving communication and resolving conflict." }
  ],
  benefits: [
    "Understanding the reasons for the behavior",
    "Improved family communication",
    "Regular school attendance",
    "Stronger parent–child bond",
    "Reduced anxiety",
    "Healthier coping strategies"
  ]
};

const RunningAway = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default RunningAway;
