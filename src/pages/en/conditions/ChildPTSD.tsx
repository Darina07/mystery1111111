import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childPtsdHeader from "@/assets/child-ptsd-header.jpg";

const conditionData: ConditionData = {
  title: "PTSD in Children",
  subtitle: "Child counseling",
  description: "Specialized support for children who have experienced traumatic events.",
  heroImage: childPtsdHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What is PTSD in children?",
    content: `Post-traumatic stress disorder (PTSD) in children develops after experiencing or witnessing a traumatic event. Children process trauma differently from adults and symptoms may present differently depending on age.

Early professional help is extremely important for recovery and preventing long-term consequences.

Signs in children:
• Recurrent nightmares or play related to the trauma
• Avoidance of places, people, or topics related to the event
• Increased anxiety and fears
• Behavioral regression (e.g., bedwetting)
• Sleep problems
• Irritability or angry outbursts
• Concentration difficulties`
  },
  howWeHelp: [
    { icon: Brain, title: "Trauma-focused therapy", description: "Specialized techniques for processing traumatic memories." },
    { icon: Heart, title: "Emotional regulation", description: "Teaching techniques for handling intense emotions." },
    { icon: Shield, title: "Restoring safety", description: "Building a sense of security and control." },
    { icon: Users, title: "Family work", description: "Support for parents in helping the child." }
  ],
  benefits: [
    "Reduced trauma symptoms",
    "Better emotional control",
    "Restored sense of safety",
    "Improved sleep",
    "Better functioning at school",
    "Support for the whole family"
  ]
};

const ChildPTSD = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default ChildPTSD;
