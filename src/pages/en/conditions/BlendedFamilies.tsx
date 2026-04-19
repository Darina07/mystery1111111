import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Users, MessageCircle, Shield } from "lucide-react";
import blendedFamiliesHeader from "@/assets/blended-families-header.jpg";

const conditionData: ConditionData = {
  title: "New Partners and Blended Families",
  subtitle: "Family counseling",
  description: "Support for building strong relationships in blended families.",
  heroImage: blendedFamiliesHeader,
  parentService: { name: "Family and couples counseling", href: "/en/services/family-counseling" },
  whatIs: {
    title: "Blended families",
    content: `Blended families bring together people from different family histories, each with their own bonds, expectations, and wounds. Building harmony takes time, patience, and intention.

Common challenges:
• Children adapting to a new partner
• Defining the role of the stepparent
• Balancing relationships with biological and stepchildren
• Coordinating with ex-partners
• Differences in parenting styles
• Loyalty conflicts
• Building new family rituals
• Managing tension between siblings or stepsiblings

With support, blended families can become deeply connected and resilient.`
  },
  howWeHelp: [
    { icon: Heart, title: "Realistic expectations", description: "Helping families set healthy expectations for the journey." },
    { icon: MessageCircle, title: "Open communication", description: "Tools for honest conversations between all family members." },
    { icon: Users, title: "Defining roles", description: "Clarifying the role of each adult in the new family." },
    { icon: Shield, title: "Building rituals", description: "Creating new traditions that bond the family." }
  ],
  benefits: [
    "Smoother family integration",
    "Stronger couple relationship",
    "Better connection with children",
    "Reduced family tension",
    "Clear, healthy roles",
    "A united, resilient family"
  ]
};

const BlendedFamilies = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default BlendedFamilies;
