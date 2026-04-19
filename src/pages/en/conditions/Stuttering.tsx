import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { MessageCircle, Brain, Heart, Shield } from "lucide-react";
import stutteringHeader from "@/assets/stuttering-header.jpg";

const conditionData: ConditionData = {
  title: "Stuttering",
  subtitle: "Speech therapy support",
  description: "Specialized help for children and adults who stutter.",
  heroImage: stutteringHeader,
  parentService: { name: "Speech therapy", href: "/en/services/speech-therapy" },
  whatIs: {
    title: "What is stuttering?",
    content: `Stuttering is a fluency disorder characterized by repetitions, prolongations, or blocks in speech. It can significantly affect communication and self-esteem.

Signs of stuttering:
• Repeating sounds or syllables
• Prolonging sounds
• Blocks (silent pauses)
• Tension when speaking
• Avoiding certain words or situations
• Anxiety about speaking

With the right therapy, fluency can be significantly improved.`
  },
  howWeHelp: [
    { icon: MessageCircle, title: "Fluency techniques", description: "Specialized methods for smoother, more fluent speech." },
    { icon: Brain, title: "Cognitive work", description: "Addressing the thoughts and beliefs around speaking." },
    { icon: Heart, title: "Reducing anxiety", description: "Techniques for managing fear of speaking." },
    { icon: Shield, title: "Building confidence", description: "Support for confident communication in any setting." }
  ],
  benefits: [
    "More fluent speech",
    "Less anxiety about speaking",
    "Higher self-esteem",
    "Confidence in social situations",
    "Better communication",
    "Improved quality of life"
  ]
};

const Stuttering = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Stuttering;
