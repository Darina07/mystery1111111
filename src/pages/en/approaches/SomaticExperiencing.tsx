import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import somaticExperiencingHeader from "@/assets/somatic-experiencing-header.jpg";

const SomaticExperiencing = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Somatic Experiencing"
    subtitle="A body-oriented approach for releasing trauma and accumulated tension"
    headerImage={somaticExperiencingHeader}
    description={[
      "Somatic Experiencing (SE), developed by Peter Levine, is a body-based approach to healing trauma. It works with the nervous system's natural capacity to release stored survival energy.",
      "By gently tracking bodily sensations, SE helps complete interrupted self-protective responses and restore the body's natural rhythm of activation and rest.",
      "It is effective for trauma, PTSD, chronic stress, anxiety, and physical symptoms with an emotional component."
    ]}
    benefits={[
      { title: "Body-based healing", description: "Working with the body's wisdom, not just the mind." },
      { title: "Nervous-system regulation", description: "Restoring healthy activation and calming." },
      { title: "Trauma release", description: "Discharging stored survival energy." },
      { title: "Greater inner peace", description: "Feeling safer in your own body." },
      { title: "Fewer physical symptoms", description: "Relief from tension, pain, and stress responses." },
      { title: "Deeper resilience", description: "A more flexible, adaptive nervous system." }
    ]}
    suitableFor={[
      "People with trauma or PTSD",
      "Those with chronic stress",
      "People with psychosomatic symptoms",
      "Those with anxiety",
      "People who feel disconnected from their body",
      "Anyone seeking deep nervous-system healing"
    ]}
    processSteps={[
      { title: "Building resources", description: "Establishing felt experiences of safety in the body." },
      { title: "Tracking sensations", description: "Gently following bodily sensations." },
      { title: "Titration", description: "Working with small, manageable amounts of activation." },
      { title: "Pendulation", description: "Moving between activation and calm." },
      { title: "Integration", description: "Embedding new capacities in everyday life." }
    ]}
  />
);

export default SomaticExperiencing;
