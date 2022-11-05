import React from "react";
import { Link } from "react-router-dom";




export default function Repositories(){

       let[loading, setLoading] = React.useState(false)
       let [repoData, setRepoData] = React.useState([])

      React.useEffect(
    () => {
        async function Me(){
            setLoading(true)
            const response = await fetch("https://api.github.com/users/jamesonajobi27/repos")
            const data = await response.json();
            setRepoData(data)
            data ? setLoading(false) : console.log("error")

        }
        Me()

    },[])


      function DesignOneRepo(props){

          let {name,id,description} = props.props
          let me

          return(
          <Link   className="DesignOneRepo"  to={`/Repositories/${id}`}>
            <div className="name">{name}</div>
              { description == null ?  <div className="Description">None</div> :  <div className="Description">{description}</div>}
          </Link>
        
        )
      }
         
      let ShowAllProjects = repoData.map((item) => {return <DesignOneRepo props={item}/>})
    

    return(loading ? <h1 className="loading"><div>Loading...</div></h1> :  
    <div className="DesignAllRepoContent">
      <div className="Content">My repositories comprises of My personal projects, Some projects I admired and wanted to see the code, And Some I contributed to. I am a 
        big fan of Open Source because no man is an island of knowledge we all share and collaborate.
      </div>
       <div className="DesignAllRepo"> {ShowAllProjects}</div>

    </div>
    )
}

