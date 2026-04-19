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
              <Route path="/conditions/love-addiction" element={<LoveAddiction />} />
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
              {/* Physical and medical conditions */}
              <Route path="/conditions/muscular-dystrophy" element={<MuscularDystrophy />} />
              <Route path="/conditions/epilepsy" element={<Epilepsy />} />
              <Route path="/conditions/chronic-illness" element={<ChronicIllness />} />
              <Route path="/conditions/special-educational-needs" element={<SpecialEducationalNeeds />} />
              {/* Youth LGBT+ conditions */}
              <Route path="/conditions/lgbt-youth" element={<LGBTYouth />} />
              <Route path="/conditions/youth-identity" element={<YouthIdentity />} />
              <Route path="/conditions/social-rejection-support" element={<SocialRejectionSupport />} />
              <Route path="/conditions/coming-out-support" element={<ComingOutSupport />} />
              {/* Speech therapy conditions */}
              <Route path="/conditions/speech-delay" element={<SpeechDelay />} />
              <Route path="/conditions/articulation" element={<Articulation />} />
              <Route path="/conditions/special-needs-speech" element={<SpecialNeedsSpeech />} />
              {/* Legal pages */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsConditions />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              {/* Therapeutic Approaches */}
              <Route path="/approaches" element={<Navigate replace to="/therapeutic-approaches" />} />
              <Route path="/approaches/:slug" element={<ApproachRedirect />} />
              <Route path="/therapeutic-approaches" element={<TherapeuticApproaches />} />
              <Route path="/therapeutic-approaches/psychoanalysis" element={<Psychoanalysis />} />
              <Route path="/therapeutic-approaches/psychodynamic-therapy" element={<PsychodynamicTherapy />} />
              <Route path="/therapeutic-approaches/cbt" element={<CBT />} />
              <Route path="/therapeutic-approaches/schema-therapy" element={<SchemaTherapy />} />
              <Route path="/therapeutic-approaches/gestalt-therapy" element={<GestaltTherapy />} />
              <Route path="/therapeutic-approaches/existential-therapy" element={<ExistentialTherapy />} />
              <Route path="/therapeutic-approaches/positive-therapy" element={<PositiveTherapy />} />
              <Route path="/therapeutic-approaches/family-therapy" element={<FamilyTherapy />} />
              <Route path="/therapeutic-approaches/transgenerational-therapy" element={<TransgenerationalTherapy />} />
              <Route path="/therapeutic-approaches/couples-therapy" element={<CouplesTherapy />} />
              <Route path="/therapeutic-approaches/emdr" element={<EMDR />} />
              <Route path="/therapeutic-approaches/somatic-experiencing" element={<SomaticExperiencing />} />
              <Route path="/therapeutic-approaches/bioenergetic-therapy" element={<BioenergeticTherapy />} />
              <Route path="/therapeutic-approaches/body-psychotherapy" element={<BodyPsychotherapy />} />
              <Route path="/therapeutic-approaches/dance-movement-therapy" element={<DanceMovementTherapy />} />
              <Route path="/therapeutic-approaches/art-therapy" element={<ArtTherapy />} />
              <Route path="/therapeutic-approaches/music-therapy" element={<MusicTherapy />} />
              <Route path="/therapeutic-approaches/play-therapy" element={<PlayTherapy />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
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
