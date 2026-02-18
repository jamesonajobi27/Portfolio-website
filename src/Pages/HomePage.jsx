import React from "react";

const projects = [
  {
    title: "Crossfire PvP Embedded System",
    description:
      "Real-time combat control loop with microcontrollers, IR communication, and actuator response logic.",
    tags: ["Embedded C", "IR Comms", "Control Logic"],
  },
  {
    title: "ESP32 Sensor + Telemetry Platform",
    description:
      "Sensor fusion and actuator control board with live signal reporting over Wi-Fi and serial diagnostics.",
    tags: ["ESP32", "Telemetry", "PWM Control"],
  },
  {
    title: "Engineering Portfolio Monitor",
    description:
      "A project intelligence interface that organizes repos, technical artifacts, and build-ready stories.",
    tags: ["React", "GitHub API", "UI Systems"],
  },
];

const skills = [
  { label: "Microcontrollers", value: 92 },
  { label: "Circuit Analysis", value: 86 },
  { label: "Embedded C/C++", value: 84 },
  { label: "CAD / Mechanical Design", value: 80 },
  { label: "Python + MATLAB", value: 78 },
  { label: "Systems Integration", value: 88 },
];

function useRevealAnimation() {
  const [visible, setVisible] = React.useState({});

  const register = React.useCallback((id, node) => {
    if (!node) {
      return;
    }

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

function TiltCard({ title, description, tags }) {
  function handleMove(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 10;
    const rotateX = (0.5 - y) * 10;

    card.style.setProperty("--rotateX", `${rotateX}deg`);
    card.style.setProperty("--rotateY", `${rotateY}deg`);
    card.style.setProperty("--glowX", `${x * 100}%`);
    card.style.setProperty("--glowY", `${y * 100}%`);
  }

  function resetCard(event) {
    const card = event.currentTarget;
    card.style.setProperty("--rotateX", "0deg");
    card.style.setProperty("--rotateY", "0deg");
    card.style.setProperty("--glowX", "50%");
    card.style.setProperty("--glowY", "50%");
  }

  return (
    <article className="telemetry-card" onMouseMove={handleMove} onMouseLeave={resetCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="chip-list">
        {tags.map((tag) => (
          <span key={tag} className="chip">{tag}</span>
        ))}
      </div>
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
        id="hero"
        ref={(node) => register("hero", node)}
        className={`panel hero-panel ${visible.hero ? "is-visible" : ""}`}
      >
        <p className="kicker">MECHATRONICS ENGINEERING TELEMETRY INTERFACE</p>
        <h1 className="hero-name">James Onajobi</h1>
        <h2 className="hero-tagline">Bridging Hardware, Software, and Real-World Systems</h2>
        <p>
          Designing reliable engineering systems where control logic, electronics, and physical behavior work as one.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="/Repositories">Monitor Projects</a>
          <a className="button-ghost resume-pulse" href="/James_Onajobi_Resume.pdf" target="_blank" rel="noreferrer">
            Resume Signal
          </a>
        </div>
      </section>

      <section
        id="projects"
        ref={(node) => register("projects", node)}
        className={`panel ${visible.projects ? "is-visible" : ""}`}
      >
        <div className="section-head">
          <h2>Projects // Active Systems</h2>
          <span className="signal">ONLINE</span>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <TiltCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section
        id="skills"
        ref={(node) => register("skills", node)}
        className={`panel ${visible.skills ? "is-visible" : ""}`}
      >
        <div className="section-head">
          <h2>Skills // System Diagnostics</h2>
          <span className="signal">SCANNING</span>
        </div>
        <div className="diagnostics-grid">
          {skills.map((skill) => (
            <div key={skill.label} className="diagnostic-row">
              <div className="diagnostic-meta">
                <span>{skill.label}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${visible.skills ? skill.value : 0}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        ref={(node) => register("about", node)}
        className={`panel soft-panel ${visible.about ? "is-visible" : ""}`}
      >
        <h2>About Me // Human Layer</h2>
        <p>
          I am a mechatronics engineering student focused on embedded systems, robotics, and automation. I enjoy building
          tools where software and hardware meet under real-world constraints.
        </p>
        <p>
          I think in systems, communicate with structure, and stay calm under pressure—whether in a lab, design review,
          or high-tempo operations environment.
        </p>
      </section>
    </main>
  );
}
