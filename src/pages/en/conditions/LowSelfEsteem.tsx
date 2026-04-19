import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childSelfEsteemHeader from "@/assets/child-self-esteem-header.jpg";

const conditionData: ConditionData = {
  title: "Low Self-Esteem",
  subtitle: "Child counseling",
  description: "Support for children with low self-esteem and lack of confidence.",
  heroImage: childSelfEsteemHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What is low self-esteem?",
    content: `Self-esteem is the way a child sees themselves — their abilities, worth, and place in the world. Low self-esteem can affect every part of a child's life.

Children with low self-esteem often feel they aren't good enough, compare themselves unfavorably to others, and avoid new challenges out of fear of failure.

Signs of low self-esteem:
• Frequent use of negative self-talk
• Avoiding new activities ("I can't")
• Hypersensitivity to criticism
• Perfectionism or complete refusal to try
• Difficulty accepting compliments
• Constantly seeking approval from others`
  },
  howWeHelp: [
    { icon: Brain, title: "Changing thinking", description: "Working with negative beliefs about oneself." },
    { icon: Heart, title: "Discovering strengths", description: "Helping the child recognize their unique qualities." },
    { icon: Shield, title: "Building resilience", description: "Developing skills for handling failures." },
    { icon: Users, title: "Working with parents", description: "Guidance for supportive behavior at home." }
  ],
  benefits: [
    "A more positive self-image",
    "Willingness to try new challenges",
    "Healthier relationships",
    "Reduced anxiety",
    "Greater independence",
    "Improved academic success"
  ]
};

const LowSelfEsteem = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default LowSelfEsteem;
