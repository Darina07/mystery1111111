import { Heart, Users, Shield, Target } from "lucide-react";
import groupMatchmakingBg from "@/assets/group-matchmaking-bg.jpg";
import groupMatchmakingHeader from "@/assets/group-matchmaking-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const MatchmakingGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="Group programs – Singles"
    titleStart="Connecting through"
    titleHighlight="values"
    subtitle="A matchmaking group – a mindful approach to finding a partner"
    intro="If you're tired of swiping and surface-level dating, this group offers something different: a facilitated space where people who share your values and intentions meet each other in real life, supported by a psychologist who understands relational compatibility."
    whatToExpect={[
      { title: "A mindful approach", description: "Finding a partner based on values, not appearance or impulse", icon: Target },
      { title: "Group dynamics", description: "An opportunity to meet people with similar goals in a supportive environment", icon: Users },
      { title: "Psychological compatibility", description: "Focus on deep compatibility rather than surface-level attraction", icon: Heart },
      { title: "Professional facilitation", description: "A psychologist-led space for meaningful encounters", icon: Shield },
    ]}
    groupFeatures={[
      "Working on clarity around values and priorities",
      "Group discussions on partner compatibility",
      "Mindful encounters with potential partners",
      "Feedback and support from the group",
      "Facilitated opportunities to connect",
      "Focus on long-term, meaningful relationships",
    ]}
    whoIsItFor={[
      "People tired of superficial online dating",
      "Those looking for a partner with similar values",
      "People ready for a serious, mindful relationship",
      "Anyone who prefers quality over quantity in dating",
    ]}
    whoImage={groupMatchmakingBg}
    whoImageAlt="Illustration about matchmaking"
    headerImage={groupMatchmakingHeader}
    pathname="/services/group-programs/relationships/matchmaking"
    serviceName="Matchmaking group – connecting through values"
    breadcrumbLeaf="Matchmaking"
    breadcrumbCategory={{ label: "Relationships", slug: "relationships" }}
    seoTitle="Matchmaking – Connecting Through Values | Dar Center"
    seoDescription="A mindful approach to finding a partner, based on shared values and psychological compatibility."
  />
);

export default MatchmakingGroup;
