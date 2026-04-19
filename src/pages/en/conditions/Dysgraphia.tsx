import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Target, PenTool, Sparkles } from "lucide-react";
import dysgraphiaHeader from "@/assets/dysgraphia-header.jpg";

const conditionData: ConditionData = {
  title: "Dysgraphia",
  subtitle: "Child counseling",
  description: "Specialized support for children with dysgraphia and writing difficulties.",
  heroImage: dysgraphiaHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What is dysgraphia?",
    content: `Dysgraphia is a specific learning disorder that affects writing skills. Children with dysgraphia have difficulty with handwriting, spelling, and organizing their thoughts on paper.

It is not a matter of laziness or lack of effort — dysgraphia is a neurological condition that requires a specialized approach and support.

Signs of dysgraphia:
• Illegible or uneven handwriting
• Improper pencil grip
• Slow and tiring writing
• Difficulty with spacing between letters and words
• Frequent spelling errors
• Difficulty copying text
• Avoiding written tasks`
  },
  howWeHelp: [
    { icon: Brain, title: "Skill assessment", description: "Diagnosing the child's specific difficulties and strengths." },
    { icon: PenTool, title: "Motor exercises", description: "Developing fine motor skills and hand-eye coordination." },
    { icon: Target, title: "Writing techniques", description: "Teaching effective strategies for improving handwriting." },
    { icon: Sparkles, title: "Alternative methods", description: "Using technology and assistive tools to compensate." }
  ],
  benefits: [
    "Improved handwriting",
    "Faster, easier writing",
    "Less fatigue when writing",
    "Strategies for school",
    "Higher self-esteem",
    "Alternative ways to express ideas"
  ]
};

const Dysgraphia = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Dysgraphia;
