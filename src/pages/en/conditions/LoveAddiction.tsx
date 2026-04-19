import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Target, Shield, Users } from "lucide-react";
import groupLoveBg from "@/assets/group-love-bg.jpg";

const conditionData: ConditionData = {
  title: "Love Addiction",
  subtitle: "Psychological counseling",
  description: "Professional support for breaking free from unhealthy emotional attachments and building balanced relationships.",
  heroImage: groupLoveBg,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What is love addiction?",
    content: `Love addiction is a behavioral pattern in which a person develops an unhealthy emotional attachment to another person. It is characterized by obsessive thoughts, compulsive behavior, and intense fear of abandonment.

Unlike healthy love, love addiction creates an imbalance — the person loses themselves in the other, neglects their own needs, and often stays in toxic relationships.

Signs of love addiction:
• Obsessive thoughts about a partner or object of attachment
• Inability to function without constant contact
• Neglecting friends, family, and personal interests
• Intense fear of abandonment or rejection
• Staying in unhealthy or toxic relationships
• Feelings of emptiness and meaninglessness without a partner`
  },
  howWeHelp: [
    { icon: Heart, title: "Understanding the roots", description: "Exploring childhood experiences and attachment patterns that led to dependence." },
    { icon: Target, title: "Building identity", description: "Restoring identity and worth outside the context of relationships." },
    { icon: Shield, title: "Healthy boundaries", description: "Developing skills for setting personal boundaries and recognizing unhealthy dynamics." },
    { icon: Users, title: "Balanced relationships", description: "Building the capacity for healthy, mutual, and balanced emotional connections." }
  ],
  benefits: [
    "Freedom from obsessive thoughts and behaviors",
    "Restored self-esteem and identity",
    "Recognizing healthy vs. unhealthy relationships",
    "Overcoming the fear of being alone",
    "Building emotional independence",
    "Capacity for true, balanced love"
  ]
};

const LoveAddiction = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default LoveAddiction;
