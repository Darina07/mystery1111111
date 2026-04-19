import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childPeerCommunicationHeader from "@/assets/child-peer-communication-header.jpg";

const conditionData: ConditionData = {
  title: "Peer Communication Difficulties",
  subtitle: "Child counseling",
  description: "Support for children with difficulties in social relationships.",
  heroImage: childPeerCommunicationHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What are peer communication difficulties?",
    content: `Social skills are key to a child's healthy development. When a child struggles to communicate with peers, it can affect self-esteem, academic success, and emotional well-being.

Difficulties may show up as a lack of friends, conflicts with peers, being bullied, or trouble understanding social cues.

Signs of communication difficulties:
• Lack of close friendships
• Often spending breaks alone
• Avoiding social situations
• Difficulty starting or maintaining conversations
• Trouble understanding jokes or sarcasm
• Conflicts due to inappropriate behavior`
  },
  howWeHelp: [
    { icon: Brain, title: "Social skills", description: "Training in communication, empathy, and understanding social situations." },
    { icon: Heart, title: "Building confidence", description: "Working on self-esteem and self-expression skills." },
    { icon: Shield, title: "Coping with bullying", description: "Strategies for responding to unpleasant situations." },
    { icon: Users, title: "Role play", description: "Practicing social scenarios in a safe environment." }
  ],
  benefits: [
    "Improved social skills",
    "Easier making of friends",
    "Greater confidence in social situations",
    "Better understanding of others",
    "Reduced loneliness",
    "Better integration at school"
  ]
};

const PeerCommunication = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default PeerCommunication;
