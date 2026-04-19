import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Zap, Brain, Heart, Sun } from "lucide-react";
import fatigueHeader from "@/assets/fatigue-header.jpg";

const conditionData: ConditionData = {
  title: "Fatigue",
  subtitle: "Psychological counseling",
  description: "Help overcoming chronic fatigue and restoring energy and vitality.",
  heroImage: fatigueHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is chronic fatigue?",
    content: `Chronic fatigue is a state of persistent physical and mental exhaustion that doesn't improve with rest. It can have psychological, physical, and lifestyle causes.

Signs of chronic fatigue:
• Constant tiredness even after sleep
• Lack of motivation
• Difficulty concentrating
• Irritability
• Loss of interest in activities
• Feeling overwhelmed
• Physical heaviness

Identifying and addressing the underlying causes is the path to renewed energy.`
  },
  howWeHelp: [
    { icon: Zap, title: "Assessing causes", description: "Investigating the factors contributing to your fatigue." },
    { icon: Brain, title: "Cognitive shifts", description: "Working with thoughts and attitudes that drain you." },
    { icon: Heart, title: "Emotional balance", description: "Addressing the emotional sources of fatigue." },
    { icon: Sun, title: "Lifestyle changes", description: "Practical steps to restore your energy." }
  ],
  benefits: [
    "Restored energy",
    "Better focus and motivation",
    "Improved sleep quality",
    "Greater enjoyment of life",
    "Sustainable lifestyle balance",
    "Long-term resilience"
  ]
};

const Fatigue = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Fatigue;
