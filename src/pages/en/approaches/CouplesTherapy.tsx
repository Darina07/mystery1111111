import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import couplesTherapyHeader from "@/assets/couples-therapy-header.jpg";

const CouplesTherapy = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Couples Therapy"
    subtitle="Restoring closeness, trust, and communication in your relationship"
    headerImage={couplesTherapyHeader}
    description={[
      "Couples therapy is a structured space where partners can work together — with the support of a specialist — to understand each other better, resolve conflicts, and rebuild closeness.",
      "Sessions help partners identify destructive patterns, develop healthier communication, and reconnect on emotional and physical levels.",
      "It is effective for couples in crisis, after infidelity, with communication difficulties, or simply wanting to deepen their relationship."
    ]}
    benefits={[
      { title: "Better communication", description: "Tools for honest, respectful dialogue." },
      { title: "Conflict resolution", description: "Constructive ways to handle disagreements." },
      { title: "Restored intimacy", description: "Renewed emotional and physical closeness." },
      { title: "Rebuilt trust", description: "A clear path back to safety in the relationship." },
      { title: "Stronger bond", description: "Deeper understanding of each other." },
      { title: "Shared vision", description: "Clarity about your future together." }
    ]}
    suitableFor={[
      "Couples in crisis",
      "Partners with communication difficulties",
      "Couples after infidelity",
      "Those facing major life transitions",
      "Couples wanting to prevent problems",
      "Anyone wanting to deepen their relationship"
    ]}
    processSteps={[
      { title: "Initial assessment", description: "Understanding both partners' perspectives and goals." },
      { title: "Identifying patterns", description: "Mapping the dynamics that maintain difficulties." },
      { title: "Skill-building", description: "Learning new communication and conflict-resolution tools." },
      { title: "Emotional repair", description: "Healing wounds and rebuilding trust." },
      { title: "Future-building", description: "Defining a shared vision for the relationship." }
    ]}
  />
);

export default CouplesTherapy;
