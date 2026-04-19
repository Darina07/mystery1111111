import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Sparkles } from "lucide-react";
import epilepsyHeader from "@/assets/epilepsy-header.jpg";

const conditionData: ConditionData = {
  title: "Children with Epilepsy",
  subtitle: "Child counseling",
  description: "Psychological support for children with epilepsy and their families.",
  heroImage: epilepsyHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "Psychological support for epilepsy",
    content: `Epilepsy can significantly affect a child's emotional state, self-esteem, and social life. Psychological support helps the child and family adapt and thrive despite the diagnosis.

Areas of support:
• Understanding the condition
• Coping with fear of seizures
• Managing anxiety and stress
• Building self-esteem
• Social inclusion
• Family support`
  },
  howWeHelp: [
    { icon: Brain, title: "Understanding the condition", description: "Age-appropriate education about epilepsy." },
    { icon: Heart, title: "Emotional support", description: "Helping the child process feelings about the diagnosis." },
    { icon: Shield, title: "Coping strategies", description: "Tools for managing fear, anxiety, and stress." },
    { icon: Sparkles, title: "Social inclusion", description: "Support for full participation in school and friendships." }
  ],
  benefits: [
    "Better understanding of the condition",
    "Reduced fear and anxiety",
    "Higher self-esteem",
    "Successful social inclusion",
    "Stronger family support",
    "Improved quality of life"
  ]
};

const Epilepsy = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Epilepsy;
