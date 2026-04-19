import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childNewFamilyMemberHeader from "@/assets/child-new-family-member-header.jpg";

const conditionData: ConditionData = {
  title: "New Family Member",
  subtitle: "Child counseling",
  description: "Support for children adapting to a new sibling or family member.",
  heroImage: childNewFamilyMemberHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "How does a new family member affect a child?",
    content: `The arrival of a new sibling, a parent's new partner, or a child from a previous marriage can be a significant challenge for a child. Changes in family dynamics require adaptation from everyone.

Children may feel jealousy, fear of losing attention, confusion about new roles, or difficulty accepting the new member.

Signs of adaptation difficulty:
• Jealousy and rivalry
• Regression to younger behavior
• Anger or aggression toward the new member
• Seeking more attention
• Sleep or eating problems
• Withdrawal or sadness`
  },
  howWeHelp: [
    { icon: Brain, title: "Understanding feelings", description: "Helping the child make sense of their reactions and emotions." },
    { icon: Heart, title: "Building connection", description: "Support for creating a positive bond with the new member." },
    { icon: Shield, title: "Preserving identity", description: "Reinforcing the child's sense of importance and uniqueness." },
    { icon: Users, title: "Family work", description: "Guiding parents on balancing attention." }
  ],
  benefits: [
    "Easier adaptation to change",
    "Reduced jealousy",
    "Building positive relationships",
    "Preserved sense of safety",
    "Better family dynamics",
    "Developing empathy and sharing"
  ]
};

const NewFamilyMember = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default NewFamilyMember;
