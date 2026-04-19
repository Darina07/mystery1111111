import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Target, Focus, Sparkles } from "lucide-react";
import memoryConcentrationHeader from "@/assets/memory-concentration-header.jpg";

const conditionData: ConditionData = {
  title: "Memory and Concentration Difficulties",
  subtitle: "Child counseling",
  description: "Specialized support for children with memory and concentration problems.",
  heroImage: memoryConcentrationHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What are memory and concentration problems?",
    content: `Difficulties with memory and concentration can significantly affect learning and daily functioning. These problems can stand on their own or be part of other conditions like ADHD.

Working memory — the ability to hold information in mind while processing it — is key to learning. Difficulties in this area make it hard to follow instructions, solve problems, and absorb new material.

Signs of difficulties:
• Forgetting instructions immediately after receiving them
• Difficulty following multi-step directions
• Easy distraction by the surroundings
• Difficulty remembering what has been learned
• Losing items and forgetting tasks
• Organizational problems`
  },
  howWeHelp: [
    { icon: Brain, title: "Cognitive assessment", description: "Diagnosing specific areas of memory and attention difficulty." },
    { icon: Focus, title: "Attention training", description: "Exercises to improve focus and sustained attention." },
    { icon: Target, title: "Mnemonic techniques", description: "Strategies for easier remembering and retrieving information." },
    { icon: Sparkles, title: "Organizational skills", description: "Developing habits and systems for better organization." }
  ],
  benefits: [
    "Improved working memory",
    "Better concentration",
    "Effective memorization strategies",
    "Better school performance",
    "Improved organization",
    "Greater independence"
  ]
};

const MemoryConcentration = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default MemoryConcentration;
