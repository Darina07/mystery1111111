import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Shield, Users, Sparkles } from "lucide-react";
import socialRejectionSupportHeader from "@/assets/social-rejection-support-header.jpg";

const conditionData: ConditionData = {
  title: "Support for Social Rejection",
  subtitle: "Child counseling",
  description: "Psychological support for children and adolescents who experience social rejection.",
  heroImage: socialRejectionSupportHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "Coping with social rejection",
    content: `Social rejection can be especially painful for children and adolescents — whether it's related to identity, being different, or other reasons. It can lead to serious emotional consequences.

Signs that a child needs support:
• Isolation from peers
• Sadness and depressive symptoms
• Low self-esteem
• Fear of social situations
• Anger and aggression
• School refusal`
  },
  howWeHelp: [
    { icon: Heart, title: "Emotional support", description: "Helping process the pain of rejection." },
    { icon: Shield, title: "Building resilience", description: "Developing skills for handling negative experiences." },
    { icon: Users, title: "Social skills", description: "Working on communication and building connections." },
    { icon: Sparkles, title: "Self-esteem", description: "Restoring confidence and a positive self-image." }
  ],
  benefits: [
    "Processing of traumatic experiences",
    "Greater emotional resilience",
    "Improved social skills",
    "Restored self-esteem",
    "Reduced anxiety",
    "Building new connections"
  ]
};

const SocialRejectionSupport = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default SocialRejectionSupport;
