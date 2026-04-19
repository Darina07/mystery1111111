import { Heart, Users, Shield, Sparkles } from "lucide-react";
import groupPregnantMothersBg from "@/assets/group-pregnant-mothers-bg.jpg";
import groupPregnantMothersHeader from "@/assets/group-pregnant-mothers-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const PregnantMothersGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="Group programs – Parenting"
    titleStart="Emotional"
    titleHighlight="support"
    subtitle="A group for pregnant women and expectant mothers"
    intro="Pregnancy is full of joy, but also a wide spectrum of fears, doubts, and unexpected emotions. This group offers a warm, judgment-free space where you can share what you're really going through — alongside other women walking the same path."
    whatToExpect={[
      { title: "A safe space", description: "A place where you can share anything without judgment", icon: Shield },
      { title: "Emotional support", description: "Understanding and acceptance from women going through the same", icon: Heart },
      { title: "Practical tools", description: "Techniques for managing anxiety and preparing for birth", icon: Sparkles },
      { title: "Community", description: "Connections with other expectant mothers that continue beyond birth", icon: Users },
    ]}
    groupFeatures={[
      "Sharing emotions and experiences during pregnancy",
      "Working with fears and anxiety",
      "Preparing for birth and motherhood",
      "Relaxation and stress-management techniques",
      "Building connection with the baby before birth",
      "A supportive community of expectant mothers",
    ]}
    whoIsItFor={[
      "Pregnant women at any stage of pregnancy",
      "Expectant mothers experiencing anxiety or fears",
      "Women seeking emotional support during this period",
      "Mothers, whether this is a first or subsequent pregnancy",
    ]}
    whoImage={groupPregnantMothersBg}
    whoImageAlt="Illustration about pregnant and expectant mothers"
    headerImage={groupPregnantMothersHeader}
    pathname="/services/group-programs/parenting/pregnant-mothers"
    serviceName="Group for pregnant women and expectant mothers"
    breadcrumbLeaf="Expectant mothers"
    breadcrumbCategory={{ label: "Parenting", slug: "parenting" }}
    seoTitle="Group for Pregnant & Expectant Mothers | Dar Center"
    seoDescription="Emotional support during pregnancy. Sharing experiences, fears, and joys with other expectant mothers."
  />
);

export default PregnantMothersGroup;
