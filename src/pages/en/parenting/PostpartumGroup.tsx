import { Heart, Users, Shield, Baby } from "lucide-react";
import groupPostpartumBg from "@/assets/group-postpartum-bg.jpg";
import groupPostpartumHeader from "@/assets/group-postpartum-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const PostpartumGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="Group programs – Parenting"
    titleStart="The postpartum"
    titleHighlight="period"
    subtitle="Adaptation, anxiety, and support after birth"
    intro="The early months with a newborn can be as overwhelming as they are tender. This group offers a soft place to land — for the tears you didn't expect, the worries you can't say out loud, and the slow work of becoming a mother."
    whatToExpect={[
      { title: "Understanding without judgment", description: "A space where it's normal to share your difficulties", icon: Heart },
      { title: "Emotional support", description: "Help in coping with anxiety and emotional struggles", icon: Shield },
      { title: "Bonding with your baby", description: "Techniques for strengthening the mother-baby bond", icon: Baby },
      { title: "A community of mothers", description: "Connections with women going through the same", icon: Users },
    ]}
    groupFeatures={[
      "Sharing experiences from the postpartum period",
      "Working with anxiety and postpartum depression",
      "Adapting to the new role of mother",
      "Self-care techniques as a new mother",
      "Building bond with your baby",
      "Support from women who understand",
    ]}
    whoIsItFor={[
      "Women in the first months after giving birth",
      "Mothers experiencing anxiety or low mood",
      "Women who feel lonely in their new role",
      "Mothers seeking understanding and support",
    ]}
    whoImage={groupPostpartumBg}
    whoImageAlt="Illustration about the postpartum period"
    headerImage={groupPostpartumHeader}
    pathname="/services/group-programs/parenting/postpartum"
    serviceName="The postpartum period – adaptation and support"
    breadcrumbLeaf="Postpartum period"
    breadcrumbCategory={{ label: "Parenting", slug: "parenting" }}
    seoTitle="Postpartum Period – Adaptation & Support | Dar Center"
    seoDescription="Support for managing anxiety, adapting to the new role, and emotional challenges after birth."
  />
);

export default PostpartumGroup;
