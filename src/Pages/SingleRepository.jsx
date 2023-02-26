import React from "react"
import {Link, useParams} from "react-router-dom"

export default function SingleRepository(){
    const {OneRepo} = useParams()
      console.log(OneRepo)

    const [repoData, setRepoData] = React.useState()
    let [loading, setLoading]  = React.useState(true)

React.useEffect(
    () => {
        async function Me(){
            const response = await fetch("https://api.github.com/users/jamesonajobi27/repos")
            const movies = await response.json();
            setRepoData(movies)
            movies ? setLoading(false) : console.log("error")

        }
        Me()
    } 
    
,[])
     

     function DesignSingleRepo(){
            const DisplayOneRepo = repoData.find(Repo => OneRepo == Repo.id)
       
         return(
         <div className="DesignSingleRepo">
               <div className="displayflex">
                <label>Name:</label>
                <h3>{DisplayOneRepo.name}</h3>
            </div>
            {DisplayOneRepo.description &&  <div className="displayflex">
                <label>Desciption:</label>
                <h3>{DisplayOneRepo.description}</h3>
            </div>}
            {DisplayOneRepo.language && <div className="displayflex">
                <label>Most Used Language:</label>
                <h3>{DisplayOneRepo.language}</h3>
            </div>}
    
           <div className="displayflex">
                <label>{`See Code :`}</label>
                 <a target="-blank" href={`${DisplayOneRepo.html_url}`}><h3>{DisplayOneRepo.html_url}</h3></a>
            </div>

            <div className="displayflex">
                <label>FORKED:</label>
                <h3>{DisplayOneRepo.fork ? "Yess" : "Nooo"}</h3>
            </div>
    
        
            
         </div>)

     }


    return(loading ? <h1 className="loading"><div>Loading...</div></h1> : <DesignSingleRepo />)


}