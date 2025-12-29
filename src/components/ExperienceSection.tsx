import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      type: "work",
      title: "Robotics Engineering Intern",
      company: "Tech Company Name",
      period: "May 2024 - Aug 2024",
      description: [
        "Developed motion planning algorithms for autonomous mobile robots using C++ and ROS2",
        "Implemented sensor fusion pipeline integrating LIDAR, IMU, and camera data",
        "Reduced navigation latency by 40% through algorithm optimization",
      ],
    },
    {
      type: "work",
      title: "Embedded Systems Intern",
      company: "Electronics Company",
      period: "May 2023 - Aug 2023",
      description: [
        "Designed firmware for STM32 microcontrollers in automotive applications",
        "Created automated testing framework reducing QA time by 30%",
        "Collaborated with hardware team on PCB bring-up and debugging",
      ],
    },
  ];

  const education = {
    degree: "B.S. Electrical and Computer Engineering",
    school: "Your University Name",
    period: "Expected May 2026",
    gpa: "3.85/4.0",
    coursework: [
      "Digital Systems Design",
      "Embedded Systems",
      "Computer Architecture",
      "Machine Learning",
      "Control Systems",
      "Signal Processing",
    ],
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Background</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Experience & <span className="text-gradient">Education</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold">Work Experience</h3>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors group"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-secondary border-2 border-border group-hover:border-primary group-hover:bg-primary/20 transition-colors" />
                    
                    <div className="pb-8">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <h4 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-primary font-medium mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-primary mt-1.5">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:glow-sm transition-all duration-500">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  {education.period}
                </div>
                <h4 className="text-xl font-semibold mb-2">{education.degree}</h4>
                <p className="text-primary font-medium mb-2">{education.school}</p>
                <p className="text-muted-foreground mb-6">GPA: {education.gpa}</p>

                <h5 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
                  Relevant Coursework
                </h5>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-lg"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills summary */}
              <div className="mt-8 p-8 rounded-2xl bg-card border border-border">
                <h4 className="text-lg font-semibold mb-6">Technical Skills</h4>
                <div className="space-y-4">
                  {[
                    { category: "Languages", skills: "C/C++, Python, Verilog, JavaScript/TypeScript" },
                    { category: "Frameworks", skills: "ROS/ROS2, TensorFlow, React, Node.js" },
                    { category: "Tools", skills: "Git, Docker, Linux, Vivado, KiCad, SolidWorks" },
                    { category: "Hardware", skills: "STM32, ESP32, Raspberry Pi, Arduino, FPGA" },
                  ].map((skill) => (
                    <div key={skill.category}>
                      <span className="text-sm font-mono text-primary">{skill.category}:</span>
                      <p className="text-muted-foreground text-sm mt-1">{skill.skills}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
