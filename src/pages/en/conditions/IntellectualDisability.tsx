import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Users, Sparkles } from "lucide-react";
import intellectualDisabilityHeader from "@/assets/intellectual-disability-header.jpg";

const conditionData: ConditionData = {
  title: "Intellectual Disability",
  subtitle: "Child counseling",
  description: "Specialized support for children with intellectual disability and their families.",
  heroImage: intellectualDisabilityHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What is intellectual disability?",
    content: `Intellectual disability involves limitations in intellectual functioning and adaptive behavior. With proper support, every child can develop their potential and live a meaningful life.

Areas of support:
• Adapted learning
• Practical life skills
• Social skills
• Emotional development
• Independence
• Family support`
  },
  howWeHelp: [
    { icon: Brain, title: "Adapted learning", description: "Methods tailored to the child's individual needs." },
    { icon: Sparkles, title: "Skills development", description: "Building practical and social skills." },
    { icon: Heart, title: "Emotional support", description: "A caring space for emotional growth." },
    { icon: Users, title: "Family counseling", description: "Guidance and support for parents and siblings." }
  ],
  benefits: [
    "Development of individual potential",
    "Better practical skills",
    "Stronger social skills",
    "Greater independence",
    "Higher self-esteem",
    "Stronger family bonds"
  ]
};

const IntellectualDisability = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default IntellectualDisability;
