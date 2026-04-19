import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import childAdaptationHeader from "@/assets/child-adaptation-header.jpg";

const conditionData: ConditionData = {
  title: "Adaptation Difficulties",
  subtitle: "Child counseling",
  description: "Support for children adapting to new situations and environments.",
  heroImage: childAdaptationHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "What are adaptation difficulties?",
    content: `Adaptation is the process of adjusting to new conditions, people, or situations. For some children this process can be especially difficult and cause significant stress.

Adaptation difficulties can appear when changing schools, moving to a new home, parental separation, the birth of a sibling, or any significant change in daily life.

Signs of adaptation difficulties:
• Increased anxiety and worry
• Changes in sleep and appetite
• Refusal to attend school or kindergarten
• Behavioral regression (returning to younger habits)
• Social withdrawal
• Frequent complaints of pain without medical cause`
  },
  howWeHelp: [
    { icon: Brain, title: "Understanding the change", description: "Helping the child make sense of and accept the new situation." },
    { icon: Heart, title: "Emotional support", description: "Creating a safe space for expressing feelings." },
    { icon: Shield, title: "Coping strategies", description: "Developing skills for adaptation and flexibility." },
    { icon: Users, title: "Family work", description: "Guiding parents on how to support the child through transition." }
  ],
  benefits: [
    "Easier adjustment to changes",
    "Reduced anxiety",
    "Restored sense of security",
    "Better handling of future changes",
    "Strengthened emotional resilience",
    "Improved self-confidence"
  ]
};

const AdaptationDifficulties = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default AdaptationDifficulties;
