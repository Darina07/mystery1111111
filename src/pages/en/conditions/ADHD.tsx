import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Target, Users, Sparkles } from "lucide-react";
import childCounselingHeader from "@/assets/child-counseling-header.jpg";

const conditionData: ConditionData = {
  title: "ADHD",
  subtitle: "Child counseling",
  description: "Specialized support for children with attention deficit and hyperactivity.",
  heroImage: childCounselingHeader,
  parentService: {
    name: "Child and adolescent counseling",
    href: "/en/services/child-counseling"
  },
  whatIs: {
    title: "What is ADHD?",
    content: `Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that affects attention, impulsivity, and activity level. It is not the result of poor parenting or laziness — it is a real difference in how the brain works.

With the right support, children with ADHD can develop their strengths and thrive at school and in life.

Key characteristics:
• Difficulty concentrating and being easily distracted
• Impulsivity in actions and decisions
• Hyperactivity or inner restlessness
• Difficulty with organization and planning
• Forgetting tasks and commitments
• Emotional reactivity`,
  },
  howWeHelp: [
    { icon: Brain, title: "Understanding ADHD", description: "We help the child and family understand how ADHD affects daily life." },
    { icon: Target, title: "Attention strategies", description: "Developing techniques to improve focus and organization." },
    { icon: Sparkles, title: "Impulse management", description: "Teaching the child to recognize and control impulsive behavior." },
    { icon: Users, title: "Parent counseling", description: "Coaching parents in effective approaches to support the child." }
  ],
  benefits: [
    "Improved concentration at school",
    "Better impulse control",
    "Development of organizational skills",
    "Increased self-esteem",
    "Better relationships with peers",
    "Effective strategies for the family"
  ]
};

const ADHD = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default ADHD;
