import { MessageCircle, Users, Heart, Ear } from "lucide-react";
import groupNLPCommunicationBg from "@/assets/group-nlp-communication-bg.jpg";
import groupNLPCommunicationHeader from "@/assets/group-nlp-communication-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const CommunicationSkillsGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="NLP group programs"
    titleStart="Communication"
    titleHighlight="skills"
    subtitle="NLP techniques for more effective communication and stronger relationships"
    intro="Most relationship problems are communication problems in disguise. Through NLP-based exercises, this group helps you listen for what's really being said, express yourself with clarity, and build the kind of rapport that makes difficult conversations possible."
    whatToExpect={[
      { title: "Effective listening", description: "Learn to listen not just to the words, but to the meaning behind them", icon: Ear },
      { title: "Clear expression", description: "How to communicate so that you are understood", icon: MessageCircle },
      { title: "Building connection", description: "Techniques for creating trust and rapport", icon: Heart },
      { title: "Practice in a group", description: "A safe space to practice your new skills", icon: Users },
    ]}
    groupFeatures={[
      "Techniques for effective listening",
      "Understanding non-verbal communication",
      "How to be more persuasive",
      "Building rapport",
      "Managing difficult conversations",
      "Improving personal and professional relationships",
    ]}
    whoIsItFor={[
      "People who want to improve their communication",
      "Professionals working with people",
      "Those who want better relationships",
      "Anyone who wants to be understood and to understand others",
    ]}
    whoImage={groupNLPCommunicationBg}
    whoImageAlt="Illustration about communication skills"
    headerImage={groupNLPCommunicationHeader}
    pathname="/services/group-programs/nlp/communication-skills"
    serviceName="NLP and communication skills"
    breadcrumbLeaf="Communication"
    breadcrumbCategory={{ label: "NLP", slug: "nlp" }}
    seoTitle="NLP & Communication Skills | Dar Center"
    seoDescription="Improve the way you communicate – learn to understand others and to be understood."
  />
);

export default CommunicationSkillsGroup;
