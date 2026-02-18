import React from "react";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    name: "Crossfire PvP — Embedded Real-Time Combat System",
    timeline: "St. John's, NL | May – Aug 2024",
    summary:
      "A hardware-based, real-time combat game using microcontrollers, IR communication, and motorized feedback.",
    bullets: [
      "Designed distributed embedded behavior where multiple devices communicate and respond in real time.",
      "Built interface electronics so low-power logic safely controls motors, IR emitters, and buzzers.",
      "Implemented event-driven logic using state-machine/interrupt-style control.",
    ],
    stack: ["Embedded Systems", "Microcontrollers", "IR Communication", "Motor Drivers"],
  },
  {
    name: "ESP32 Sensor & Control Platform",
    timeline: "Personal Lab Project",
    summary: "A modular ESP32 control board for reading sensors, driving actuators, and publishing telemetry.",
    bullets: [
      "Integrated temperature, motion, and voltage sensing.",
      "Implemented PWM-based motor control and serial diagnostics.",
      "Added Wi-Fi telemetry to monitor system behavior remotely.",
    ],
    stack: ["ESP32", "Firmware", "Telemetry", "Control Systems"],
  },
  {
    name: "Engineering Portfolio Web App",
    timeline: "React + Vite",
    summary:
      "A software system that organizes repositories and engineering artifacts in one place with routing and robust state handling.",
    bullets: [
      "Dynamically displays repositories through GitHub API integration.",
      "Uses client-side routing and clear loading states for better UX.",
      "Structured for ongoing project updates and technical storytelling.",
    ],
    stack: ["React", "Vite", "GitHub API", "Routing"],
  },
];

export default function Repositories() {
  const [loading, setLoading] = React.useState(true);
  const [repoData, setRepoData] = React.useState([]);
  const [visible, setVisible] = React.useState({});
  const [overviewGlow, setOverviewGlow] = React.useState({ x: 74, y: 24 });

  const overviewTarget = React.useRef({ x: 74, y: 24 });

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
      { threshold: 0.2 },
    );

    observer.observe(node);
  }, []);

  React.useEffect(() => {
    async function loadRepos() {
      try {
        const response = await fetch("https://api.github.com/users/jamesonajobi27/repos");
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepoData(data);
        }
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
  }, []);

  React.useEffect(() => {
    let rafId;

    function animateGlow() {
      setOverviewGlow((current) => {
        const nextX = current.x + (overviewTarget.current.x - current.x) * 0.12;
        const nextY = current.y + (overviewTarget.current.y - current.y) * 0.12;
        return { x: nextX, y: nextY };
      });
      rafId = window.requestAnimationFrame(animateGlow);
    }

    rafId = window.requestAnimationFrame(animateGlow);
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  function handleOverviewPointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    overviewTarget.current = {
      x: Math.min(100, Math.max(0, x)),
      y: Math.min(100, Math.max(0, y)),
    };
  }

  function handleOverviewPointerLeave() {
    overviewTarget.current = { x: 74, y: 24 };
  }

  const signalData = [
    { label: "Subsystems", value: `${featuredProjects.length} Modules` },
    { label: "Live Repositories", value: loading ? "Syncing..." : `${repoData.length} Synced` },
    { label: "Stack Coverage", value: "Embedded + Web" },
  ];

  return (
    <main className="page-shell">
      <section
        className={`content-card reveal-block project-overview ${visible.overview ? "is-visible" : ""}`}
        ref={(node) => register("overview", node)}
        style={{ "--overview-glow-x": `${overviewGlow.x}%`, "--overview-glow-y": `${overviewGlow.y}%` }}
        onPointerMove={handleOverviewPointerMove}
        onPointerLeave={handleOverviewPointerLeave}
      >
        <h2>Project Systems Overview</h2>
        <p>
          My portfolio is structured like an engineering system: high-level overview first, then drill-down into
          implementation details. Hardware and software projects are both represented because real products require
          both.
        </p>
        <div className="telemetry-signal-strip">
          {signalData.map((signal, index) => (
            <div
              key={signal.label}
              className="signal-pill"
              style={{ "--signal-delay": `${index * 110}ms` }}
            >
              <span>{signal.label}</span>
              <strong>{signal.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className={`project-grid reveal-block ${visible.projects ? "is-visible" : ""}`} ref={(node) => register("projects", node)}>
        {featuredProjects.map((project) => (
          <article className="project-card" key={project.name}>
            <p className="project-time">{project.timeline}</p>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <ul>
              {project.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="chip-list">
              {project.stack.map((tag) => (
                <span className="chip" key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className={`content-card reveal-block ${visible.repositories ? "is-visible" : ""}`} ref={(node) => register("repositories", node)}>
        <h2>GitHub Repository Feed</h2>
        <p>Live repositories from GitHub for code-level review.</p>
        {loading ? (
          <h3 className="loading">Loading repositories...</h3>
        ) : (
          <div className="DesignAllRepo">
            {repoData.map((item, index) => (
              <Link
                className="DesignOneRepo"
                to={`/Repositories/${item.id}`}
                key={item.id}
                style={{ "--repo-delay": `${index * 55}ms` }}
              >
                <div className="name">{item.name}</div>
                <div className="Description">{item.description ?? "No description"}</div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
