import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Github, Plane, CircuitBoard, Code2, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

import aeroImage from "@/assets/aero.png";
import formulaImage from "@/assets/formula.png";
import watchdogImage from "@/assets/watchdog.jpeg";
import crogImage from "@/assets/crog.png";

const teamProjects: Project[] = [
  {
    title: "Fixed-Wing UAV System",
    description: "Configured ArduPilot firmware for fixed-wing aircraft. Integrated motors, ESCs, servos, IMU, GPS, and telemetry systems with PID tuning.",
    longDescription: "Hands-on work was conducted on a fixed-wing unmanned aircraft system with a focus on firmware configuration, avionics integration, and flight validation. ArduPilot firmware was customized for the aircraft, and motors, ESCs, servos, IMU, GPS, telemetry radios, and onboard avionics were wired and integrated to ensure reliable power distribution and signal integrity. RC transmitter inputs were mapped and validated, PID tuning was supported, and both ground and flight testing were carried out to evaluate stability, control response, and overall system performance. This work provided practical experience in embedded flight-control systems, sensor integration, and real-world debugging in safety-critical aerospace robotics environments.",
    tags: ["ArduPilot", "UAV", "Embedded", "Avionics"],
    icon: Plane,
    github: "https://github.com/Olin-Aerospace",
    image: aeroImage,
  },
  {
    title: "Formula SAE PCB Design",
    description: "Redesigned three subsystem boards (Charging Board, BMS Core, PDU) in KiCad, migrating from ATmega16M1 to STM32G441KBT6 with updated schematics and PCB layouts.",
    longDescription: "Hands-on engineering work was performed on multiple electric vehicle subsystems with a focus on embedded electronics, firmware, and PCB redesign. The vehicle architecture was upgraded by migrating from an ATmega16M1 to an STM32G441KBT6 microcontroller across the Charging Board, BMS Core, and Power Distribution Unit. Schematics were fully redrawn in KiCad, with updated footprints, pin mappings, and electrical connections, and PCB layouts were revised to support new routing, power stages, and interfaces. Existing firmware was modified to run on the STM32, including updates to pin definitions, peripherals, CAN communication, and I/O behavior. Board bring-up and systematic debugging were conducted to validate correct operation and subsystem reliability.",
    tags: ["KiCad", "STM32", "PCB Design", "CAN bus"],
    icon: CircuitBoard,
    github: "https://github.com/olin-electric-motorsports",
    image: formulaImage,
  },
  {
    title: "MIT Beaver Works - WatchDog Tracker",
    description: "Built a GPS-enabled pet tracker with complete hardware and firmware integration for real-time location monitoring.",
    longDescription: "A GPS-enabled pet tracking system was designed and developed with an emphasis on end-to-end hardware and firmware integration. The device combined embedded sensing, wireless communication, and power management to enable real-time location tracking. System-level integration was performed across hardware components and embedded firmware to ensure reliable data acquisition, transmission, and low-power operation. The project strengthened experience in embedded system design, sensor integration, and building deployable IoT-style devices under real-world constraints.",
    tags: ["Embedded C", "GPS", "Hardware", "Firmware"],
    icon: Code2,
    github: "#",
    image: watchdogImage,
  },
  {
    title: "CRoG - Combat Robotics",
    description: "Designed and built 3lb and 15lb combat robots. Iterated designs using Onshape for CAD modeling and manufactured components with 3D printing and laser cutting.",
    longDescription: "An ant-weight combat robot was designed, built, and iteratively refined through hands-on mechanical, electrical, and embedded development. Embedded control logic was implemented for both the drivetrain and weapon system, with emphasis on reliability under high-impact conditions. Multiple mechanical and PCB redesigns were performed based on destructive testing results, leading to improved durability and performance. This work developed strong skills in rapid prototyping, embedded control, and design iteration under extreme operational constraints.",
    tags: ["CAD", "Onshape", "3D Printing", "Mechanical"],
    icon: Zap,
    github: "#",
    image: crogImage,
  },
];

const TeamProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Helmet>
        <title>Team Projects | DTN</title>
        <meta name="description" content="Team projects by Duc Nguyen — robotics, embedded systems, and hardware design." />
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
                    Team <span className="text-gradient">Projects</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Projects built with teams in robotics clubs, competition teams, and research programs.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {teamProjects.map((project) => (
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

export default TeamProjects;
