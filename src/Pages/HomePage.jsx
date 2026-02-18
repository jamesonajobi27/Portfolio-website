import React from "react"

export default function Home(){
  const heroRef = React.useRef(null)
  const frameRef = React.useRef(0)
  const targetRef = React.useRef({ x: 50, y: 35 })
  const currentRef = React.useRef({ x: 50, y: 35 })

  React.useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const animate = () => {
      const current = currentRef.current
      const target = targetRef.current
      current.x += (target.x - current.x) * 0.12
      current.y += (target.y - current.y) * 0.12

      hero.style.setProperty("--light-x", `${current.x}%`)
      hero.style.setProperty("--light-y", `${current.y}%`)

      frameRef.current = window.requestAnimationFrame(animate)
    }

    frameRef.current = window.requestAnimationFrame(animate)

    const handlePointerMove = (event) => {
      const bounds = hero.getBoundingClientRect()
      const x = ((event.clientX - bounds.left) / bounds.width) * 100
      const y = ((event.clientY - bounds.top) / bounds.height) * 100
      targetRef.current = {
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y)),
      }
    }

    const handleLeave = () => {
      targetRef.current = { x: 50, y: 35 }
    }

    hero.addEventListener("pointermove", handlePointerMove)
    hero.addEventListener("pointerleave", handleLeave)

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove)
      hero.removeEventListener("pointerleave", handleLeave)
      window.cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return(
    <div className="Home homeHero" ref={heroRef}>
      <img alt="My Picture" src="/dancer.jpg" className="Myprofilepic" />

      <div className="bio">
        <span>Hi there,</span>
        <p>
          my name is Onajobi James,I'm currently enrolled at Altshool Africa where I'm learning frontend development.For many people
          I might be discribed as competitive,strict,playful but I just like to be responsible in whatever I do.So why web development
          because I have always considered myself a problem solver and thats what coding is helping me do.
        </p>
      </div>
    </div>
  )
}
