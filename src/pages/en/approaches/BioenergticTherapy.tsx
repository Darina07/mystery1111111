import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import bioenergeticTherapyHeader from "@/assets/bioenergetic-therapy-header.jpg";

const BioenergeticTherapy = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Bioenergetic Therapy"
    subtitle="An integrative approach connecting emotional experience with bodily reactions"
    headerImage={bioenergeticTherapyHeader}
    description={[
      "Bioenergetic therapy, developed by Alexander Lowen, is a body-oriented approach that views the body and mind as a single living system. Emotional history is held in the body as patterns of muscular tension.",
      "Through specific exercises, breath work, and grounding techniques, bioenergetic therapy helps release blocked energy, restore aliveness, and integrate suppressed emotions.",
      "It is effective for chronic tension, depression, anxiety, low energy, and disconnection from the body."
    ]}
    benefits={[
      { title: "Released tension", description: "Freedom from chronic muscular tightness." },
      { title: "Greater aliveness", description: "More energy, vitality, and presence." },
      { title: "Emotional integration", description: "Reconnection with suppressed feelings." },
      { title: "Stronger grounding", description: "Feeling more rooted and stable in life." },
      { title: "Healthier breathing", description: "Deep, free breathing as a foundation of well-being." },
      { title: "Body–mind unity", description: "Integration of body, emotion, and mind." }
    ]}
    suitableFor={[
      "People with chronic tension",
      "Those who feel disconnected from their body",
      "People with depression or low energy",
      "Those with anxiety and stress",
      "People wanting deep emotional work",
      "Anyone open to body-based therapy"
    ]}
    processSteps={[
      { title: "Body assessment", description: "Understanding your body's holding patterns." },
      { title: "Grounding work", description: "Building a felt sense of being in your body." },
      { title: "Breath and movement", description: "Releasing energy through breath and exercises." },
      { title: "Emotional expression", description: "Allowing suppressed feelings to surface safely." },
      { title: "Integration", description: "Bringing new aliveness into daily life." }
    ]}
  />
);

export default BioenergeticTherapy;
