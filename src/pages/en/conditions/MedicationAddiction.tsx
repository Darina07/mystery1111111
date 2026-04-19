import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Target, Shield, Heart } from "lucide-react";
import medicationAddictionHeader from "@/assets/medication-addiction-header.jpg";

const conditionData: ConditionData = {
  title: "Medication Addiction",
  subtitle: "Psychological counseling",
  description: "Professional support for safely overcoming dependence on medications.",
  heroImage: medicationAddictionHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is medication addiction?",
    content: `Medication addiction develops with prolonged use of certain drugs — painkillers, sedatives, sleep aids, or stimulants. It is characterized by physical and psychological dependence in which a person cannot function normally without the medication.

Unlike other addictions, it often begins with legitimate medical use, which makes it harder to recognize. Over time the body builds tolerance and requires increasingly larger doses.

Signs of addiction:
• Using medication in larger doses than prescribed
• Continuing use after symptoms have resolved
• Visiting multiple doctors to obtain prescriptions
• Withdrawal symptoms when trying to stop
• Excessive concern about medication supply`
  },
  howWeHelp: [
    { icon: Brain, title: "Individual assessment", description: "Comprehensive assessment of the type and severity of dependence to create a personalized plan." },
    { icon: Target, title: "Gradual reduction", description: "Support in safely and gradually reducing doses under medical supervision." },
    { icon: Shield, title: "Alternative strategies", description: "Developing non-medication methods for handling pain, anxiety, or insomnia." },
    { icon: Heart, title: "Long-term support", description: "Building resilience and support to prevent returning to misuse." }
  ],
  benefits: [
    "Safe release from dependence",
    "Restoring the body's natural balance",
    "Learning non-medication coping methods",
    "Improved sleep quality",
    "Increased energy and vitality",
    "Building a healthy lifestyle"
  ]
};

const MedicationAddiction = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default MedicationAddiction;
