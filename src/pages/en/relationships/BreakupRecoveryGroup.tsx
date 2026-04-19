import { Heart, Sunrise, Shield, Sparkles } from "lucide-react";
import groupBreakupWho from "@/assets/group-breakup-who.jpg";
import groupBreakupRecoveryHeader from "@/assets/group-breakup-recovery-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const BreakupRecoveryGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="Group programs – Singles"
    titleStart="Recovery and a"
    titleHighlight="fresh start"
    subtitle="Support for healing the pain of a breakup and preparing for a new chapter"
    intro="The end of a relationship can feel like the end of a version of yourself. This group offers a space to grieve, to make sense of what happened, and — when you're ready — to step into a new chapter with more clarity and self-compassion than before."
    whatToExpect={[
      { title: "Emotional support", description: "A group of people who understand your pain and will not judge you", icon: Heart },
      { title: "A new beginning", description: "Learn to look forward with hope, not fear", icon: Sunrise },
      { title: "Self-discovery", description: "Understand what you can learn from the past relationship", icon: Sparkles },
      { title: "Professional facilitation", description: "Support from a specialist in working through loss", icon: Shield },
    ]}
    groupFeatures={[
      "Processing emotions after a breakup",
      "Understanding the lessons from the relationship",
      "Restoring self-esteem",
      "Overcoming fear of a new relationship",
      "Building a new identity",
      "Preparing for a healthy fresh start",
    ]}
    whoIsItFor={[
      "People going through a recent breakup",
      "Those who struggle to recover after a relationship ends",
      "People who repeat the same mistakes in every relationship",
      "Anyone wanting to prepare for a healthier next relationship",
    ]}
    whoImage={groupBreakupWho}
    whoImageAlt="Illustration about breakup recovery"
    headerImage={groupBreakupRecoveryHeader}
    pathname="/services/group-programs/relationships/breakup-recovery"
    serviceName="After a breakup – recovery and a fresh start"
    breadcrumbLeaf="After a breakup"
    breadcrumbCategory={{ label: "Relationships", slug: "relationships" }}
    seoTitle="After a Breakup – Recovery & Fresh Start | Dar Center"
    seoDescription="Support for healing the pain of a breakup and preparing for new, healthier relationships."
  />
);

export default BreakupRecoveryGroup;
