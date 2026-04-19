import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import schemaTherapyHeader from "@/assets/schema-therapy-header.jpg";

const SchemaTherapy = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Schema Therapy"
    subtitle="Working with deeply rooted emotional patterns from childhood for lasting change"
    headerImage={schemaTherapyHeader}
    description={[
      "Schema therapy is an integrative approach that combines elements of CBT, attachment theory, gestalt, and psychodynamic therapy. It targets early maladaptive schemas — deep-seated patterns formed in childhood that continue to shape adult life.",
      "These schemas (such as abandonment, defectiveness, or emotional deprivation) drive recurring difficulties in relationships, self-image, and emotional regulation.",
      "Schema therapy is especially effective for personality difficulties, chronic depression and anxiety, and long-standing relationship patterns."
    ]}
    benefits={[
      { title: "Deep change", description: "Transformation at the level of core patterns." },
      { title: "Better relationships", description: "Breaking destructive relational cycles." },
      { title: "Healthier self-image", description: "More balanced and compassionate view of yourself." },
      { title: "Emotional healing", description: "Healing the unmet needs of the inner child." },
      { title: "Practical skills", description: "Concrete tools for daily life." },
      { title: "Lasting results", description: "Long-term change that holds over time." }
    ]}
    suitableFor={[
      "People with long-standing emotional difficulties",
      "Those with personality patterns that cause suffering",
      "People with recurring relationship problems",
      "Those for whom standard therapy hasn't been enough",
      "Individuals with chronic depression or anxiety",
      "People wanting deep transformation"
    ]}
    processSteps={[
      { title: "Identifying schemas", description: "Recognizing the core patterns operating in your life." },
      { title: "Understanding origins", description: "Linking schemas to early experiences." },
      { title: "Inner-child work", description: "Healing unmet emotional needs." },
      { title: "Working with modes", description: "Recognizing the different emotional states you move through." },
      { title: "Building healthy patterns", description: "Developing a strong, healthy adult self." }
    ]}
  />
);

export default SchemaTherapy;
