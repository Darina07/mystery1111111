import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import danceMovementTherapyHeader from "@/assets/dance-movement-therapy-header.jpg";

const DanceMovementTherapy = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Dance Movement Therapy"
    subtitle="Using movement as a means of expression, awareness, and personal growth"
    headerImage={danceMovementTherapyHeader}
    description={[
      "Dance movement therapy uses movement as a path to psychological healing and growth. It is based on the understanding that body and mind are deeply interconnected — movement reflects and shapes our inner state.",
      "Through guided exploration, improvisation, and structured movement, this approach helps you express what cannot be put into words, integrate emotions, and reconnect with yourself.",
      "It is effective for trauma, anxiety, depression, body image issues, and personal development."
    ]}
    benefits={[
      { title: "Non-verbal expression", description: "A way to express what words cannot reach." },
      { title: "Emotional release", description: "Healthy discharge of stored emotion." },
      { title: "Body confidence", description: "A more positive relationship with your body." },
      { title: "Better self-awareness", description: "Insight through movement and sensation." },
      { title: "Stress relief", description: "Release of tension through embodied practice." },
      { title: "Joy of movement", description: "Reconnecting with the pleasure of being in your body." }
    ]}
    suitableFor={[
      "People who find words difficult",
      "Those processing trauma",
      "People with body image difficulties",
      "Those with anxiety or depression",
      "People wanting embodied self-discovery",
      "Anyone open to creative movement"
    ]}
    processSteps={[
      { title: "Body warm-up", description: "Gently arriving in the body." },
      { title: "Exploration", description: "Discovering your body's natural language." },
      { title: "Theme work", description: "Movement related to specific therapeutic themes." },
      { title: "Reflection", description: "Integrating insights from the movement." },
      { title: "Closing", description: "Grounding before returning to daily life." }
    ]}
  />
);

export default DanceMovementTherapy;
