import { ExternalLink, Github, Bot, Code2, CircuitBoard, Plane, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Tobot - Autonomous Tennis Ball Collector",
      description: "Built an autonomous robot using ROS2 with SLAM and NAV2 for navigation. Developed in Gazebo and visualized with RViz for real-time path planning and obstacle avoidance.",
      tags: ["ROS2", "SLAM", "NAV2", "Gazebo", "Python"],
      icon: Bot,
      featured: true,
      github: "#",
    },
    {
      title: "Formula SAE PCB Design",
      description: "Redesigned three subsystem boards (Charging Board, BMS Core, PDU) in KiCad, migrating from ATmega16M1 to STM32G441KBT6 with updated schematics and PCB layouts.",
      tags: ["KiCad", "STM32", "PCB Design", "CAN bus"],
      icon: CircuitBoard,
      featured: true,
      github: "#",
    },
    {
      title: "AI Fall Detector - Companion Catch",
      description: "Developed an LSTM-based fall detection system using OpenCV and MediaPipe for real-time pose estimation. Winner of the Congressional App Challenge.",
      tags: ["Python", "OpenCV", "MediaPipe", "LSTM"],
      icon: Trophy,
      featured: true,
      github: "#",
    },
    {
      title: "MIT Beaver Works - WatchDog Tracker",
      description: "Built a GPS-enabled pet tracker with complete hardware and firmware integration for real-time location monitoring.",
      tags: ["Embedded C", "GPS", "Hardware", "Firmware"],
      icon: Code2,
      github: "#",
    },
    {
      title: "Triboelectric Nanogenerator Research",
      description: "Designed energy-harvesting nanogenerators for sustainable power generation. Won Gold at the International Advanced Innovation Competition.",
      tags: ["Research", "Energy Harvesting", "Hardware"],
      icon: Zap,
      featured: true,
    },
    {
      title: "Fixed-Wing UAV System",
      description: "Configured ArduPilot firmware for fixed-wing aircraft. Integrated motors, ESCs, servos, IMU, GPS, and telemetry systems with PID tuning.",
      tags: ["ArduPilot", "UAV", "Embedded", "Avionics"],
      icon: Plane,
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my experience in robotics, embedded systems, and hardware design.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:glow-sm transition-all duration-500 ${
                  project.featured ? "md:col-span-1" : ""
                }`}
              >
                {/* Project header */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </article>
            ))}
          </div>

          {/* View all button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="w-4 h-4" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
