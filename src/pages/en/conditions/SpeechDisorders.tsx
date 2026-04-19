import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { MessageCircle, Brain, BookOpen, Heart } from "lucide-react";
import speechDisordersHeader from "@/assets/speech-disorders-header.jpg";

const conditionData: ConditionData = {
  title: "Speech Disorders",
  subtitle: "Speech therapy support",
  description: "Comprehensive help for various speech and language disorders.",
  heroImage: speechDisordersHeader,
  parentService: { name: "Speech therapy", href: "/en/services/speech-therapy" },
  whatIs: {
    title: "What are speech disorders?",
    content: `Speech disorders include a wide range of difficulties in producing or understanding speech. They can affect articulation, fluency, voice, or language.

Common speech disorders:
• Articulation disorders
• Fluency disorders (stuttering)
• Voice disorders
• Language disorders
• Phonological disorders
• Apraxia of speech

Each disorder requires a specific therapeutic approach.`
  },
  howWeHelp: [
    { icon: MessageCircle, title: "Comprehensive assessment", description: "Detailed evaluation of speech and language abilities." },
    { icon: Brain, title: "Individualized therapy", description: "A program tailored to the specific disorder." },
    { icon: BookOpen, title: "Targeted exercises", description: "Specialized techniques for each type of difficulty." },
    { icon: Heart, title: "Family support", description: "Guidance for parents to support progress at home." }
  ],
  benefits: [
    "Clearer, more intelligible speech",
    "Improved communication",
    "Higher self-esteem",
    "Better social interaction",
    "Preparation for school",
    "Long-term gains"
  ]
};

const SpeechDisorders = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default SpeechDisorders;
