import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Users, MessageCircle } from "lucide-react";
import aspergerHeader from "@/assets/asperger-header.jpg";

const conditionData: ConditionData = {
  title: "Asperger Syndrome",
  subtitle: "Child counseling",
  description: "Specialized support for children with Asperger syndrome and their families.",
  heroImage: aspergerHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What is Asperger syndrome?",
    content: `Asperger syndrome is part of the autism spectrum and is characterized by difficulties in social interaction and nonverbal communication, along with restricted, repetitive patterns of behavior and interests.

Children with Asperger often have normal or above-average intelligence and good language skills, but struggle to read social nuances and unwritten rules.

Characteristics:
• Difficulty understanding social cues
• Intense, specific interests
• Preference for routine and structure
• Literal interpretation of language
• Sensory sensitivity
• Unique talents and strengths`
  },
  howWeHelp: [
    { icon: MessageCircle, title: "Social skills", description: "Training in recognizing social cues and developing friendship skills." },
    { icon: Brain, title: "Emotional regulation", description: "Strategies for recognizing and managing emotions." },
    { icon: Heart, title: "Self-acceptance", description: "Helping the child understand and embrace their uniqueness as a strength." },
    { icon: Users, title: "Family support", description: "Counseling parents on how to understand and support their child." }
  ],
  benefits: [
    "Improved social skills",
    "Better understanding of emotions",
    "Strategies for handling anxiety",
    "Development of strengths",
    "Better family communication",
    "Successful school integration"
  ]
};

const Asperger = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Asperger;
