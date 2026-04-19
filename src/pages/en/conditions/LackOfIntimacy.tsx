import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Users, MessageCircle, Shield } from "lucide-react";
import lackOfIntimacyHeader from "@/assets/lack-of-intimacy-header.jpg";

const conditionData: ConditionData = {
  title: "Lack of Intimacy",
  subtitle: "Family counseling",
  description: "Help restoring emotional and physical closeness in your relationship.",
  heroImage: lackOfIntimacyHeader,
  parentService: { name: "Family and couples counseling", href: "/en/services/family-counseling" },
  whatIs: {
    title: "What is lack of intimacy?",
    content: `Intimacy is the deep sense of connection, safety, and mutual understanding between partners. When it fades, the relationship can feel empty — even when partners still love each other.

Signs of lost intimacy:
• Feeling more like roommates than partners
• Lack of physical affection
• Few meaningful conversations
• Emotional distance
• Loss of shared rituals
• Decline in sexual connection
• Feeling alone in the relationship

Intimacy can be rebuilt with conscious effort and the right support.`
  },
  howWeHelp: [
    { icon: Heart, title: "Emotional reconnection", description: "Practices for restoring deep emotional connection." },
    { icon: MessageCircle, title: "Vulnerable communication", description: "Tools for safe, honest sharing." },
    { icon: Shield, title: "Removing barriers", description: "Identifying what blocks intimacy and addressing it." },
    { icon: Users, title: "Shared rituals", description: "Building habits that nurture closeness." }
  ],
  benefits: [
    "Renewed emotional closeness",
    "Better physical intimacy",
    "Deeper communication",
    "Sense of being truly seen",
    "Stronger bond as a couple",
    "Greater relationship satisfaction"
  ]
};

const LackOfIntimacy = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default LackOfIntimacy;
