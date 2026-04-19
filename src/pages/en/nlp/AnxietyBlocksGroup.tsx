import { Brain, Shield, Sparkles, Users } from "lucide-react";
import groupNLPAnxietyWho from "@/assets/group-nlp-anxiety-who.jpg";
import groupNLPAnxietyHeader from "@/assets/group-nlp-anxiety-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const AnxietyBlocksGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="NLP group programs"
    titleStart="Free yourself from"
    titleHighlight="your fears"
    subtitle="NLP techniques for working with anxiety and inner blocks"
    intro="Anxiety often feels like an old reflex you can't reason your way out of. Using NLP techniques, this group helps you reach the patterns underneath the fear — and rewire them — so you can act from calm clarity rather than constant alarm."
    whatToExpect={[
      { title: "Working with fears", description: "Identifying and transforming the sources of anxiety", icon: Brain },
      { title: "Releasing blocks", description: "Removing inner barriers that are holding you back", icon: Shield },
      { title: "NLP techniques", description: "Practical tools for managing emotions", icon: Sparkles },
      { title: "Supportive group", description: "A safe space for working and sharing", icon: Users },
    ]}
    groupFeatures={[
      "Identifying the roots of your fears",
      "NLP techniques for managing anxiety",
      "Working with inner blocks and limitations",
      "Reframing negative experiences",
      "Building inner resources for calm",
      "Techniques for quick self-soothing",
    ]}
    whoIsItFor={[
      "People with heightened anxiety and worry",
      "Those who want to overcome specific fears",
      "People with inner blocks that are holding them back",
      "Anyone seeking practical techniques for emotional balance",
    ]}
    whoImage={groupNLPAnxietyWho}
    whoImageAlt="Illustration about anxiety and inner blocks"
    headerImage={groupNLPAnxietyHeader}
    pathname="/services/group-programs/nlp/anxiety-blocks"
    serviceName="NLP for anxiety and inner blocks"
    breadcrumbLeaf="Anxiety"
    breadcrumbCategory={{ label: "NLP", slug: "nlp" }}
    seoTitle="NLP for Anxiety & Inner Blocks | Dar Center"
    seoDescription="Working with fears, inner limitations, and anxious states through proven NLP techniques."
  />
);

export default AnxietyBlocksGroup;
