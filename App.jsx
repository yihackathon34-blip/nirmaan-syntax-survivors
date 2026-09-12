import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layouts and Protection
import { CandidateLayout, EmployerLayout } from './components/ProtectedRoute';

// Landing & auth pages
import IntroPage from './pages/IntroPage';
import AccessibilitySetup from './pages/AccessibilitySetup';
import ChoosePathPage from './pages/ChoosePathPage';
import CandidateSignIn from './pages/CandidateSignIn';
import EmployerSignIn from './pages/EmployerSignIn';
import CandidateRegister from './pages/CandidateRegister';
import EmployerRegister from './pages/EmployerRegister';

// Candidate portal pages
import CandidateDashboard from './pages/candidate/CandidateDashboard';
import OpportunityMarketplace from './pages/candidate/OpportunityMarketplace';
import SavedOpportunities from './pages/candidate/SavedOpportunities';
import JobDetails from './pages/candidate/JobDetails';
import MatchAnalytics from './pages/candidate/MatchAnalytics';
import UDIDVerification from './pages/candidate/UDIDVerification';
import LearningHub from './pages/candidate/LearningHub';
import PerformanceReview from './pages/candidate/PerformanceReview';
import CandidateSupport from './pages/candidate/CandidateSupport';
import MockInterviewPrep from './pages/candidate/MockInterviewPrep';
import ResumeBuilder from './pages/candidate/ResumeBuilder';

// Employer portal pages
import EmployerDashboard from './pages/employer/EmployerDashboard';
import EliteTalentDiscovery from './pages/employer/EliteTalentDiscovery';
import WorkforceDirectory from './pages/employer/WorkforceDirectory';
import RetentionGrowthHub from './pages/employer/RetentionGrowthHub';
import WorkforceDiversityReport from './pages/employer/WorkforceDiversityReport';
import PostOpportunity from './pages/employer/PostOpportunity';
import BusinessVerification from './pages/employer/BusinessVerification';
import EmployerSupport from './pages/employer/EmployerSupport';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Accessibility
import GlobalAccessibilityControls from './components/GlobalAccessibilityControls/GlobalAccessibilityControls';

/* ─── Transition variants ─────────────────────────────────────────────── */
const pageVariants = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } },
};

/** Wrap any page content with a fade+slide transition */
const PageTransition = ({ children }) => (
    <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ width: '100%', height: '100%' }}
    >
        {children}
    </motion.div>
);

/* ─── Layouts handled by ProtectedRoute ──────────────────────────────── */

/* ─── App ──────────────────────────────────────────────────────────────── */
function App() {
    const location = useLocation();

    return (
        <>
            <GlobalAccessibilityControls />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    {/* Public */}
                    <Route path="/" element={<PageTransition><IntroPage /></PageTransition>} />
                    <Route path="/accessibility-setup" element={<PageTransition><AccessibilitySetup /></PageTransition>} />
                    <Route path="/choose-path" element={<PageTransition><ChoosePathPage /></PageTransition>} />
                    <Route path="/candidate/signin" element={<PageTransition><CandidateSignIn /></PageTransition>} />
                    <Route path="/employer/signin" element={<PageTransition><EmployerSignIn /></PageTransition>} />
                    <Route path="/candidate/register" element={<PageTransition><CandidateRegister /></PageTransition>} />
                    <Route path="/employer/register" element={<PageTransition><EmployerRegister /></PageTransition>} />

                    {/* Candidate Portal */}
                    <Route path="/candidate/dashboard" element={<PageTransition><CandidateLayout><CandidateDashboard /></CandidateLayout></PageTransition>} />
                    <Route path="/candidate/jobs" element={<PageTransition><CandidateLayout><OpportunityMarketplace /></CandidateLayout></PageTransition>} />
                    <Route path="/candidate/jobs/:jobId" element={<PageTransition><CandidateLayout><JobDetails /></CandidateLayout></PageTransition>} />
                    <Route path="/candidate/saved" element={<PageTransition><CandidateLayout><SavedOpportunities /></CandidateLayout></PageTransition>} />
                    <Route path="/candidate/match-analytics" element={<PageTransition><CandidateLayout><MatchAnalytics /></CandidateLayout></PageTransition>} />
                    <Route path="/candidate/verification" element={<PageTransition><CandidateLayout><UDIDVerification /></CandidateLayout></PageTransition>} />
                    <Route path="/candidate/learning" element={<PageTransition><CandidateLayout><LearningHub /></CandidateLayout></PageTransition>} />
                    <Route path="/candidate/interview-prep" element={<PageTransition><CandidateLayout><MockInterviewPrep /></CandidateLayout></PageTransition>} />
                    <Route path="/candidate/resume" element={<PageTransition><CandidateLayout><ResumeBuilder /></CandidateLayout></PageTransition>} />
                    <Route path="/candidate/performance" element={<PageTransition><CandidateLayout><PerformanceReview /></CandidateLayout></PageTransition>} />
                    <Route path="/candidate/support" element={<PageTransition><CandidateLayout><CandidateSupport /></CandidateLayout></PageTransition>} />

                    {/* Employer Portal */}
                    <Route path="/employer/dashboard" element={<PageTransition><EmployerLayout><EmployerDashboard /></EmployerLayout></PageTransition>} />
                    <Route path="/employer/talent-pool" element={<PageTransition><EmployerLayout><EliteTalentDiscovery /></EmployerLayout></PageTransition>} />
                    <Route path="/employer/workforce" element={<PageTransition><EmployerLayout><WorkforceDirectory /></EmployerLayout></PageTransition>} />
                    <Route path="/employer/retention" element={<PageTransition><EmployerLayout><RetentionGrowthHub /></EmployerLayout></PageTransition>} />
                    <Route path="/employer/analytics" element={<PageTransition><EmployerLayout><WorkforceDiversityReport /></EmployerLayout></PageTransition>} />
                    <Route path="/employer/post-opportunity" element={<PageTransition><EmployerLayout><PostOpportunity /></EmployerLayout></PageTransition>} />
                    <Route path="/employer/verification" element={<PageTransition><EmployerLayout><BusinessVerification /></EmployerLayout></PageTransition>} />
                    <Route path="/employer/support" element={<PageTransition><EmployerLayout><EmployerSupport /></EmployerLayout></PageTransition>} />
                    <Route path="/employer/privacy" element={<PageTransition><EmployerLayout><PrivacyPolicy /></EmployerLayout></PageTransition>} />

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;
