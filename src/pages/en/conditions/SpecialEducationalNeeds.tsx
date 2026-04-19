import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Users, Sparkles } from "lucide-react";
import specialEducationalNeedsHeader from "@/assets/special-educational-needs-header.jpg";

const conditionData: ConditionData = {
  title: "Special Educational Needs",
  subtitle: "Child counseling",
  description: "Specialized support for children with special educational needs.",
  heroImage: specialEducationalNeedsHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What are special educational needs?",
    content: `Children with special educational needs require an individualized approach to learning and development. Each child has their own pace, style, and unique strengths.

Areas of support:
• Adapted learning methods
• Development of cognitive skills
• Social and emotional skills
• Self-esteem and motivation
• School inclusion
• Family support`
  },
  howWeHelp: [
    { icon: Brain, title: "Adapted learning", description: "Methods tailored to the child's individual needs." },
    { icon: Sparkles, title: "Skills development", description: "Building cognitive, social, and practical skills." },
    { icon: Heart, title: "Emotional support", description: "A caring space for emotional growth and self-esteem." },
    { icon: Users, title: "Family and school", description: "Coordinating support between home and school." }
  ],
  benefits: [
    "Development of individual potential",
    "Better academic results",
    "Higher self-esteem",
    "Successful school inclusion",
    "Stronger family support",
    "Greater independence"
  ]
};

const SpecialEducationalNeeds = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default SpecialEducationalNeeds;
