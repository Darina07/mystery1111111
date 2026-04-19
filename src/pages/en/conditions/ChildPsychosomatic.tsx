import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childPsychosomaticHeader from "@/assets/child-psychosomatic-header.jpg";

const conditionData: ConditionData = {
  title: "Psychosomatic Conditions in Children",
  subtitle: "Child counseling",
  description: "Specialized support for children with psychosomatic complaints.",
  heroImage: childPsychosomaticHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What are psychosomatic conditions?",
    content: `Psychosomatic conditions in children are physical symptoms caused or amplified by emotional and psychological factors. Children often express emotional distress through their bodies because they don't yet have words for their feelings.

It is important to know that the pain and symptoms are real — they are not "made up." They simply have a psychological rather than purely physical origin.

Common psychosomatic symptoms:
• Headaches without medical cause
• Stomachaches and nausea
• Fatigue and weakness
• Limb pains
• Skin problems
• Difficulty breathing
• Symptoms often worsen under stress`
  },
  howWeHelp: [
    { icon: Brain, title: "Body–mind connection", description: "Helping the child and family understand how emotions affect the body." },
    { icon: Heart, title: "Emotional expression", description: "Developing skills for recognizing and expressing emotions in words." },
    { icon: Shield, title: "Stress management", description: "Techniques for handling stress and reducing physical symptoms." },
    { icon: Users, title: "Family work", description: "Identifying family stressors and addressing them." }
  ],
  benefits: [
    "Reduction of physical symptoms",
    "Better understanding of emotions",
    "Effective coping strategies",
    "Improved quality of life",
    "Fewer school absences",
    "Support for the family"
  ]
};

const ChildPsychosomatic = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default ChildPsychosomatic;
