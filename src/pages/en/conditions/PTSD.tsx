import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Shield, Brain, Heart, Eye } from "lucide-react";
import ptsdHeader from "@/assets/ptsd-header.jpg";

const conditionData: ConditionData = {
  title: "PTSD",
  subtitle: "Psychological counseling",
  description: "Specialized help for recovery after traumatic experiences.",
  heroImage: ptsdHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is PTSD?",
    content: `Post-traumatic stress disorder can develop after experiencing a traumatic event — violence, an accident, loss, or another life-threatening event.

Symptoms of PTSD:
• Intrusive memories and flashbacks
• Nightmares related to the event
• Avoidance of reminders, places, and people
• Hypervigilance and being easily startled
• Emotional numbness
• Negative thoughts about yourself and the world
• Difficulty concentrating and sleeping

With the right therapy, recovery is possible.`
  },
  howWeHelp: [
    { icon: Shield, title: "Establishing safety", description: "Building a sense of security and stability." },
    { icon: Brain, title: "Trauma processing", description: "Specialized techniques for processing traumatic memories." },
    { icon: Eye, title: "EMDR therapy", description: "Eye Movement Desensitization and Reprocessing." },
    { icon: Heart, title: "Emotional regulation", description: "Managing intense emotional reactions." }
  ],
  benefits: [
    "Reduction of intrusive memories",
    "Better sleep without nightmares",
    "Restored sense of safety",
    "Ability to live in the present",
    "A new perspective",
    "Regaining control over your life"
  ]
};

const PTSD = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default PTSD;
