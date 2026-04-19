import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Users, Shield, Sparkles } from "lucide-react";
import lgbtYouthHeader from "@/assets/lgbt-youth-header.jpg";

const conditionData: ConditionData = {
  title: "Psychological Support for LGBT+ Children and Adolescents",
  subtitle: "Child counseling",
  description: "Specialized psychological support for LGBT+ children and adolescents.",
  heroImage: lgbtYouthHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "Support for LGBT+ children and adolescents",
    content: `LGBT+ children and adolescents often face unique challenges in growing up. We provide a safe and accepting space for exploring identity and coping with difficulties.

Areas of support:
• Exploring sexual orientation and gender identity
• Coping with internal conflict
• Support against bullying or discrimination
• Communication with family
• Building a positive identity
• Support during coming out`
  },
  howWeHelp: [
    { icon: Heart, title: "Accepting space", description: "We create a safe environment for sharing and self-exploration." },
    { icon: Shield, title: "Coping with difficulties", description: "We support against bullying, discrimination, and social stress." },
    { icon: Users, title: "Family mediation", description: "We help improve communication within the family." },
    { icon: Sparkles, title: "Positive identity", description: "We support building a healthy and authentic identity." }
  ],
  benefits: [
    "Acceptance of identity",
    "Reduced anxiety and depression",
    "Better family relationships",
    "Strategies for handling discrimination",
    "Building a supportive community",
    "Higher self-esteem and self-acceptance"
  ]
};

const LGBTYouth = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default LGBTYouth;
