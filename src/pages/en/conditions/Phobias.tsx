import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Eye, Target, Heart, Shield } from "lucide-react";
import phobiasHeader from "@/assets/phobias-header.jpg";

const conditionData: ConditionData = {
  title: "Phobias",
  subtitle: "Psychological counseling",
  description: "Proven methods for overcoming irrational fears and phobias.",
  heroImage: phobiasHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What are phobias?",
    content: `A phobia is an intense, irrational fear of a specific object, situation, or activity. Phobias limit daily life and lead to avoidance behavior.

Common types of phobias:
• Acrophobia — fear of heights
• Claustrophobia — fear of enclosed spaces
• Arachnophobia — fear of spiders
• Social phobia — fear of social situations
• Agoraphobia — fear of open or public places
• Aerophobia — fear of flying

Phobias are among the most successfully treatable anxiety disorders with the right therapeutic approach.`
  },
  howWeHelp: [
    { icon: Eye, title: "Exposure therapy", description: "Gradual and safe exposure to the fear in a controlled setting." },
    { icon: Target, title: "Cognitive restructuring", description: "Changing the irrational beliefs that maintain the fear." },
    { icon: Heart, title: "Relaxation techniques", description: "Managing the physiological fear response." },
    { icon: Shield, title: "Building confidence", description: "Regaining control over your life and situations." }
  ],
  benefits: [
    "Freedom from limiting fears",
    "Doing what you wish to do",
    "Reduced stress and anxiety",
    "A fuller life",
    "Confidence in challenging situations",
    "Restored normal functioning"
  ]
};

const Phobias = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Phobias;
