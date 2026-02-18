import React from "react";

const skills = {
  Hardware: [
    "Circuit Analysis",
    "Soldering",
    "Microcontrollers (ESP32, Arduino)",
    "Sensors & Actuators",
    "Motor Drivers",
  ],
  Software: ["C / C++", "Python", "MATLAB", "React"],
  "Design & Tools": ["AutoCAD", "SketchUp", "3D Printing", "Git", "Solid Modeling"],
};

const experiences = [
  {
    title: "Project Engineering Assistant",
    company: "Rural Outreach – Faculty of Engineering",
    location: "St. John's, NL",
    points: [
      "Built AutoCAD and SketchUp infrastructure models from community requirements.",
      "Produced practical engineering layouts and reduced planning timelines through structured design workflows.",
      "Translated real-world constraints into reliable design deliverables.",
    ],
  },
  {
    title: "Kitchen Team Member",
    company: "Fast-paced operations environment",
    location: "St. John's, NL",
    points: [
      "Worked under time pressure while balancing speed, safety, and consistency.",
      "Handled physical and mental load in high-consequence shifts.",
      "Strengthened teamwork and reliable execution in dynamic environments.",
    ],
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div>
          <p className="kicker">Mechatronics Engineering Student</p>
          <h1>Bridging Hardware, Software, and Real-World Systems</h1>
          <p className="hero-copy">
            I build systems where code, electronics, and physical behavior meet — from microcontroller-driven control
            loops to software that organizes and surfaces engineering data.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="/Repositories">View My Projects</a>
            <a className="button-outline" href="/James_Onajobi_Resume.pdf" target="_blank" rel="noreferrer">
              Download Resume (PDF)
            </a>
            <a className="button-ghost" href="https://github.com/jamesonajobi27" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <img alt="James Onajobi" src="/dancer.jpg" className="Myprofilepic" />
        </div>
      </section>

      <section className="signal-divider" />

      <section className="content-card">
        <h2>About Me</h2>
        <p>
          I'm a mechatronics engineering student driven by building systems that connect software, electronics, and
          physical hardware. I'm especially interested in robotics, embedded systems, and automation because they
          combine analytical thinking with hands-on engineering.
        </p>
        <p>
          Beyond technical work, I'm curious about psychology and personality frameworks, and I enjoy understanding
          how both people and systems behave under pressure.
        </p>
      </section>

      <section className="content-card">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, entries]) => (
            <article className="skill-group" key={group}>
              <h3>{group}</h3>
              <ul>
                {entries.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-card">
        <h2>Work Experience</h2>
        <div className="experience-list">
          {experiences.map((job) => (
            <article className="experience-item" key={job.title}>
              <div className="experience-head">
                <h3>{job.title}</h3>
                <p>{job.company}</p>
                <span>{job.location}</span>
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
