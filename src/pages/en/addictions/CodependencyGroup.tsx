import { Shield, Lock, Heart, Users, HandHeart } from "lucide-react";
import groupCodependencyWho from "@/assets/group-codependency-who.jpg";
import groupCodependencyHeader from "@/assets/group-codependency-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const CodependencyGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="Group programs – Addictions"
    titleStart="Group for loved ones of people with addictions"
    titleHighlight="(codependency)"
    subtitle="Support for families and loved ones of people struggling with addiction"
    intro="When someone you love is struggling with addiction, the impact ripples through every part of your life. Our group offers a safe space to recognize codependent patterns, learn how to set healthy boundaries, and bring focus back to your own needs and well-being."
    whatToExpect={[
      { title: "Understanding codependency", description: "Becoming aware of how a loved one's addiction affects your life", icon: Heart },
      { title: "Healthy boundaries", description: "Learning to set boundaries without feeling guilty", icon: Shield },
      { title: "Mutual support", description: "Sharing with people who understand your situation", icon: Users },
      { title: "Focus on you", description: "Bringing attention back to your own needs and well-being", icon: HandHeart },
    ]}
    groupFeatures={[
      "Complete anonymity and confidentiality",
      "A safe and non-judgmental environment",
      "Professional facilitation by a qualified specialist",
      "Recognizing codependent behavior patterns",
      "Working on healthy boundaries",
      "Support for autonomy and self-love",
    ]}
    whoIsItFor={[
      "Partners of people with addictions",
      "Parents of children with addictions",
      "Adult children of parents with addictions",
      "Close friends or relatives of people with addictions",
      "Anyone who feels 'locked into' caring for an addicted person",
    ]}
    whoImage={groupCodependencyWho}
    whoImageAlt="Illustration about codependency"
    headerImage={groupCodependencyHeader}
    pathname="/services/group-programs/addictions/codependency"
    serviceName="Group for loved ones of people with addictions (codependency)"
    breadcrumbLeaf="Codependency"
    breadcrumbCategory={{ label: "Addictions", slug: "addictions" }}
    seoTitle="Group for Loved Ones of People With Addictions | Dar Center"
    seoDescription="Support for families and loved ones of people with addictions, working on codependent behavior patterns."
  />
);

export default CodependencyGroup;
