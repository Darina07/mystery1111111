import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Sun, Shield } from "lucide-react";
import depressionHeader from "@/assets/depression-header.jpg";

const conditionData: ConditionData = {
  title: "Depression",
  subtitle: "Psychological counseling",
  description: "Professional support for overcoming depression and restoring joy in life.",
  heroImage: depressionHeader,
  parentService: {
    name: "Psychological counseling",
    href: "/en/services/psychological-counseling"
  },
  whatIs: {
    title: "What is depression?",
    content: `Depression is more than ordinary sadness — it is a condition that affects thoughts, feelings, behavior, and physical health. It can include persistent feelings of hopelessness, loss of interest, changes in sleep and appetite, fatigue, and difficulty concentrating.

Symptoms of depression:
• Persistent sadness or emptiness
• Loss of interest in usual activities
• Changes in appetite and weight
• Sleep disturbances
• Fatigue and lack of energy
• Feelings of worthlessness or guilt
• Difficulty concentrating

Depression is a treatable condition, and with the right support full recovery is possible.`
  },
  howWeHelp: [
    { icon: Brain, title: "Cognitive therapy", description: "Working with the negative thought patterns and beliefs that maintain depression." },
    { icon: Heart, title: "Emotional support", description: "A safe space to express feelings without judgment." },
    { icon: Sun, title: "Behavioral activation", description: "Gradually restoring pleasant activities and social contact." },
    { icon: Shield, title: "Relapse prevention", description: "Strategies for sustaining progress and preventing relapse." }
  ],
  benefits: [
    "Relief from depressive symptoms",
    "Restored energy and motivation",
    "A more positive outlook on life",
    "Improved relationships",
    "Sustainable coping strategies",
    "Rediscovering joy in life"
  ]
};

const Depression = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Depression;
