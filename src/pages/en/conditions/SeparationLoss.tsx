import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Users, Shield, Sunrise } from "lucide-react";
import separationLossHeader from "@/assets/separation-loss-header.jpg";

const conditionData: ConditionData = {
  title: "Separation and Loss",
  subtitle: "Family counseling",
  description: "Compassionate support through divorce, separation, and family loss.",
  heroImage: separationLossHeader,
  parentService: { name: "Family and couples counseling", href: "/en/services/family-counseling" },
  whatIs: {
    title: "Separation and loss in the family",
    content: `Separation and loss in the family — divorce, the end of a long relationship, or the loss of a loved one — bring deep emotional pain and major life changes for everyone involved.

Areas of support:
• Processing grief and pain
• Adapting to a new family structure
• Supporting children through the change
• Coordinating co-parenting
• Rebuilding identity outside the relationship
• Managing practical and financial transitions
• Coping with loneliness
• Opening to a new chapter of life

The process is unique to each family and deserves time, support, and care.`
  },
  howWeHelp: [
    { icon: Heart, title: "Emotional support", description: "A safe space for processing the full range of emotions." },
    { icon: Shield, title: "Protecting children", description: "Helping children adapt with minimal trauma." },
    { icon: Users, title: "Co-parenting work", description: "Building a respectful, child-focused partnership." },
    { icon: Sunrise, title: "New beginnings", description: "Support in rebuilding life after the change." }
  ],
  benefits: [
    "Healthy processing of grief",
    "Less impact on children",
    "Functional co-parenting",
    "Restored sense of self",
    "Clarity about the future",
    "Hope for a new chapter"
  ]
};

const SeparationLoss = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default SeparationLoss;
