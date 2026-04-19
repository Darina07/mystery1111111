import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Target, Shield, Heart } from "lucide-react";
import socialMediaAddictionHeader from "@/assets/social-media-addiction-header.jpg";

const conditionData: ConditionData = {
  title: "Social Media Addiction",
  subtitle: "Psychological counseling",
  description: "Professional support for breaking free from social media addiction.",
  heroImage: socialMediaAddictionHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is social media addiction?",
    content: `Social media addiction is a behavioral disorder characterized by an uncontrollable urge to check and use platforms like Facebook, Instagram, TikTok, and others.

These platforms' algorithms are deliberately designed to activate the brain's reward centers, creating a cycle similar to gambling addiction — every new notification or like triggers a dopamine surge.

Signs of addiction:
• The first and last thing each day is checking your phone
• A constant need to share everything online
• Anxiety when you can't check your profiles
• Comparing your life to others and feeling inadequate
• Self-esteem dependent on likes and comments`
  },
  howWeHelp: [
    { icon: Brain, title: "Awareness of impact", description: "Understanding how social media affects your mood, self-esteem, and relationships." },
    { icon: Target, title: "Healthy boundaries", description: "Practical strategies for limiting social media time." },
    { icon: Shield, title: "Building self-esteem", description: "Working on internal sources of worth that don't depend on external validation." },
    { icon: Heart, title: "Real connections", description: "Investing in authentic relationships and being present in real life." }
  ],
  benefits: [
    "Freedom from constant checking",
    "Higher self-esteem",
    "Better real-world relationships",
    "Improved focus and productivity",
    "Reduced anxiety and comparison",
    "A fuller experience of life"
  ]
};

const SocialMediaAddiction = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default SocialMediaAddiction;
