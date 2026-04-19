import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Users, Sparkles } from "lucide-react";
import chronicIllnessHeader from "@/assets/chronic-illness-header.jpg";

const conditionData: ConditionData = {
  title: "Chronic Physical Illness",
  subtitle: "Child counseling",
  description: "Psychological support for children with chronic physical illnesses.",
  heroImage: chronicIllnessHeader,
  parentService: { name: "Child and adolescent counseling", href: "/en/services/child-counseling" },
  whatIs: {
    title: "Psychological support for chronic illness",
    content: `Chronic physical illnesses such as diabetes, asthma, heart conditions, and others can significantly affect a child's mental health. Psychological support is an important part of holistic care.

Areas of support:
• Adapting to life with the illness
• Coping with pain and discomfort
• Managing anxiety
• Working on self-esteem
• Social integration
• Family support`
  },
  howWeHelp: [
    { icon: Heart, title: "Emotional support", description: "Helping the child cope with emotions related to the illness." },
    { icon: Brain, title: "Cognitive techniques", description: "Building skills for managing pain and anxiety." },
    { icon: Users, title: "Family therapy", description: "Supporting the whole family in caring for the child." },
    { icon: Sparkles, title: "Quality of life", description: "Working to improve everyday functioning." }
  ],
  benefits: [
    "Better coping with the illness",
    "Reduced anxiety and depression",
    "Improved adherence to treatment",
    "Higher self-esteem",
    "Stronger family support",
    "Improved quality of life"
  ]
};

const ChronicIllness = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default ChronicIllness;
