import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Users, MessageCircle, Shield } from "lucide-react";
import infidelityHeader from "@/assets/infidelity-header.jpg";

const conditionData: ConditionData = {
  title: "Infidelity and Relationship Recovery",
  subtitle: "Family counseling",
  description: "Specialized support for couples after infidelity and the recovery process.",
  heroImage: infidelityHeader,
  parentService: { name: "Family and couples counseling", href: "/en/services/family-counseling" },
  whatIs: {
    title: "Recovery after infidelity",
    content: `Infidelity is one of the most painful crises a couple can face. It shatters trust, identity, and the sense of safety in the relationship. Recovery is possible — but it takes time, honesty, and commitment from both partners.

The recovery process includes:
• Processing pain and anger
• Honest conversation about what happened
• Understanding the underlying causes
• Rebuilding trust step by step
• Restoring emotional and physical intimacy
• Defining a new vision for the relationship

Each couple's journey is unique. Some emerge stronger; others find clarity to part with respect.`
  },
  howWeHelp: [
    { icon: Heart, title: "Processing the pain", description: "A safe space for the betrayed partner to feel and express everything." },
    { icon: MessageCircle, title: "Honest dialogue", description: "Structured conversations about what happened and why." },
    { icon: Shield, title: "Rebuilding trust", description: "A clear path for restoring safety and reliability." },
    { icon: Users, title: "Couples work", description: "Joint sessions to define the future of the relationship." }
  ],
  benefits: [
    "Healthy processing of the trauma",
    "Clarity about the relationship",
    "Restored or transformed trust",
    "Deeper understanding of each other",
    "Tools for a healthier relationship",
    "A conscious decision about the future"
  ]
};

const Infidelity = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default Infidelity;
