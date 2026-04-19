import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import psychodynamicHeader from "@/assets/psychodynamic-therapy-header.jpg";

const PsychodynamicTherapy = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Psychodynamic Therapy"
    subtitle="Exploring the link between past experience and present difficulties for deeper self-understanding"
    headerImage={psychodynamicHeader}
    description={[
      "Psychodynamic therapy grew out of psychoanalysis but is more flexible and shorter-term. It explores how early experiences and unconscious processes shape current emotions, relationships, and behavior.",
      "The therapeutic relationship is central — it becomes a living space where old patterns can be observed, understood, and gradually transformed.",
      "This approach is effective for depression, anxiety, relationship difficulties, low self-esteem, and many other emotional challenges."
    ]}
    benefits={[
      { title: "Self-understanding", description: "Insight into the deeper roots of your difficulties." },
      { title: "Lasting change", description: "Transformation that goes beyond symptom relief." },
      { title: "Healthier relationships", description: "Recognizing and changing repetitive relational patterns." },
      { title: "Emotional growth", description: "Greater capacity to feel and process emotions." },
      { title: "Self-compassion", description: "A kinder, more accepting relationship with yourself." },
      { title: "Inner freedom", description: "Liberation from old, limiting patterns." }
    ]}
    suitableFor={[
      "People with depression or anxiety",
      "Those with recurring relationship patterns",
      "People with low self-esteem",
      "Those processing past experiences",
      "Individuals seeking deep self-understanding",
      "People open to working with emotions"
    ]}
    processSteps={[
      { title: "Initial assessment", description: "Understanding your history and your goals." },
      { title: "Exploring patterns", description: "Identifying recurring themes in your life." },
      { title: "Working with emotions", description: "Recognizing and processing buried feelings." },
      { title: "Exploring relationships", description: "Understanding the dynamics with key people in your life." },
      { title: "Integration and change", description: "Translating insight into lived change." }
    ]}
  />
);

export default PsychodynamicTherapy;
