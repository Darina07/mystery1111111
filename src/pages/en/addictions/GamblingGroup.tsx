import { Shield, Lock, Heart, Users } from "lucide-react";
import groupGamblingWho from "@/assets/group-gambling-who.jpg";
import groupGamblingHeader from "@/assets/group-gambling-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const GamblingGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="Group programs – Addictions"
    titleStart="Anonymous group for gambling"
    titleHighlight="addiction"
    subtitle="Support for people who want to break the cycle of gambling addiction"
    intro="Gambling addiction can quickly take over your time, finances, and relationships. Our anonymous group offers a safe space to share your experience, understand the mechanisms behind compulsive gambling, and build practical strategies to regain control of your life."
    whatToExpect={[
      { title: "Understanding the addiction", description: "A group that understands the mechanisms of gambling addiction", icon: Heart },
      { title: "Practical tools", description: "Concrete strategies to manage urges and the desire to play", icon: Shield },
      { title: "Mutual support", description: "Sharing with people who know the struggle firsthand", icon: Users },
      { title: "Absolute discretion", description: "Complete confidentiality of everything shared in the group", icon: Lock },
    ]}
    groupFeatures={[
      "Complete anonymity – no names, no personal data",
      "A safe and non-judgmental environment",
      "Professional facilitation by a qualified specialist",
      "Sharing experience with people in similar situations",
      "Working on impulse control",
      "Strategies for managing the urge to gamble",
    ]}
    whoIsItFor={[
      "People who struggle to control their gambling",
      "Those who have lost control over the time and money spent on gambling",
      "People whose relationships and finances are affected by gambling addiction",
      "Anyone who wants to break the cycle of addiction",
    ]}
    whoImage={groupGamblingWho}
    whoImageAlt="Illustration about gambling addiction"
    headerImage={groupGamblingHeader}
    pathname="/services/group-programs/addictions/gambling"
    serviceName="Anonymous group for gambling addiction"
    breadcrumbLeaf="Gambling"
    breadcrumbCategory={{ label: "Addictions", slug: "addictions" }}
    seoTitle="Anonymous Group for Gambling Addiction | Dar Center"
    seoDescription="Support for people struggling with gambling addiction through shared experience and change strategies."
  />
);

export default GamblingGroup;
