import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Sparkles } from "lucide-react";
import identitySelfAcceptanceHeader from "@/assets/identity-self-acceptance-header.jpg";

const conditionData: ConditionData = {
  title: "Identity and Self-Acceptance",
  subtitle: "LGBT+ psychological counseling",
  description: "Professional support on the path to self-acceptance and a positive identity.",
  heroImage: identitySelfAcceptanceHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is self-acceptance?",
    content: `Self-acceptance is the process of recognizing and embracing all aspects of yourself — including sexual orientation and gender identity. For many LGBT+ people this process can be complex due to social stigma, family pressure, or internal conflict.

Building a positive identity is a key part of mental health and well-being. The process includes overcoming internalized homophobia or transphobia and developing a healthy relationship with yourself.

Challenges in the process:
• Internal doubts and confusion
• Fear of rejection
• Social and family pressure
• Conflict between identity and upbringing
• Isolation and lack of role models`
  },
  howWeHelp: [
    { icon: Brain, title: "Exploring identity", description: "Supporting you in understanding and accepting your unique identity." },
    { icon: Heart, title: "Overcoming shame", description: "Working on internal negative messages and building positive self-regard." },
    { icon: Shield, title: "Building resilience", description: "Developing skills for handling external pressure and preserving inner strength." },
    { icon: Sparkles, title: "Authentic life", description: "Supporting you in building a life that reflects your true self." }
  ],
  benefits: [
    "Higher self-acceptance and self-respect",
    "Freedom from internal shame",
    "A clearer personal identity",
    "Confidence in yourself",
    "More authentic relationships",
    "Improved mental health"
  ]
};

const IdentitySelfAcceptance = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default IdentitySelfAcceptance;
