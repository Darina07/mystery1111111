import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Users, MessageCircle, Heart, Target } from "lucide-react";
import lonelinessHeader from "@/assets/loneliness-header.jpg";

const conditionData: ConditionData = {
  title: "Loneliness",
  subtitle: "Psychological counseling",
  description: "Overcome feelings of isolation and build meaningful connections.",
  heroImage: lonelinessHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is loneliness?",
    content: `Loneliness is a painful feeling of disconnection from others, even when surrounded by people. It is different from being alone — you can feel lonely in a crowd or content in solitude.

Causes of loneliness:
• Lack of close relationships
• Difficulty with intimacy
• Social anxiety
• Loss of a loved one
• Relocation
• Life changes
• Low self-esteem

Loneliness can be overcome through inner work and conscious building of connections.`
  },
  howWeHelp: [
    { icon: Users, title: "Understanding loneliness", description: "Exploring the causes and patterns that maintain isolation." },
    { icon: MessageCircle, title: "Social skills", description: "Building confidence in social situations and communication." },
    { icon: Heart, title: "Quality of connections", description: "Focusing on depth, not quantity, of relationships." },
    { icon: Target, title: "Practical steps", description: "Building new connections and joining communities." }
  ],
  benefits: [
    "Deeper, more meaningful connections",
    "Confidence in social situations",
    "Sense of belonging",
    "Improved emotional well-being",
    "Authentic friendships",
    "A richer social life"
  ]
};

const Loneliness = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Loneliness;
