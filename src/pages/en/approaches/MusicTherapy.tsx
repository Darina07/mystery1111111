import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import musicTherapyHeader from "@/assets/music-therapy-header.jpg";

const MusicTherapy = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Music Therapy"
    subtitle="Using music as a means of emotional regulation, communication, and personal growth"
    headerImage={musicTherapyHeader}
    description={[
      "Music therapy uses sound, rhythm, melody, and song as therapeutic tools. It works with our deep, pre-verbal response to music to support emotional, cognitive, and social well-being.",
      "Through listening, improvisation, songwriting, or movement to music, music therapy helps you express, regulate, and process experiences that may be hard to articulate.",
      "It is effective for children and adults with anxiety, depression, trauma, developmental challenges, and anyone seeking creative self-expression."
    ]}
    benefits={[
      { title: "Emotional expression", description: "A non-verbal channel for difficult feelings." },
      { title: "Mood regulation", description: "Tools for shifting and stabilizing your emotional state." },
      { title: "Stress relief", description: "Deep relaxation through sound and rhythm." },
      { title: "Better communication", description: "Connection beyond words." },
      { title: "Self-discovery", description: "Insight through musical exploration." },
      { title: "Joy and play", description: "Reconnecting with the pleasure of being alive." }
    ]}
    suitableFor={[
      "Children and adolescents",
      "People with anxiety or depression",
      "Those processing trauma",
      "People with developmental challenges",
      "Those who love or are drawn to music",
      "Anyone open to creative expression (no musical skill needed)"
    ]}
    processSteps={[
      { title: "Musical assessment", description: "Exploring your relationship with music." },
      { title: "Active or receptive work", description: "Playing, improvising, or listening together." },
      { title: "Emotional exploration", description: "Using music to access and process emotion." },
      { title: "Reflection", description: "Talking about what arose through the music." },
      { title: "Integration", description: "Bringing insights into daily life." }
    ]}
  />
);

export default MusicTherapy;
