import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Shield, Sunrise, Compass } from "lucide-react";
import separationHeader from "@/assets/separation-header.jpg";

const conditionData: ConditionData = {
  title: "Separation",
  subtitle: "Psychological counseling",
  description: "Support through breakups, divorce, and the end of important relationships.",
  heroImage: separationHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "Coping with separation",
    content: `Separation is one of life's most painful experiences. Whether it's the end of a romantic relationship, divorce, or the loss of a close friendship, the process of letting go takes time and support.

Phases of separation:
• Shock and denial
• Anger and resentment
• Sadness and grief
• Acceptance
• Rebuilding

It's normal to move back and forth between phases. Healing is not linear.`
  },
  howWeHelp: [
    { icon: Heart, title: "Emotional support", description: "A safe space to feel and express your emotions." },
    { icon: Shield, title: "Coping strategies", description: "Tools for managing the daily pain of separation." },
    { icon: Compass, title: "Finding direction", description: "Rebuilding identity and life beyond the relationship." },
    { icon: Sunrise, title: "Moving forward", description: "Support in opening to new possibilities." }
  ],
  benefits: [
    "Healthy processing of grief",
    "Restored sense of self",
    "Reduced emotional pain",
    "Clarity about the future",
    "Renewed hope",
    "Readiness for new relationships"
  ]
};

const Separation = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Separation;
