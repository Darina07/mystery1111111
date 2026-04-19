import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childDivorceHeader from "@/assets/child-divorce-header.jpg";

const conditionData: ConditionData = {
  title: "Parents' Divorce",
  subtitle: "Child counseling",
  description: "Support for children during parental divorce or separation.",
  heroImage: childDivorceHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "How does divorce affect children?",
    content: `Parental divorce or separation is a significant event that changes the entire world of a child. Even when the separation is amicable, children experience loss and need support to adapt.

Children's reactions vary depending on age, temperament, and how parents manage the process. It is important for the child to have space to process the experience.

Signs of difficulty during divorce:
• Feelings of guilt ("It's my fault")
• Hope for the parents' reconciliation
• Anger toward one or both parents
• Anxiety about the future
• School problems
• Difficulty transitioning between two homes`
  },
  howWeHelp: [
    { icon: Brain, title: "Understanding the situation", description: "Helping the child understand what is happening without feeling guilty." },
    { icon: Heart, title: "Emotional support", description: "Space for expressing all feelings — sadness, anger, confusion." },
    { icon: Shield, title: "Adapting to change", description: "Strategies for coping with the new reality." },
    { icon: Users, title: "Working with parents", description: "Guidance for parents on how to support the child." }
  ],
  benefits: [
    "Easier adaptation to change",
    "Reduced feelings of guilt",
    "Better communication with both parents",
    "Coping with loyalty conflicts",
    "Emotional stability",
    "Preserving healthy relationships with parents"
  ]
};

const ParentsDivorce = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default ParentsDivorce;
