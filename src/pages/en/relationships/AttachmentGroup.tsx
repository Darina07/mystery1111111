import { Heart, Shield, Users, Target } from "lucide-react";
import groupAttachmentWho from "@/assets/group-attachment-who.jpg";
import groupAttachmentHeader from "@/assets/group-attachment-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const AttachmentGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="Group programs – Singles"
    titleStart="Attachment patterns and"
    titleHighlight="partner choice"
    subtitle="Understand why you choose certain partners and how to change the pattern"
    intro="Our attachment style — formed early in life — quietly shapes who we are drawn to and how we behave in relationships. In this group you will explore your own pattern, recognize what no longer serves you, and develop the awareness needed to choose partners differently."
    whatToExpect={[
      { title: "Self-awareness", description: "Understand your attachment style and how it shapes your choices", icon: Heart },
      { title: "Group dynamics", description: "Learn from the experience of others in similar situations", icon: Users },
      { title: "Practical tools", description: "Concrete techniques for recognizing healthy partners", icon: Target },
      { title: "Professional facilitation", description: "The group is led by a relationships specialist", icon: Shield },
    ]}
    groupFeatures={[
      "Understanding the four attachment styles",
      "Analyzing your past relationships",
      "Recognizing unhealthy patterns",
      "Working on fears of intimacy",
      "Practical exercises for change",
      "Group support and feedback",
    ]}
    whoIsItFor={[
      "People who repeatedly find themselves in unhealthy relationships",
      "Those who feel drawn to the 'wrong type' of partner",
      "People struggling to build long-lasting relationships",
      "Anyone who wants to understand why their relationships fail",
    ]}
    whoImage={groupAttachmentWho}
    whoImageAlt="Illustration about attachment patterns"
    headerImage={groupAttachmentHeader}
    pathname="/services/group-programs/relationships/attachment"
    serviceName="Attachment patterns and partner choice"
    breadcrumbLeaf="Attachment"
    breadcrumbCategory={{ label: "Relationships", slug: "relationships" }}
    seoTitle="Attachment Patterns & Partner Choice | Dar Center"
    seoDescription="Understand why you choose certain partners and how to change the pattern."
  />
);

export default AttachmentGroup;
