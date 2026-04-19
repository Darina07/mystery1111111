import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Shield, Users, Heart, Target } from "lucide-react";
import boundariesHeader from "@/assets/boundaries-header.jpg";

const conditionData: ConditionData = {
  title: "Personal Boundaries",
  subtitle: "Psychological counseling",
  description: "Learn to protect your space, time, and emotional well-being.",
  heroImage: boundariesHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What are personal boundaries?",
    content: `Personal boundaries are the invisible lines that define where others end and your space begins.

Types of personal boundaries:
• Physical — personal space, touch
• Emotional — what you share with whom
• Time — how you allocate your time
• Material — what you give and lend
• Energetic — how much you give to others

Signs of weak boundaries:
• Difficulty saying "no"
• Feelings of guilt when refusing
• Taking on too many responsibilities
• Neglecting your own needs

Healthy boundaries protect your well-being without harming relationships.`
  },
  howWeHelp: [
    { icon: Shield, title: "Recognizing boundaries", description: "Identifying where you need clearer limits." },
    { icon: Users, title: "Communicating boundaries", description: "How to express your needs clearly and respectfully." },
    { icon: Heart, title: "Overcoming guilt", description: "Coping with guilt when setting boundaries." },
    { icon: Target, title: "Maintaining boundaries", description: "Staying consistent in protecting your boundaries." }
  ],
  benefits: [
    "Less stress from overload",
    "Healthier relationships",
    "More time and energy for yourself",
    "Higher self-esteem",
    "A more authentic life",
    "Balance between giving and receiving"
  ]
};

const Boundaries = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Boundaries;
