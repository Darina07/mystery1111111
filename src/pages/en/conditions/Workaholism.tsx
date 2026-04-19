import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Target, Shield, Heart } from "lucide-react";
import workaholismHeader from "@/assets/workaholism-header.jpg";

const conditionData: ConditionData = {
  title: "Workaholism",
  subtitle: "Psychological counseling",
  description: "Professional support for achieving a healthy work–life balance.",
  heroImage: workaholismHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is workaholism?",
    content: `Workaholism is a behavioral addiction characterized by a compulsive need to overwork and an inability to stop, even when it harms health and relationships.

A workaholic feels guilty when not working, struggles to delegate, and often uses work as an escape from emotional issues. Unlike a healthy commitment to work, in workaholism the pleasure comes not from achievements but from the act of working itself.

Signs of workaholism:
• Inability to disconnect from work even on weekends
• Feeling guilty during vacation or rest
• Using work to avoid personal problems
• Neglecting health, family, and friends
• Defining yourself solely through work`
  },
  howWeHelp: [
    { icon: Brain, title: "Exploring motivation", description: "Understanding the deeper reasons that drive compulsive working — fear, perfectionism, avoidance." },
    { icon: Target, title: "Reframing identity", description: "Building self-esteem that doesn't rely entirely on professional achievement." },
    { icon: Shield, title: "Setting boundaries", description: "Developing the ability to say 'no' and protect personal time." },
    { icon: Heart, title: "Work–life balance", description: "Creating sustainable practices for rest, hobbies, and quality family time." }
  ],
  benefits: [
    "Achieving healthy work–life balance",
    "Improved physical health",
    "Stronger family relationships",
    "Reduced stress and tension",
    "Discovering new sources of fulfillment",
    "More effective and focused work"
  ]
};

const Workaholism = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Workaholism;
