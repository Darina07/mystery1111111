import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import transgenerationalTherapyHeader from "@/assets/transgenerational-therapy-header.jpg";

const TransgenerationalTherapy = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Transgenerational Therapy"
    subtitle="Exploring family history and patterns passed down across generations"
    headerImage={transgenerationalTherapyHeader}
    description={[
      "Transgenerational therapy explores how unresolved experiences, traumas, and patterns from previous generations continue to influence the present.",
      "Through tools such as the genogram and family constellation work, this approach makes the invisible threads of family history visible — and helps free clients from inherited burdens that aren't truly their own.",
      "It is helpful for recurring family patterns, mysterious symptoms, identity issues, and a sense of carrying something that doesn't belong to you."
    ]}
    benefits={[
      { title: "Understanding patterns", description: "Insight into how family history shapes your life." },
      { title: "Releasing inherited burdens", description: "Letting go of what isn't truly yours to carry." },
      { title: "Family healing", description: "Healing that ripples through generations." },
      { title: "Reclaiming identity", description: "Discovering who you are beyond family expectations." },
      { title: "Better relationships", description: "Breaking destructive family cycles." },
      { title: "Sense of belonging", description: "Finding your true place within the family." }
    ]}
    suitableFor={[
      "People with recurring family patterns",
      "Those with unexplained symptoms",
      "People exploring family history",
      "Those who feel they carry something not their own",
      "Individuals from families with significant traumas",
      "Anyone wanting to free future generations from old patterns"
    ]}
    processSteps={[
      { title: "Family history", description: "Mapping your family across generations." },
      { title: "Genogram", description: "Visualizing patterns, relationships, and key events." },
      { title: "Recognizing themes", description: "Identifying recurring family themes." },
      { title: "Releasing burdens", description: "Symbolically returning what isn't yours." },
      { title: "Integration", description: "Living from a clearer, freer place." }
    ]}
  />
);

export default TransgenerationalTherapy;
