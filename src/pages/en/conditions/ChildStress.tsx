import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childStressHeader from "@/assets/child-stress-header.jpg";

const conditionData: ConditionData = {
  title: "Coping with Stressful Situations",
  subtitle: "Child counseling",
  description: "Support for children facing stress and difficult life situations.",
  heroImage: childStressHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "How does stress affect children?",
    content: `Children, like adults, experience stress, but they often lack the words or skills to express it. Stress in children can come from many sources — school, family, friends, or world events.

Prolonged stress can affect physical and mental health, academic success, and social relationships.

Signs of stress in children:
• Changes in behavior or mood
• Sleep or eating problems
• Somatic complaints (headaches, stomachaches)
• Difficulty concentrating
• Irritability or quick temper
• Withdrawal from previously enjoyed activities`
  },
  howWeHelp: [
    { icon: Brain, title: "Identifying stressors", description: "Helping understand the sources of stress." },
    { icon: Heart, title: "Relaxation techniques", description: "Teaching breathing, visualization, and other calming techniques." },
    { icon: Shield, title: "Coping strategies", description: "Developing healthy ways to manage stress." },
    { icon: Users, title: "Family support", description: "Guidance for parents on creating a supportive environment." }
  ],
  benefits: [
    "Better stress management",
    "Reduced anxiety",
    "Improved sleep and physical health",
    "Better focus",
    "Emotional resilience",
    "Lifelong skills"
  ]
};

const ChildStress = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default ChildStress;
