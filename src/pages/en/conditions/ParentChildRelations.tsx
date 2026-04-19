import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Heart, Users, MessageCircle, Shield } from "lucide-react";
import parentChildHeader from "@/assets/parent-child-header.jpg";

const conditionData: ConditionData = {
  title: "Parent–Child Relationships",
  subtitle: "Family counseling",
  description: "Support for healthier, deeper connections between parents and children.",
  heroImage: parentChildHeader,
  parentService: { name: "Family and couples counseling", href: "/en/services/family-counseling" },
  whatIs: {
    title: "Parent–child relationships",
    content: `The parent–child relationship shapes a child's emotional development and the family's overall harmony. Difficulties in this connection can arise at any age.

Common challenges:
• Communication difficulties with children or teens
• Conflicts and power struggles
• Behavioral problems
• Emotional distance
• Difficulty setting boundaries
• Differences in parenting styles
• Adapting to a child's developmental stages
• Effects of family stress on the child

With support, parents can build stronger, more loving relationships with their children at any age.`
  },
  howWeHelp: [
    { icon: MessageCircle, title: "Better communication", description: "Tools for connecting with children at every age." },
    { icon: Heart, title: "Emotional connection", description: "Deepening the bond between parent and child." },
    { icon: Shield, title: "Healthy boundaries", description: "Setting clear, loving limits without harsh punishment." },
    { icon: Users, title: "Family approach", description: "Working with the whole family system when needed." }
  ],
  benefits: [
    "Stronger parent–child bond",
    "Better communication",
    "Fewer conflicts",
    "More confidence as a parent",
    "Healthier family dynamics",
    "A child who feels seen and supported"
  ]
};

const ParentChildRelations = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default ParentChildRelations;
