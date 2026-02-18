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

const timeline = [
  { label: "Hero", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
];

export default function Home() {
  const [activeTimelineId, setActiveTimelineId] = React.useState("hero");
  const [indicatorStyle, setIndicatorStyle] = React.useState({ width: 0, x: 0 });
  const linkRefs = React.useRef({});

  React.useEffect(() => {
    const sections = timeline.map((item) => document.getElementById(item.id)).filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveTimelineId(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const activeLink = linkRefs.current[activeTimelineId];
    if (!activeLink) {
      return;
    }

    setIndicatorStyle({ width: activeLink.offsetWidth, x: activeLink.offsetLeft });
  }, [activeTimelineId]);

  React.useEffect(() => {
    function handleResize() {
      const activeLink = linkRefs.current[activeTimelineId];
      if (!activeLink) {
        return;
      }
      setIndicatorStyle({ width: activeLink.offsetWidth, x: activeLink.offsetLeft });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTimelineId]);

  return (
    <main className="page-shell">
      <section className="timeline-rail" aria-label="Page timeline">
        <p className="timeline-title">Timeline</p>
        <div className="timeline-list">
          {timeline.map((item) => (
            <a
              key={item.href}
              className={`timeline-link ${activeTimelineId === item.id ? "active" : ""}`}
              href={item.href}
              ref={(el) => {
                linkRefs.current[item.id] = el;
              }}
              onClick={() => setActiveTimelineId(item.id)}
            >
              <span className="timeline-dot" />
              {item.label}
            </a>
          ))}
          <span
            className="timeline-indicator"
            style={{ width: `${indicatorStyle.width}px`, transform: `translateX(${indicatorStyle.x}px)` }}
          />
        </div>
      </section>

      <section className="hero" id="hero">
        <div>
          <p className="kicker">Mechatronics Engineering Student</p>
          <h1>Bridging Hardware, Software, and Real-World Systems</h1>
          <p className="hero-copy">
            I build systems where code, electronics, and physical behavior meet — from microcontroller-driven control
            loops to software that organizes and surfaces engineering data.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="/Repositories">View My Projects</a>
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

      <section className="content-card" id="about">
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

      <section className="content-card" id="skills">
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

      <section className="content-card" id="experience">
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
