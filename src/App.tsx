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

// English (EN) hub pages
const EnAboutUs = lazy(() => import("./pages/en/AboutUs"));
const EnServices = lazy(() => import("./pages/en/Services"));
const EnPrices = lazy(() => import("./pages/en/Prices"));
const EnContact = lazy(() => import("./pages/en/Contact"));
const EnGroupPrograms = lazy(() => import("./pages/en/GroupPrograms"));
const EnTherapeuticApproaches = lazy(() => import("./pages/en/TherapeuticApproaches"));
const EnPsychologicalCounseling = lazy(() => import("./pages/en/PsychologicalCounseling"));
const EnFamilyCounseling = lazy(() => import("./pages/en/FamilyCounseling"));
const EnChildCounseling = lazy(() => import("./pages/en/ChildCounseling"));
const EnSpeechTherapy = lazy(() => import("./pages/en/SpeechTherapy"));
const EnPsychodiagnostics = lazy(() => import("./pages/en/Psychodiagnostics"));

// English (EN) condition pages
const EnDepression = lazy(() => import("./pages/en/conditions/Depression"));
const EnAnxiety = lazy(() => import("./pages/en/conditions/Anxiety"));
const EnPanicAttacks = lazy(() => import("./pages/en/conditions/PanicAttacks"));
const EnBurnout = lazy(() => import("./pages/en/conditions/Burnout"));
const EnStress = lazy(() => import("./pages/en/conditions/Stress"));
const EnADHD = lazy(() => import("./pages/en/conditions/ADHD"));
const EnAutism = lazy(() => import("./pages/en/conditions/Autism"));
const EnPTSD = lazy(() => import("./pages/en/conditions/PTSD"));
const EnOCD = lazy(() => import("./pages/en/conditions/OCD"));
const EnPhobias = lazy(() => import("./pages/en/conditions/Phobias"));
const EnHypochondria = lazy(() => import("./pages/en/conditions/Hypochondria"));
const EnBipolar = lazy(() => import("./pages/en/conditions/Bipolar"));
const EnAnger = lazy(() => import("./pages/en/conditions/Anger"));
const EnEmotionalExhaustion = lazy(() => import("./pages/en/conditions/EmotionalExhaustion"));
const EnAlcoholAddiction = lazy(() => import("./pages/en/conditions/AlcoholAddiction"));
const EnDrugAddiction = lazy(() => import("./pages/en/conditions/DrugAddiction"));
const EnGamblingAddiction = lazy(() => import("./pages/en/conditions/GamblingAddiction"));
const EnMedicationAddiction = lazy(() => import("./pages/en/conditions/MedicationAddiction"));
const EnInternetAddiction = lazy(() => import("./pages/en/conditions/InternetAddiction"));
const EnSocialMediaAddiction = lazy(() => import("./pages/en/conditions/SocialMediaAddiction"));
const EnWorkaholism = lazy(() => import("./pages/en/conditions/Workaholism"));
const EnLoveAddiction = lazy(() => import("./pages/en/conditions/LoveAddiction"));
const EnLGBTSupport = lazy(() => import("./pages/en/conditions/LGBTSupport"));
const EnIdentitySelfAcceptance = lazy(() => import("./pages/en/conditions/IdentitySelfAcceptance"));
const EnComingOut = lazy(() => import("./pages/en/conditions/ComingOut"));
const EnSocialRejectionStress = lazy(() => import("./pages/en/conditions/SocialRejectionStress"));
const EnLGBTRelationships = lazy(() => import("./pages/en/conditions/LGBTRelationships"));
const EnLGBTYouth = lazy(() => import("./pages/en/conditions/LGBTYouth"));
const EnYouthIdentity = lazy(() => import("./pages/en/conditions/YouthIdentity"));
const EnSocialRejectionSupport = lazy(() => import("./pages/en/conditions/SocialRejectionSupport"));
const EnComingOutSupport = lazy(() => import("./pages/en/conditions/ComingOutSupport"));
const EnDyslexia = lazy(() => import("./pages/en/conditions/Dyslexia"));
const EnDysgraphia = lazy(() => import("./pages/en/conditions/Dysgraphia"));
const EnDyscalculia = lazy(() => import("./pages/en/conditions/Dyscalculia"));
const EnDyspraxia = lazy(() => import("./pages/en/conditions/Dyspraxia"));
const EnMemoryConcentration = lazy(() => import("./pages/en/conditions/MemoryConcentration"));
const EnChildPTSD = lazy(() => import("./pages/en/conditions/ChildPTSD"));
const EnTicsTourette = lazy(() => import("./pages/en/conditions/TicsTourette"));
const EnAggressionSelfHarm = lazy(() => import("./pages/en/conditions/AggressionSelfHarm"));
const EnChildFears = lazy(() => import("./pages/en/conditions/ChildFears"));
const EnChildSleepProblems = lazy(() => import("./pages/en/conditions/ChildSleepProblems"));
const EnChildPsychosomatic = lazy(() => import("./pages/en/conditions/ChildPsychosomatic"));
const EnAdaptationDifficulties = lazy(() => import("./pages/en/conditions/AdaptationDifficulties"));
const EnPeerCommunication = lazy(() => import("./pages/en/conditions/PeerCommunication"));
const EnLowSelfEsteem = lazy(() => import("./pages/en/conditions/LowSelfEsteem"));
const EnConflictRelationships = lazy(() => import("./pages/en/conditions/ConflictRelationships"));
const EnRunningAway = lazy(() => import("./pages/en/conditions/RunningAway"));
const EnRiskyBehavior = lazy(() => import("./pages/en/conditions/RiskyBehavior"));
const EnChildGrief = lazy(() => import("./pages/en/conditions/ChildGrief"));
const EnParentsDivorce = lazy(() => import("./pages/en/conditions/ParentsDivorce"));
const EnNewFamilyMember = lazy(() => import("./pages/en/conditions/NewFamilyMember"));
const EnRelocation = lazy(() => import("./pages/en/conditions/Relocation"));
const EnChildStress = lazy(() => import("./pages/en/conditions/ChildStress"));
const EnAdaptation = lazy(() => import("./pages/en/conditions/Adaptation"));
const EnArticulation = lazy(() => import("./pages/en/conditions/Articulation"));
const EnAsperger = lazy(() => import("./pages/en/conditions/Asperger"));
const EnBoundaries = lazy(() => import("./pages/en/conditions/Boundaries"));
const EnChronicIllness = lazy(() => import("./pages/en/conditions/ChronicIllness"));
const EnCommunicationDifficulties = lazy(() => import("./pages/en/conditions/CommunicationDifficulties"));
const EnDownSyndrome = lazy(() => import("./pages/en/conditions/DownSyndrome"));
const EnEpilepsy = lazy(() => import("./pages/en/conditions/Epilepsy"));
const EnFatigue = lazy(() => import("./pages/en/conditions/Fatigue"));
const EnInsecurity = lazy(() => import("./pages/en/conditions/Insecurity"));
const EnInsomnia = lazy(() => import("./pages/en/conditions/Insomnia"));
const EnIntellectualDisability = lazy(() => import("./pages/en/conditions/IntellectualDisability"));
const EnLifeCrisis = lazy(() => import("./pages/en/conditions/LifeCrisis"));
const EnLoneliness = lazy(() => import("./pages/en/conditions/Loneliness"));
const EnLoss = lazy(() => import("./pages/en/conditions/Loss"));
const EnMuscularDystrophy = lazy(() => import("./pages/en/conditions/MuscularDystrophy"));
const EnPerfectionism = lazy(() => import("./pages/en/conditions/Perfectionism"));
const EnPsychosomatic = lazy(() => import("./pages/en/conditions/Psychosomatic"));
const EnRettSyndrome = lazy(() => import("./pages/en/conditions/RettSyndrome"));
const EnSelectiveMutism = lazy(() => import("./pages/en/conditions/SelectiveMutism"));
const EnSeparation = lazy(() => import("./pages/en/conditions/Separation"));
const EnSpecialEducationalNeeds = lazy(() => import("./pages/en/conditions/SpecialEducationalNeeds"));
const EnSpecialNeedsSpeech = lazy(() => import("./pages/en/conditions/SpecialNeedsSpeech"));
const EnSpeechDelay = lazy(() => import("./pages/en/conditions/SpeechDelay"));
const EnSpeechDisorders = lazy(() => import("./pages/en/conditions/SpeechDisorders"));
const EnStuttering = lazy(() => import("./pages/en/conditions/Stuttering"));
const EnCoupleConflicts = lazy(() => import("./pages/en/conditions/CoupleConflicts"));
const EnMaritalCrisis = lazy(() => import("./pages/en/conditions/MaritalCrisis"));
const EnJealousyTrust = lazy(() => import("./pages/en/conditions/JealousyTrust"));
const EnInfidelity = lazy(() => import("./pages/en/conditions/Infidelity"));
const EnSexualProblems = lazy(() => import("./pages/en/conditions/SexualProblems"));
const EnLackOfIntimacy = lazy(() => import("./pages/en/conditions/LackOfIntimacy"));
const EnFamilyViolence = lazy(() => import("./pages/en/conditions/FamilyViolence"));
const EnPostpartum = lazy(() => import("./pages/en/conditions/Postpartum"));
const EnParentChildRelations = lazy(() => import("./pages/en/conditions/ParentChildRelations"));
const EnBlendedFamilies = lazy(() => import("./pages/en/conditions/BlendedFamilies"));
const EnSeparationLoss = lazy(() => import("./pages/en/conditions/SeparationLoss"));

// English (EN) therapeutic approaches
const EnPsychoanalysis = lazy(() => import("./pages/en/approaches/Psychoanalysis"));
const EnPsychodynamicTherapy = lazy(() => import("./pages/en/approaches/PsychodynamicTherapy"));
const EnCBT = lazy(() => import("./pages/en/approaches/CBT"));
const EnSchemaTherapy = lazy(() => import("./pages/en/approaches/SchemaTherapy"));
const EnGestaltTherapy = lazy(() => import("./pages/en/approaches/GestaltTherapy"));
const EnExistentialTherapy = lazy(() => import("./pages/en/approaches/ExistentialTherapy"));
const EnPositiveTherapy = lazy(() => import("./pages/en/approaches/PositiveTherapy"));
const EnFamilyTherapy = lazy(() => import("./pages/en/approaches/FamilyTherapy"));
const EnTransgenerationalTherapy = lazy(() => import("./pages/en/approaches/TransgenerationalTherapy"));
const EnCouplesTherapy = lazy(() => import("./pages/en/approaches/CouplesTherapy"));
const EnEMDR = lazy(() => import("./pages/en/approaches/EMDR"));
const EnSomaticExperiencing = lazy(() => import("./pages/en/approaches/SomaticExperiencing"));
const EnBioenergeticTherapy = lazy(() => import("./pages/en/approaches/BioenergticTherapy"));
const EnBodyPsychotherapy = lazy(() => import("./pages/en/approaches/BodyPsychotherapy"));
const EnDanceMovementTherapy = lazy(() => import("./pages/en/approaches/DanceMovementTherapy"));
const EnArtTherapy = lazy(() => import("./pages/en/approaches/ArtTherapy"));
const EnMusicTherapy = lazy(() => import("./pages/en/approaches/MusicTherapy"));
const EnPlayTherapy = lazy(() => import("./pages/en/approaches/PlayTherapy"));

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
    <Route path={prefix || "/"} element={<Index />} />
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
            {/* English-specific overrides — must appear before generic /en routes */}
            <Route path="/en/about" element={<EnAboutUs />} />
            <Route path="/en/services" element={<EnServices />} />
            <Route path="/en/prices" element={<EnPrices />} />
            <Route path="/en/contact" element={<EnContact />} />
            <Route path="/en/services/group-programs" element={<EnGroupPrograms />} />
            <Route path="/en/therapeutic-approaches" element={<EnTherapeuticApproaches />} />
            <Route path="/en/services/psychological-counseling" element={<EnPsychologicalCounseling />} />
            <Route path="/en/services/family-counseling" element={<EnFamilyCounseling />} />
            <Route path="/en/services/child-counseling" element={<EnChildCounseling />} />
            <Route path="/en/services/speech-therapy" element={<EnSpeechTherapy />} />
            <Route path="/en/services/psychodiagnostics" element={<EnPsychodiagnostics />} />
            {/* English condition pages */}
            <Route path="/en/conditions/depression" element={<EnDepression />} />
            <Route path="/en/conditions/anxiety" element={<EnAnxiety />} />
            <Route path="/en/conditions/panic-attacks" element={<EnPanicAttacks />} />
            <Route path="/en/conditions/burnout" element={<EnBurnout />} />
            <Route path="/en/conditions/stress" element={<EnStress />} />
            <Route path="/en/conditions/adhd" element={<EnADHD />} />
            <Route path="/en/conditions/autism" element={<EnAutism />} />
            <Route path="/en/conditions/ptsd" element={<EnPTSD />} />
            <Route path="/en/conditions/ocd" element={<EnOCD />} />
            <Route path="/en/conditions/phobias" element={<EnPhobias />} />
            <Route path="/en/conditions/hypochondria" element={<EnHypochondria />} />
            <Route path="/en/conditions/bipolar" element={<EnBipolar />} />
            <Route path="/en/conditions/anger" element={<EnAnger />} />
            <Route path="/en/conditions/emotional-exhaustion" element={<EnEmotionalExhaustion />} />
            <Route path="/en/conditions/alcohol-addiction" element={<EnAlcoholAddiction />} />
            <Route path="/en/conditions/drug-addiction" element={<EnDrugAddiction />} />
            <Route path="/en/conditions/gambling-addiction" element={<EnGamblingAddiction />} />
            <Route path="/en/conditions/medication-addiction" element={<EnMedicationAddiction />} />
            <Route path="/en/conditions/internet-addiction" element={<EnInternetAddiction />} />
            <Route path="/en/conditions/social-media-addiction" element={<EnSocialMediaAddiction />} />
            <Route path="/en/conditions/workaholism" element={<EnWorkaholism />} />
            <Route path="/en/conditions/love-addiction" element={<EnLoveAddiction />} />
            <Route path="/en/conditions/lgbt-support" element={<EnLGBTSupport />} />
            <Route path="/en/conditions/identity-self-acceptance" element={<EnIdentitySelfAcceptance />} />
            <Route path="/en/conditions/coming-out" element={<EnComingOut />} />
            <Route path="/en/conditions/social-rejection-stress" element={<EnSocialRejectionStress />} />
            <Route path="/en/conditions/lgbt-relationships" element={<EnLGBTRelationships />} />
            <Route path="/en/conditions/lgbt-youth" element={<EnLGBTYouth />} />
            <Route path="/en/conditions/youth-identity" element={<EnYouthIdentity />} />
            <Route path="/en/conditions/social-rejection-support" element={<EnSocialRejectionSupport />} />
            <Route path="/en/conditions/coming-out-support" element={<EnComingOutSupport />} />
            <Route path="/en/conditions/dyslexia" element={<EnDyslexia />} />
            <Route path="/en/conditions/dysgraphia" element={<EnDysgraphia />} />
            <Route path="/en/conditions/dyscalculia" element={<EnDyscalculia />} />
            <Route path="/en/conditions/dyspraxia" element={<EnDyspraxia />} />
            <Route path="/en/conditions/memory-concentration" element={<EnMemoryConcentration />} />
            <Route path="/en/conditions/child-ptsd" element={<EnChildPTSD />} />
            <Route path="/en/conditions/tics-tourette" element={<EnTicsTourette />} />
            <Route path="/en/conditions/aggression-self-harm" element={<EnAggressionSelfHarm />} />
            <Route path="/en/conditions/child-fears" element={<EnChildFears />} />
            <Route path="/en/conditions/child-sleep-problems" element={<EnChildSleepProblems />} />
            <Route path="/en/conditions/child-psychosomatic" element={<EnChildPsychosomatic />} />
            <Route path="/en/conditions/adaptation-difficulties" element={<EnAdaptationDifficulties />} />
            <Route path="/en/conditions/peer-communication" element={<EnPeerCommunication />} />
            <Route path="/en/conditions/low-self-esteem" element={<EnLowSelfEsteem />} />
            <Route path="/en/conditions/conflict-relationships" element={<EnConflictRelationships />} />
            <Route path="/en/conditions/running-away" element={<EnRunningAway />} />
            <Route path="/en/conditions/risky-behavior" element={<EnRiskyBehavior />} />
            <Route path="/en/conditions/child-grief" element={<EnChildGrief />} />
            <Route path="/en/conditions/parents-divorce" element={<EnParentsDivorce />} />
            <Route path="/en/conditions/new-family-member" element={<EnNewFamilyMember />} />
            <Route path="/en/conditions/relocation" element={<EnRelocation />} />
            <Route path="/en/conditions/child-stress" element={<EnChildStress />} />
            <Route path="/en/conditions/adaptation" element={<EnAdaptation />} />
            <Route path="/en/conditions/articulation" element={<EnArticulation />} />
            <Route path="/en/conditions/asperger" element={<EnAsperger />} />
            <Route path="/en/conditions/boundaries" element={<EnBoundaries />} />
            <Route path="/en/conditions/chronic-illness" element={<EnChronicIllness />} />
            <Route path="/en/conditions/communication-difficulties" element={<EnCommunicationDifficulties />} />
            <Route path="/en/conditions/down-syndrome" element={<EnDownSyndrome />} />
            <Route path="/en/conditions/epilepsy" element={<EnEpilepsy />} />
            <Route path="/en/conditions/fatigue" element={<EnFatigue />} />
            <Route path="/en/conditions/insecurity" element={<EnInsecurity />} />
            <Route path="/en/conditions/insomnia" element={<EnInsomnia />} />
            <Route path="/en/conditions/intellectual-disability" element={<EnIntellectualDisability />} />
            <Route path="/en/conditions/life-crisis" element={<EnLifeCrisis />} />
            <Route path="/en/conditions/loneliness" element={<EnLoneliness />} />
            <Route path="/en/conditions/loss" element={<EnLoss />} />
            <Route path="/en/conditions/muscular-dystrophy" element={<EnMuscularDystrophy />} />
            <Route path="/en/conditions/perfectionism" element={<EnPerfectionism />} />
            <Route path="/en/conditions/psychosomatic" element={<EnPsychosomatic />} />
            <Route path="/en/conditions/rett-syndrome" element={<EnRettSyndrome />} />
            <Route path="/en/conditions/selective-mutism" element={<EnSelectiveMutism />} />
            <Route path="/en/conditions/separation" element={<EnSeparation />} />
            <Route path="/en/conditions/special-educational-needs" element={<EnSpecialEducationalNeeds />} />
            <Route path="/en/conditions/special-needs-speech" element={<EnSpecialNeedsSpeech />} />
            <Route path="/en/conditions/speech-delay" element={<EnSpeechDelay />} />
            <Route path="/en/conditions/speech-disorders" element={<EnSpeechDisorders />} />
            <Route path="/en/conditions/stuttering" element={<EnStuttering />} />
            <Route path="/en/conditions/couple-conflicts" element={<EnCoupleConflicts />} />
            <Route path="/en/conditions/marital-crisis" element={<EnMaritalCrisis />} />
            <Route path="/en/conditions/jealousy-trust" element={<EnJealousyTrust />} />
            <Route path="/en/conditions/infidelity" element={<EnInfidelity />} />
            <Route path="/en/conditions/sexual-problems" element={<EnSexualProblems />} />
            <Route path="/en/conditions/lack-of-intimacy" element={<EnLackOfIntimacy />} />
            <Route path="/en/conditions/family-violence" element={<EnFamilyViolence />} />
            <Route path="/en/conditions/postpartum" element={<EnPostpartum />} />
            <Route path="/en/conditions/parent-child-relations" element={<EnParentChildRelations />} />
            <Route path="/en/conditions/blended-families" element={<EnBlendedFamilies />} />
            <Route path="/en/conditions/separation-loss" element={<EnSeparationLoss />} />
            {/* English therapeutic approaches */}
            <Route path="/en/therapeutic-approaches/psychoanalysis" element={<EnPsychoanalysis />} />
            <Route path="/en/therapeutic-approaches/psychodynamic-therapy" element={<EnPsychodynamicTherapy />} />
            <Route path="/en/therapeutic-approaches/cbt" element={<EnCBT />} />
            <Route path="/en/therapeutic-approaches/schema-therapy" element={<EnSchemaTherapy />} />
            <Route path="/en/therapeutic-approaches/gestalt-therapy" element={<EnGestaltTherapy />} />
            <Route path="/en/therapeutic-approaches/existential-therapy" element={<EnExistentialTherapy />} />
            <Route path="/en/therapeutic-approaches/positive-therapy" element={<EnPositiveTherapy />} />
            <Route path="/en/therapeutic-approaches/family-therapy" element={<EnFamilyTherapy />} />
            <Route path="/en/therapeutic-approaches/transgenerational-therapy" element={<EnTransgenerationalTherapy />} />
            <Route path="/en/therapeutic-approaches/couples-therapy" element={<EnCouplesTherapy />} />
            <Route path="/en/therapeutic-approaches/emdr" element={<EnEMDR />} />
            <Route path="/en/therapeutic-approaches/somatic-experiencing" element={<EnSomaticExperiencing />} />
            <Route path="/en/therapeutic-approaches/bioenergetic-therapy" element={<EnBioenergeticTherapy />} />
            <Route path="/en/therapeutic-approaches/body-psychotherapy" element={<EnBodyPsychotherapy />} />
            <Route path="/en/therapeutic-approaches/dance-movement-therapy" element={<EnDanceMovementTherapy />} />
            <Route path="/en/therapeutic-approaches/art-therapy" element={<EnArtTherapy />} />
            <Route path="/en/therapeutic-approaches/music-therapy" element={<EnMusicTherapy />} />
            <Route path="/en/therapeutic-approaches/play-therapy" element={<EnPlayTherapy />} />
            {/* English group program subpages */}
            <Route path="/en/services/group-programs/addictions/alcohol" element={<EnAlcoholGroup />} />
            <Route path="/en/services/group-programs/addictions/substances" element={<EnSubstancesGroup />} />
            <Route path="/en/services/group-programs/addictions/gambling" element={<EnGamblingGroup />} />
            <Route path="/en/services/group-programs/addictions/love" element={<EnLoveGroup />} />
            <Route path="/en/services/group-programs/addictions/codependency" element={<EnCodependencyGroup />} />
            <Route path="/en/services/group-programs/relationships/attachment" element={<EnAttachmentGroup />} />
            <Route path="/en/services/group-programs/relationships/emotional-readiness" element={<EnEmotionalReadinessGroup />} />
            <Route path="/en/services/group-programs/relationships/social-skills" element={<EnSocialSkillsGroup />} />
            <Route path="/en/services/group-programs/relationships/breakup-recovery" element={<EnBreakupRecoveryGroup />} />
            <Route path="/en/services/group-programs/relationships/matchmaking" element={<EnMatchmakingGroup />} />
            <Route path="/en/services/group-programs/parenting/pregnant-mothers" element={<EnPregnantMothersGroup />} />
            <Route path="/en/services/group-programs/parenting/postpartum" element={<EnPostpartumGroup />} />
            <Route path="/en/services/group-programs/parenting/toddler-parents" element={<EnToddlerParentsGroup />} />
            <Route path="/en/services/group-programs/parenting/difficult-situations" element={<EnDifficultSituationsGroup />} />
            <Route path="/en/services/group-programs/nlp/personal-effectiveness" element={<EnPersonalEffectivenessGroup />} />
            <Route path="/en/services/group-programs/nlp/anxiety-blocks" element={<EnAnxietyBlocksGroup />} />
            <Route path="/en/services/group-programs/nlp/goals-motivation" element={<EnGoalsMotivationGroup />} />
            <Route path="/en/services/group-programs/nlp/communication-skills" element={<EnCommunicationSkillsGroup />} />
            <Route path="/en/services/group-programs/nlp/habits" element={<EnHabitsGroup />} />
            {/* English routes mounted under /en (fallback to BG components for untranslated pages) */}
            {renderAppRoutes("/en")}
            {/* Bulgarian (default) routes */}
            {renderAppRoutes("")}
          </Routes>
        </Suspense>
      </LanguageProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
