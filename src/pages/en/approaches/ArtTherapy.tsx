import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import artTherapyHeader from "@/assets/art-therapy-header.jpg";

const ArtTherapy = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Art Therapy"
    subtitle="Creative expression of inner experience through visual art"
    headerImage={artTherapyHeader}
    description={[
      "Art therapy uses creative expression — drawing, painting, collage, sculpture — as a path to self-knowledge and healing. No artistic skill is required; the process itself is the therapy.",
      "Through art, you can express what is difficult to put into words, externalize inner experience, and discover new perspectives on yourself and your life.",
      "It is effective for children and adults with anxiety, depression, trauma, identity issues, and anyone seeking creative self-discovery."
    ]}
    benefits={[
      { title: "Non-verbal expression", description: "A way to express what words cannot reach." },
      { title: "Emotional release", description: "Healthy outlet for difficult feelings." },
      { title: "Self-discovery", description: "New insights into yourself through creative work." },
      { title: "Stress relief", description: "Calming the nervous system through making." },
      { title: "Personal symbols", description: "Discovering meaningful images and themes." },
      { title: "Creative empowerment", description: "Reconnecting with your innate creativity." }
    ]}
    suitableFor={[
      "People who find words difficult",
      "Children and adolescents",
      "Those processing trauma",
      "People with anxiety or depression",
      "Those wanting creative self-exploration",
      "Anyone open to making art (no skill needed)"
    ]}
    processSteps={[
      { title: "Setting intention", description: "Choosing a theme or letting one emerge." },
      { title: "Creative process", description: "Making art freely and without judgment." },
      { title: "Witnessing the work", description: "Looking at what emerged with curiosity." },
      { title: "Dialogue", description: "Exploring meaning and feeling in the image." },
      { title: "Integration", description: "Bringing insights into your life." }
    ]}
  />
);

export default ArtTherapy;
