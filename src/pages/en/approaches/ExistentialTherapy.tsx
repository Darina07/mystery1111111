import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import existentialTherapyHeader from "@/assets/existential-therapy-header.jpg";

const ExistentialTherapy = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Existential Psychotherapy"
    subtitle="Exploring meaning, freedom, responsibility, and authenticity in life"
    headerImage={existentialTherapyHeader}
    description={[
      "Existential therapy is a philosophical approach that addresses the fundamental questions of human existence: meaning, freedom, isolation, and mortality.",
      "Rather than treating symptoms in isolation, it sees psychological difficulties as responses to the challenges of being human. Therapy becomes a space for honest exploration of how you live and what you want from life.",
      "It is especially helpful in life crises, loss, search for meaning, and major transitions."
    ]}
    benefits={[
      { title: "Discovering meaning", description: "Finding what gives your life purpose and direction." },
      { title: "Authentic living", description: "Aligning your life with your true values." },
      { title: "Greater freedom", description: "Recognizing and exercising your power to choose." },
      { title: "Acceptance", description: "Coming to peace with the realities of human existence." },
      { title: "Personal growth", description: "Deep transformation through self-confrontation." },
      { title: "Inner peace", description: "Lasting calm rooted in self-understanding." }
    ]}
    suitableFor={[
      "People in a life crisis",
      "Those searching for meaning",
      "People processing loss",
      "Those facing major life transitions",
      "Individuals questioning the path they're on",
      "Anyone interested in deep philosophical inquiry"
    ]}
    processSteps={[
      { title: "Exploration", description: "Examining the central questions of your life." },
      { title: "Confronting givens", description: "Facing freedom, responsibility, and meaning." },
      { title: "Clarifying values", description: "Discovering what truly matters to you." },
      { title: "Authentic choices", description: "Making decisions in line with your true self." },
      { title: "Living meaningfully", description: "Translating insight into a meaningful life." }
    ]}
  />
);

export default ExistentialTherapy;
