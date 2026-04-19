import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Brain, Heart, Shield, Users } from "lucide-react";
import lgbtSupportHeader from "@/assets/lgbt-support-header.jpg";

const conditionData: ConditionData = {
  title: "Psychological Support for LGBT+ People",
  subtitle: "Psychological counseling",
  description: "Professional and affirming support for LGBT+ people in a safe, non-judgmental environment.",
  heroImage: lgbtSupportHeader,
  parentService: { name: "Psychological counseling", href: "/en/services/psychological-counseling" },
  whatIs: {
    title: "What we offer LGBT+ people",
    content: `Our center provides specialized psychological support for LGBT+ people in a safe, accepting, and non-judgmental environment. We understand the unique challenges faced by people from the LGBT+ community.

We work with an affirmative approach that recognizes and respects diversity in sexual orientation and gender identity. Our specialists are trained to provide competent care tailored to each client's specific needs.

Topics we can help with:
• Self-acceptance and building a positive identity
• The coming out process
• Coping with discrimination and stigma
• Relationships with partners and family
• Anxiety, depression, and stress`
  },
  howWeHelp: [
    { icon: Heart, title: "Safe space", description: "We create an accepting environment where you can be yourself without fear of judgment." },
    { icon: Brain, title: "Affirmative approach", description: "We use an evidence-based approach that affirms and respects your identity." },
    { icon: Shield, title: "Coping with stress", description: "We help you address minority stress and external discrimination." },
    { icon: Users, title: "Building support", description: "We support you in finding and building a supportive social network." }
  ],
  benefits: [
    "Increased self-acceptance and self-respect",
    "Coping with internalized homophobia/transphobia",
    "Better mental health",
    "Stronger relationships",
    "Building an authentic life",
    "Reduced isolation"
  ]
};

const LGBTSupport = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default LGBTSupport;
