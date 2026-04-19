import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Target, Calculator, Sparkles } from "lucide-react";
import dyscalculiaHeader from "@/assets/dyscalculia-header.jpg";

const conditionData: ConditionData = {
  title: "Dyscalculia",
  subtitle: "Child counseling",
  description: "Specialized support for children with dyscalculia and math difficulties.",
  heroImage: dyscalculiaHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What is dyscalculia?",
    content: `Dyscalculia is a specific learning disorder that affects understanding and working with numbers and mathematical concepts. Like dyslexia, it is not related to general intelligence.

Children with dyscalculia may struggle with basic math operations, understanding number relationships, and applying math in daily life.

Signs of dyscalculia:
• Difficulty with counting and number sequences
• Trouble understanding "more" and "less"
• Difficulty memorizing math facts
• Confusion when reading a clock or handling money
• Spatial orientation difficulties
• Math anxiety`
  },
  howWeHelp: [
    { icon: Brain, title: "Diagnosis", description: "Assessing math abilities and identifying specific difficulties." },
    { icon: Calculator, title: "Multisensory approach", description: "Using concrete materials and visual methods to understand numbers." },
    { icon: Target, title: "Step by step", description: "Breaking complex concepts into small, manageable steps." },
    { icon: Sparkles, title: "Practical math", description: "Connecting math to real-life situations." }
  ],
  benefits: [
    "Improved understanding of numbers",
    "Easier handling of math",
    "Reduced math anxiety",
    "Practical skills for everyday life",
    "Greater confidence",
    "Strategies for school success"
  ]
};

const Dyscalculia = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Dyscalculia;
