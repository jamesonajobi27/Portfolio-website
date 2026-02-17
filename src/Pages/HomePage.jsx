import React from "react";
import { Link } from "react-router-dom";

const skills = [
  {
    group: "Hardware & Microcontrollers",
    items: ["ESP32", "Arduino", "Sensor Integration", "Embedded C"],
  },
  {
    group: "Software Engineering",
    items: ["React", "JavaScript", "REST APIs", "Python"],
  },
  {
    group: "Tools & CAD",
    items: ["AutoCAD", "SolidWorks", "Git/GitHub", "Figma"],
  },
];

const timeline = [
  {
    period: "2024 - Present",
    title: "Mechatronics Engineering Student",
    summary:
      "Building practical systems through coursework and personal projects focused on automation, embedded systems, and human-centered interfaces.",
  },
  {
    period: "2023 - 2024",
    title: "Rural Tech Outreach Volunteer",
    summary:
      "Led hands-on STEM sessions, simplified technical concepts for students, and improved collaboration/communication across multidisciplinary teams.",
  },
  {
    period: "Next Goal",
    title: "Co-op Placement",
    summary:
      "Looking for a competitive co-op role to contribute to robotics, controls, or product engineering teams with measurable impact.",
  },
];

const featuredProjects = [
  {
    title: "AIM Network Chatbot",
    description: "Conversational support tool that streamlines responses and improves user guidance with structured prompt flows.",
    tags: ["React", "API", "NLP", "UX"],
  },
  {
    title: "Smart Monitoring Node",
    description: "Prototype sensor node for environmental data capture and dashboard reporting using low-power microcontrollers.",
    tags: ["ESP32", "IoT", "Embedded C", "Data Logging"],
  },
  {
    title: "Actuator Control Interface",
    description: "Web interface for controlling and testing actuator sequences with safety checks and status feedback.",
    tags: ["JavaScript", "Control Logic", "Testing"],
  },
];

export default function Home() {
  return (
    <div className="homePage">
      <section className="heroPanel">
        <div>
          <p className="sectionLabel">Mechatronics Engineering Portfolio</p>
          <h1 className="heroTitle">I design and build reliable engineering systems.</h1>
          <p className="heroSubtitle">
            Mechatronics Engineering student and co-op seeker focused on robotics,
            embedded systems, and practical software.
          </p>
          <p className="typingText">status:// actively seeking co-op placement</p>

          <div className="heroActions">
            <Link to="/Repositories" className="ctaButton ctaPrimary">
              View Full Projects
            </Link>
            <a
              href="https://github.com/jamesonajobi27"
              target="_blank"
              rel="noreferrer"
              className="ctaButton ctaGhost"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        <aside className="bioCard">
          <img
            alt="Portrait of Onajobi James"
            src="/dancer.jpg"
            className="Myprofilepic"
          />
          <p>
            I enjoy taking ideas from concept to tested prototype, combining hardware
            and software with a strong emphasis on structure, documentation, and
            maintainability.
          </p>
        </aside>
      </section>

      <section className="contentPanel">
        <h2>Skills Matrix</h2>
        <div className="skillsGrid">
          {skills.map((skillGroup) => (
            <article key={skillGroup.group} className="skillCard">
              <h3>{skillGroup.group}</h3>
              <div className="badgeRow">
                {skillGroup.items.map((item) => (
                  <span key={item} className="skillBadge">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contentPanel">
        <h2>Experience Timeline</h2>
        <div className="timeline">
          {timeline.map((entry) => (
            <article key={entry.title} className="timelineItem">
              <p className="timelinePeriod">{entry.period}</p>
              <h3>{entry.title}</h3>
              <p>{entry.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contentPanel">
        <div className="panelHeader">
          <h2>Featured Projects</h2>
          <Link to="/Repositories" className="inlineLink">
            Browse all repositories →
          </Link>
        </div>

        <div className="projectGrid">
          {featuredProjects.map((project) => (
            <article key={project.title} className="projectCard">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="badgeRow">
                {project.tags.map((tag) => (
                  <span key={tag} className="techTag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contentPanel">
        <h2>Interests & Bio</h2>
        <p>
          Outside technical work, I enjoy simplifying complex ideas, learning from
          open-source communities, and collaborating on projects that solve practical
          problems. My long-term goal is to build dependable intelligent systems that
          improve daily life and industrial workflows.
        </p>
      </section>
    </div>
  );
}
