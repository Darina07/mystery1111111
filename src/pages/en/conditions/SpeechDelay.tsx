import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { MessageCircle, Brain, BookOpen, Heart } from "lucide-react";
import speechDelayHeader from "@/assets/speech-delay-header.jpg";

const conditionData: ConditionData = {
  title: "Speech Delay",
  subtitle: "Speech therapy support",
  description: "Professional support for children whose speech is developing more slowly than expected.",
  heroImage: speechDelayHeader,
  parentService: { name: "Speech therapy", href: "/en/services/speech-therapy" },
  whatIs: {
    title: "What is speech delay?",
    content: `Speech delay occurs when a child's speech develops significantly later than typical for their age. Early identification and intervention give the best results.

Signs of speech delay:
• Limited vocabulary for the child's age
• Difficulty forming sentences
• Problems with comprehension
• Limited use of gestures
• Hard-to-understand speech
• Frustration when trying to communicate

The earlier the support, the better the outcome.`
  },
  howWeHelp: [
    { icon: MessageCircle, title: "Speech stimulation", description: "Activities that encourage language development." },
    { icon: Brain, title: "Comprehension work", description: "Supporting both expression and understanding." },
    { icon: BookOpen, title: "Vocabulary expansion", description: "Building the child's word knowledge step by step." },
    { icon: Heart, title: "Playful approach", description: "Learning through fun, engaging activities." }
  ],
  benefits: [
    "Faster speech development",
    "Better comprehension",
    "Reduced frustration",
    "Higher self-esteem",
    "Better social interaction",
    "Preparation for school"
  ]
};

const SpeechDelay = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default SpeechDelay;
