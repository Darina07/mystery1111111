import { ConditionPageTemplate, ConditionData } from "@/components/ConditionPageTemplate";
import { Zap, Heart, Wind, Shield } from "lucide-react";
import panicAttacksHeader from "@/assets/panic-attacks-header.jpg";

const conditionData: ConditionData = {
  title: "Panic Attacks",
  subtitle: "Psychological counseling",
  description: "Learn to manage and overcome panic attacks with proven methods.",
  heroImage: panicAttacksHeader,
  parentService: {
    name: "Psychological counseling",
    href: "/en/services/psychological-counseling"
  },
  whatIs: {
    title: "What are panic attacks?",
    content: `A panic attack is a sudden episode of intense fear accompanied by physical symptoms. Although frightening, panic attacks are not dangerous and can be successfully treated.

Symptoms of a panic attack:
• Rapid heartbeat
• Shortness of breath or hyperventilation
• Trembling and sweating
• Chest tightness
• Dizziness or lightheadedness
• Feeling of losing control
• Fear of dying
• Numbness in the limbs

Panic is treatable — with the right approach you can free yourself from fear.`
  },
  howWeHelp: [
    { icon: Zap, title: "Understanding symptoms", description: "Learning what happens in the body during an attack and why it is not dangerous." },
    { icon: Wind, title: "Breathing techniques", description: "Mastering breathing for rapid calming during an attack." },
    { icon: Heart, title: "Cognitive reframing", description: "Changing the catastrophic thoughts that fuel panic." },
    { icon: Shield, title: "Prevention", description: "Strategies for reducing the frequency and intensity of attacks." }
  ],
  benefits: [
    "Control over panic symptoms",
    "Reduced frequency of attacks",
    "Freedom from fear of panic",
    "Confidence in public situations",
    "A calmer everyday life",
    "Ability to cope on your own"
  ]
};

const PanicAttacks = () => <ConditionPageTemplate data={conditionData} language="en" />;
export default PanicAttacks;
