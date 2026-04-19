import { Lightbulb, Target, Sparkles, Users } from "lucide-react";
import groupNLPEffectivenessBg from "@/assets/group-nlp-effectiveness-bg.jpg";
import groupNLPEffectivenessHeader from "@/assets/group-nlp-effectiveness-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const PersonalEffectivenessGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="NLP group programs"
    titleStart="Personal effectiveness and"
    titleHighlight="confidence"
    subtitle="Practical NLP techniques for building confidence and reaching your goals"
    intro="Real confidence is built through repeatable practice, not pep talks. Using proven NLP techniques, this group helps you upgrade limiting beliefs, access resourceful states on demand, and present yourself with the kind of authentic presence that opens doors."
    whatToExpect={[
      { title: "Practical NLP techniques", description: "Acquire concrete tools for building confidence", icon: Lightbulb },
      { title: "Working with beliefs", description: "Identify and transform limiting beliefs", icon: Target },
      { title: "Resourceful states", description: "Learn how to activate your strength when you need it", icon: Sparkles },
      { title: "Group dynamics", description: "Learn from others' experience and practice in a safe environment", icon: Users },
    ]}
    groupFeatures={[
      "Techniques for building inner confidence",
      "Working with limiting beliefs about yourself",
      "Effective self-presentation and personal brand",
      "Managing your states and emotions",
      "Strategies for greater productivity",
      "Modelling successful behaviors",
    ]}
    whoIsItFor={[
      "People who want to build stronger confidence",
      "Professionals seeking career growth",
      "Anyone who wants to improve how they present themselves",
      "People with high goals and a desire to achieve them",
    ]}
    whoImage={groupNLPEffectivenessBg}
    whoImageAlt="Illustration about personal effectiveness"
    headerImage={groupNLPEffectivenessHeader}
    pathname="/services/group-programs/nlp/personal-effectiveness"
    serviceName="NLP for personal effectiveness and confidence"
    breadcrumbLeaf="Personal effectiveness"
    breadcrumbCategory={{ label: "NLP", slug: "nlp" }}
    seoTitle="NLP for Personal Effectiveness & Confidence | Dar Center"
    seoDescription="Practical techniques for building confidence, better self-presentation, and reaching personal and professional goals."
  />
);

export default PersonalEffectivenessGroup;
