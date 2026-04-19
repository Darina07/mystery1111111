import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Moon, Brain, Clock, Shield } from "lucide-react";
import insomniaHeader from "@/assets/insomnia-header.jpg";

const conditionData: ConditionData = {
  title: "Insomnia",
  subtitle: "Psychological counseling",
  description: "Restore healthy sleep with proven psychological methods.",
  heroImage: insomniaHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is insomnia?",
    content: `Insomnia is a sleep disorder in which a person has difficulty falling asleep, staying asleep, or both. It can be short-term or chronic.

Symptoms of insomnia:
• Difficulty falling asleep
• Frequent waking during the night
• Early morning waking
• Feeling tired after sleep
• Daytime fatigue
• Irritability and difficulty concentrating
• Anxiety about sleep itself

Cognitive Behavioral Therapy for Insomnia (CBT-I) is the gold standard treatment.`
  },
  howWeHelp: [
    { icon: Moon, title: "Sleep hygiene", description: "Building healthy habits and routines for sleep." },
    { icon: Brain, title: "Cognitive therapy", description: "Working with anxious thoughts that interfere with sleep." },
    { icon: Clock, title: "Schedule regulation", description: "Stabilizing the sleep–wake cycle." },
    { icon: Shield, title: "Relaxation techniques", description: "Methods for calming mind and body before bed." }
  ],
  benefits: [
    "Faster sleep onset",
    "Deeper, more restorative sleep",
    "Daytime energy",
    "Reduced anxiety about sleep",
    "Better mood and concentration",
    "Long-term healthy sleep"
  ]
};

const Insomnia = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Insomnia;
