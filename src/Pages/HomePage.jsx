import React from "react";
import { Link } from "react-router-dom";

const focusAreas = ["Embedded Systems", "Robotics", "Frontend Engineering", "CAD + Prototyping"];

const stats = [
  { label: "Projects Built", value: "28+" },
  { label: "Open Source PRs", value: "40+" },
  { label: "Engineering Domains", value: "4" },
];

export default function Home() {
  return (
    <section className="Home">
      <div className="heroBadge">Engineering Student Portfolio Network</div>

      <div className="homeBody">
        <div className="heroLeft">
          <img alt="Portrait of Onajobi James" src="/dancer.jpg" className="Myprofilepic" />

          <div className="statusCard">
            <p className="statusLabel">Current Mission</p>
            <p className="statusText">Building production-ready software with engineering precision.</p>
          </div>
        </div>

        <div className="bio">
          <h1 className="heroTitle">Hi, I&apos;m Onajobi James.</h1>
          <p>
            I&apos;m an engineering student focused on building useful systems with clean,
            modern interfaces. This portfolio highlights my practical projects,
            experiments, and contributions across software and engineering workflows.
          </p>

          <div className="focusGrid">
            {focusAreas.map((area) => (
              <span key={area} className="focusPill">
                {area}
              </span>
            ))}
          </div>

          <div className="heroActions">
            <Link to="/Repositories" className="ctaButton ctaPrimary">
              Explore Projects
            </Link>
            <a href="https://github.com/jamesonajobi27" target="_blank" rel="noreferrer" className="ctaButton ctaGhost">
              View GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="statsPanel">
        {stats.map((item) => (
          <article key={item.label} className="statCard">
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
