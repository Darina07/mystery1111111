import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Users, MessageCircle, Shield } from "lucide-react";
import maritalCrisisHeader from "@/assets/marital-crisis-header.jpg";

const conditionData: ConditionData = {
  title: "Marital Difficulties and Crises",
  subtitle: "Family counseling",
  description: "Professional support for couples facing serious crises in their marriage.",
  heroImage: maritalCrisisHeader,
  parentService: { name: "Family and couples counseling", href: "/en/services/family-counseling" },
  whatIs: {
    title: "What is a marital crisis?",
    content: `A marital crisis is a period of serious difficulty that threatens the stability of the relationship. It can be triggered by a major event or by gradual erosion of the connection.

Common triggers:
• Communication breakdown
• Emotional distance
• Loss of intimacy
• Major life changes
• Infidelity or breaches of trust
• Financial pressure
• Differences in values or goals
• Unresolved past conflicts

A crisis is also an opportunity — with the right support, many couples emerge stronger.`
  },
  howWeHelp: [
    { icon: MessageCircle, title: "Open dialogue", description: "Creating space for honest, productive conversations." },
    { icon: Heart, title: "Rebuilding connection", description: "Working on emotional and physical intimacy." },
    { icon: Shield, title: "Restoring trust", description: "A structured path for repairing broken trust." },
    { icon: Users, title: "Joint decisions", description: "Support in making clear, conscious choices about your future." }
  ],
  benefits: [
    "Clarity about the relationship",
    "Restored communication",
    "Renewed emotional connection",
    "Tools for handling future crises",
    "Conscious decisions about the future",
    "A stronger, more resilient marriage"
  ]
};

const MaritalCrisis = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default MaritalCrisis;
