import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Target, Shield, Users } from "lucide-react";
import drugAddictionHeader from "@/assets/drug-addiction-header.jpg";

const conditionData: ConditionData = {
  title: "Drug Addiction",
  subtitle: "Psychological counseling",
  description: "Professional support for overcoming drug addiction and building a new life.",
  heroImage: drugAddictionHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is drug addiction?",
    content: `Drug addiction is a chronic disease characterized by compulsive seeking and use of drugs despite harmful consequences. Drugs change the structure and function of the brain, making it extremely difficult to stop without professional help.

Addiction affects brain centers responsible for reward, decision-making, and self-control. It can develop from the use of illegal substances or the misuse of medications.

Signs of addiction:
• Inability to stop despite the desire to
• Increasing tolerance — needing larger doses
• Withdrawal syndrome when stopping
• Loss of interest in previous activities
• Risky behavior to obtain substances
• Social isolation and secrecy`
  },
  howWeHelp: [
    { icon: Brain, title: "Psychological assessment", description: "Comprehensive assessment and a personalized recovery plan." },
    { icon: Target, title: "Working with triggers", description: "Identifying and managing situations and emotions that lead to use." },
    { icon: Shield, title: "Relapse prevention", description: "Skills for recognizing warning signs and handling crisis moments." },
    { icon: Users, title: "Family support", description: "Involving the family in recovery and building a supportive environment." }
  ],
  benefits: [
    "Breaking the cycle of addiction",
    "Understanding the reasons for use",
    "Developing healthy coping strategies",
    "Restoring social connections",
    "Improved mental health",
    "Building a new life without substances"
  ]
};

const DrugAddiction = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default DrugAddiction;
