import { ExternalLink, Github, Cpu, Bot, Code2, CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Autonomous Robot Platform",
      description: "Designed and built a 4-wheeled autonomous robot with LIDAR-based navigation, implementing SLAM algorithms using ROS2 and C++. Achieved real-time obstacle avoidance at 10Hz update rate.",
      tags: ["ROS2", "C++", "Python", "LIDAR", "SLAM"],
      icon: Bot,
      featured: true,
      github: "#",
      demo: "#",
    },
    {
      title: "FPGA-Based Signal Processor",
      description: "Implemented a real-time digital signal processing system on Xilinx Artix-7 FPGA for audio filtering applications. Designed custom Verilog modules for FIR and IIR filters.",
      tags: ["Verilog", "FPGA", "DSP", "Vivado"],
      icon: CircuitBoard,
      featured: true,
      github: "#",
    },
    {
      title: "Smart Home IoT System",
      description: "Built a comprehensive IoT system using ESP32 microcontrollers, featuring temperature monitoring, automated lighting, and a React-based dashboard with real-time data visualization.",
      tags: ["ESP32", "React", "MQTT", "Node.js"],
      icon: Cpu,
      github: "#",
      demo: "#",
    },
    {
      title: "Computer Vision Pipeline",
      description: "Developed a real-time object detection and tracking system using OpenCV and TensorFlow, achieving 30 FPS performance on edge devices for robotics applications.",
      tags: ["Python", "OpenCV", "TensorFlow", "Raspberry Pi"],
      icon: Code2,
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
              A selection of projects showcasing my experience in robotics, embedded systems, and software development.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
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
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
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
