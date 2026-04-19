import { MessageCircle, Shield, Smile, Star } from "lucide-react";
import groupSocialSkillsBg from "@/assets/group-social-skills-bg.jpg";
import groupSocialSkillsHeader from "@/assets/group-social-skills-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const SocialSkillsGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="Group programs – Singles"
    titleStart="Social skills and"
    titleHighlight="confidence"
    subtitle="Practical group exercises for developing communication skills when meeting new people"
    intro="Confidence in social situations is a skill, not a personality trait. Through real-life scenarios, role-plays, and constructive feedback, you will practice the small communication shifts that make meeting new people feel natural rather than terrifying."
    whatToExpect={[
      { title: "Practical exercises", description: "Real-life situations and role-plays to develop your skills", icon: Star },
      { title: "A safe environment", description: "A judgment-free group where you can experiment", icon: Shield },
      { title: "Feedback", description: "Constructive comments from the group and the facilitator", icon: MessageCircle },
      { title: "Building confidence", description: "Gradually developing authentic self-confidence", icon: Smile },
    ]}
    groupFeatures={[
      "Techniques for starting a conversation",
      "Non-verbal communication and body language",
      "Overcoming social anxiety",
      "Practical group exercises",
      "Building authentic confidence",
      "Active listening skills",
    ]}
    whoIsItFor={[
      "People who feel uncomfortable in social situations",
      "Those who struggle when meeting new people",
      "People wanting to improve their communication skills",
      "Anyone who wants to build more confidence",
    ]}
    whoImage={groupSocialSkillsBg}
    whoImageAlt="Illustration about social skills"
    headerImage={groupSocialSkillsHeader}
    pathname="/services/group-programs/relationships/social-skills"
    serviceName="Social skills and confidence when dating"
    breadcrumbLeaf="Social skills"
    breadcrumbCategory={{ label: "Relationships", slug: "relationships" }}
    seoTitle="Social Skills & Confidence When Dating | Dar Center"
    seoDescription="Practical group exercises for developing communication skills and confidence in social situations."
  />
);

export default SocialSkillsGroup;
