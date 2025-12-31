import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
