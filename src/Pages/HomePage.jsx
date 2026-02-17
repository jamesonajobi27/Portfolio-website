import React from "react";

export default function Home() {
  return (
    <section className="Home">
      <div className="heroBadge">Frontend Developer</div>
      <div className="homeBody">
        <img alt="Portrait of Onajobi James" src="/dancer.jpg" className="Myprofilepic" />

        <div className="bio">
          <span>Hi there, I&apos;m Onajobi James.</span>
          <p>
            I&apos;m currently enrolled at AltSchool Africa, where I&apos;m sharpening my
            frontend development skills. I&apos;m often described as competitive,
            strict, and playful, but above all I like to be responsible in
            whatever I do. I chose web development because I&apos;ve always seen
            myself as a problem solver, and coding gives me a powerful way to do
            exactly that.
          </p>
        </div>
      </div>
    </section>
  );
}
