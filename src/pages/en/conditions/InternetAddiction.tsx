import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Target, Shield, Users } from "lucide-react";
import internetAddictionHeader from "@/assets/internet-addiction-header.jpg";

const conditionData: ConditionData = {
  title: "Internet and Digital Addiction",
  subtitle: "Psychological counseling",
  description: "Professional support for restoring a healthy balance with technology.",
  heroImage: internetAddictionHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is internet addiction?",
    content: `Internet addiction is a behavioral disorder in which internet use becomes compulsive and out of control. It includes various forms: video game addiction, online gambling, pornography, social media, or just aimless browsing.

Like other addictions, the brain begins to rely on digital stimulation to produce dopamine, creating a cycle of dependence. In the digital age this problem is becoming increasingly common.

Signs of addiction:
• Spending more and more time online for the same satisfaction
• Losing track of time when using the internet
• Neglecting work, studies, or relationships
• Anxiety or irritability when unable to access
• Using the internet to escape problems`
  },
  howWeHelp: [
    { icon: Brain, title: "Understanding triggers", description: "Exploring the emotional and situational factors leading to overuse." },
    { icon: Target, title: "Digital detox", description: "Building a structured plan for balanced technology use." },
    { icon: Shield, title: "Alternative activities", description: "Developing offline hobbies and interests to replace screen time." },
    { icon: Users, title: "Improving relationships", description: "Restoring real social connections and communication skills." }
  ],
  benefits: [
    "Restored healthy balance",
    "Improved focus and productivity",
    "Better sleep",
    "Stronger real-life relationships",
    "Developing new hobbies and interests",
    "Greater life satisfaction"
  ]
};

const InternetAddiction = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default InternetAddiction;
