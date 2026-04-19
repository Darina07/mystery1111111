import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childTicsHeader from "@/assets/child-tics-header.jpg";

const conditionData: ConditionData = {
  title: "Tics and Tourette Syndrome",
  subtitle: "Child counseling",
  description: "Specialized support for children with tics and Tourette syndrome.",
  heroImage: childTicsHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What are tics and Tourette syndrome?",
    content: `Tics are sudden, rapid, repetitive movements or vocalizations that are difficult to control. Tourette syndrome is a neurological disorder characterized by multiple motor tics and at least one vocal tic that last for more than a year.

Tics typically appear in childhood and can vary in severity. With the right support, many children learn to manage them effectively.

Types of tics:
• Simple motor tics — blinking, shoulder shrugging, grimaces
• Complex motor tics — touching, jumping, imitating movements
• Simple vocal tics — coughing, hissing, sniffing
• Complex vocal tics — words, phrases, echolalia`
  },
  howWeHelp: [
    { icon: Brain, title: "Behavioral therapy", description: "Training to recognize and manage tics (CBIT therapy)." },
    { icon: Heart, title: "Stress management", description: "Techniques for reducing stress that can worsen tics." },
    { icon: Shield, title: "Building confidence", description: "Working on self-esteem and handling social situations." },
    { icon: Users, title: "Family and school counseling", description: "Training for parents and teachers to support the child." }
  ],
  benefits: [
    "Better tic management",
    "Reduced stress and anxiety",
    "Higher self-esteem",
    "Better social functioning",
    "Support for the family",
    "Strategies for school"
  ]
};

const TicsTourette = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default TicsTourette;
