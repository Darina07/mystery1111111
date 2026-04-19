import { Suspense, lazy, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { LanguageProvider } from "@/i18n/LanguageContext";

// Lazy load Google Analytics - not needed for initial render
const GoogleAnalyticsProvider = lazy(() => 
  import("@/components/GoogleAnalytics").then(m => ({ default: m.GoogleAnalyticsProvider }))
);

// Lazy load non-critical components
const CookieConsent = lazy(() => import("./components/CookieConsent").then(m => ({ default: m.CookieConsent })));
const Toaster = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));

// Lazy load Index page for better initial bundle
const Index = lazy(() => import("./pages/Index"));

// Lazy load all other pages for code splitting
const AboutUs = lazy(() => import("./pages/AboutUs"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PsychologicalCounseling = lazy(() => import("./pages/PsychologicalCounseling"));
const FamilyCounseling = lazy(() => import("./pages/FamilyCounseling"));
const ChildCounseling = lazy(() => import("./pages/ChildCounseling"));
const GroupPrograms = lazy(() => import("./pages/GroupPrograms"));
const AddictionsGroupPrograms = lazy(() => import("./pages/AddictionsGroupPrograms"));
const AlcoholGroup = lazy(() => import("./pages/addictions/AlcoholGroup"));
const SubstancesGroup = lazy(() => import("./pages/addictions/SubstancesGroup"));
const GamblingGroup = lazy(() => import("./pages/addictions/GamblingGroup"));
const LoveGroup = lazy(() => import("./pages/addictions/LoveGroup"));
const CodependencyGroup = lazy(() => import("./pages/addictions/CodependencyGroup"));
const RelationshipsGroupPrograms = lazy(() => import("./pages/RelationshipsGroupPrograms"));
const AttachmentGroup = lazy(() => import("./pages/relationships/AttachmentGroup"));
const EmotionalReadinessGroup = lazy(() => import("./pages/relationships/EmotionalReadinessGroup"));
const SocialSkillsGroup = lazy(() => import("./pages/relationships/SocialSkillsGroup"));
const BreakupRecoveryGroup = lazy(() => import("./pages/relationships/BreakupRecoveryGroup"));
const MatchmakingGroup = lazy(() => import("./pages/relationships/MatchmakingGroup"));
const ParentingGroupPrograms = lazy(() => import("./pages/ParentingGroupPrograms"));
const PregnantMothersGroup = lazy(() => import("./pages/parenting/PregnantMothersGroup"));
const PostpartumGroup = lazy(() => import("./pages/parenting/PostpartumGroup"));
const ToddlerParentsGroup = lazy(() => import("./pages/parenting/ToddlerParentsGroup"));
const DifficultSituationsGroup = lazy(() => import("./pages/parenting/DifficultSituationsGroup"));
const NLPGroupPrograms = lazy(() => import("./pages/NLPGroupPrograms"));
const PersonalEffectivenessGroup = lazy(() => import("./pages/nlp/PersonalEffectivenessGroup"));
const AnxietyBlocksGroup = lazy(() => import("./pages/nlp/AnxietyBlocksGroup"));
const GoalsMotivationGroup = lazy(() => import("./pages/nlp/GoalsMotivationGroup"));
const CommunicationSkillsGroup = lazy(() => import("./pages/nlp/CommunicationSkillsGroup"));
const HabitsGroup = lazy(() => import("./pages/nlp/HabitsGroup"));
const SpeechTherapy = lazy(() => import("./pages/SpeechTherapy"));
const Psychodiagnostics = lazy(() => import("./pages/Psychodiagnostics"));
const CareerConsulting = lazy(() => import("./pages/CareerConsulting"));
const CorporateServices = lazy(() => import("./pages/CorporateServices"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Prices = lazy(() => import("./pages/Prices"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const TherapeuticApproaches = lazy(() => import("./pages/TherapeuticApproaches"));

// Conditions - Family
const CoupleConflicts = lazy(() => import("./pages/conditions/CoupleConflicts"));
const MaritalCrisis = lazy(() => import("./pages/conditions/MaritalCrisis"));
const JealousyTrust = lazy(() => import("./pages/conditions/JealousyTrust"));
const Infidelity = lazy(() => import("./pages/conditions/Infidelity"));
const SexualProblems = lazy(() => import("./pages/conditions/SexualProblems"));
const LackOfIntimacy = lazy(() => import("./pages/conditions/LackOfIntimacy"));
const FamilyViolence = lazy(() => import("./pages/conditions/FamilyViolence"));
const Postpartum = lazy(() => import("./pages/conditions/Postpartum"));
const ParentChildRelations = lazy(() => import("./pages/conditions/ParentChildRelations"));
const BlendedFamilies = lazy(() => import("./pages/conditions/BlendedFamilies"));
const SeparationLoss = lazy(() => import("./pages/conditions/SeparationLoss"));

// Conditions - Psychological
const Depression = lazy(() => import("./pages/conditions/Depression"));
const Anxiety = lazy(() => import("./pages/conditions/Anxiety"));
const PanicAttacks = lazy(() => import("./pages/conditions/PanicAttacks"));
const Phobias = lazy(() => import("./pages/conditions/Phobias"));
const Hypochondria = lazy(() => import("./pages/conditions/Hypochondria"));
const OCD = lazy(() => import("./pages/conditions/OCD"));
const Bipolar = lazy(() => import("./pages/conditions/Bipolar"));
const Anger = lazy(() => import("./pages/conditions/Anger"));
const Stress = lazy(() => import("./pages/conditions/Stress"));
const PTSD = lazy(() => import("./pages/conditions/PTSD"));
const Burnout = lazy(() => import("./pages/conditions/Burnout"));
const EmotionalExhaustion = lazy(() => import("./pages/conditions/EmotionalExhaustion"));
const Insomnia = lazy(() => import("./pages/conditions/Insomnia"));
const Psychosomatic = lazy(() => import("./pages/conditions/Psychosomatic"));
const Fatigue = lazy(() => import("./pages/conditions/Fatigue"));
const Insecurity = lazy(() => import("./pages/conditions/Insecurity"));
const Perfectionism = lazy(() => import("./pages/conditions/Perfectionism"));
const Boundaries = lazy(() => import("./pages/conditions/Boundaries"));
const Loneliness = lazy(() => import("./pages/conditions/Loneliness"));
const CommunicationDifficulties = lazy(() => import("./pages/conditions/CommunicationDifficulties"));
const LifeCrisis = lazy(() => import("./pages/conditions/LifeCrisis"));
const Loss = lazy(() => import("./pages/conditions/Loss"));
const Separation = lazy(() => import("./pages/conditions/Separation"));
const Adaptation = lazy(() => import("./pages/conditions/Adaptation"));

// Conditions - Addictions
const AlcoholAddiction = lazy(() => import("./pages/conditions/AlcoholAddiction"));
const DrugAddiction = lazy(() => import("./pages/conditions/DrugAddiction"));
const GamblingAddiction = lazy(() => import("./pages/conditions/GamblingAddiction"));
const MedicationAddiction = lazy(() => import("./pages/conditions/MedicationAddiction"));
const InternetAddiction = lazy(() => import("./pages/conditions/InternetAddiction"));
const SocialMediaAddiction = lazy(() => import("./pages/conditions/SocialMediaAddiction"));
const Workaholism = lazy(() => import("./pages/conditions/Workaholism"));
const LoveAddiction = lazy(() => import("./pages/conditions/LoveAddiction"));

// Conditions - LGBT+
const LGBTSupport = lazy(() => import("./pages/conditions/LGBTSupport"));
const IdentitySelfAcceptance = lazy(() => import("./pages/conditions/IdentitySelfAcceptance"));
const ComingOut = lazy(() => import("./pages/conditions/ComingOut"));
const SocialRejectionStress = lazy(() => import("./pages/conditions/SocialRejectionStress"));
const LGBTRelationships = lazy(() => import("./pages/conditions/LGBTRelationships"));

// Conditions - Special Needs
const Autism = lazy(() => import("./pages/conditions/Autism"));
const ADHD = lazy(() => import("./pages/conditions/ADHD"));
const Asperger = lazy(() => import("./pages/conditions/Asperger"));
const DownSyndrome = lazy(() => import("./pages/conditions/DownSyndrome"));
const IntellectualDisability = lazy(() => import("./pages/conditions/IntellectualDisability"));
const RettSyndrome = lazy(() => import("./pages/conditions/RettSyndrome"));

// Conditions - Learning Difficulties
const Dyslexia = lazy(() => import("./pages/conditions/Dyslexia"));
const Dysgraphia = lazy(() => import("./pages/conditions/Dysgraphia"));
const Dyscalculia = lazy(() => import("./pages/conditions/Dyscalculia"));
const Dyspraxia = lazy(() => import("./pages/conditions/Dyspraxia"));
const MemoryConcentration = lazy(() => import("./pages/conditions/MemoryConcentration"));

// Conditions - Speech
const Stuttering = lazy(() => import("./pages/conditions/Stuttering"));
const SelectiveMutism = lazy(() => import("./pages/conditions/SelectiveMutism"));
const SpeechDisorders = lazy(() => import("./pages/conditions/SpeechDisorders"));
const SpeechDelay = lazy(() => import("./pages/conditions/SpeechDelay"));
const Articulation = lazy(() => import("./pages/conditions/Articulation"));
const SpecialNeedsSpeech = lazy(() => import("./pages/conditions/SpecialNeedsSpeech"));

// Conditions - Child Behavioral
const ChildPTSD = lazy(() => import("./pages/conditions/ChildPTSD"));
const TicsTourette = lazy(() => import("./pages/conditions/TicsTourette"));
const AggressionSelfHarm = lazy(() => import("./pages/conditions/AggressionSelfHarm"));
const ChildFears = lazy(() => import("./pages/conditions/ChildFears"));
const ChildSleepProblems = lazy(() => import("./pages/conditions/ChildSleepProblems"));
const ChildPsychosomatic = lazy(() => import("./pages/conditions/ChildPsychosomatic"));
const AdaptationDifficulties = lazy(() => import("./pages/conditions/AdaptationDifficulties"));
const PeerCommunication = lazy(() => import("./pages/conditions/PeerCommunication"));
const LowSelfEsteem = lazy(() => import("./pages/conditions/LowSelfEsteem"));
const ConflictRelationships = lazy(() => import("./pages/conditions/ConflictRelationships"));
const RunningAway = lazy(() => import("./pages/conditions/RunningAway"));
const RiskyBehavior = lazy(() => import("./pages/conditions/RiskyBehavior"));
const ChildGrief = lazy(() => import("./pages/conditions/ChildGrief"));
const ParentsDivorce = lazy(() => import("./pages/conditions/ParentsDivorce"));
const NewFamilyMember = lazy(() => import("./pages/conditions/NewFamilyMember"));
const Relocation = lazy(() => import("./pages/conditions/Relocation"));
const ChildStress = lazy(() => import("./pages/conditions/ChildStress"));

// Conditions - Physical/Medical
const MuscularDystrophy = lazy(() => import("./pages/conditions/MuscularDystrophy"));
const Epilepsy = lazy(() => import("./pages/conditions/Epilepsy"));
const ChronicIllness = lazy(() => import("./pages/conditions/ChronicIllness"));
const SpecialEducationalNeeds = lazy(() => import("./pages/conditions/SpecialEducationalNeeds"));

// Conditions - Youth LGBT+
const LGBTYouth = lazy(() => import("./pages/conditions/LGBTYouth"));
const YouthIdentity = lazy(() => import("./pages/conditions/YouthIdentity"));
const SocialRejectionSupport = lazy(() => import("./pages/conditions/SocialRejectionSupport"));
const ComingOutSupport = lazy(() => import("./pages/conditions/ComingOutSupport"));

// Therapeutic Approaches
const Psychoanalysis = lazy(() => import("./pages/approaches/Psychoanalysis"));
const PsychodynamicTherapy = lazy(() => import("./pages/approaches/PsychodynamicTherapy"));
const CBT = lazy(() => import("./pages/approaches/CBT"));
const SchemaTherapy = lazy(() => import("./pages/approaches/SchemaTherapy"));
const GestaltTherapy = lazy(() => import("./pages/approaches/GestaltTherapy"));
const ExistentialTherapy = lazy(() => import("./pages/approaches/ExistentialTherapy"));
const PositiveTherapy = lazy(() => import("./pages/approaches/PositiveTherapy"));
const FamilyTherapy = lazy(() => import("./pages/approaches/FamilyTherapy"));
const TransgenerationalTherapy = lazy(() => import("./pages/approaches/TransgenerationalTherapy"));
const CouplesTherapy = lazy(() => import("./pages/approaches/CouplesTherapy"));
const EMDR = lazy(() => import("./pages/approaches/EMDR"));
const SomaticExperiencing = lazy(() => import("./pages/approaches/SomaticExperiencing"));
const BioenergeticTherapy = lazy(() => import("./pages/approaches/BioenergticTherapy"));
const BodyPsychotherapy = lazy(() => import("./pages/approaches/BodyPsychotherapy"));
const DanceMovementTherapy = lazy(() => import("./pages/approaches/DanceMovementTherapy"));
const ArtTherapy = lazy(() => import("./pages/approaches/ArtTherapy"));
const MusicTherapy = lazy(() => import("./pages/approaches/MusicTherapy"));
const PlayTherapy = lazy(() => import("./pages/approaches/PlayTherapy"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-primary/20"></div>
      <div className="h-4 w-32 bg-primary/20 rounded"></div>
    </div>
  </div>
);

const ApproachRedirect = () => {
  const { slug } = useParams();
  return (
    <Navigate
      replace
      to={slug ? `/therapeutic-approaches/${slug}` : "/therapeutic-approaches"}
    />
  );
};

// Define all app routes as a render function so they can be mounted
// under both "/" (Bulgarian) and "/en" (English) prefixes.
const renderAppRoutes = (prefix: string = ""): ReactNode => (
  <>
    <Route path={`${prefix}/`} element={<Index />} />
              <Route path={`${prefix}/about`} element={<AboutUs />} />
              <Route path={`${prefix}/services`} element={<Services />} />
              <Route path={`${prefix}/services/psychological-counseling`} element={<PsychologicalCounseling />} />
              <Route path={`${prefix}/services/family-counseling`} element={<FamilyCounseling />} />
              <Route path={`${prefix}/services/child-counseling`} element={<ChildCounseling />} />
              <Route path={`${prefix}/services/group-programs`} element={<GroupPrograms />} />
              <Route path={`${prefix}/services/group-programs/addictions`} element={<AddictionsGroupPrograms />} />
              <Route path={`${prefix}/services/group-programs/addictions/alcohol`} element={<AlcoholGroup />} />
              <Route path={`${prefix}/services/group-programs/addictions/substances`} element={<SubstancesGroup />} />
              <Route path={`${prefix}/services/group-programs/addictions/gambling`} element={<GamblingGroup />} />
              <Route path={`${prefix}/services/group-programs/addictions/love`} element={<LoveGroup />} />
              <Route path={`${prefix}/services/group-programs/addictions/codependency`} element={<CodependencyGroup />} />
              <Route path={`${prefix}/services/group-programs/relationships`} element={<RelationshipsGroupPrograms />} />
              <Route path={`${prefix}/services/group-programs/relationships/attachment`} element={<AttachmentGroup />} />
              <Route path={`${prefix}/services/group-programs/relationships/emotional-readiness`} element={<EmotionalReadinessGroup />} />
              <Route path={`${prefix}/services/group-programs/relationships/social-skills`} element={<SocialSkillsGroup />} />
              <Route path={`${prefix}/services/group-programs/relationships/breakup-recovery`} element={<BreakupRecoveryGroup />} />
              <Route path={`${prefix}/services/group-programs/relationships/matchmaking`} element={<MatchmakingGroup />} />
              <Route path={`${prefix}/services/group-programs/parenting`} element={<ParentingGroupPrograms />} />
              <Route path={`${prefix}/services/group-programs/parenting/pregnant-mothers`} element={<PregnantMothersGroup />} />
              <Route path={`${prefix}/services/group-programs/parenting/postpartum`} element={<PostpartumGroup />} />
              <Route path={`${prefix}/services/group-programs/parenting/toddler-parents`} element={<ToddlerParentsGroup />} />
              <Route path={`${prefix}/services/group-programs/parenting/difficult-situations`} element={<DifficultSituationsGroup />} />
              <Route path={`${prefix}/services/group-programs/nlp`} element={<NLPGroupPrograms />} />
              <Route path={`${prefix}/services/group-programs/nlp/personal-effectiveness`} element={<PersonalEffectivenessGroup />} />
              <Route path={`${prefix}/services/group-programs/nlp/anxiety-blocks`} element={<AnxietyBlocksGroup />} />
              <Route path={`${prefix}/services/group-programs/nlp/goals-motivation`} element={<GoalsMotivationGroup />} />
              <Route path={`${prefix}/services/group-programs/nlp/communication-skills`} element={<CommunicationSkillsGroup />} />
              <Route path={`${prefix}/services/group-programs/nlp/habits`} element={<HabitsGroup />} />
              <Route path={`${prefix}/services/speech-therapy`} element={<SpeechTherapy />} />
              <Route path={`${prefix}/services/psychodiagnostics`} element={<Psychodiagnostics />} />
              <Route path={`${prefix}/services/career-consulting`} element={<CareerConsulting />} />
              <Route path={`${prefix}/services/corporate-services`} element={<CorporateServices />} />
              <Route path={`${prefix}/blog`} element={<Blog />} />
              <Route path={`${prefix}/blog/:slug`} element={<BlogPost />} />
              <Route path={`${prefix}/prices`} element={<Prices />} />
              <Route path={`${prefix}/contact`} element={<Contact />} />
              <Route path={`${prefix}/conditions/couple-conflicts`} element={<CoupleConflicts />} />
              <Route path={`${prefix}/conditions/marital-crisis`} element={<MaritalCrisis />} />
              <Route path={`${prefix}/conditions/jealousy-trust`} element={<JealousyTrust />} />
              <Route path={`${prefix}/conditions/infidelity`} element={<Infidelity />} />
              <Route path={`${prefix}/conditions/sexual-problems`} element={<SexualProblems />} />
              <Route path={`${prefix}/conditions/lack-of-intimacy`} element={<LackOfIntimacy />} />
              <Route path={`${prefix}/conditions/family-violence`} element={<FamilyViolence />} />
              <Route path={`${prefix}/conditions/postpartum`} element={<Postpartum />} />
              <Route path={`${prefix}/conditions/parent-child-relations`} element={<ParentChildRelations />} />
              <Route path={`${prefix}/conditions/blended-families`} element={<BlendedFamilies />} />
              <Route path={`${prefix}/conditions/separation-loss`} element={<SeparationLoss />} />
              {/* Psychological Counseling conditions */}
              <Route path={`${prefix}/conditions/depression`} element={<Depression />} />
              <Route path={`${prefix}/conditions/anxiety`} element={<Anxiety />} />
              <Route path={`${prefix}/conditions/panic-attacks`} element={<PanicAttacks />} />
              <Route path={`${prefix}/conditions/phobias`} element={<Phobias />} />
              <Route path={`${prefix}/conditions/hypochondria`} element={<Hypochondria />} />
              <Route path={`${prefix}/conditions/ocd`} element={<OCD />} />
              <Route path={`${prefix}/conditions/bipolar`} element={<Bipolar />} />
              <Route path={`${prefix}/conditions/anger`} element={<Anger />} />
              <Route path={`${prefix}/conditions/stress`} element={<Stress />} />
              <Route path={`${prefix}/conditions/ptsd`} element={<PTSD />} />
              <Route path={`${prefix}/conditions/burnout`} element={<Burnout />} />
              <Route path={`${prefix}/conditions/emotional-exhaustion`} element={<EmotionalExhaustion />} />
              <Route path={`${prefix}/conditions/insomnia`} element={<Insomnia />} />
              <Route path={`${prefix}/conditions/psychosomatic`} element={<Psychosomatic />} />
              <Route path={`${prefix}/conditions/fatigue`} element={<Fatigue />} />
              <Route path={`${prefix}/conditions/insecurity`} element={<Insecurity />} />
              <Route path={`${prefix}/conditions/perfectionism`} element={<Perfectionism />} />
              <Route path={`${prefix}/conditions/boundaries`} element={<Boundaries />} />
              <Route path={`${prefix}/conditions/loneliness`} element={<Loneliness />} />
              <Route path={`${prefix}/conditions/communication-difficulties`} element={<CommunicationDifficulties />} />
              <Route path={`${prefix}/conditions/life-crisis`} element={<LifeCrisis />} />
              <Route path={`${prefix}/conditions/loss`} element={<Loss />} />
              <Route path={`${prefix}/conditions/separation`} element={<Separation />} />
              <Route path={`${prefix}/conditions/adaptation`} element={<Adaptation />} />
              {/* Addiction conditions */}
              <Route path={`${prefix}/conditions/alcohol-addiction`} element={<AlcoholAddiction />} />
              <Route path={`${prefix}/conditions/drug-addiction`} element={<DrugAddiction />} />
              <Route path={`${prefix}/conditions/gambling-addiction`} element={<GamblingAddiction />} />
              <Route path={`${prefix}/conditions/medication-addiction`} element={<MedicationAddiction />} />
              <Route path={`${prefix}/conditions/internet-addiction`} element={<InternetAddiction />} />
              <Route path={`${prefix}/conditions/social-media-addiction`} element={<SocialMediaAddiction />} />
              <Route path={`${prefix}/conditions/workaholism`} element={<Workaholism />} />
              <Route path={`${prefix}/conditions/love-addiction`} element={<LoveAddiction />} />
              {/* LGBT+ conditions */}
              <Route path={`${prefix}/conditions/lgbt-support`} element={<LGBTSupport />} />
              <Route path={`${prefix}/conditions/identity-self-acceptance`} element={<IdentitySelfAcceptance />} />
              <Route path={`${prefix}/conditions/coming-out`} element={<ComingOut />} />
              <Route path={`${prefix}/conditions/social-rejection-stress`} element={<SocialRejectionStress />} />
              <Route path={`${prefix}/conditions/lgbt-relationships`} element={<LGBTRelationships />} />
              {/* Special needs conditions */}
              <Route path={`${prefix}/conditions/autism`} element={<Autism />} />
              <Route path={`${prefix}/conditions/adhd`} element={<ADHD />} />
              <Route path={`${prefix}/conditions/asperger`} element={<Asperger />} />
              <Route path={`${prefix}/conditions/down-syndrome`} element={<DownSyndrome />} />
              <Route path={`${prefix}/conditions/intellectual-disability`} element={<IntellectualDisability />} />
              <Route path={`${prefix}/conditions/rett-syndrome`} element={<RettSyndrome />} />
              {/* Learning difficulties conditions */}
              <Route path={`${prefix}/conditions/dyslexia`} element={<Dyslexia />} />
              <Route path={`${prefix}/conditions/dysgraphia`} element={<Dysgraphia />} />
              <Route path={`${prefix}/conditions/dyscalculia`} element={<Dyscalculia />} />
              <Route path={`${prefix}/conditions/dyspraxia`} element={<Dyspraxia />} />
              <Route path={`${prefix}/conditions/memory-concentration`} element={<MemoryConcentration />} />
              {/* Child behavioral and emotional conditions */}
              <Route path={`${prefix}/conditions/stuttering`} element={<Stuttering />} />
              <Route path={`${prefix}/conditions/selective-mutism`} element={<SelectiveMutism />} />
              <Route path={`${prefix}/conditions/speech-disorders`} element={<SpeechDisorders />} />
              <Route path={`${prefix}/conditions/child-ptsd`} element={<ChildPTSD />} />
              <Route path={`${prefix}/conditions/tics-tourette`} element={<TicsTourette />} />
              <Route path={`${prefix}/conditions/aggression-self-harm`} element={<AggressionSelfHarm />} />
              <Route path={`${prefix}/conditions/child-fears`} element={<ChildFears />} />
              <Route path={`${prefix}/conditions/child-sleep-problems`} element={<ChildSleepProblems />} />
              <Route path={`${prefix}/conditions/child-psychosomatic`} element={<ChildPsychosomatic />} />
              <Route path={`${prefix}/conditions/adaptation-difficulties`} element={<AdaptationDifficulties />} />
              <Route path={`${prefix}/conditions/peer-communication`} element={<PeerCommunication />} />
              <Route path={`${prefix}/conditions/low-self-esteem`} element={<LowSelfEsteem />} />
              <Route path={`${prefix}/conditions/conflict-relationships`} element={<ConflictRelationships />} />
              <Route path={`${prefix}/conditions/running-away`} element={<RunningAway />} />
              <Route path={`${prefix}/conditions/risky-behavior`} element={<RiskyBehavior />} />
              <Route path={`${prefix}/conditions/child-grief`} element={<ChildGrief />} />
              <Route path={`${prefix}/conditions/parents-divorce`} element={<ParentsDivorce />} />
              <Route path={`${prefix}/conditions/new-family-member`} element={<NewFamilyMember />} />
              <Route path={`${prefix}/conditions/relocation`} element={<Relocation />} />
              <Route path={`${prefix}/conditions/child-stress`} element={<ChildStress />} />
              {/* Physical and medical conditions */}
              <Route path={`${prefix}/conditions/muscular-dystrophy`} element={<MuscularDystrophy />} />
              <Route path={`${prefix}/conditions/epilepsy`} element={<Epilepsy />} />
              <Route path={`${prefix}/conditions/chronic-illness`} element={<ChronicIllness />} />
              <Route path={`${prefix}/conditions/special-educational-needs`} element={<SpecialEducationalNeeds />} />
              {/* Youth LGBT+ conditions */}
              <Route path={`${prefix}/conditions/lgbt-youth`} element={<LGBTYouth />} />
              <Route path={`${prefix}/conditions/youth-identity`} element={<YouthIdentity />} />
              <Route path={`${prefix}/conditions/social-rejection-support`} element={<SocialRejectionSupport />} />
              <Route path={`${prefix}/conditions/coming-out-support`} element={<ComingOutSupport />} />
              {/* Speech therapy conditions */}
              <Route path={`${prefix}/conditions/speech-delay`} element={<SpeechDelay />} />
              <Route path={`${prefix}/conditions/articulation`} element={<Articulation />} />
              <Route path={`${prefix}/conditions/special-needs-speech`} element={<SpecialNeedsSpeech />} />
              {/* Legal pages */}
              <Route path={`${prefix}/privacy-policy`} element={<PrivacyPolicy />} />
              <Route path={`${prefix}/terms-and-conditions`} element={<TermsConditions />} />
              <Route path={`${prefix}/cookie-policy`} element={<CookiePolicy />} />
              {/* Therapeutic Approaches */}
              <Route path={`${prefix}/approaches`} element={<Navigate replace to="/therapeutic-approaches" />} />
              <Route path={`${prefix}/approaches/:slug`} element={<ApproachRedirect />} />
              <Route path={`${prefix}/therapeutic-approaches`} element={<TherapeuticApproaches />} />
              <Route path={`${prefix}/therapeutic-approaches/psychoanalysis`} element={<Psychoanalysis />} />
              <Route path={`${prefix}/therapeutic-approaches/psychodynamic-therapy`} element={<PsychodynamicTherapy />} />
              <Route path={`${prefix}/therapeutic-approaches/cbt`} element={<CBT />} />
              <Route path={`${prefix}/therapeutic-approaches/schema-therapy`} element={<SchemaTherapy />} />
              <Route path={`${prefix}/therapeutic-approaches/gestalt-therapy`} element={<GestaltTherapy />} />
              <Route path={`${prefix}/therapeutic-approaches/existential-therapy`} element={<ExistentialTherapy />} />
              <Route path={`${prefix}/therapeutic-approaches/positive-therapy`} element={<PositiveTherapy />} />
              <Route path={`${prefix}/therapeutic-approaches/family-therapy`} element={<FamilyTherapy />} />
              <Route path={`${prefix}/therapeutic-approaches/transgenerational-therapy`} element={<TransgenerationalTherapy />} />
              <Route path={`${prefix}/therapeutic-approaches/couples-therapy`} element={<CouplesTherapy />} />
              <Route path={`${prefix}/therapeutic-approaches/emdr`} element={<EMDR />} />
              <Route path={`${prefix}/therapeutic-approaches/somatic-experiencing`} element={<SomaticExperiencing />} />
              <Route path={`${prefix}/therapeutic-approaches/bioenergetic-therapy`} element={<BioenergeticTherapy />} />
              <Route path={`${prefix}/therapeutic-approaches/body-psychotherapy`} element={<BodyPsychotherapy />} />
              <Route path={`${prefix}/therapeutic-approaches/dance-movement-therapy`} element={<DanceMovementTherapy />} />
              <Route path={`${prefix}/therapeutic-approaches/art-therapy`} element={<ArtTherapy />} />
              <Route path={`${prefix}/therapeutic-approaches/music-therapy`} element={<MusicTherapy />} />
              <Route path={`${prefix}/therapeutic-approaches/play-therapy`} element={<PlayTherapy />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path={`${prefix}/*`} element={<NotFound />} />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={null}>
      <Toaster />
    </Suspense>
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <Suspense fallback={null}>
          <GoogleAnalyticsProvider>
            <CookieConsent />
          </GoogleAnalyticsProvider>
        </Suspense>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* English routes mounted under /en */}
            <Route path="/en/*" element={<Suspense fallback={<PageLoader />}><Routes>{renderAppRoutes()}</Routes></Suspense>} />
            {/* Bulgarian (default) routes */}
            {renderAppRoutes()}
          </Routes>
        </Suspense>
      </LanguageProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
