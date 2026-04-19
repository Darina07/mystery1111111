import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Activity, Brain, Heart, Shield } from "lucide-react";
import bipolarHeader from "@/assets/bipolar-header.jpg";

const conditionData: ConditionData = {
  title: "Bipolar Affective Disorder",
  subtitle: "Psychological counseling",
  description: "Support for stabilizing mood and managing symptoms.",
  heroImage: bipolarHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is bipolar disorder?",
    content: `Bipolar affective disorder is characterized by extreme mood changes — from manic to depressive episodes.

Symptoms during mania:
• Increased energy and euphoria
• Reduced need for sleep
• Rapid speech and thoughts
• Impulsive behavior

Symptoms during depression:
• Sadness and hopelessness
• Loss of interest
• Fatigue and lack of energy
• Thoughts of death

With proper treatment and psychological support, stability and a fulfilling life are possible.`
  },
  howWeHelp: [
    { icon: Activity, title: "Mood monitoring", description: "Learning to recognize early signs of episodes." },
    { icon: Brain, title: "Psychoeducation", description: "Understanding the disorder and its management." },
    { icon: Heart, title: "Stress management", description: "Techniques to reduce episode triggers." },
    { icon: Shield, title: "Support for loved ones", description: "Helping the family cope with the challenges." }
  ],
  benefits: [
    "Mood stabilization",
    "Early symptom recognition",
    "Improved relationships",
    "A more predictable daily life",
    "Reduced risk of episodes",
    "Better quality of life"
  ]
};

const Bipolar = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Bipolar;
