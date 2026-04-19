import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Shield, Sunrise, Users } from "lucide-react";
import lossHeader from "@/assets/loss-header.jpg";

const conditionData: ConditionData = {
  title: "Loss and Grief",
  subtitle: "Psychological counseling",
  description: "Compassionate support through the grieving process.",
  heroImage: lossHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is loss?",
    content: `Loss is part of life, but it can be one of the most painful experiences we face. Grief is the natural response to loss — it has no fixed timeline or "right" form.

Types of loss:
• Death of a loved one
• End of a relationship
• Loss of health
• Loss of a job
• Loss of home
• Loss of dreams or future

Stages of grief (often non-linear):
• Denial
• Anger
• Bargaining
• Depression
• Acceptance

The process is unique to each person and deserves time and support.`
  },
  howWeHelp: [
    { icon: Heart, title: "Emotional support", description: "Unconditional acceptance and empathy in difficult moments." },
    { icon: Shield, title: "A safe space", description: "A place to express all emotions without judgment." },
    { icon: Sunrise, title: "Finding meaning", description: "Support in integrating the loss and moving forward." },
    { icon: Users, title: "Rituals and memory", description: "Help creating meaningful ways to honor what was lost." }
  ],
  benefits: [
    "Healthy processing of grief",
    "Acceptance of the loss",
    "Honoring memory",
    "Finding new meaning",
    "Renewed capacity for joy",
    "Inner peace"
  ]
};

const Loss = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Loss;
