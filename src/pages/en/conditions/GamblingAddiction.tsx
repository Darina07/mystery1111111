import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Target, Shield, Heart } from "lucide-react";
import gamblingAddictionHeader from "@/assets/gambling-addiction-header.jpg";

const conditionData: ConditionData = {
  title: "Gambling Addiction",
  subtitle: "Psychological counseling",
  description: "Professional support for overcoming gambling addiction and regaining control.",
  heroImage: gamblingAddictionHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is gambling addiction?",
    content: `Gambling addiction (pathological gambling) is a behavioral disorder in which a person cannot control the urge to bet. This leads to continued gambling behavior despite serious negative consequences.

The brain responds to gambling much like it does to drugs — releasing dopamine, which creates a cycle of addiction. Each win activates pleasure centers, and losses push the player to chase "recovery".

Signs of addiction:
• Inability to stop or limit betting
• Betting larger sums to achieve excitement
• Lying to loved ones about the size of bets
• Borrowing or stealing money to gamble
• Loss of important relationships or opportunities because of gambling`
  },
  howWeHelp: [
    { icon: Brain, title: "Cognitive-behavioral therapy", description: "Working on distorted beliefs about gambling and changing automatic thought patterns." },
    { icon: Target, title: "Impulse management", description: "Developing techniques for controlling impulses and delaying the urge to bet." },
    { icon: Shield, title: "Financial counseling", description: "Support in building healthy financial habits and dealing with debt." },
    { icon: Heart, title: "Restoring trust", description: "Working on repairing damaged family and social relationships." }
  ],
  benefits: [
    "Freedom from gambling addiction",
    "Restored financial stability",
    "Improved family relationships",
    "Developing healthy hobbies",
    "Increased self-esteem",
    "A fulfilling life without gambling"
  ]
};

const GamblingAddiction = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default GamblingAddiction;
