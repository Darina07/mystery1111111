import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import PsychologicalCounseling from "./pages/PsychologicalCounseling";
import FamilyCounseling from "./pages/FamilyCounseling";
import ChildCounseling from "./pages/ChildCounseling";
import GroupPrograms from "./pages/GroupPrograms";
import AddictionsGroupPrograms from "./pages/AddictionsGroupPrograms";
import AlcoholGroup from "./pages/addictions/AlcoholGroup";
import SubstancesGroup from "./pages/addictions/SubstancesGroup";
import GamblingGroup from "./pages/addictions/GamblingGroup";
import LoveGroup from "./pages/addictions/LoveGroup";
import CodependencyGroup from "./pages/addictions/CodependencyGroup";
import RelationshipsGroupPrograms from "./pages/RelationshipsGroupPrograms";
import AttachmentGroup from "./pages/relationships/AttachmentGroup";
import EmotionalReadinessGroup from "./pages/relationships/EmotionalReadinessGroup";
import SocialSkillsGroup from "./pages/relationships/SocialSkillsGroup";
import BreakupRecoveryGroup from "./pages/relationships/BreakupRecoveryGroup";
import MatchmakingGroup from "./pages/relationships/MatchmakingGroup";
import ParentingGroupPrograms from "./pages/ParentingGroupPrograms";
import PregnantMothersGroup from "./pages/parenting/PregnantMothersGroup";
import PostpartumGroup from "./pages/parenting/PostpartumGroup";
import ToddlerParentsGroup from "./pages/parenting/ToddlerParentsGroup";
import DifficultSituationsGroup from "./pages/parenting/DifficultSituationsGroup";
import NLPGroupPrograms from "./pages/NLPGroupPrograms";
import PersonalEffectivenessGroup from "./pages/nlp/PersonalEffectivenessGroup";
import AnxietyBlocksGroup from "./pages/nlp/AnxietyBlocksGroup";
import GoalsMotivationGroup from "./pages/nlp/GoalsMotivationGroup";
import CommunicationSkillsGroup from "./pages/nlp/CommunicationSkillsGroup";
import HabitsGroup from "./pages/nlp/HabitsGroup";
import SpeechTherapy from "./pages/SpeechTherapy";
import Psychodiagnostics from "./pages/Psychodiagnostics";
import CareerConsulting from "./pages/CareerConsulting";
import CorporateServices from "./pages/CorporateServices";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Prices from "./pages/Prices";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";
import CoupleConflicts from "./pages/conditions/CoupleConflicts";
import MaritalCrisis from "./pages/conditions/MaritalCrisis";
import JealousyTrust from "./pages/conditions/JealousyTrust";
import Infidelity from "./pages/conditions/Infidelity";
import SexualProblems from "./pages/conditions/SexualProblems";
import LackOfIntimacy from "./pages/conditions/LackOfIntimacy";
import FamilyViolence from "./pages/conditions/FamilyViolence";
import Postpartum from "./pages/conditions/Postpartum";
import ParentChildRelations from "./pages/conditions/ParentChildRelations";
import BlendedFamilies from "./pages/conditions/BlendedFamilies";
import SeparationLoss from "./pages/conditions/SeparationLoss";
import Depression from "./pages/conditions/Depression";
import Anxiety from "./pages/conditions/Anxiety";
import PanicAttacks from "./pages/conditions/PanicAttacks";
import Phobias from "./pages/conditions/Phobias";
import Hypochondria from "./pages/conditions/Hypochondria";
import OCD from "./pages/conditions/OCD";
import Bipolar from "./pages/conditions/Bipolar";
import Anger from "./pages/conditions/Anger";
import Stress from "./pages/conditions/Stress";
import PTSD from "./pages/conditions/PTSD";
import Burnout from "./pages/conditions/Burnout";
import EmotionalExhaustion from "./pages/conditions/EmotionalExhaustion";
import Insomnia from "./pages/conditions/Insomnia";
import Psychosomatic from "./pages/conditions/Psychosomatic";
import Fatigue from "./pages/conditions/Fatigue";
import Insecurity from "./pages/conditions/Insecurity";
import Perfectionism from "./pages/conditions/Perfectionism";
import Boundaries from "./pages/conditions/Boundaries";
import Loneliness from "./pages/conditions/Loneliness";
import CommunicationDifficulties from "./pages/conditions/CommunicationDifficulties";
import LifeCrisis from "./pages/conditions/LifeCrisis";
import Loss from "./pages/conditions/Loss";
import Separation from "./pages/conditions/Separation";
import Adaptation from "./pages/conditions/Adaptation";
import AlcoholAddiction from "./pages/conditions/AlcoholAddiction";
import DrugAddiction from "./pages/conditions/DrugAddiction";
import GamblingAddiction from "./pages/conditions/GamblingAddiction";
import MedicationAddiction from "./pages/conditions/MedicationAddiction";
import InternetAddiction from "./pages/conditions/InternetAddiction";
import SocialMediaAddiction from "./pages/conditions/SocialMediaAddiction";
import Workaholism from "./pages/conditions/Workaholism";
import CompulsiveBehavior from "./pages/conditions/CompulsiveBehavior";
import LGBTSupport from "./pages/conditions/LGBTSupport";
import IdentitySelfAcceptance from "./pages/conditions/IdentitySelfAcceptance";
import ComingOut from "./pages/conditions/ComingOut";
import SocialRejectionStress from "./pages/conditions/SocialRejectionStress";
import LGBTRelationships from "./pages/conditions/LGBTRelationships";
import Autism from "./pages/conditions/Autism";
import ADHD from "./pages/conditions/ADHD";
import Asperger from "./pages/conditions/Asperger";
import DownSyndrome from "./pages/conditions/DownSyndrome";
import IntellectualDisability from "./pages/conditions/IntellectualDisability";
import RettSyndrome from "./pages/conditions/RettSyndrome";
import Dyslexia from "./pages/conditions/Dyslexia";
import Dysgraphia from "./pages/conditions/Dysgraphia";
import Dyscalculia from "./pages/conditions/Dyscalculia";
import Dyspraxia from "./pages/conditions/Dyspraxia";
import MemoryConcentration from "./pages/conditions/MemoryConcentration";
import Stuttering from "./pages/conditions/Stuttering";
import SelectiveMutism from "./pages/conditions/SelectiveMutism";
import SpeechDisorders from "./pages/conditions/SpeechDisorders";
import ChildPTSD from "./pages/conditions/ChildPTSD";
import TicsTourette from "./pages/conditions/TicsTourette";
import AggressionSelfHarm from "./pages/conditions/AggressionSelfHarm";
import ChildFears from "./pages/conditions/ChildFears";
import ChildSleepProblems from "./pages/conditions/ChildSleepProblems";
import ChildPsychosomatic from "./pages/conditions/ChildPsychosomatic";
import AdaptationDifficulties from "./pages/conditions/AdaptationDifficulties";
import PeerCommunication from "./pages/conditions/PeerCommunication";
import LowSelfEsteem from "./pages/conditions/LowSelfEsteem";
import ConflictRelationships from "./pages/conditions/ConflictRelationships";
import RunningAway from "./pages/conditions/RunningAway";
import RiskyBehavior from "./pages/conditions/RiskyBehavior";
import ChildGrief from "./pages/conditions/ChildGrief";
import ParentsDivorce from "./pages/conditions/ParentsDivorce";
import NewFamilyMember from "./pages/conditions/NewFamilyMember";
import Relocation from "./pages/conditions/Relocation";
import ChildStress from "./pages/conditions/ChildStress";
import MuscularDystrophy from "./pages/conditions/MuscularDystrophy";
import Epilepsy from "./pages/conditions/Epilepsy";
import ChronicIllness from "./pages/conditions/ChronicIllness";
import SpecialEducationalNeeds from "./pages/conditions/SpecialEducationalNeeds";
import LGBTYouth from "./pages/conditions/LGBTYouth";
import YouthIdentity from "./pages/conditions/YouthIdentity";
import SocialRejectionSupport from "./pages/conditions/SocialRejectionSupport";
import ComingOutSupport from "./pages/conditions/ComingOutSupport";
import SpeechDelay from "./pages/conditions/SpeechDelay";
import Articulation from "./pages/conditions/Articulation";
import SpecialNeedsSpeech from "./pages/conditions/SpecialNeedsSpeech";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/psychological-counseling" element={<PsychologicalCounseling />} />
          <Route path="/services/family-counseling" element={<FamilyCounseling />} />
          <Route path="/services/child-counseling" element={<ChildCounseling />} />
          <Route path="/services/group-programs" element={<GroupPrograms />} />
          <Route path="/services/group-programs/addictions" element={<AddictionsGroupPrograms />} />
          <Route path="/services/group-programs/addictions/alcohol" element={<AlcoholGroup />} />
          <Route path="/services/group-programs/addictions/substances" element={<SubstancesGroup />} />
          <Route path="/services/group-programs/addictions/gambling" element={<GamblingGroup />} />
          <Route path="/services/group-programs/addictions/love" element={<LoveGroup />} />
          <Route path="/services/group-programs/addictions/codependency" element={<CodependencyGroup />} />
          <Route path="/services/group-programs/relationships" element={<RelationshipsGroupPrograms />} />
          <Route path="/services/group-programs/relationships/attachment" element={<AttachmentGroup />} />
          <Route path="/services/group-programs/relationships/emotional-readiness" element={<EmotionalReadinessGroup />} />
          <Route path="/services/group-programs/relationships/social-skills" element={<SocialSkillsGroup />} />
          <Route path="/services/group-programs/relationships/breakup-recovery" element={<BreakupRecoveryGroup />} />
          <Route path="/services/group-programs/relationships/matchmaking" element={<MatchmakingGroup />} />
          <Route path="/services/group-programs/parenting" element={<ParentingGroupPrograms />} />
          <Route path="/services/group-programs/parenting/pregnant-mothers" element={<PregnantMothersGroup />} />
          <Route path="/services/group-programs/parenting/postpartum" element={<PostpartumGroup />} />
          <Route path="/services/group-programs/parenting/toddler-parents" element={<ToddlerParentsGroup />} />
          <Route path="/services/group-programs/parenting/difficult-situations" element={<DifficultSituationsGroup />} />
          <Route path="/services/group-programs/nlp" element={<NLPGroupPrograms />} />
          <Route path="/services/group-programs/nlp/personal-effectiveness" element={<PersonalEffectivenessGroup />} />
          <Route path="/services/group-programs/nlp/anxiety-blocks" element={<AnxietyBlocksGroup />} />
          <Route path="/services/group-programs/nlp/goals-motivation" element={<GoalsMotivationGroup />} />
          <Route path="/services/group-programs/nlp/communication-skills" element={<CommunicationSkillsGroup />} />
          <Route path="/services/group-programs/nlp/habits" element={<HabitsGroup />} />
          <Route path="/services/speech-therapy" element={<SpeechTherapy />} />
          <Route path="/services/psychodiagnostics" element={<Psychodiagnostics />} />
          <Route path="/services/career-consulting" element={<CareerConsulting />} />
          <Route path="/services/corporate-services" element={<CorporateServices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/conditions/couple-conflicts" element={<CoupleConflicts />} />
          <Route path="/conditions/marital-crisis" element={<MaritalCrisis />} />
          <Route path="/conditions/jealousy-trust" element={<JealousyTrust />} />
          <Route path="/conditions/infidelity" element={<Infidelity />} />
          <Route path="/conditions/sexual-problems" element={<SexualProblems />} />
          <Route path="/conditions/lack-of-intimacy" element={<LackOfIntimacy />} />
          <Route path="/conditions/family-violence" element={<FamilyViolence />} />
          <Route path="/conditions/postpartum" element={<Postpartum />} />
          <Route path="/conditions/parent-child-relations" element={<ParentChildRelations />} />
          <Route path="/conditions/blended-families" element={<BlendedFamilies />} />
          <Route path="/conditions/separation-loss" element={<SeparationLoss />} />
          {/* Psychological Counseling conditions */}
          <Route path="/conditions/depression" element={<Depression />} />
          <Route path="/conditions/anxiety" element={<Anxiety />} />
          <Route path="/conditions/panic-attacks" element={<PanicAttacks />} />
          <Route path="/conditions/phobias" element={<Phobias />} />
          <Route path="/conditions/hypochondria" element={<Hypochondria />} />
          <Route path="/conditions/ocd" element={<OCD />} />
          <Route path="/conditions/bipolar" element={<Bipolar />} />
          <Route path="/conditions/anger" element={<Anger />} />
          <Route path="/conditions/stress" element={<Stress />} />
          <Route path="/conditions/ptsd" element={<PTSD />} />
          <Route path="/conditions/burnout" element={<Burnout />} />
          <Route path="/conditions/emotional-exhaustion" element={<EmotionalExhaustion />} />
          <Route path="/conditions/insomnia" element={<Insomnia />} />
          <Route path="/conditions/psychosomatic" element={<Psychosomatic />} />
          <Route path="/conditions/fatigue" element={<Fatigue />} />
          <Route path="/conditions/insecurity" element={<Insecurity />} />
          <Route path="/conditions/perfectionism" element={<Perfectionism />} />
          <Route path="/conditions/boundaries" element={<Boundaries />} />
          <Route path="/conditions/loneliness" element={<Loneliness />} />
          <Route path="/conditions/communication-difficulties" element={<CommunicationDifficulties />} />
          <Route path="/conditions/life-crisis" element={<LifeCrisis />} />
          <Route path="/conditions/loss" element={<Loss />} />
          <Route path="/conditions/separation" element={<Separation />} />
          <Route path="/conditions/adaptation" element={<Adaptation />} />
          {/* Addiction conditions */}
          <Route path="/conditions/alcohol-addiction" element={<AlcoholAddiction />} />
          <Route path="/conditions/drug-addiction" element={<DrugAddiction />} />
          <Route path="/conditions/gambling-addiction" element={<GamblingAddiction />} />
          <Route path="/conditions/medication-addiction" element={<MedicationAddiction />} />
          <Route path="/conditions/internet-addiction" element={<InternetAddiction />} />
          <Route path="/conditions/social-media-addiction" element={<SocialMediaAddiction />} />
          <Route path="/conditions/workaholism" element={<Workaholism />} />
          <Route path="/conditions/compulsive-behavior" element={<CompulsiveBehavior />} />
          {/* LGBT+ conditions */}
          <Route path="/conditions/lgbt-support" element={<LGBTSupport />} />
          <Route path="/conditions/identity-self-acceptance" element={<IdentitySelfAcceptance />} />
          <Route path="/conditions/coming-out" element={<ComingOut />} />
          <Route path="/conditions/social-rejection-stress" element={<SocialRejectionStress />} />
          <Route path="/conditions/lgbt-relationships" element={<LGBTRelationships />} />
          {/* Special needs conditions */}
          <Route path="/conditions/autism" element={<Autism />} />
          <Route path="/conditions/adhd" element={<ADHD />} />
          <Route path="/conditions/asperger" element={<Asperger />} />
          <Route path="/conditions/down-syndrome" element={<DownSyndrome />} />
          <Route path="/conditions/intellectual-disability" element={<IntellectualDisability />} />
          <Route path="/conditions/rett-syndrome" element={<RettSyndrome />} />
          {/* Learning difficulties conditions */}
          <Route path="/conditions/dyslexia" element={<Dyslexia />} />
          <Route path="/conditions/dysgraphia" element={<Dysgraphia />} />
          <Route path="/conditions/dyscalculia" element={<Dyscalculia />} />
          <Route path="/conditions/dyspraxia" element={<Dyspraxia />} />
          <Route path="/conditions/memory-concentration" element={<MemoryConcentration />} />
          {/* Child behavioral and emotional conditions */}
          <Route path="/conditions/stuttering" element={<Stuttering />} />
          <Route path="/conditions/selective-mutism" element={<SelectiveMutism />} />
          <Route path="/conditions/speech-disorders" element={<SpeechDisorders />} />
          <Route path="/conditions/child-ptsd" element={<ChildPTSD />} />
          <Route path="/conditions/tics-tourette" element={<TicsTourette />} />
          <Route path="/conditions/aggression-self-harm" element={<AggressionSelfHarm />} />
          <Route path="/conditions/child-fears" element={<ChildFears />} />
          <Route path="/conditions/child-sleep-problems" element={<ChildSleepProblems />} />
          <Route path="/conditions/child-psychosomatic" element={<ChildPsychosomatic />} />
          {/* Child social and life conditions */}
          <Route path="/conditions/adaptation-difficulties" element={<AdaptationDifficulties />} />
          <Route path="/conditions/peer-communication" element={<PeerCommunication />} />
          <Route path="/conditions/low-self-esteem" element={<LowSelfEsteem />} />
          <Route path="/conditions/conflict-relationships" element={<ConflictRelationships />} />
          <Route path="/conditions/running-away" element={<RunningAway />} />
          <Route path="/conditions/risky-behavior" element={<RiskyBehavior />} />
          <Route path="/conditions/child-grief" element={<ChildGrief />} />
          <Route path="/conditions/parents-divorce" element={<ParentsDivorce />} />
          <Route path="/conditions/new-family-member" element={<NewFamilyMember />} />
          <Route path="/conditions/relocation" element={<Relocation />} />
          <Route path="/conditions/child-stress" element={<ChildStress />} />
          {/* Special physical conditions */}
          <Route path="/conditions/muscular-dystrophy" element={<MuscularDystrophy />} />
          <Route path="/conditions/epilepsy" element={<Epilepsy />} />
          <Route path="/conditions/chronic-illness" element={<ChronicIllness />} />
          <Route path="/conditions/special-educational-needs" element={<SpecialEducationalNeeds />} />
          {/* LGBT+ youth conditions */}
          <Route path="/conditions/lgbt-youth" element={<LGBTYouth />} />
          <Route path="/conditions/youth-identity" element={<YouthIdentity />} />
          <Route path="/conditions/social-rejection-support" element={<SocialRejectionSupport />} />
          <Route path="/conditions/coming-out-support" element={<ComingOutSupport />} />
          {/* Speech therapy specific conditions */}
          <Route path="/conditions/speech-delay" element={<SpeechDelay />} />
          <Route path="/conditions/articulation" element={<Articulation />} />
          <Route path="/conditions/special-needs" element={<SpecialNeedsSpeech />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
