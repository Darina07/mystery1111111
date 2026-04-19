import { Shield, Lock, Heart, Clock } from "lucide-react";
import groupAlcoholWho from "@/assets/group-alcohol-who.jpg";
import groupAlcoholHeader from "@/assets/group-alcohol-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const AlcoholGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="Group programs – Addictions"
    titleStart="Anonymous group for problematic"
    titleHighlight="alcohol use"
    subtitle="A supportive group for people seeking change in a safe and anonymous environment"
    intro="Problematic alcohol use can affect anyone — regardless of age, profession, or social status. Our anonymous group offers a safe space where you can share your experience, receive support from people who understand what you are going through, and work toward the change you want to achieve."
    whatToExpect={[
      { title: "A safe space", description: "A group of people who understand what you are going through, without judgment", icon: Heart },
      { title: "Structured sessions", description: "A clear program focused on specific topics and skills", icon: Clock },
      { title: "Professional facilitation", description: "The group is led by a specialist with experience working with addictions", icon: Shield },
      { title: "Confidentiality", description: "Everything shared in the group stays in the group", icon: Lock },
    ]}
    groupFeatures={[
      "Complete anonymity – no names, no personal data",
      "A safe and non-judgmental environment",
      "Professional facilitation by a qualified specialist",
      "Sharing experience with people in similar situations",
      "Practical coping strategies",
      "Support throughout the process of change",
    ]}
    whoIsItFor={[
      "People who struggle to control their alcohol use",
      "Those who want to reduce or stop drinking",
      "People seeking support during recovery",
      "Anyone who feels alcohol is negatively affecting their life",
    ]}
    whoImage={groupAlcoholWho}
    whoImageAlt="Illustration about alcohol dependency"
    headerImage={groupAlcoholHeader}
    pathname="/services/group-programs/addictions/alcohol"
    serviceName="Anonymous group for problematic alcohol use"
    breadcrumbLeaf="Alcohol"
    breadcrumbCategory={{ label: "Addictions", slug: "addictions" }}
    seoTitle="Anonymous Group for Problematic Alcohol Use | Dar Center"
    seoDescription="A supportive group for people seeking change in a safe and anonymous environment."
  />
);

export default AlcoholGroup;
