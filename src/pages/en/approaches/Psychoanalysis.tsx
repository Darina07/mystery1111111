import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import psychoanalysisHeader from "@/assets/psychoanalysis-header.jpg";

const Psychoanalysis = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Psychoanalysis"
    subtitle="A depth approach to understanding the unconscious processes that shape thoughts, emotions, and behavior"
    headerImage={psychoanalysisHeader}
    description={[
      "Psychoanalysis is the founding depth-psychology approach, developed by Sigmund Freud. It explores how unconscious processes — early experiences, defense mechanisms, and inner conflicts — shape who we are today.",
      "Through free association, dream analysis, and exploration of the therapeutic relationship, psychoanalysis helps bring hidden material into awareness, where it can be understood and integrated.",
      "It is a long-term, in-depth process that supports profound self-knowledge and lasting personality change."
    ]}
    benefits={[
      { title: "Deep self-knowledge", description: "Insight into the unconscious roots of your patterns." },
      { title: "Lasting change", description: "Transformation at the level of personality, not just symptoms." },
      { title: "Resolution of inner conflict", description: "Work on contradictions that have shaped your life." },
      { title: "Greater authenticity", description: "Living in line with your true self." },
      { title: "Better relationships", description: "Understanding the dynamics you bring into relationships." },
      { title: "Free choice", description: "Liberation from automatic, unconscious patterns." }
    ]}
    suitableFor={[
      "People seeking deep self-understanding",
      "Those with long-standing emotional difficulties",
      "Individuals with recurring relationship patterns",
      "People interested in long-term personal work",
      "Those open to exploring the unconscious",
      "Anyone seeking lasting personality change"
    ]}
    processSteps={[
      { title: "Initial interviews", description: "Exploring your history and what brought you to therapy." },
      { title: "Free association", description: "Speaking openly about whatever comes to mind." },
      { title: "Dream and symbol analysis", description: "Working with the language of the unconscious." },
      { title: "Working through transference", description: "Examining patterns that arise in the therapeutic relationship." },
      { title: "Integration", description: "Integrating new understanding into everyday life." }
    ]}
  />
);

export default Psychoanalysis;
