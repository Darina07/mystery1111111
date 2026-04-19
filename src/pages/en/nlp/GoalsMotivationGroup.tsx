import { Target, Rocket, Sparkles, Users } from "lucide-react";
import groupNLPGoalsBg from "@/assets/group-nlp-goals-bg.jpg";
import groupNLPGoalsHeader from "@/assets/group-nlp-goals-header.jpg";
import { GroupSubpageLayout } from "@/components/GroupSubpageLayout";

const GoalsMotivationGroup = () => (
  <GroupSubpageLayout
    language="en"
    eyebrow="NLP group programs"
    titleStart="Goals, motivation and"
    titleHighlight="change"
    subtitle="NLP techniques for achieving the results you want"
    intro="The hardest part of change is rarely the action — it's the inner conflict around it. This group uses NLP to help you set goals that genuinely pull you forward, work through internal resistance, and turn intentions into a sustainable plan you actually follow through on."
    whatToExpect={[
      { title: "Clear goals", description: "Learn to formulate goals that genuinely inspire you", icon: Target },
      { title: "Sustainable motivation", description: "Techniques for keeping the fire alive even in tough moments", icon: Rocket },
      { title: "Change in action", description: "Concrete steps for turning dreams into reality", icon: Sparkles },
      { title: "Group energy", description: "Support and inspiration from like-minded people", icon: Users },
    ]}
    groupFeatures={[
      "Setting clear and achievable goals",
      "NLP techniques for sustainable motivation",
      "Overcoming inner resistance",
      "Creating an action plan",
      "Working with procrastination",
      "Building new supportive habits",
    ]}
    whoIsItFor={[
      "People who want clarity about their goals",
      "Those who struggle with motivation",
      "People ready for meaningful life change",
      "Anyone who wants to achieve more",
    ]}
    whoImage={groupNLPGoalsBg}
    whoImageAlt="Illustration about goals and motivation"
    headerImage={groupNLPGoalsHeader}
    pathname="/services/group-programs/nlp/goals-motivation"
    serviceName="NLP for goals, motivation and change"
    breadcrumbLeaf="Goals & motivation"
    breadcrumbCategory={{ label: "NLP", slug: "nlp" }}
    seoTitle="NLP for Goals, Motivation & Change | Dar Center"
    seoDescription="Learn how to set clear goals, sustain motivation, and create lasting change in your life."
  />
);

export default GoalsMotivationGroup;
