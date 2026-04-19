import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childGriefHeader from "@/assets/child-grief-header.jpg";

const conditionData: ConditionData = {
  title: "Loss of a Loved One",
  subtitle: "Child counseling",
  description: "Support for children experiencing loss and grief.",
  heroImage: childGriefHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "How do children experience loss?",
    content: `The loss of a loved one is one of the hardest experiences in life. Children grieve differently from adults and often need special support to process the loss.

The way a child understands and experiences death depends on age, development, and prior experience. Younger children may not grasp the finality of death.

Signs of grief in children:
• Regression to younger behavior
• Sleep problems — nightmares, insomnia
• Changes in appetite
• Withdrawal from friends and activities
• Anger, irritability, or sadness
• Somatic complaints (stomachaches, headaches)`
  },
  howWeHelp: [
    { icon: Brain, title: "Understanding loss", description: "Helping the child make sense of what happened in age-appropriate ways." },
    { icon: Heart, title: "Expressing feelings", description: "Creating space for grief, anger, and confusion." },
    { icon: Shield, title: "Maintaining the bond", description: "Helping create healthy ways to remember." },
    { icon: Users, title: "Family support", description: "Guiding parents on supporting the child through grief." }
  ],
  benefits: [
    "Healthy processing of loss",
    "Expression of complex emotions",
    "Reduction of grief symptoms",
    "Restored sense of safety",
    "Preserving positive memories",
    "Support for the whole family"
  ]
};

const ChildGrief = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default ChildGrief;
