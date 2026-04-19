import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import familyTherapyHeader from "@/assets/family-therapy-header.jpg";

const FamilyTherapy = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Family Therapy"
    subtitle="Working with family relationships to improve communication and resolve conflicts"
    headerImage={familyTherapyHeader}
    description={[
      "Family therapy views the family as a system in which every member affects the others. Difficulties experienced by one person are understood in the context of the whole family.",
      "By working with the family together, therapy helps reveal communication patterns, roles, and dynamics that maintain difficulties — and creates space for change.",
      "It is effective for parent–child conflicts, couple difficulties, family transitions, and challenges of every developmental stage."
    ]}
    benefits={[
      { title: "Better communication", description: "Clearer, more respectful conversations." },
      { title: "Resolving conflicts", description: "Tools for handling disagreements constructively." },
      { title: "Stronger bonds", description: "Deeper connection between family members." },
      { title: "Healthier roles", description: "More balanced and supportive family roles." },
      { title: "Adapting to change", description: "Smoother transitions through life stages." },
      { title: "Whole-family healing", description: "Change that benefits everyone in the system." }
    ]}
    suitableFor={[
      "Families with parent–child conflicts",
      "Families going through transitions",
      "Families with communication difficulties",
      "Blended families",
      "Families coping with loss or crisis",
      "Anyone wanting to strengthen family bonds"
    ]}
    processSteps={[
      { title: "Joint assessment", description: "Understanding the whole family's dynamics." },
      { title: "Identifying patterns", description: "Mapping the family's communication and roles." },
      { title: "Working with the system", description: "Engaging the whole family in change." },
      { title: "Trying new patterns", description: "Practicing healthier ways of relating." },
      { title: "Integrating change", description: "Embedding new patterns in daily family life." }
    ]}
  />
);

export default FamilyTherapy;
