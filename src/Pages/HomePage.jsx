import React from "react"

export default function Home(){
    return(
      <div className="Home">
        <img alt="My Picture" src="https://images.unsplash.com/photo-1647983196194-1dd1da925fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80" className="Myprofilepic" />

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