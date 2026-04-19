import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Users, Sparkles } from "lucide-react";
import autismHeader from "@/assets/autism-header.jpg";

const conditionData: ConditionData = {
  title: "Children with Autism",
  subtitle: "Child counseling",
  description: "Specialized support for children on the autism spectrum and their families.",
  heroImage: autismHeader,
  parentService: {
    name: "Child and adolescent counseling",
    href: "/en/services/child-counseling"
  },
  whatIs: {
    title: "What is autism spectrum disorder?",
    content: `Autism spectrum disorders (ASD) are a group of neurological conditions that affect the development of communication, social interaction, and behavior. Every child with autism is unique — the spectrum includes a wide range of abilities and challenges.

Early intervention and appropriate support can significantly improve the development and quality of life of the child and family.

Characteristics of autism:
• Differences in social communication and interaction
• Repetitive behaviors or restricted interests
• Sensory sensitivity (to sounds, lights, textures)
• Preference for routine and predictability
• Unique strengths and talents`,
  },
  howWeHelp: [
    { icon: Brain, title: "Individual assessment", description: "Comprehensive developmental assessment and a personalized support plan." },
    { icon: Sparkles, title: "Skill development", description: "Working on communication, social skills, and emotional regulation." },
    { icon: Users, title: "Family support", description: "Counseling and training for parents on effective strategies at home." },
    { icon: Heart, title: "Acceptance and understanding", description: "Helping the family understand and embrace the child's uniqueness." }
  ],
  benefits: [
    "Improved communication",
    "Development of social skills",
    "Better emotional regulation",
    "Reduction of challenging behavior",
    "Support for the entire family",
    "Strategies for daily life"
  ]
};

const Autism = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Autism;
