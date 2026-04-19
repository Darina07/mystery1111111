import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Users, MessageCircle, Sparkles } from "lucide-react";
import comingOutHeader from "@/assets/coming-out-header.jpg";

const conditionData: ConditionData = {
  title: "Coming Out Support (Youth)",
  subtitle: "Child counseling",
  description: "Specialized support for children and adolescents during the coming out process.",
  heroImage: comingOutHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "Support during coming out",
    content: `Coming out is the process of sharing one's sexual orientation or gender identity with others. It can be both liberating and stressful for young people.

We help with:
• Preparing for the conversation
• Coping with anxiety before coming out
• Choosing the right time and place
• Preparing for various reactions
• Processing the experience afterward
• Coping with negative reactions`
  },
  howWeHelp: [
    { icon: Heart, title: "Emotional support", description: "Support throughout the coming out process." },
    { icon: MessageCircle, title: "Conversation preparation", description: "Helping plan how and when to share." },
    { icon: Users, title: "Family mediation", description: "Supporting communication with family after coming out." },
    { icon: Sparkles, title: "Building confidence", description: "Strengthening self-confidence and authenticity." }
  ],
  benefits: [
    "Preparedness for the conversation",
    "Reduced anxiety",
    "Strategies for various reactions",
    "Emotional support",
    "Improved family relationships",
    "Strengthened identity and self-acceptance"
  ]
};

const ComingOutSupport = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default ComingOutSupport;
