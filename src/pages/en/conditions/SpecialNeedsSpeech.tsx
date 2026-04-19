import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { MessageCircle, Brain, Heart, Users } from "lucide-react";
import specialNeedsSpeechHeader from "@/assets/special-needs-speech-header.jpg";

const conditionData: ConditionData = {
  title: "Speech Therapy for Special Needs",
  subtitle: "Speech therapy support",
  description: "Specialized speech therapy for children with special needs.",
  heroImage: specialNeedsSpeechHeader,
  parentService: { name: "Speech therapy", href: "/en/services/speech-therapy" },
  whatIs: {
    title: "Speech therapy for special needs",
    content: `Children with special needs — including autism, Down syndrome, intellectual disability, and other conditions — often require an individualized approach to speech and language development.

Areas of support:
• Speech and language development
• Alternative communication
• Articulation
• Comprehension and expression
• Social communication
• Family support`
  },
  howWeHelp: [
    { icon: MessageCircle, title: "Individual approach", description: "Methods tailored to the child's specific needs and abilities." },
    { icon: Brain, title: "Comprehensive development", description: "Working on language, comprehension, and communication." },
    { icon: Heart, title: "Playful methods", description: "Engaging techniques that support motivation and progress." },
    { icon: Users, title: "Family involvement", description: "Guidance for parents to continue the work at home." }
  ],
  benefits: [
    "Improved communication",
    "Better language comprehension and expression",
    "Greater independence",
    "Higher self-esteem",
    "Stronger family bonds",
    "Better quality of life"
  ]
};

const SpecialNeedsSpeech = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default SpecialNeedsSpeech;
