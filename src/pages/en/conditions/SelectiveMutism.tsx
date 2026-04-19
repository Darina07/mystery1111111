import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { MessageCircle, Heart, Users, Shield } from "lucide-react";
import selectiveMutismHeader from "@/assets/selective-mutism-header.jpg";

const conditionData: ConditionData = {
  title: "Selective Mutism",
  subtitle: "Speech therapy support",
  description: "Specialized help for children who do not speak in certain social situations.",
  heroImage: selectiveMutismHeader,
  parentService: { name: "Speech therapy", href: "/en/services/speech-therapy" },
  whatIs: {
    title: "What is selective mutism?",
    content: `Selective mutism is an anxiety disorder in which a child speaks freely in some settings (usually at home) but is unable to speak in others (such as school). The child is not refusing to speak — they are unable to.

Signs of selective mutism:
• Silence in specific social situations
• Normal speech at home with close family
• Anxiety in social settings
• Avoidance of eye contact
• Body tension when expected to speak
• Use of gestures instead of words

With the right approach, selective mutism is treatable.`
  },
  howWeHelp: [
    { icon: MessageCircle, title: "Gradual exposure", description: "Step-by-step approach to building speech in challenging settings." },
    { icon: Heart, title: "Reducing anxiety", description: "Techniques for managing the underlying anxiety." },
    { icon: Users, title: "Family and school work", description: "Coordinating with parents and teachers for consistency." },
    { icon: Shield, title: "Safe environment", description: "Creating a low-pressure space for the child." }
  ],
  benefits: [
    "Speech in more social situations",
    "Reduced anxiety",
    "Higher self-esteem",
    "Better school participation",
    "Stronger friendships",
    "Improved quality of life"
  ]
};

const SelectiveMutism = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default SelectiveMutism;
