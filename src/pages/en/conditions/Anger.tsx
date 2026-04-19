import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Flame, Brain, Heart, Shield } from "lucide-react";
import angerHeader from "@/assets/anger-header.jpg";

const conditionData: ConditionData = {
  title: "Anger and Self-Aggression",
  subtitle: "Psychological counseling",
  description: "Learn to manage intense emotions in healthy ways.",
  heroImage: angerHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What are anger and self-aggression?",
    content: `Anger is a normal emotion, but when it becomes uncontrollable it can damage relationships and health. Self-aggression is a way of coping with emotional pain that requires specialized help.

Signs of problematic anger:
• Frequent outbursts
• Physical or verbal aggression
• Difficulty calming down
• Regret after outbursts
• Relationship problems caused by anger

Signs of self-aggression:
• Self-harm
• Risky behavior
• Neglecting your own needs

Both can be successfully overcome with the right approach.`
  },
  howWeHelp: [
    { icon: Flame, title: "Identifying triggers", description: "Recognizing the situations and thoughts that provoke anger." },
    { icon: Brain, title: "Cognitive techniques", description: "Changing the thoughts that fuel anger and self-aggression." },
    { icon: Heart, title: "Alternative strategies", description: "Healthy ways to cope with intense emotions." },
    { icon: Shield, title: "Safety", description: "Creating a plan for crisis moments." }
  ],
  benefits: [
    "Control over emotional reactions",
    "Healthier relationships",
    "Reduced tension",
    "Alternatives to self-harm",
    "Higher self-esteem",
    "A calmer life"
  ]
};

const Anger = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Anger;
