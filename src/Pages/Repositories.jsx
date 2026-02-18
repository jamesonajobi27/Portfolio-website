import React from "react";
import { Link } from "react-router-dom";

export default function Repositories(){
  const [loading, setLoading] = React.useState(false)
  const [repoData, setRepoData] = React.useState([])
  const panelRef = React.useRef(null)
  const panelFrameRef = React.useRef(0)
  const targetRef = React.useRef({ x: 50, y: 30 })
  const currentRef = React.useRef({ x: 50, y: 30 })

  React.useEffect(() => {
    async function Me(){
      setLoading(true)
      const response = await fetch("https://api.github.com/users/jamesonajobi27/repos")
      const data = await response.json();
      setRepoData(data)
      data ? setLoading(false) : console.log("error")
    }
    Me()
  },[])

  React.useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    const animate = () => {
      const current = currentRef.current
      const target = targetRef.current
      current.x += (target.x - current.x) * 0.13
      current.y += (target.y - current.y) * 0.13

      panel.style.setProperty("--repo-light-x", `${current.x}%`)
      panel.style.setProperty("--repo-light-y", `${current.y}%`)
      panelFrameRef.current = window.requestAnimationFrame(animate)
    }

    panelFrameRef.current = window.requestAnimationFrame(animate)

    const onMove = (event) => {
      const bounds = panel.getBoundingClientRect()
      const x = ((event.clientX - bounds.left) / bounds.width) * 100
      const y = ((event.clientY - bounds.top) / bounds.height) * 100
      targetRef.current = {
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y)),
      }
    }

    const onLeave = () => {
      targetRef.current = { x: 50, y: 30 }
    }

    panel.addEventListener("pointermove", onMove)
    panel.addEventListener("pointerleave", onLeave)

    return () => {
      panel.removeEventListener("pointermove", onMove)
      panel.removeEventListener("pointerleave", onLeave)
      window.cancelAnimationFrame(panelFrameRef.current)
    }
  }, [])

  function DesignOneRepo(props){
    const {name,id,description,index} = props.props

    return(
      <Link className="DesignOneRepo" style={{ animationDelay: `${index * 80}ms` }} to={`/Repositories/${id}`}>
        <div className="name">{name}</div>
        {description == null ?  <div className="Description">None</div> :  <div className="Description">{description}</div>}
      </Link>
    )
  }

  const ShowAllProjects = repoData.map((item, index) => (
    <DesignOneRepo key={item.id} props={{ ...item, index }} />
  ))

  return(
    loading ? <h1 className="loading"><div>Loading...</div></h1> :
    <div className="DesignAllRepoContent">
      <div className="Content projectOverview" ref={panelRef}>
        My repositories comprises of My personal projects, Some projects I admired and wanted to see the code, And Some I contributed to. I am a
        big fan of Open Source because no man is an island of knowledge we all share and collaborate.
      </div>
      <div className="signalStrip">
        <div className="signalPill">Subsystems: Frontend UI</div>
        <div className="signalPill">Live Repositories: {repoData.length}</div>
        <div className="signalPill">Stack Coverage: React • JS • CSS</div>
      </div>
      <div className="DesignAllRepo">{ShowAllProjects}</div>
    </div>
  )
}
