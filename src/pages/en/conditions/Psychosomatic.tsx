import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Activity, Brain, Heart, Shield } from "lucide-react";
import psychosomaticHeader from "@/assets/psychosomatic-header.jpg";

const conditionData: ConditionData = {
  title: "Psychosomatics",
  subtitle: "Psychological counseling",
  description: "Understand and address the link between emotional state and physical symptoms.",
  heroImage: psychosomaticHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What are psychosomatics?",
    content: `Psychosomatic symptoms are real physical complaints with a significant emotional or psychological component. The mind and body are deeply connected.

Common psychosomatic symptoms:
• Headaches and migraines
• Stomach issues
• Muscle tension and pain
• Skin problems
• Fatigue
• Heart palpitations
• Breathing difficulties

Working with the underlying emotions can lead to lasting relief.`
  },
  howWeHelp: [
    { icon: Activity, title: "Understanding symptoms", description: "Exploring the link between emotions and physical complaints." },
    { icon: Brain, title: "Working with emotions", description: "Recognizing and expressing suppressed feelings." },
    { icon: Heart, title: "Stress management", description: "Reducing the chronic stress that fuels symptoms." },
    { icon: Shield, title: "Body awareness", description: "Learning to listen to your body's signals." }
  ],
  benefits: [
    "Reduction or elimination of symptoms",
    "Better understanding of yourself",
    "Greater emotional awareness",
    "Improved stress management",
    "Healthier mind–body connection",
    "Better quality of life"
  ]
};

const Psychosomatic = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Psychosomatic;
