import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Brain, Sparkles, Target } from "lucide-react";
import youthIdentityHeader from "@/assets/youth-identity-header.jpg";

const conditionData: ConditionData = {
  title: "Identity and Self-Acceptance (Youth)",
  subtitle: "Child counseling",
  description: "Support for children and adolescents in building identity and self-acceptance.",
  heroImage: youthIdentityHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "Building identity and self-acceptance",
    content: `Adolescence is a period of intense self-discovery and identity formation. This process can be difficult and confusing, especially when a young person feels different from peers.

We support with:
• Exploring gender and sexual identity
• Accepting yourself as you are
• Coping with internal conflict
• Overcoming shame and guilt
• Developing authenticity
• Building healthy self-esteem`
  },
  howWeHelp: [
    { icon: Heart, title: "Unconditional acceptance", description: "We provide space for authentic self-expression." },
    { icon: Brain, title: "Self-discovery", description: "Helping understand thoughts, feelings, and desires." },
    { icon: Target, title: "Identity formation", description: "Supporting the formation of an authentic identity." },
    { icon: Sparkles, title: "Self-acceptance", description: "Working on developing love and respect for yourself." }
  ],
  benefits: [
    "Clearer sense of self",
    "Higher self-acceptance",
    "Reduced internal conflict",
    "Better self-esteem",
    "Authentic self-expression",
    "Emotional resilience"
  ]
};

const YouthIdentity = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default YouthIdentity;
