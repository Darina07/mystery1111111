import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { BatteryLow, Heart, Sun, Shield } from "lucide-react";
import emotionalExhaustionHeader from "@/assets/emotional-exhaustion-header.jpg";

const conditionData: ConditionData = {
  title: "Emotional Exhaustion",
  subtitle: "Psychological counseling",
  description: "Help for overcoming emotional depletion and restoring inner balance.",
  heroImage: emotionalExhaustionHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is emotional exhaustion?",
    content: `Emotional exhaustion is a state of deep fatigue in which you feel emotionally drained and unable to handle daily challenges.

Signs of emotional exhaustion:
• Feeling empty and indifferent
• Inability to feel joy
• Easy irritability
• Desire for isolation
• Lack of emotional resources for others
• Feeling overwhelmed by everything
• Physical fatigue

It can result from prolonged stress, caregiving, traumatic experiences, or lack of emotional support.`
  },
  howWeHelp: [
    { icon: BatteryLow, title: "Assessing the state", description: "Understanding the causes and contributing factors." },
    { icon: Heart, title: "Emotional support", description: "A space for expressing and processing feelings." },
    { icon: Sun, title: "Recovery practices", description: "Techniques for recharging emotional resources." },
    { icon: Shield, title: "Healthy boundaries", description: "Learning to protect your energy." }
  ],
  benefits: [
    "Restored emotional energy",
    "Better understanding of your own needs",
    "Skills to prevent future depletion",
    "A more balanced lifestyle",
    "Improved relationships",
    "Renewed capacity for joy"
  ]
};

const EmotionalExhaustion = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default EmotionalExhaustion;
