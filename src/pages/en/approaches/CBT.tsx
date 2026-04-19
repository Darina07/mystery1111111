import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import cbtHeader from "@/assets/cbt-header.jpg";

const CBT = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Cognitive Behavioral Therapy"
    subtitle="A structured, practical approach to changing thought and behavior patterns"
    headerImage={cbtHeader}
    description={[
      "Cognitive Behavioral Therapy (CBT) is one of the most researched and evidence-based psychotherapeutic approaches. It is based on the idea that our thoughts, emotions, and behaviors are interconnected — and that changing one of these components leads to changes in the others.",
      "CBT is a structured, goal-oriented, and practical approach. The work focuses on the present and on specific problems, using particular techniques to identify and change negative thought patterns and unhelpful behaviors.",
      "This approach is especially effective for anxiety disorders, depression, phobias, OCD, eating disorders, and many other conditions. Clients often see improvement within 12–20 sessions."
    ]}
    benefits={[
      { title: "Fast results", description: "You notice improvement within the first weeks of therapy." },
      { title: "Practical skills", description: "You learn concrete techniques you can use on your own." },
      { title: "Changing thinking", description: "You identify and transform negative thought patterns." },
      { title: "Emotional regulation", description: "You develop better control over your emotional reactions." },
      { title: "Proven effectiveness", description: "The approach is supported by extensive scientific research." },
      { title: "Relapse prevention", description: "You learn how to prevent symptoms from returning." }
    ]}
    suitableFor={[
      "People with anxiety and panic attacks",
      "Those struggling with depression",
      "People with phobias and fears",
      "Those with obsessive-compulsive symptoms",
      "People with sleep problems",
      "Those who want to change specific behaviors"
    ]}
    processSteps={[
      { title: "Assessment and goal-setting", description: "We define the specific problems and set clear goals." },
      { title: "Psychoeducation", description: "You learn how the thought–emotion–behavior link works." },
      { title: "Identifying patterns", description: "You recognize automatic negative thoughts." },
      { title: "Cognitive restructuring", description: "You learn to challenge and change unhelpful thoughts." },
      { title: "Behavioral experiments", description: "You apply your new skills in real-life situations." }
    ]}
  />
);

export default CBT;
