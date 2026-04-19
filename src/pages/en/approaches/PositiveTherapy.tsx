import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import positiveTherapyHeader from "@/assets/positive-therapy-header.jpg";

const PositiveTherapy = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="Positive Psychotherapy"
    subtitle="A focus on resources, strengths, and life balance through the Peseschkian method"
    headerImage={positiveTherapyHeader}
    description={[
      "Positive psychotherapy, developed by Nossrat Peseschkian, is a humanistic, psychodynamic approach that emphasizes a person's resources, strengths, and capacity for growth.",
      "It works with the balance between four areas of life: body, achievement, contact, and meaning. Difficulties are seen not just as symptoms but as expressions of unmet needs and unrealized potential.",
      "This approach is effective for a wide range of difficulties and is especially valued for its respectful, hopeful, and culturally sensitive perspective."
    ]}
    benefits={[
      { title: "Discovering strengths", description: "Recognizing your inner resources and capacities." },
      { title: "Life balance", description: "Restoring harmony across all areas of life." },
      { title: "Hope", description: "A constructive, optimistic outlook on change." },
      { title: "Self-help skills", description: "Practical tools you can use independently." },
      { title: "Cultural sensitivity", description: "Respect for your unique cultural background." },
      { title: "Personal growth", description: "Realizing your full potential." }
    ]}
    suitableFor={[
      "People going through life challenges",
      "Those seeking better balance in life",
      "People interested in personal growth",
      "Those who value a strengths-based approach",
      "Individuals from diverse cultural backgrounds",
      "Anyone seeking a hopeful, practical therapy"
    ]}
    processSteps={[
      { title: "Observation", description: "Becoming aware of patterns and conflicts." },
      { title: "Inventory", description: "Mapping your resources and challenges." },
      { title: "Situational support", description: "Working on the immediate difficulties." },
      { title: "Verbalization", description: "Open dialogue about previously unspoken issues." },
      { title: "Goal expansion", description: "Setting new goals and directions for life." }
    ]}
  />
);

export default PositiveTherapy;
