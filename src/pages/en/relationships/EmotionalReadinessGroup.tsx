import { Heart, Shield, Users, Brain } from "lucide-react";
import groupEmotionalReadinessBg from "@/assets/group-emotional-readiness-bg.jpg";
import groupEmotionalReadinessHeader from "@/assets/group-emotional-readiness-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const EmotionalReadinessGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="Group programs – Singles"
    titleStart="Emotional readiness for"
    titleHighlight="a relationship"
    subtitle="Preparing for a healthy relationship through work on emotional maturity and self-awareness"
    intro="Being ready for a healthy relationship is less about finding the right person and more about meeting yourself first. This group helps you develop emotional maturity, build inner security, and become someone capable of both deep intimacy and genuine independence."
    whatToExpect={[
      { title: "Emotional maturity", description: "Develop the ability to manage emotions in the context of a relationship", icon: Brain },
      { title: "Self-awareness", description: "Understand what you truly want and what you can give in a relationship", icon: Heart },
      { title: "Inner security", description: "Build confidence that does not depend on external validation", icon: Shield },
      { title: "Group support", description: "Share the journey with people striving for the same", icon: Users },
    ]}
    groupFeatures={[
      "Working on emotional maturity",
      "Developing healthy self-esteem",
      "Overcoming fears of intimacy",
      "Building inner security",
      "Balance between independence and closeness",
      "Practices for emotional self-regulation",
    ]}
    whoIsItFor={[
      "People who feel unready for a serious relationship",
      "Those who avoid closeness or fear it",
      "People emerging from a long period of being single",
      "Anyone who wants to work on their emotional maturity",
    ]}
    whoImage={groupEmotionalReadinessBg}
    whoImageAlt="Illustration about emotional readiness"
    headerImage={groupEmotionalReadinessHeader}
    pathname="/services/group-programs/relationships/emotional-readiness"
    serviceName="Emotional readiness for a relationship"
    breadcrumbLeaf="Emotional readiness"
    breadcrumbCategory={{ label: "Relationships", slug: "relationships" }}
    seoTitle="Emotional Readiness for a Relationship | Dar Center"
    seoDescription="Preparing for a healthy relationship through work on emotional maturity, self-awareness, and readiness for intimacy."
  />
);

export default EmotionalReadinessGroup;
