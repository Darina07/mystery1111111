import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childAggressionHeader from "@/assets/child-aggression-header.jpg";

const conditionData: ConditionData = {
  title: "Aggression and Self-Harm",
  subtitle: "Child counseling",
  description: "Specialized support for children with aggressive behavior and self-harm.",
  heroImage: childAggressionHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What are aggression and self-harm?",
    content: `Aggressive behavior in children can take the form of physical or verbal aggression toward others, while self-harm is directed toward the child themselves. Both behaviors are usually a signal of underlying emotional distress.

It is important to understand that aggression is a symptom, not a problem in itself. Behind it often stand unresolved emotions, trauma, frustration, or lack of coping skills.

Signs requiring attention:
• Frequent angry outbursts and physical aggression
• Self-harm (hitting, biting, scratching oneself)
• Destroying objects
• Bullying other children
• Cruelty to animals
• Verbal aggression and threats`
  },
  howWeHelp: [
    { icon: Brain, title: "Understanding causes", description: "Exploring the factors that provoke aggressive behavior." },
    { icon: Heart, title: "Emotional regulation", description: "Teaching how to recognize and express emotions in healthy ways." },
    { icon: Shield, title: "Alternative strategies", description: "Developing non-aggressive ways to cope with frustration." },
    { icon: Users, title: "Family work", description: "Support and training for parents in managing behavior." }
  ],
  benefits: [
    "Reduced aggressive episodes",
    "Better emotional control",
    "Healthy ways to express feelings",
    "Improved relationships with peers",
    "A calmer family environment",
    "Higher self-esteem"
  ]
};

const AggressionSelfHarm = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default AggressionSelfHarm;
