import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Mic, MessageCircle, BookOpen, Users, Heart } from "lucide-react";
import articulationHeader from "@/assets/articulation-header.jpg";

const conditionData: ConditionData = {
  title: "Articulation Difficulties",
  subtitle: "Speech therapy support",
  description: "Professional help for children with difficulties pronouncing sounds.",
  heroImage: articulationHeader,
  parentService: { name: "Speech therapy", href: "/en/services/speech-therapy" },
  whatIs: {
    title: "What are articulation difficulties?",
    content: "Articulation difficulties are problems pronouncing certain sounds correctly. A child may substitute, omit, or distort sounds, making their speech hard to understand. These difficulties are common in early childhood and can be successfully overcome with timely speech-therapy work."
  },
  howWeHelp: [
    { icon: Mic, title: "Articulation therapy", description: "Specialized exercises for correct pronunciation." },
    { icon: MessageCircle, title: "Phonetic correction", description: "Targeted work on specific problem sounds." },
    { icon: BookOpen, title: "Oral motor skills", description: "Exercises to strengthen the speech apparatus." },
    { icon: Users, title: "Home exercises", description: "Guidance for practice at home." },
    { icon: Heart, title: "Playful approach", description: "Learning through fun activities and games." }
  ],
  benefits: [
    "Clear, intelligible pronunciation",
    "Correct articulation of all sounds",
    "Better communication with others",
    "Increased speaking confidence",
    "Preparation for reading and writing",
    "Easier social adaptation"
  ]
};

const Articulation = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Articulation;
