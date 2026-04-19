import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Users, MessageCircle, Shield } from "lucide-react";
import sexualProblemsHeader from "@/assets/sexual-problems-header.jpg";

const conditionData: ConditionData = {
  title: "Sexual Problems",
  subtitle: "Family counseling",
  description: "Professional and discreet support for sexual difficulties in the couple.",
  heroImage: sexualProblemsHeader,
  parentService: { name: "Family and couples counseling", href: "/en/services/family-counseling" },
  whatIs: {
    title: "Sexual problems in the relationship",
    content: `Sexual difficulties are common but often surrounded by silence and shame. They can have physical, psychological, or relational causes — and most can be addressed with the right support.

Common sexual difficulties:
• Loss of desire
• Mismatch in libido between partners
• Performance anxiety
• Difficulty with arousal or orgasm
• Pain during intercourse
• Loss of intimacy after children, illness, or stress
• Communication difficulties about sex

A safe, non-judgmental space is the foundation for change.`
  },
  howWeHelp: [
    { icon: Heart, title: "Safe exploration", description: "A respectful space to talk openly about intimacy." },
    { icon: MessageCircle, title: "Communication tools", description: "Helping partners talk about needs and desires." },
    { icon: Shield, title: "Working with anxiety", description: "Reducing performance pressure and shame." },
    { icon: Users, title: "Couples work", description: "Joint sessions to rebuild intimate connection." }
  ],
  benefits: [
    "Open communication about intimacy",
    "Reduced performance anxiety",
    "Restored desire and connection",
    "Greater satisfaction",
    "Deeper emotional intimacy",
    "A more fulfilling relationship"
  ]
};

const SexualProblems = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default SexualProblems;
