import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import comingOutHeader from "@/assets/coming-out-header.jpg";

const conditionData: ConditionData = {
  title: "Coming Out",
  subtitle: "LGBT+ psychological counseling",
  description: "Professional support during the coming out process with family, friends, and colleagues.",
  heroImage: comingOutHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is coming out?",
    content: `Coming out is the process of sharing your sexual orientation or gender identity with others. It is a deeply personal and often emotionally charged experience that may continue throughout life.

There is no "right" way to come out — every person experiences it differently and at their own pace. It is important to feel ready and supported in this process.

Stages and challenges:
• Internal acceptance before external disclosure
• Choosing the right time and people
• Fear of loved ones' reactions
• Managing expectations
• Coping with different reactions — from acceptance to rejection`
  },
  howWeHelp: [
    { icon: Brain, title: "Preparing for the conversation", description: "We help you prepare emotionally and practically for important conversations." },
    { icon: Heart, title: "Managing emotions", description: "Support in handling anxiety, fear, and uncertainty around the process." },
    { icon: Shield, title: "Coping with reactions", description: "Strategies for handling a range of reactions — positive and negative." },
    { icon: Users, title: "Building support", description: "Helping you identify and build a network of supportive people." }
  ],
  benefits: [
    "Confidence in the disclosure process",
    "Less anxiety around coming out",
    "Strategies for various situations",
    "Emotional preparedness",
    "More authentic relationships afterward",
    "Support through difficult reactions"
  ]
};

const ComingOut = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default ComingOut;
