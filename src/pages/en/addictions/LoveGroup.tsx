import { Shield, Lock, Heart, Users } from "lucide-react";
import groupLoveWho from "@/assets/group-love-who.jpg";
import groupLoveHeader from "@/assets/group-love-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const LoveGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="Group programs – Addictions"
    titleStart="Anonymous group for love"
    titleHighlight="addiction"
    subtitle="Support for building healthy patterns in romantic relationships"
    intro="Love addiction often shows up as repeating painful relationship patterns, losing yourself in your partner, or constantly seeking external validation. Our group offers a safe space to recognize these patterns, work on your sense of self, and build a healthier approach to love."
    whatToExpect={[
      { title: "Understanding patterns", description: "Becoming aware of recurring patterns in your romantic relationships", icon: Heart },
      { title: "Working on yourself", description: "Focus on your own identity and self-worth", icon: Shield },
      { title: "Group support", description: "Sharing with people who understand what you are going through", icon: Users },
      { title: "Confidentiality", description: "Everything shared stays in the group", icon: Lock },
    ]}
    groupFeatures={[
      "Complete anonymity and confidentiality",
      "A safe and non-judgmental environment",
      "Professional facilitation by a qualified specialist",
      "Working on attachment patterns",
      "Recognizing unhealthy patterns",
      "Building healthy boundaries",
    ]}
    whoIsItFor={[
      "People who keep finding themselves in painful, repeating love patterns",
      "Those who feel a strong need for approval and validation from a partner",
      "People who lose themselves in relationships",
      "Anyone who wants to build a healthier approach to love",
    ]}
    whoImage={groupLoveWho}
    whoImageAlt="Illustration about love addiction"
    headerImage={groupLoveHeader}
    pathname="/services/group-programs/addictions/love"
    serviceName="Anonymous group for love addiction"
    breadcrumbLeaf="Love addiction"
    breadcrumbCategory={{ label: "Addictions", slug: "addictions" }}
    seoTitle="Anonymous Group for Love Addiction | Dar Center"
    seoDescription="A group for people experiencing unhealthy patterns in their romantic relationships and seeking balance."
  />
);

export default LoveGroup;
