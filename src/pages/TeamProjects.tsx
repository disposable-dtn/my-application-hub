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

import formulaWrongStm from "@/assets/formula-wrong-stm.png";
import formulaCorrectStm from "@/assets/formula-correct-stm.png";
import formulaFinalSchematic from "@/assets/formula-final-schematic.png";
import formulaCanController from "@/assets/formula-can-controller.png";
import formulaPcbTop from "@/assets/formula-pcb-top.png";
import formulaPcbBottom from "@/assets/formula-pcb-bottom.png";
import formulaFinalReorg from "@/assets/formula-final-reorg.png";

const teamProjects: Project[] = [
  {
    title: "Olin AERO: Firmware Configuration for Fixed Wing Test Rig",
    description: "Configured ArduPilot firmware for fixed-wing aircraft. Integrated motors, ESCs, servos, IMU, GPS, and telemetry systems with PID tuning.",
    longDescription: "Hands-on work was conducted on a fixed-wing unmanned aircraft system with a focus on firmware configuration, avionics integration, and flight validation. ArduPilot firmware was customized for the aircraft, and motors, ESCs, servos, IMU, GPS, telemetry radios, and onboard avionics were wired and integrated to ensure reliable power distribution and signal integrity. RC transmitter inputs were mapped and validated, PID tuning was supported, and both ground and flight testing were carried out to evaluate stability, control response, and overall system performance. This work provided practical experience in embedded flight-control systems, sensor integration, and real-world debugging in safety-critical aerospace robotics environments.",
    tags: ["ArduPilot", "UAV", "Embedded", "Avionics"],
    icon: Plane,
    github: "https://github.com/Olin-Aerospace",
    image: aeroImage,
  },
  {
    title: "Olin AERO: Firmware Configuration for VTOL Test Rig",
    description: "Configured ArduPilot firmware for a VTOL test rig with transition flight modes. Details coming soon.",
    longDescription: "Details for this project are coming soon. Check back later for a full description of the VTOL test rig firmware configuration work.",
    tags: ["ArduPilot", "VTOL", "Embedded", "Avionics"],
    icon: Plane,
    github: "https://github.com/Olin-Aerospace",
    image: aeroImage,
  },
  {
    title: "Formula SAE: Charging Board PCB",
    description: "Redesigned the Charging Board PCB in KiCad, migrating from ATmega16M1 to STM32G441KBT6 with updated schematics, CAN controller, and optimized PCB layouts.",
    longDescription: "This project involved multiple iterations of schematic design and PCB layout for the Formula SAE electric vehicle's Charging Board. Starting with learning KiCad fundamentals, the initial design used the wrong STM32 model and had to be scrapped. The second iteration used the correct STM32G441KBT6 with properly organized core components. Over 50 footprint errors were resolved in subsequent revisions, including removing the legacy seven-segment display and adding LCD screen ports — which revealed insufficient GPIO pins on the original STM32, requiring a migration to a higher pin-count variant. The CAN controller schematic was finalized with proper wiring per communication standards. The PCB layout achieved a ~50% board size reduction from the previous year's design, though it was rejected due to CAN signal interference, suboptimal power routing, and a fragmented ground plane on the bottom layer. The final reorganized schematic was handed off to the electrical lead for continuation.",
    tags: ["KiCad", "STM32", "PCB Design", "CAN bus"],
    icon: CircuitBoard,
    github: "https://github.com/olin-electric-motorsports",
    image: formulaImage,
    gallery: [
      { src: formulaWrongStm, caption: "First attempt using KiCad — mistakenly selected the wrong STM32 model, requiring a full restart." },
      { src: formulaCorrectStm, caption: "Second iteration with the correct STM32G441KBT6, with organized core components and proper pin configuration." },
      { src: formulaFinalSchematic, caption: "Refined schematic after resolving 50+ footprint errors, adding LCD ports, and updating to a higher pin-count STM32." },
      { src: formulaCanController, caption: "Finalized CAN controller schematic with corrected footprints and proper wiring per communication standards." },
      { src: formulaPcbTop, caption: "Second PCB iteration (top layer) — ~50% size reduction, rejected due to CAN interference and power routing issues." },
      { src: formulaPcbBottom, caption: "Bottom layer showing fragmented ground plane from excessive routing cuts, impacting signal integrity." },
      { src: formulaFinalReorg, caption: "Final reorganized schematic before handover to the electrical lead for continued development." },
    ],
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
