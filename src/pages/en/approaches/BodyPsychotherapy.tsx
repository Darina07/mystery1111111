import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import bodyPsychotherapyHeader from "@/assets/body-psychotherapy-header.jpg";

const BodyPsychotherapy = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Body Psychotherapy"
    subtitle="A holistic approach that uses bodily sensations as a key to emotional awareness"
    headerImage={bodyPsychotherapyHeader}
    description={[
      "Body psychotherapy is an umbrella approach that integrates work with the body, emotions, and mind. It recognizes that emotional experiences are stored in the body and that lasting change requires working with both psyche and soma.",
      "Through awareness of bodily sensations, breath, posture, and movement, body psychotherapy helps you reconnect with yourself, release blocked emotion, and develop a deeper sense of being alive.",
      "It is effective for trauma, anxiety, depression, chronic tension, and anyone wanting deeper self-knowledge."
    ]}
    benefits={[
      { title: "Body awareness", description: "A clearer connection with your bodily experience." },
      { title: "Emotional integration", description: "Bringing together body, feeling, and mind." },
      { title: "Trauma release", description: "Working with experiences stored in the body." },
      { title: "Greater aliveness", description: "More energy, presence, and vitality." },
      { title: "Stress regulation", description: "Better capacity to calm and ground yourself." },
      { title: "Holistic well-being", description: "Healing across all levels of being." }
    ]}
    suitableFor={[
      "People wanting holistic therapy",
      "Those with trauma or chronic stress",
      "People with psychosomatic symptoms",
      "Those who feel disconnected from their body",
      "People wanting deep self-knowledge",
      "Anyone open to body-based work"
    ]}
    processSteps={[
      { title: "Body awareness", description: "Tuning in to your bodily experience." },
      { title: "Working with breath", description: "Using breath as a path to deeper experience." },
      { title: "Movement and posture", description: "Exploring how your body holds your story." },
      { title: "Emotional release", description: "Allowing held emotions to move through." },
      { title: "Integration", description: "Embedding new awareness in daily life." }
    ]}
  />
);

export default BodyPsychotherapy;
