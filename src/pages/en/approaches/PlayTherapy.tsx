import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import playTherapyHeader from "@/assets/play-therapy-header.jpg";

const PlayTherapy = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Play Therapy"
    subtitle="A natural way for children to express themselves and engage in therapeutic work through play"
    headerImage={playTherapyHeader}
    description={[
      "Play therapy uses play — the natural language of children — as a therapeutic medium. Through toys, games, art, and stories, children can express experiences and emotions they cannot yet put into words.",
      "In a safe, accepting environment, the play therapist follows the child's lead, helping them process difficulties, develop new skills, and build resilience.",
      "It is effective for children with anxiety, behavioral difficulties, trauma, family changes, social difficulties, and many other challenges."
    ]}
    benefits={[
      { title: "Natural expression", description: "Children communicate in their own language — play." },
      { title: "Emotional processing", description: "A safe space to work through difficult experiences." },
      { title: "Better self-regulation", description: "Development of skills for managing emotions." },
      { title: "Stronger self-esteem", description: "Growing sense of confidence and capability." },
      { title: "Better relationships", description: "Improved social and family connections." },
      { title: "Healthy development", description: "Support for the child's overall growth." }
    ]}
    suitableFor={[
      "Children ages 3–12",
      "Children with anxiety or behavioral difficulties",
      "Children processing trauma",
      "Children adjusting to family changes",
      "Children with social difficulties",
      "Children who struggle to express themselves verbally"
    ]}
    processSteps={[
      { title: "Parent consultation", description: "Understanding the child's history and difficulties." },
      { title: "Building safety", description: "Creating a trusting relationship with the child." },
      { title: "Free play", description: "Letting the child lead and express themselves." },
      { title: "Therapeutic work", description: "Gentle therapeutic interventions through play." },
      { title: "Family integration", description: "Supporting parents in carrying the work forward." }
    ]}
  />
);

export default PlayTherapy;
