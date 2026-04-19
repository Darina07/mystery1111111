import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { MessageCircle, Users, Heart, Target } from "lucide-react";
import communicationHeader from "@/assets/communication-difficulties-header.jpg";

const conditionData: ConditionData = {
  title: "Communication Difficulties",
  subtitle: "Psychological counseling",
  description: "Professional help overcoming communication difficulties and building fulfilling relationships.",
  heroImage: communicationHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What are communication difficulties?",
    content: `Communication difficulties can show up in many ways and affect every area of life.

Signs of communication difficulties:
• Fear of starting a conversation
• Difficulty maintaining contact
• Trouble expressing your opinion
• Fear of conflict
• Inability to say "no"
• Misunderstandings in relationships
• Avoiding social situations
• Feeling misunderstood

They can affect personal relationships, professional life, and overall well-being.`
  },
  howWeHelp: [
    { icon: MessageCircle, title: "Communication skills", description: "Developing effective techniques for conversation and self-expression." },
    { icon: Users, title: "Social skills", description: "Building confidence in social situations and group interactions." },
    { icon: Heart, title: "Emotional intelligence", description: "Recognizing and managing emotions in communication." },
    { icon: Target, title: "Assertiveness", description: "Learning to express your needs respectfully and effectively." }
  ],
  benefits: [
    "Easier creation of new contacts",
    "Improved personal and professional relationships",
    "Confidence in social situations",
    "Effective conflict resolution",
    "Deeper, more meaningful connections",
    "Freedom to be yourself"
  ]
};

const CommunicationDifficulties = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default CommunicationDifficulties;
