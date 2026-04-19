import { TherapeuticApproachTemplate } from "@/components/TherapeuticApproachTemplate";
import emdrHeader from "@/assets/emdr-header.jpg";

const EMDR = () => (
  <TherapeuticApproachTemplate
    language="en"
    title="EMDR Therapy"
    subtitle="Eye Movement Desensitization and Reprocessing — a proven method for working with trauma and PTSD"
    headerImage={emdrHeader}
    description={[
      "EMDR (Eye Movement Desensitization and Reprocessing) is a structured therapy that helps the brain process traumatic memories that have remained 'frozen' in the nervous system.",
      "Through bilateral stimulation (often eye movements) combined with focused recall, traumatic memories lose their emotional charge and become integrated into a healthier life narrative.",
      "EMDR is recommended by the WHO and is considered a first-line treatment for PTSD. It is also effective for anxiety, phobias, panic, and many other conditions linked to disturbing experiences."
    ]}
    benefits={[
      { title: "Effective trauma work", description: "A proven method for healing traumatic experiences." },
      { title: "Fast results", description: "Many clients see relief within a few sessions." },
      { title: "No need to retell in detail", description: "You don't have to verbalize everything." },
      { title: "Lasting change", description: "Results that hold over the long term." },
      { title: "Relief from PTSD symptoms", description: "Significant reduction in flashbacks, nightmares, and anxiety." },
      { title: "Emotional integration", description: "A more peaceful relationship with your past." }
    ]}
    suitableFor={[
      "People with PTSD",
      "Those who have experienced trauma",
      "People with phobias",
      "Those with anxiety and panic attacks",
      "People with disturbing memories",
      "Anyone with unprocessed difficult experiences"
    ]}
    processSteps={[
      { title: "History and stabilization", description: "Building safety and resources before processing." },
      { title: "Assessment", description: "Identifying the target memory and related beliefs." },
      { title: "Desensitization", description: "Processing the memory using bilateral stimulation." },
      { title: "Installation", description: "Strengthening positive beliefs about yourself." },
      { title: "Integration", description: "Confirming the memory has been fully processed." }
    ]}
  />
);

export default EMDR;
