import { Shield, Lock, Heart, Clock } from "lucide-react";
import groupSubstancesWho from "@/assets/group-substances-who.jpg";
import groupSubstancesHeader from "@/assets/group-substances-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const SubstancesGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="Group programs – Addictions"
    titleStart="Anonymous group for substance"
    titleHighlight="dependency"
    subtitle="A therapeutic group for support and recovery in a safe environment"
    intro="Substance dependency can deeply affect every area of your life. Our anonymous therapeutic group provides a safe space where you can share your experience, learn about the mechanisms of addiction, and work toward sustainable recovery alongside people who understand your journey."
    whatToExpect={[
      { title: "Understanding without judgment", description: "A group of people who know the struggle and will not judge you", icon: Heart },
      { title: "A structured program", description: "A clear plan to work on specific aspects of your recovery", icon: Clock },
      { title: "Professional support", description: "Facilitation by a specialist experienced with addictions", icon: Shield },
      { title: "Absolute privacy", description: "Everything shared remains strictly confidential", icon: Lock },
    ]}
    groupFeatures={[
      "Complete anonymity – no names, no personal data",
      "A safe and non-judgmental environment",
      "Professional facilitation by a qualified specialist",
      "Sharing experience with people in similar situations",
      "Working on the mechanisms of addiction",
      "Support throughout the recovery process",
    ]}
    whoIsItFor={[
      "People struggling with dependency on various substances",
      "Those in recovery who are seeking support",
      "People who want to better understand their addiction",
      "Anyone seeking a safe place to share and change",
    ]}
    whoImage={groupSubstancesWho}
    whoImageAlt="Illustration about substance dependency"
    headerImage={groupSubstancesHeader}
    pathname="/services/group-programs/addictions/substances"
    serviceName="Anonymous group for substance dependency"
    breadcrumbLeaf="Substances"
    breadcrumbCategory={{ label: "Addictions", slug: "addictions" }}
    seoTitle="Anonymous Group for Substance Dependency | Dar Center"
    seoDescription="A therapeutic group for people experiencing dependency on various substances."
  />
);

export default SubstancesGroup;
