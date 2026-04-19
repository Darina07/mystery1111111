import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Moon, Users } from "lucide-react";
import childSleepHeader from "@/assets/child-sleep-header.jpg";

const conditionData: ConditionData = {
  title: "Sleep Problems in Children",
  subtitle: "Child counseling",
  description: "Specialized support for children with sleep disorders.",
  heroImage: childSleepHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What are sleep problems in children?",
    content: `Sleep problems in children are common and can affect development, behavior, mood, and learning ability. They may include difficulty falling asleep, night waking, nightmares, night terrors, or other disturbances.

Good sleep is essential for child health and development. Addressing sleep issues in time is important.

Types of sleep problems:
• Difficulty falling asleep
• Frequent night waking
• Nightmares and night terrors
• Sleepwalking
• Bedwetting
• Fear of sleeping alone
• Irregular sleep schedule`
  },
  howWeHelp: [
    { icon: Brain, title: "Sleep assessment", description: "Analyzing sleep habits and identifying issues." },
    { icon: Moon, title: "Sleep hygiene", description: "Building healthy bedtime routines and habits." },
    { icon: Heart, title: "Coping with anxiety", description: "Techniques for reducing fears and worries about sleep." },
    { icon: Users, title: "Parent counseling", description: "Guidance for creating a supportive sleep environment at home." }
  ],
  benefits: [
    "Easier falling asleep",
    "Better quality sleep at night",
    "Reduced nightmares",
    "Better daytime mood",
    "Improved focus",
    "Calmer evenings for the family"
  ]
};

const ChildSleepProblems = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default ChildSleepProblems;
