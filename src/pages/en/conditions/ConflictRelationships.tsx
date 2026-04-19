import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childConflictHeader from "@/assets/child-conflict-header.jpg";

const conditionData: ConditionData = {
  title: "Conflict Relationships",
  subtitle: "Child counseling",
  description: "Support for children with frequent conflicts in their relationships.",
  heroImage: childConflictHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What are conflict relationships?",
    content: `Conflicts are a natural part of relationships, but when they become frequent and intense they can signal deeper difficulties. Children with conflict-prone relationships often struggle in all of their connections.

These difficulties can appear at home, with peers, with teachers, or across all settings.

Signs of conflict relationships:
• Frequent fights with parents and siblings
• Conflicts with teachers and authority
• Stormy friendships with frequent breakups
• Difficulty compromising
• Tension that escalates quickly
• Feeling that "no one understands me"`
  },
  howWeHelp: [
    { icon: Brain, title: "Understanding conflict", description: "Exploring the causes and triggers of conflict." },
    { icon: Heart, title: "Emotional regulation", description: "Developing skills for managing anger and frustration." },
    { icon: Shield, title: "Communication skills", description: "Training in assertive and nonviolent communication." },
    { icon: Users, title: "Family work", description: "Improving family communication and conflict resolution." }
  ],
  benefits: [
    "Calmer relationships",
    "Skills for constructive conflict resolution",
    "Better understanding of others",
    "Less tension at home",
    "Healthier friendships",
    "Improved emotional well-being"
  ]
};

const ConflictRelationships = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default ConflictRelationships;
