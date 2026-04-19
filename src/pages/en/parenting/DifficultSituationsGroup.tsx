import { Heart, Users, Shield, Sparkles } from "lucide-react";
import groupDifficultSituationsWho from "@/assets/group-difficult-situations-who.jpg";
import groupDifficultSituationsHeader from "@/assets/group-difficult-situations-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const DifficultSituationsGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="Group programs – Parenting"
    titleStart="Support in"
    titleHighlight="difficult moments"
    subtitle="For parents going through challenging life circumstances"
    intro="Some seasons of parenting are simply harder — divorce, illness, loss, or carrying it all alone. This group offers a space where the weight you carry is met with understanding, and where you can find both practical strategies and the strength to keep going."
    whatToExpect={[
      { title: "Unconditional support", description: "A judgment-free space where pain is welcomed", icon: Heart },
      { title: "Shared experience", description: "Connection with people who understand what you are going through", icon: Users },
      { title: "Practical strategies", description: "How to care for yourself and your children in difficult moments", icon: Sparkles },
      { title: "Hope and strength", description: "Finding inner resources to cope", icon: Shield },
    ]}
    groupFeatures={[
      "Sharing in a safe and supportive environment",
      "Emotional support during difficult experiences",
      "Coping and resilience strategies",
      "How to support children in tough moments",
      "Self-care during hard periods",
      "Connection with people who understand",
    ]}
    whoIsItFor={[
      "Parents going through divorce or separation",
      "Parents coping with loss or serious illness",
      "Single parents looking for support",
      "Parents in other difficult life situations",
    ]}
    whoImage={groupDifficultSituationsWho}
    whoImageAlt="Illustration about parents in difficult situations"
    headerImage={groupDifficultSituationsHeader}
    pathname="/services/group-programs/parenting/difficult-situations"
    serviceName="Parents in difficult life situations"
    breadcrumbLeaf="Difficult situations"
    breadcrumbCategory={{ label: "Parenting", slug: "parenting" }}
    seoTitle="Parents in Difficult Life Situations | Dar Center"
    seoDescription="A supportive group for parents going through divorce, loss, illness, or other difficult life circumstances."
  />
);

export default DifficultSituationsGroup;
