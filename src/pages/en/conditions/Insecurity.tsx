import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Star, Brain, Heart, Target } from "lucide-react";
import insecurityHeader from "@/assets/insecurity-header.jpg";

const conditionData: ConditionData = {
  title: "Insecurity",
  subtitle: "Psychological counseling",
  description: "Build inner confidence and a stable sense of self-worth.",
  heroImage: insecurityHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is insecurity?",
    content: `Insecurity is a persistent doubt about your own worth, abilities, and place in the world. It can affect every area of life.

Signs of insecurity:
• Constant comparison with others
• Fear of judgment
• Difficulty making decisions
• Need for approval
• Avoidance of new challenges
• Self-criticism
• Doubting your decisions

Insecurity often has roots in childhood experiences and can be transformed through therapeutic work.`
  },
  howWeHelp: [
    { icon: Star, title: "Understanding the roots", description: "Exploring the origins and patterns of insecurity." },
    { icon: Brain, title: "Changing thoughts", description: "Working with negative beliefs about yourself." },
    { icon: Heart, title: "Self-acceptance", description: "Developing compassion and acceptance toward yourself." },
    { icon: Target, title: "Practical steps", description: "Building confidence through gradual action." }
  ],
  benefits: [
    "Stable sense of self-worth",
    "Confidence in decisions",
    "Less fear of judgment",
    "Willingness to try new things",
    "Healthier relationships",
    "An authentic life"
  ]
};

const Insecurity = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Insecurity;
