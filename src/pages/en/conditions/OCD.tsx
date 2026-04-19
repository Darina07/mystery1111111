import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { RefreshCw, Brain, Target, Shield } from "lucide-react";
import ocdHeader from "@/assets/ocd-header.jpg";

const conditionData: ConditionData = {
  title: "OCD",
  subtitle: "Psychological counseling",
  description: "Specialized help for managing intrusive thoughts and rituals.",
  heroImage: ocdHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is OCD?",
    content: `Obsessive-compulsive disorder is characterized by intrusive thoughts (obsessions) and repetitive actions (compulsions) performed to reduce anxiety.

Examples of obsessions and compulsions:
• Fear of contamination → Excessive handwashing
• Fear of misfortune → Checking (locks, stoves)
• Need for symmetry → Arranging in a specific way
• Intrusive thoughts → Mental rituals to neutralize them
• Fear of harm → Avoidance or checking

OCD is a treatable condition with the right therapeutic approach — Exposure and Response Prevention (ERP).`
  },
  howWeHelp: [
    { icon: RefreshCw, title: "Exposure and response prevention", description: "The gold standard in OCD treatment — exposure without performing rituals." },
    { icon: Brain, title: "Cognitive therapy", description: "Working with the beliefs that maintain the symptoms." },
    { icon: Target, title: "Gradual approach", description: "Overcoming difficulties at a pace that suits you." },
    { icon: Shield, title: "Relapse prevention", description: "Strategies for sustaining results long-term." }
  ],
  benefits: [
    "Fewer intrusive thoughts",
    "Freedom from rituals",
    "Less time spent in anxiety",
    "Restored normal functioning",
    "Improved quality of life",
    "Freedom to live fully"
  ]
};

const OCD = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default OCD;
