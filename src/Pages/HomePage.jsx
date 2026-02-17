import React from "react";
import { Link } from "react-router-dom";

const contactItems = [
  "709-630-7060",
  "jionajobi@mun.ca",
  "St. John’s, NL",
];

const education = {
  school: "Memorial University of Newfoundland (MUN)",
  degree: "Bachelor of Engineering (Co-op), Mechatronics Engineering · Class of 2028",
  period: "Sep 2023 – Present",
  standing: "Current Standing: Term 5 (Third Year) Engineering Student",
};

const skills = [
  { category: "Mechanical & Design", items: ["SolidWorks", "Fusion 360", "AutoCAD", "SketchUp", "3D Printing"] },
  { category: "Embedded & Simulation", items: ["Arduino", "PlatformIO", "PSpice"] },
  { category: "Programming", items: ["Python", "C++", "JavaScript (React)", "HTML"] },
  { category: "Data & Mapping", items: ["QGIS", "GIS Mapping", "MS Office"] },
  { category: "Electrical & Instrumentation", items: ["Electrical Schematics", "Field Wiring", "Instrument Calibration"] },
  { category: "Manufacturing Exposure", items: ["CNC machining (basic operation)", "Workflow exposure"] },
];

const experience = [
  {
    role: "Project Engineering Assistant",
    org: "Rural Outreach – Faculty of Engineering & Applied Science",
    period: "Jan – Apr & Sept – Dec 2025",
    location: "St. John’s, NL",
    bullets: [
      "Produced engineering designs from community requirements, reducing planning timelines by 15%.",
      "Developed AutoCAD and SketchUp infrastructure models and schematics approved by municipal partners.",
      "Developed RETScreen grant proposals, securing $1M in funding for rural community projects.",
      "Updated NG911 GIS datasets, improving rural address accuracy for emergency response.",
    ],
  },
  {
    role: "Construction Project Intern",
    org: "Built Right Solutions",
    period: "May 2022 – Aug 2022",
    location: "Nigeria",
    bullets: [
      "Managed daily inventory for 20+ construction materials, reducing waste by 10%.",
      "Inspected and prepared site equipment to ensure full readiness for construction phases.",
      "Drafted AutoCAD layout drawings alongside senior engineers to support site design.",
    ],
  },
];

const projects = [
  {
    title: "Crossfire PvP Embedded System",
    subtitle: "Digital Logic & Microprocessors · May 2024 – Aug 2024 · St. John’s, NL",
    points: [
      "Engineered a real-time hardware combat simulation using discrete logic and a custom LED matrix.",
      "Implemented analog signal processing for player inputs to control precise vector movement.",
      "Designed hardware-level collision detection using AND gates for instant hit registration.",
      "Integrated subsystems and resolved signal noise to deliver a playable prototype.",
    ],
    tags: ["Embedded Systems", "Digital Logic", "Signal Processing", "Prototyping"],
  },
  {
    title: "Portfolio Web Application",
    subtitle: "AltSchool Africa · Sep 2022 – Apr 2023 · Remote / Nigeria",
    points: [
      "Built a high-performance React application optimized for sub-second load times.",
      "Automated content management with the GitHub API for live repository synchronization.",
      "Implemented robust error handling and routing logic to reduce navigation failures.",
    ],
    tags: ["React", "GitHub API", "Routing", "Frontend"],
  },
];

export default function Home() {
  return (
    <div className="homePage">
      <section className="heroPanel">
        <div>
          <p className="sectionLabel">Mechatronics Engineering Portfolio</p>
          <h1 className="heroTitle">James Onajobi</h1>
          <p className="heroSubtitle">Engineering Student · Co-op Placement Seeker</p>
          <p className="statusReadout">status:// actively seeking co-op placement</p>

          <div className="contactRow">
            {contactItems.map((item) => (
              <span key={item} className="infoBadge">{item}</span>
            ))}
          </div>

          <div className="heroActions">
            <Link to="/Repositories" className="ctaButton ctaPrimary">View Repositories</Link>
            <a href="https://github.com/jamesonajobi27" target="_blank" rel="noreferrer" className="ctaButton ctaGhost">GitHub Profile</a>
            <a href="https://www.linkedin.com/in/jamesonajobi" target="_blank" rel="noreferrer" className="ctaButton ctaGhost">LinkedIn</a>
          </div>
        </div>

        <aside className="bioCard">
          <img alt="Headshot of James Onajobi" src="/dancer.jpg" className="Myprofilepic" />
          <p>
            Mechatronics Engineering student focused on practical systems integration across
            hardware, controls, and software. I enjoy translating requirements into clear,
            testable engineering outcomes.
          </p>
        </aside>
      </section>

      <section className="contentPanel">
        <h2>Education</h2>
        <article className="educationCard">
          <h3>{education.school}</h3>
          <p>{education.degree}</p>
          <p><strong>{education.period}</strong></p>
          <p>{education.standing}</p>
        </article>
      </section>

      <section className="contentPanel">
        <h2>Skills Matrix</h2>
        <div className="skillsGrid">
          {skills.map((group) => (
            <article key={group.category} className="skillCard">
              <h3>{group.category}</h3>
              <div className="badgeRow">
                {group.items.map((item) => (
                  <span key={item} className="skillBadge">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contentPanel">
        <h2>Experience Timeline</h2>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.role} className="timelineItem">
              <p className="timelinePeriod">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="timelineMeta">{item.org} · {item.location}</p>
              <ul>
                {item.bullets.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contentPanel">
        <h2>Projects</h2>
        <div className="projectGrid">
          {projects.map((project) => (
            <article key={project.title} className="projectCard">
              <h3>{project.title}</h3>
              <p className="timelineMeta">{project.subtitle}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="badgeRow">
                {project.tags.map((tag) => (
                  <span key={tag} className="techTag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
