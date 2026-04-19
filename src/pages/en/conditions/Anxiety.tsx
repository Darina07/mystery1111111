import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Wind, Shield } from "lucide-react";
import anxietyHeader from "@/assets/anxiety-header.jpg";

const conditionData: ConditionData = {
  title: "Anxiety",
  subtitle: "Psychological counseling",
  description: "Effective methods for managing anxiety and restoring inner calm.",
  heroImage: anxietyHeader,
  parentService: {
    name: "Psychological counseling",
    href: "/en/services/psychological-counseling"
  },
  whatIs: {
    title: "What is anxiety?",
    content: `Anxiety is a natural response to stress, but when it becomes excessive or persistent, it can interfere with daily life.

Symptoms of anxiety:
• Constant worry and tension
• Difficulty concentrating
• Sleep disturbances
• Rapid heartbeat
• Shortness of breath or chest tightness
• Muscle tension
• Avoidance of anxiety-provoking situations

Anxiety is one of the most successfully treatable conditions with the right therapeutic approach.`
  },
  howWeHelp: [
    { icon: Brain, title: "Cognitive techniques", description: "Recognizing and changing anxious thoughts and catastrophic scenarios." },
    { icon: Wind, title: "Relaxation methods", description: "Breathing exercises and techniques for fast self-soothing." },
    { icon: Heart, title: "Emotional regulation", description: "Learning to manage emotional reactions effectively." },
    { icon: Shield, title: "Exposure therapy", description: "Gradually overcoming avoidance behavior." }
  ],
  benefits: [
    "Reduced anxiety symptoms",
    "Better sleep and relaxation",
    "Confidence in stressful situations",
    "Improved quality of life",
    "Long-term coping strategies",
    "Restored inner peace"
  ]
};

const Anxiety = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Anxiety;
