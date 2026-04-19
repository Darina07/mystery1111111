import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Target, BookOpen, Sparkles } from "lucide-react";
import dyslexiaHeader from "@/assets/dyslexia-header.jpg";

const conditionData: ConditionData = {
  title: "Dyslexia",
  subtitle: "Child counseling",
  description: "Specialized support for children with dyslexia and their families.",
  heroImage: dyslexiaHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What is dyslexia?",
    content: `Dyslexia is a specific learning disorder that affects reading and related language skills. It is not related to intelligence — many people with dyslexia have average or above-average intellect.

Dyslexia is a neurobiological condition, meaning the brain processes written information differently. With the right support, children with dyslexia can achieve academic success.

Signs of dyslexia:
• Difficulty recognizing letters and words
• Slow and inaccurate reading
• Difficulty pronouncing new words
• Confusing similar letters (b/d, p/q)
• Spelling difficulties
• Avoiding reading aloud`
  },
  howWeHelp: [
    { icon: Brain, title: "Diagnosis", description: "Comprehensive assessment to determine the type and severity of dyslexia." },
    { icon: BookOpen, title: "Specialized methods", description: "Using proven multisensory techniques for reading instruction." },
    { icon: Target, title: "Individual approach", description: "A program tailored to the child's unique learning profile." },
    { icon: Sparkles, title: "Building confidence", description: "Developing strengths and boosting self-esteem." }
  ],
  benefits: [
    "Improved reading skills",
    "Better spelling",
    "Greater confidence at school",
    "Compensation strategies",
    "Development of strengths",
    "Support for the family"
  ]
};

const Dyslexia = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Dyslexia;
