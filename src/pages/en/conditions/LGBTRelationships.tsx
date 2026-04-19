import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, MessageCircle, Shield } from "lucide-react";
import lgbtCouple from "@/assets/lgbt-couple.jpg";

const conditionData: ConditionData = {
  title: "LGBT+ Relationships",
  subtitle: "LGBT+ psychological counseling",
  description: "Professional support for building healthy and fulfilling relationships.",
  heroImage: lgbtCouple,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What are the challenges in LGBT+ relationships?",
    content: `LGBT+ couples face many of the same challenges as heterosexual couples — communication, trust, intimacy, conflict resolution. They also navigate unique stressors related to their identity.

Our approach is affirmative and understanding of the specific dynamics and challenges in LGBT+ relationships. We work with individuals and couples to improve their connection.

Topics we help with:
• Communication and conflict resolution
• Different levels of "outness" between partners
• Pressure from family or society
• Intimacy and sexuality
• Family planning and parenting
• Long-distance or mixed-status relationships`
  },
  howWeHelp: [
    { icon: MessageCircle, title: "Improving communication", description: "Developing effective and empathetic communication between partners." },
    { icon: Heart, title: "Strengthening intimacy", description: "Working on emotional and physical closeness in the relationship." },
    { icon: Shield, title: "Coping with external pressure", description: "Developing strategies for handling discrimination and family pressure as a couple." },
    { icon: Brain, title: "Resolving conflict", description: "Learning to resolve disagreements constructively." }
  ],
  benefits: [
    "Better communication in the couple",
    "Stronger emotional connection",
    "Facing external challenges together",
    "More fulfilling relationships",
    "Clarity about the relationship's future",
    "Improved intimacy"
  ]
};

const LGBTRelationships = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default LGBTRelationships;
