import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Sparkles } from "lucide-react";
import childFearsHeader from "@/assets/child-fears-header.jpg";

const conditionData: ConditionData = {
  title: "Fears and Phobias in Children",
  subtitle: "Child counseling",
  description: "Specialized support for children with intense fears and phobias.",
  heroImage: childFearsHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What are fears and phobias?",
    content: `Fears are a normal part of child development, but when they become intense, prolonged, and interfere with daily life, they can turn into phobias. A phobia is an irrational, intense fear of a specific object, situation, or activity.

Common childhood fears include the dark, animals, separation from parents, social situations, school, or medical procedures.

Signs of a phobia:
• Intense fear disproportionate to the actual danger
• Avoidance of the feared object or situation
• Physical symptoms (heart racing, sweating, trembling)
• Crying, tantrums, or "freezing"
• The fear interferes with daily activities
• The fear lasts more than 6 months`
  },
  howWeHelp: [
    { icon: Brain, title: "Cognitive-behavioral therapy", description: "Working on the thoughts and reactions associated with fear." },
    { icon: Shield, title: "Gradual exposure", description: "Carefully and safely facing the feared object or situation." },
    { icon: Heart, title: "Calming techniques", description: "Teaching relaxation and coping with anxiety." },
    { icon: Sparkles, title: "Building courage", description: "Developing confidence and the ability to face fear." }
  ],
  benefits: [
    "Reduced intensity of fear",
    "Ability to cope with scary situations",
    "Increased confidence",
    "Better daily functioning",
    "Calming techniques",
    "Support for the family"
  ]
};

const ChildFears = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default ChildFears;
