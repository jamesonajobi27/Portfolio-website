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

  return (
    <main className="page-shell">
      <section className="content-card">
        <h2>Project Systems Overview</h2>
        <p>
          My portfolio is structured like an engineering system: high-level overview first, then drill-down into
          implementation details. Hardware and software projects are both represented because real products require
          both.
        </p>
      </section>

      <section className="project-grid">
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

      <section className="content-card">
        <h2>GitHub Repository Feed</h2>
        <p>Live repositories from GitHub for code-level review.</p>
        {loading ? (
          <h3 className="loading">Loading repositories...</h3>
        ) : (
          <div className="DesignAllRepo">
            {repoData.map((item) => (
              <Link className="DesignOneRepo" to={`/Repositories/${item.id}`} key={item.id}>
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
