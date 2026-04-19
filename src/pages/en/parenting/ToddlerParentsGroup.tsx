import { Heart, Users, Shield, Sparkles } from "lucide-react";
import groupToddlerWho from "@/assets/group-toddler-who.jpg";
import groupToddlerParentsHeader from "@/assets/group-toddler-parents-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const ToddlerParentsGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="Group programs – Parenting"
    titleStart="Parents of"
    titleHighlight="young children"
    subtitle="Emotions, boundaries, and security in early childhood"
    intro="Raising young children stretches every parent. This group offers practical tools for navigating tantrums, sleep, big emotions, and boundaries — alongside the kind of peer support that reminds you that you are not alone, and you are not failing."
    whatToExpect={[
      { title: "Practical advice", description: "Concrete techniques for handling everyday situations", icon: Sparkles },
      { title: "Emotional support", description: "A space to share difficulties without judgment", icon: Heart },
      { title: "Healthy boundaries", description: "How to set boundaries with love and consistency", icon: Shield },
      { title: "A parenting community", description: "Connections with other parents of young children", icon: Users },
    ]}
    groupFeatures={[
      "Coping with everyday parenting challenges",
      "Setting healthy boundaries",
      "Understanding children's emotions and behavior",
      "Calm-parenting techniques",
      "Self-care as a parent",
      "Sharing experience with other parents",
    ]}
    whoIsItFor={[
      "Parents of children aged 0–6",
      "Parents looking for support in everyday life",
      "Mothers and fathers who want to understand their child better",
      "Parents who feel tired or overwhelmed",
    ]}
    whoImage={groupToddlerWho}
    whoImageAlt="Illustration about parents of young children"
    headerImage={groupToddlerParentsHeader}
    pathname="/services/group-programs/parenting/toddler-parents"
    serviceName="Parents of young children"
    breadcrumbLeaf="Young children"
    breadcrumbCategory={{ label: "Parenting", slug: "parenting" }}
    seoTitle="Parents of Young Children | Dar Center"
    seoDescription="A group for parents of children aged 0–6. Emotions, boundaries, security, and everyday challenges."
  />
);

export default ToddlerParentsGroup;
