import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childRelocationHeader from "@/assets/child-relocation-header.jpg";

const conditionData: ConditionData = {
  title: "Moving or Changing Schools",
  subtitle: "Child counseling",
  description: "Support for children moving home or changing schools.",
  heroImage: childRelocationHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "How does relocation affect children?",
    content: `Moving home or changing schools is a major change that can be very difficult for children. They lose familiar surroundings, friends, teachers, and routines, which can cause significant stress.

Adapting to a new place takes time and effort. Some children adapt quickly, while others need more support.

Signs of difficulty when relocating:
• Sadness about the old home and friends
• Anxiety about the new place
• Difficulty making new friends
• Refusal to attend the new school
• Sleep problems
• Anger toward parents because of the move`
  },
  howWeHelp: [
    { icon: Brain, title: "Preparing for the change", description: "Helping the child prepare emotionally for the move." },
    { icon: Heart, title: "Processing the loss", description: "Space to grieve the old place and friends." },
    { icon: Shield, title: "Building confidence", description: "Strategies for making new friends and adapting." },
    { icon: Users, title: "Family support", description: "Guidance for parents on easing the transition." }
  ],
  benefits: [
    "Easier adaptation to the new environment",
    "Reduced anxiety",
    "Skills for making new friends",
    "Maintaining contact with old friends",
    "More positive attitude toward change",
    "Greater flexibility and resilience"
  ]
};

const Relocation = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Relocation;
