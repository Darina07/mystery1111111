import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Stethoscope, Brain, Heart, Shield } from "lucide-react";
import hypochondriaHeader from "@/assets/hypochondria-header.jpg";

const conditionData: ConditionData = {
  title: "Hypochondria",
  subtitle: "Psychological counseling",
  description: "Help for overcoming fear of illness and excessive health concerns.",
  heroImage: hypochondriaHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is hypochondria?",
    content: `Hypochondria (health anxiety) is a condition in which a person is excessively worried about having or developing a serious illness.

Signs of hypochondria:
• Constant worry about health
• Interpreting normal sensations as symptoms of illness
• Frequent doctor visits
• Seeking reassurance from loved ones
• Excessive symptom research online
• Avoiding medical exams out of fear
• Inability to feel reassured even after good results

Health anxiety is treatable with cognitive-behavioral therapy.`
  },
  howWeHelp: [
    { icon: Stethoscope, title: "Understanding symptoms", description: "Learning to distinguish anxiety from real illness." },
    { icon: Brain, title: "Cognitive therapy", description: "Working with catastrophic thoughts about health." },
    { icon: Heart, title: "Anxiety management", description: "Techniques to reduce health anxiety." },
    { icon: Shield, title: "Behavior change", description: "Reducing checking and reassurance-seeking." }
  ],
  benefits: [
    "Freedom from constant worry",
    "Fewer doctor visits",
    "Trust in your own body",
    "A calmer mind",
    "Quality of life without fear of illness",
    "Ability to enjoy the present"
  ]
};

const Hypochondria = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Hypochondria;
