import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Gauge, Brain, Heart, Wind } from "lucide-react";
import stressHeader from "@/assets/stress-header.jpg";

const conditionData: ConditionData = {
  title: "Stress",
  subtitle: "Psychological counseling",
  description: "Effective strategies for managing everyday and chronic stress.",
  heroImage: stressHeader,
  parentService: {
    name: "Psychological counseling",
    href: "/en/services/psychological-counseling"
  },
  whatIs: {
    title: "What is stress?",
    content: `Stress is the body's response to challenges and threats. While short-term stress is normal, chronic stress can lead to health problems.

Symptoms of chronic stress:
• Headaches and muscle tension
• Sleep problems
• Anxiety and irritability
• Difficulty concentrating
• Digestive issues
• Weakened immunity
• Cardiovascular problems

Learning to manage stress is key to health and well-being.`
  },
  howWeHelp: [
    { icon: Gauge, title: "Stress assessment", description: "Identifying the sources and level of stress in your life." },
    { icon: Brain, title: "Cognitive techniques", description: "Changing stress-inducing thought patterns." },
    { icon: Wind, title: "Relaxation", description: "Breathing exercises and calming techniques." },
    { icon: Heart, title: "Lifestyle changes", description: "Lifestyle adjustments for sustainable stress reduction." }
  ],
  benefits: [
    "Reduced tension and worry",
    "Better sleep",
    "Increased productivity",
    "Improved physical health",
    "Work–life balance",
    "Greater resilience to stress"
  ]
};

const Stress = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Stress;
