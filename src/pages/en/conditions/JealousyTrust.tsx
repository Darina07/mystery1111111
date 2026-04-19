import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Users, MessageCircle, Shield } from "lucide-react";
import jealousyTrustHeader from "@/assets/jealousy-trust-header.jpg";

const conditionData: ConditionData = {
  title: "Jealousy and Lack of Trust",
  subtitle: "Family counseling",
  description: "Help overcoming jealousy and rebuilding trust in your relationship.",
  heroImage: jealousyTrustHeader,
  parentService: { name: "Family and couples counseling", href: "/en/services/family-counseling" },
  whatIs: {
    title: "What is jealousy in a relationship?",
    content: `Jealousy is a complex emotion that mixes fear, insecurity, and possessiveness. In small doses it's normal, but excessive jealousy can poison a relationship.

Signs of problematic jealousy:
• Constant suspicion without basis
• Checking your partner's phone and accounts
• Controlling who they see or talk to
• Frequent accusations
• Anxiety when apart
• Difficulty believing reassurance
• Impact on daily life

Jealousy often has roots in personal insecurity or past experiences and can be addressed.`
  },
  howWeHelp: [
    { icon: Heart, title: "Roots of jealousy", description: "Exploring the deeper sources of your insecurity." },
    { icon: Shield, title: "Building trust", description: "Practical steps for restoring and maintaining trust." },
    { icon: MessageCircle, title: "Open communication", description: "Tools for expressing fears without accusation." },
    { icon: Users, title: "Couples work", description: "Joint sessions to repair the relationship." }
  ],
  benefits: [
    "Reduced jealousy and anxiety",
    "Restored trust",
    "Stronger self-esteem",
    "Healthier communication",
    "More freedom and ease in the relationship",
    "A deeper, more stable bond"
  ]
};

const JealousyTrust = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default JealousyTrust;
