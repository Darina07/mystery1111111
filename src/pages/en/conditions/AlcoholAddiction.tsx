import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Target, Shield, Heart } from "lucide-react";
import alcoholAddictionHeader from "@/assets/alcohol-addiction-header.jpg";

const conditionData: ConditionData = {
  title: "Alcohol Addiction",
  subtitle: "Psychological counseling",
  description: "Professional support for overcoming alcohol addiction and regaining control of your life.",
  heroImage: alcoholAddictionHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is alcohol addiction?",
    content: `Alcohol addiction (alcoholism) is a chronic disease in which a person develops physical and psychological dependence on alcohol. It is characterized by a compulsive need for alcohol, loss of control over the amount consumed, and continued use despite clear negative consequences.

Addiction affects brain functions related to reward, motivation, and memory. Problematic alcohol use can affect anyone — regardless of age, profession, or social status.

Signs of addiction:
• Inability to stop or control use
• Increasing tolerance — needing more alcohol for the same effect
• Withdrawal symptoms when stopping (tremors, sweating, anxiety)
• Neglecting responsibilities and hobbies because of drinking
• Continuing despite relationship or health problems`
  },
  howWeHelp: [
    { icon: Brain, title: "Understanding the mechanisms", description: "We help you understand the psychological and physiological mechanisms of addiction and what drives it." },
    { icon: Target, title: "Identifying triggers", description: "We work to recognize the situations, emotions, and thoughts that lead to use." },
    { icon: Shield, title: "Coping strategies", description: "We develop concrete techniques for handling cravings and preventing relapse." },
    { icon: Heart, title: "Restoring relationships", description: "We support you in rebuilding damaged family and social connections." }
  ],
  benefits: [
    "Understanding the causes of addiction",
    "Developing self-control skills",
    "Managing alcohol cravings",
    "Improved physical health",
    "Restored relationships",
    "A new way of living without alcohol"
  ]
};

const AlcoholAddiction = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default AlcoholAddiction;
