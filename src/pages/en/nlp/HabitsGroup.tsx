import { Zap, RefreshCw, Users, Repeat } from "lucide-react";
import groupNLPHabitsWho from "@/assets/group-nlp-habits-who.jpg";
import groupNLPHabitsHeader from "@/assets/group-nlp-habits-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const HabitsGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="NLP group programs"
    titleStart="Habits and"
    titleHighlight="behavior"
    subtitle="NLP techniques for transforming behavioral patterns"
    intro="Most habits run on autopilot — which is why willpower alone rarely changes them. Using NLP, this group helps you understand the loop behind each habit, interrupt the patterns that no longer serve you, and install new ones that stick."
    whatToExpect={[
      { title: "Understanding habits", description: "How automatic behaviors work and why we repeat them", icon: Repeat },
      { title: "Interrupting patterns", description: "Techniques for stopping unwanted automatic reactions", icon: Zap },
      { title: "New patterns", description: "Creating and reinforcing supportive behaviors", icon: RefreshCw },
      { title: "Group support", description: "Mutual support throughout the change process", icon: Users },
    ]}
    groupFeatures={[
      "Understanding the mechanics of habits",
      "Identifying unwanted behavioral patterns",
      "NLP techniques for habit change",
      "Creating new supportive patterns",
      "Working with automatic reactions",
      "Building lasting change",
    ]}
    whoIsItFor={[
      "People who want to change unwanted habits",
      "Those who struggle with repeating patterns",
      "People ready for conscious transformation",
      "Anyone who wants to build new, better habits",
    ]}
    whoImage={groupNLPHabitsWho}
    whoImageAlt="Illustration about habits and behavior"
    headerImage={groupNLPHabitsHeader}
    pathname="/services/group-programs/nlp/habits"
    serviceName="NLP for working with habits and behavior"
    breadcrumbLeaf="Habits"
    breadcrumbCategory={{ label: "NLP", slug: "nlp" }}
    seoTitle="NLP for Habits & Behavior | Dar Center"
    seoDescription="Transform unwanted habits and behavioral patterns into mindful, supportive actions."
  />
);

export default HabitsGroup;
