import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import CurriculumSection from './components/CurriculumSection';
import CoursesSection from './components/CoursesSection';
import StepsSection from './components/StepsSection';
import FeaturesSection from './components/FeaturesSection';
import FreeCourseBanner from './components/FreeCourseBanner';
import TestimonialsSection from './components/TestimonialsSection';
import InstructorSection from './components/InstructorSection';
import LearnerNotesSection from './components/LearnerNotesSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import GetStartedModal from './components/GetStartedModal';
import CourseDetailModal from './components/CourseDetailModal';
import StudentPortal from './components/dashboard/StudentPortal';
import InstructorPortal from './components/instructor/InstructorPortal';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [userRole, setUserRole] = useState('student');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOpenAuth = (mode = 'login') => {
    if (mode === 'login') {
      setAuthMode('login');
      setAuthOpen(true);
      setGetStartedOpen(false);
    } else {
      // New users / get-started / sign up always go through the guided process card flow
      setGetStartedOpen(true);
      setAuthOpen(false);
    }
  };

  // Registered user accounts database (persists in localStorage)
  const getRegisteredAccounts = () => {
    try {
      const stored = localStorage.getItem('samurai_registered_accounts');
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return {
      'kenji.takahashi@toyota-denso.org': 'instructor',
      'instructor@samuraitalent.io': 'instructor',
      'instructor@gmail.com': 'instructor',
      'alex.student@gmail.com': 'student',
      'alex.morgan@samuraitalent.io': 'student'
    };
  };

  const registerUserAccount = (email, role) => {
    if (!email) return;
    const cleanEmail = email.trim().toLowerCase();
    const accounts = getRegisteredAccounts();
    accounts[cleanEmail] = role || 'student';
    try {
      localStorage.setItem('samurai_registered_accounts', JSON.stringify(accounts));
    } catch (e) {}
  };

  const resolveRoleByEmail = (email) => {
    if (!email) return 'student';
    const cleanEmail = email.trim().toLowerCase();
    const accounts = getRegisteredAccounts();

    if (accounts[cleanEmail]) {
      return accounts[cleanEmail];
    }

    // Heuristics for common instructor patterns if not explicitly registered
    if (
      cleanEmail.includes('instructor') ||
      cleanEmail.includes('master') ||
      cleanEmail.includes('sensei') ||
      cleanEmail.includes('teacher') ||
      cleanEmail.includes('faculty')
    ) {
      return 'instructor';
    }

    return 'student';
  };

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleEnrollCourse = (course) => {
    handleOpenAuth('get-started');
  };

  const handleGetStartedComplete = (data) => {
    const role = data.role || 'student';
    if (data.email) {
      registerUserAccount(data.email, role);
    }
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const handleLoginSuccess = (emailEntered) => {
    const resolvedRole = resolveRoleByEmail(emailEntered);
    setUserRole(resolvedRole);
    setIsLoggedIn(true);
  };

  // If user is logged in, show role-specific Portal (Student or Instructor/Master)
  if (isLoggedIn) {
    if (userRole === 'instructor') {
      return (
        <div className="samurai-talent-app">
          <InstructorPortal
            onLogout={() => setIsLoggedIn(false)}
            onSelectCourse={handleSelectCourse}
          />
          {/* Course Detail Syllabus Modal */}
          <CourseDetailModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
            onEnroll={handleEnrollCourse}
          />
        </div>
      );
    }

    return (
      <div className="samurai-talent-app">
        <StudentPortal
          onLogout={() => setIsLoggedIn(false)}
          onSelectCourse={handleSelectCourse}
        />
        {/* Course Detail Syllabus Modal */}
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onEnroll={handleEnrollCourse}
        />
      </div>
    );
  }

  // Public Landing Page
  return (
    <div className="samurai-talent-app">
      {/* Persistent Sticky Navbar */}
      <Navbar
        onOpenAuth={handleOpenAuth}
      />

      {/* 1. Hero Section */}
      <Hero onOpenAuth={handleOpenAuth} />

      {/* 2. Stats & Coaching Proposition */}
      <StatsSection onOpenAuth={handleOpenAuth} />

      {/* 3. Courses that move careers (Popular Programs) */}
      <CoursesSection
        onSelectCourse={handleSelectCourse}
        onOpenAuth={handleOpenAuth}
      />

      {/* 4. Curriculum Architecture (Accordion & Interactive Live Card) */}
      <CurriculumSection onOpenAuth={handleOpenAuth} />

      {/* 5. Four steps from sign-up to first job (Blue numbered circles) */}
      <StepsSection onOpenAuth={handleOpenAuth} />

      {/* 6. A platform you won't have to chase (Features & Icon Tiles) */}
      <FeaturesSection onOpenAuth={handleOpenAuth} />

      {/* 7. Interactive Free Course Banner */}
      <FreeCourseBanner onOpenAuth={handleOpenAuth} />

      {/* 8. Rated 4.9 out of 5 by learners worldwide (Testimonials) */}
      <TestimonialsSection />

      {/* 9. Share what you know, reach learners everywhere (Instructors) */}
      <InstructorSection onOpenAuth={handleOpenAuth} />

      {/* 10. Notes from our learners (Learner Story Spotlights) */}
      <LearnerNotesSection />

      {/* 11. Full-Width Dark Charcoal Footer */}
      <Footer onOpenAuth={handleOpenAuth} />

      {/* Interactive Direct Login Modal */}
      <AuthModal
        isOpen={authOpen}
        initialMode={authMode}
        onClose={() => setAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        onSwitchToGetStarted={() => {
          setAuthOpen(false);
          setGetStartedOpen(true);
        }}
      />

      {/* Guided Role Selection & Onboarding Process Modal (Matching Reference Process Card) */}
      <GetStartedModal
        isOpen={getStartedOpen}
        onClose={() => setGetStartedOpen(false)}
        onSwitchToLogin={() => {
          setGetStartedOpen(false);
          setAuthMode('login');
          setAuthOpen(true);
        }}
        onComplete={handleGetStartedComplete}
      />

      {/* Course Detail Syllabus Modal */}
      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={handleEnrollCourse}
      />
    </div>
  );
}
