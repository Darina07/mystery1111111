import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Users, MessageCircle, Shield } from "lucide-react";
import coupleConflictsHeader from "@/assets/couple-conflicts-header.jpg";

const conditionData: ConditionData = {
  title: "Couple Conflicts and Problems",
  subtitle: "Family counseling",
  description: "Professional support for overcoming conflicts and restoring harmony in your relationship.",
  heroImage: coupleConflictsHeader,
  parentService: { name: "Family and couples counseling", href: "/en/services/family-counseling" },
  whatIs: {
    title: "What are conflicts in a couple?",
    content: `Conflicts in a couple are a natural part of every relationship. They arise when partners have different needs, expectations, or perspectives. While some disagreements are normal, frequent or intense conflicts can undermine the foundations of the relationship.

Common signs:
• Frequent arguments that lead nowhere
• Avoiding important conversations
• Criticism, contempt, or defensiveness
• Feeling misunderstood by your partner
• Emotional distance
• Lack of physical and emotional closeness
• Difficulty making joint decisions
• Build-up of resentment and unspoken feelings`
  },
  howWeHelp: [
    { icon: MessageCircle, title: "Improving communication", description: "Teaching couples to express needs clearly and listen actively." },
    { icon: Heart, title: "Restoring closeness", description: "Working on emotional connection and intimacy between partners." },
    { icon: Shield, title: "Healthy boundaries", description: "Helping establish clear and respected boundaries in the relationship." },
    { icon: Users, title: "Conflict resolution", description: "Tools for handling disagreements constructively." }
  ],
  benefits: [
    "Better understanding between partners",
    "Effective and calm communication",
    "Fewer and less intense conflicts",
    "Restored trust and closeness",
    "Skills for future challenges",
    "A healthier, more fulfilling relationship"
  ]
};

const CoupleConflicts = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default CoupleConflicts;
