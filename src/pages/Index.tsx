import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Your Name | ECE Student & Aspiring Robotics Engineer</title>
        <meta 
          name="description" 
          content="Electrical and Computer Engineering student specializing in robotics, embedded systems, and software engineering. Seeking internship and full-time opportunities." 
        />
        <meta name="keywords" content="robotics, electrical engineering, computer engineering, embedded systems, software engineer, ECE, intern" />
        <link rel="canonical" href="https://yourname.dev" />
      </Helmet>

      <div className="min-h-screen bg-background dark">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
