import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Target, Move, Sparkles } from "lucide-react";
import dyspraxiaHeader from "@/assets/dyspraxia-header.jpg";

const conditionData: ConditionData = {
  title: "Dyspraxia",
  subtitle: "Child counseling",
  description: "Specialized support for children with dyspraxia and coordination difficulties.",
  heroImage: dyspraxiaHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What is dyspraxia?",
    content: `Dyspraxia (also known as developmental coordination disorder) is a neurological condition affecting motor planning and coordination. Children with dyspraxia have difficulty with motor skills despite normal intelligence.

It can affect gross motor skills (walking, running), fine motor skills (writing, buttoning), and/or oral-motor skills (speech, eating).

Signs of dyspraxia:
• Clumsiness and frequent tripping or falling
• Difficulty with dressing and buttoning
• Problems with sports coordination
• Illegible handwriting
• Difficulty with organization and planning
• Delayed speech development`
  },
  howWeHelp: [
    { icon: Brain, title: "Comprehensive assessment", description: "Diagnosing motor skills and creating an individual plan." },
    { icon: Move, title: "Motor development", description: "Exercises to improve coordination and balance." },
    { icon: Target, title: "Practical skills", description: "Working on daily activities like dressing, eating, writing." },
    { icon: Sparkles, title: "Building confidence", description: "Support for self-esteem and managing frustration." }
  ],
  benefits: [
    "Improved coordination",
    "Greater independence",
    "Better motor skills",
    "Confidence in sports activities",
    "Improved handwriting",
    "Strategies for daily life"
  ]
};

const Dyspraxia = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Dyspraxia;
