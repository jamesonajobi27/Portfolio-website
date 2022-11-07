import React from "react"

export default function Home(){
    return(
      <div className="Home">
        <img alt="My Picture" src={"Profilepic.png"} className="Myprofilepic" />

        <div className="bio">
          <span>Hi there,</span>
        <p>my name is Onajobi James,I'm currently enrolled at Altshool Africa where I'm learning frontend development.For many people
          I might be discribed as competitive,strict,playful but I just like to be responsible in whatever I do.So why web development
          because I have always considered myself a problem solver and thats what coding is helping me do.
        </p>
        </div>
      </div>
    )
}