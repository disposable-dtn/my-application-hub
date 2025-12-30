import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 noise" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-primary">Open to Opportunities</span>
          </div>

          {/* Main heading */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="block text-foreground">Duc Nguyen</span>
            <span className="block text-gradient mt-2">ECE Student</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up font-light"
            style={{ animationDelay: "0.4s" }}
          >
            Electrical & Computer Engineering student passionate about{" "}
            <span className="text-primary font-medium">robotics</span>,{" "}
            <span className="text-accent font-medium">embedded systems</span>, and{" "}
            <span className="text-primary font-medium">software engineering</span>
          </p>

          {/* Tech stack pills */}
          <div 
            className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            {["Python", "C++", "Embedded C", "ROS2", "STM32", "KiCad", "ArduPilot"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-mono bg-secondary/50 text-secondary-foreground rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a 
              href="https://drive.google.com/file/d/1E6Oz07__zwQ1SKsjnBZnkN3wpHe0hJJM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow-sm px-8 gap-2"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:border-primary hover:bg-primary/5 gap-2"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
          </div>

          {/* Social links */}
          <div 
            className="flex items-center justify-center gap-6 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <a 
              href="https://github.com/ductnguyen-dtn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ducnguyen-dtn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:ductuannguyen.dtn@gmail.com"
              className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 text-muted-foreground hover:text-primary transition-colors animate-float"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
