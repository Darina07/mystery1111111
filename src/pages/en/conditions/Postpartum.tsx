import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Users, MessageCircle, Shield } from "lucide-react";
import postpartumHeader from "@/assets/postpartum-header.jpg";

const conditionData: ConditionData = {
  title: "Postpartum Difficulties",
  subtitle: "Family counseling",
  description: "Support for mothers and families after childbirth.",
  heroImage: postpartumHeader,
  parentService: { name: "Family and couples counseling", href: "/en/services/family-counseling" },
  whatIs: {
    title: "Difficulties after childbirth",
    content: `The postpartum period is a major transition that affects the whole family. It's normal to feel a mix of joy, exhaustion, anxiety, and self-doubt.

Common postpartum challenges:
• Postpartum sadness or depression
• Anxiety about the baby
• Sleep deprivation and exhaustion
• Loss of personal identity
• Tension in the couple's relationship
• Difficulty with breastfeeding
• Feelings of guilt or inadequacy
• Isolation from social life

Support during this time is essential for the well-being of mother, baby, and family.`
  },
  howWeHelp: [
    { icon: Heart, title: "Emotional support", description: "A space to feel and express the full range of postpartum emotions." },
    { icon: MessageCircle, title: "Couple support", description: "Strengthening the partnership through this transition." },
    { icon: Shield, title: "Coping strategies", description: "Tools for managing anxiety, exhaustion, and overwhelm." },
    { icon: Users, title: "Family adjustment", description: "Helping the whole family adapt to the new reality." }
  ],
  benefits: [
    "Reduced anxiety and depression",
    "Stronger sense of self",
    "Healthier couple relationship",
    "Confidence in parenting",
    "Better connection with baby",
    "Smoother family adjustment"
  ]
};

const Postpartum = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Postpartum;
