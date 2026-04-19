import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Battery, Brain, Heart, Target } from "lucide-react";
import burnoutHeader from "@/assets/burnout-header.jpg";

const conditionData: ConditionData = {
  title: "Burnout",
  subtitle: "Psychological counseling",
  description: "Support for overcoming burnout and restoring energy and motivation.",
  heroImage: burnoutHeader,
  parentService: {
    name: "Psychological counseling",
    href: "/en/services/psychological-counseling"
  },
  whatIs: {
    title: "What is burnout?",
    content: `Burnout is a state of chronic physical and emotional exhaustion caused by prolonged stress in the workplace.

Symptoms of burnout:
• Constant fatigue and exhaustion
• Cynicism and negativity toward work
• Reduced effectiveness and productivity
• Feelings of meaninglessness
• Emotional detachment
• Physical symptoms (headaches, insomnia)
• Loss of motivation

It is important to address burnout in time, before it leads to serious health consequences.`
  },
  howWeHelp: [
    { icon: Battery, title: "Restoring energy", description: "Strategies for physical and emotional recovery." },
    { icon: Brain, title: "Reassessing priorities", description: "Reviewing work habits and expectations." },
    { icon: Heart, title: "Self-care", description: "Building sustainable practices for caring for yourself." },
    { icon: Target, title: "Workplace boundaries", description: "Learning to set healthy boundaries." }
  ],
  benefits: [
    "Restored energy and motivation",
    "Work–life balance",
    "Clarity about career goals",
    "Prevention of future burnout",
    "Improved quality of life",
    "Renewed satisfaction at work"
  ]
};

const Burnout = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Burnout;
