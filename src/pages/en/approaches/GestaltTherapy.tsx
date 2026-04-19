import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import gestaltTherapyHeader from "@/assets/gestalt-therapy-header.jpg";

const GestaltTherapy = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Gestalt Therapy"
    subtitle="Awareness in the present moment, personal responsibility, and authentic contact with yourself"
    headerImage={gestaltTherapyHeader}
    description={[
      "Gestalt therapy is a humanistic, experiential approach that emphasizes present-moment awareness, personal responsibility, and the integration of all parts of the self.",
      "Through dialogue, experiments, and creative techniques, gestalt therapy helps you become aware of how you think, feel, and act — and how you can choose differently.",
      "It is effective for anxiety, depression, relationship difficulties, low self-esteem, and personal growth."
    ]}
    benefits={[
      { title: "Present-moment awareness", description: "Greater clarity about what is actually happening for you." },
      { title: "Personal responsibility", description: "Owning your choices and your power to change." },
      { title: "Authenticity", description: "Living more in line with who you really are." },
      { title: "Integration", description: "Bringing together split-off parts of yourself." },
      { title: "Better contact", description: "Deeper, more authentic connection with others." },
      { title: "Creative growth", description: "Discovering new possibilities through experimentation." }
    ]}
    suitableFor={[
      "People who want greater self-awareness",
      "Those seeking authentic personal growth",
      "People with relationship difficulties",
      "Those who feel disconnected from themselves",
      "Individuals processing past experiences",
      "Anyone open to experiential work"
    ]}
    processSteps={[
      { title: "Building awareness", description: "Noticing what is happening in the here and now." },
      { title: "Exploring contact", description: "Examining how you connect with self and others." },
      { title: "Experiments", description: "Trying new ways of being in a safe space." },
      { title: "Integration", description: "Bringing together different parts of the self." },
      { title: "Responsibility and choice", description: "Owning your power to shape your life." }
    ]}
  />
);

export default GestaltTherapy;
