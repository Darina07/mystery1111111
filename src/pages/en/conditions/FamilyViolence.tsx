import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Users, Shield, MessageCircle } from "lucide-react";
import familyViolenceHeader from "@/assets/family-violence-header.jpg";

const conditionData: ConditionData = {
  title: "Domestic Violence",
  subtitle: "Family counseling",
  description: "Confidential, professional support for those affected by domestic violence.",
  heroImage: familyViolenceHeader,
  parentService: { name: "Family and couples counseling", href: "/en/services/family-counseling" },
  whatIs: {
    title: "What is domestic violence?",
    content: `Domestic violence includes any pattern of behavior used to gain or maintain power and control over a family member. It is not always physical.

Forms of domestic violence:
• Physical violence
• Emotional and psychological abuse
• Verbal abuse
• Financial control
• Sexual violence
• Isolation from family and friends
• Threats and intimidation
• Digital control and stalking

If you are in immediate danger, please call emergency services. Psychological support is part of a longer journey to safety and healing.`
  },
  howWeHelp: [
    { icon: Shield, title: "Safe space", description: "A confidential, non-judgmental environment." },
    { icon: Heart, title: "Emotional support", description: "Help processing fear, shame, and grief." },
    { icon: Users, title: "Safety planning", description: "Working together on a plan that protects you." },
    { icon: MessageCircle, title: "Rebuilding self", description: "Restoring self-esteem and inner strength." }
  ],
  benefits: [
    "Greater safety and clarity",
    "Reduced fear and isolation",
    "Restored self-worth",
    "Tools for setting boundaries",
    "Path toward healing",
    "Reconnection with support resources"
  ]
};

const FamilyViolence = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default FamilyViolence;
