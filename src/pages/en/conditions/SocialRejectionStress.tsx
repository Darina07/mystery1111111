import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import socialRejectionStressHeader from "@/assets/social-rejection-stress-header.jpg";

const conditionData: ConditionData = {
  title: "Social Rejection Stress",
  subtitle: "LGBT+ psychological counseling",
  description: "Professional support for coping with the stress of discrimination and social rejection.",
  heroImage: socialRejectionStressHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is minority stress?",
    content: `Minority stress describes the chronic stress LGBT+ people experience due to belonging to a stigmatized group. This stress is unique, socially based, and added on top of ordinary life stressors.

Research shows this type of stress significantly affects mental and physical health. It is important to recognize and address it to improve quality of life.

Sources of stress:
• Direct discrimination and harassment
• Fear of rejection and hiding identity
• Internalized homophobia/transphobia
• Microaggressions in everyday life
• Lack of social support and isolation
• Family rejection`
  },
  howWeHelp: [
    { icon: Brain, title: "Recognizing stress", description: "Helping you understand how minority stress affects your health and well-being." },
    { icon: Heart, title: "Emotional processing", description: "Working on processing traumatic experiences and painful events." },
    { icon: Shield, title: "Building coping strategies", description: "Developing effective ways of handling discrimination and microaggressions." },
    { icon: Users, title: "Strengthening connections", description: "Supporting the building of healthy relationships and community." }
  ],
  benefits: [
    "Reduced stress and anxiety",
    "Better coping mechanisms",
    "Increased resilience",
    "Healthier relationships",
    "Improved mental health",
    "A stronger sense of community"
  ]
};

const SocialRejectionStress = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default SocialRejectionStress;
