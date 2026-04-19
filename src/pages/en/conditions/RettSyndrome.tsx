import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Users, Sparkles } from "lucide-react";
import rettSyndromeHeader from "@/assets/rett-syndrome-header.jpg";

const conditionData: ConditionData = {
  title: "Rett Syndrome",
  subtitle: "Child counseling",
  description: "Specialized support for children with Rett syndrome and their families.",
  heroImage: rettSyndromeHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What is Rett syndrome?",
    content: `Rett syndrome is a rare genetic neurological disorder that primarily affects girls. It causes regression in motor and communication skills, requiring comprehensive specialized support.

Areas of support:
• Adapted communication
• Maintaining motor skills
• Sensory regulation
• Emotional well-being
• Family support
• Quality of life`
  },
  howWeHelp: [
    { icon: Brain, title: "Adapted communication", description: "Alternative communication methods tailored to the child." },
    { icon: Sparkles, title: "Sensory support", description: "Strategies for sensory regulation and engagement." },
    { icon: Heart, title: "Emotional support", description: "A caring space for the child and family." },
    { icon: Users, title: "Family counseling", description: "Guidance and support for parents and siblings." }
  ],
  benefits: [
    "Improved communication",
    "Better sensory regulation",
    "Stronger family support",
    "Higher quality of life",
    "Strategies for daily challenges",
    "Reduced family stress"
  ]
};

const RettSyndrome = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default RettSyndrome;
