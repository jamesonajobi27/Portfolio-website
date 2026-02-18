import React from "react";

const subsystems = [
  {
    id: "embedded",
    title: "Embedded Systems & Electronics",
    items: ["ESP32", "Arduino", "Circuit analysis", "Sensors & actuators", "Motor drivers", "Soldering"],
    visual: "trace",
  },
  {
    id: "control",
    title: "Control Logic & Computation",
    items: ["C / C++", "Python", "MATLAB", "Real-time logic", "State machines", "Signal processing"],
    visual: "flow",
  },
  {
    id: "mechanical",
    title: "Mechanical Design & Prototyping",
    items: ["AutoCAD", "SketchUp", "Solid modeling", "3D printing", "Fit & tolerance thinking"],
    visual: "cube",
  },
  {
    id: "software",
    title: "Engineering Software & Interfaces",
    items: ["React", "Git", "APIs", "Web dashboards", "Data visualization"],
    visual: "network",
  },
];

const experiences = [
  {
    role: "Project Engineering Assistant",
    org: "Rural Outreach – Faculty of Engineering",
    location: "St. John's, NL",
    points: [
      "Built AutoCAD and SketchUp infrastructure models from community requirements.",
      "Produced practical engineering layouts and reduced planning timelines through structured design workflows.",
      "Translated real-world constraints into reliable design deliverables.",
    ],
  },
  {
    role: "Kitchen Team Member",
    org: "Fast-paced operations environment",
    location: "St. John's, NL",
    points: [
      "Worked under time pressure while balancing speed, safety, and consistency.",
      "Handled physical and mental load in high-consequence shifts.",
      "Strengthened teamwork and reliable execution in dynamic environments.",
    ],
  },
];

function useRevealAnimation() {
  const [visible, setVisible] = React.useState({});

  const register = React.useCallback((id, node) => {
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
  }, []);

  return { visible, register };
}

function SubsystemCard({ system }) {
  return (
    <article className={`subsystem-card subsystem-${system.visual}`}>
      <h3>{system.title}</h3>
      <ul>
        {system.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = React.useState(0);
  const { visible, register } = useRevealAnimation();

  React.useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="telemetry-page">
      <div className="telemetry-bg">
        <div className="grid-layer" style={{ transform: `translateY(${scrollY * 0.08}px)` }} />
        <div className="line-layer" style={{ transform: `translateY(${scrollY * 0.14}px)` }} />
        <div className="noise-layer" />
      </div>

      <section
        id="introduction"
        ref={(node) => register("introduction", node)}
        className={`panel hero-panel ${visible.introduction ? "is-visible" : ""}`}
      >
        <p className="kicker">MECHATRONICS ENGINEERING TELEMETRY INTERFACE</p>
        <h1 className="hero-name">James Onajobi</h1>
        <h2 className="hero-tagline">Bridging Hardware, Software, and Real-World Systems</h2>
        <p>
          Designing reliable engineering systems where control logic, electronics, and physical behavior work as one.
        </p>
        <div className="hero-actions">
          <a className="button-primary resume-pulse" href="/James_Onajobi_Resume.pdf" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
      </section>

      <section
        id="experience"
        ref={(node) => register("experience", node)}
        className={`panel ${visible.experience ? "is-visible" : ""}`}
      >
        <div className="section-head">
          <h2>Experience // Field Operations</h2>
        </div>
        <div className="experience-list telemetry-experience-list">
          {experiences.map((exp) => (
            <article key={exp.role} className="experience-item">
              <div className="experience-head">
                <h3>{exp.role}</h3>
                <p>{exp.org}</p>
                <span>{exp.location}</span>
              </div>
              <ul>
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="skills"
        ref={(node) => register("skills", node)}
        className={`panel ${visible.skills ? "is-visible" : ""}`}
      >
        <div className="section-head">
          <h2>Skills // Subsystem Diagnostics</h2>
        </div>
        <div className="subsystem-grid">
          {subsystems.map((system) => (
            <SubsystemCard key={system.id} system={system} />
          ))}
        </div>
      </section>
    </main>
  );
}
