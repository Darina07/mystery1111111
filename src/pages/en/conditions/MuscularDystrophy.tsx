import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Brain, Users, Sparkles } from "lucide-react";
import muscularDystrophyHeader from "@/assets/muscular-dystrophy-header.png";

const conditionData: ConditionData = {
  title: "Children with Muscular Dystrophy",
  subtitle: "Child counseling",
  description: "Psychological support for children with muscular dystrophy and their families.",
  heroImage: muscularDystrophyHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "Psychological support for muscular dystrophy",
    content: `Muscular dystrophy is a progressive condition that affects not only the body but also the emotional state of the child and family. Psychological support is an important part of holistic care.

Areas of support:
• Adapting to physical limitations
• Coping with emotions about the diagnosis
• Maintaining self-esteem
• Social inclusion
• Family support
• Quality of life`
  },
  howWeHelp: [
    { icon: Heart, title: "Emotional support", description: "A safe space for processing feelings about the condition." },
    { icon: Brain, title: "Cognitive strategies", description: "Tools for managing difficult thoughts and emotions." },
    { icon: Users, title: "Family counseling", description: "Supporting the whole family through the journey." },
    { icon: Sparkles, title: "Social inclusion", description: "Helping the child stay connected and engaged." }
  ],
  benefits: [
    "Better emotional adaptation",
    "Higher self-esteem",
    "Stronger family support",
    "Successful social inclusion",
    "Improved quality of life",
    "Strategies for coping with challenges"
  ]
};

const MuscularDystrophy = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default MuscularDystrophy;
