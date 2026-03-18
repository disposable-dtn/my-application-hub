import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Github, Bot, Trophy, Wrench } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

import tobotImage from "@/assets/tobot.jpeg";
import companionCatchImage from "@/assets/companion-catch.png";

const personalProjects: Project[] = [
  {
    title: "Tobot - Autonomous Tennis Ball Collector",
    description: "Built an autonomous robot using ROS2 with SLAM and NAV2 for navigation. Developed in Gazebo and visualized with RViz for real-time path planning and obstacle avoidance.",
    longDescription: "Hands-on development was carried out on an autonomous mobile robot designed for indoor navigation and object collection. The system was built using ROS2 and implemented SLAM and Nav2 for localization, mapping, and autonomous path planning. Simulation and validation were performed in Gazebo and RViz prior to physical deployment. Hardware and software components were integrated to enable reliable navigation and task execution in a dynamic environment. This project provided experience in autonomous robotics software stacks, simulation-driven development, and system-level debugging.",
    tags: ["ROS2", "SLAM", "NAV2", "Gazebo", "Python"],
    icon: Bot,
    github: "https://github.com/ductnguyen-dtn/tobot",
    image: tobotImage,
  },
  {
    title: "AI Fall Detector - Companion Catch",
    description: "Developed an LSTM-based fall detection system using OpenCV and MediaPipe for real-time pose estimation. Winner of the Congressional App Challenge.",
    longDescription: "An AI-based fall detection system was designed and implemented to improve safety monitoring in elderly care scenarios. The system combined computer vision and sequence modeling to analyze human motion patterns, using OpenCV and MediaPipe for pose extraction and an LSTM-based model to classify falls versus normal activities. A custom dataset of fall and non-fall scenarios was collected and processed to train and evaluate the model. The solution was optimized for real-time performance and demonstrated reliable detection in practical conditions. This project was recognized as the winner of the 2024 Congressional App Challenge, highlighting its technical merit and real-world impact.",
    tags: ["Python", "OpenCV", "MediaPipe", "LSTM"],
    icon: Trophy,
    github: "https://github.com/ductnguyen-dtn/Companion-Catch",
    image: companionCatchImage,
  },
  {
    title: "Robot Arm",
    description: "Robotic arm project — details coming soon.",
    longDescription: "Details for this project are coming soon. Check back later for a full description of the robot arm project.",
    tags: ["Robotics", "Embedded", "Mechanical"],
    icon: Wrench,
    github: "#",
    image: "",
  },
];

const PersonalProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Helmet>
        <title>Personal Projects | DTN</title>
        <meta name="description" content="Personal projects by Duc Nguyen — autonomous robots, AI, and more." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          <section className="py-24 relative">
            <div className="container px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <span className="text-sm font-mono text-primary uppercase tracking-wider">Portfolio</span>
                  <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
                    Personal <span className="text-gradient">Projects</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Independent projects exploring robotics, AI, and embedded systems.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {personalProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} onClick={() => setSelectedProject(project)} />
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button variant="outline" size="lg" className="gap-2" asChild>
                    <a href="https://github.com/ductnguyen-dtn" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View All on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {selectedProject && (
              <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
              />
            )}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PersonalProjects;
