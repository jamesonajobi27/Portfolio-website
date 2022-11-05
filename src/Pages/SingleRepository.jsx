import React from "react"
import {Link, useParams} from "react-router-dom"

export default function SingleRepository(){
    const {OneRepo} = useParams()
 

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
     if(loading === false){
        const DisplayOneRepo = repoData.find(Repo => OneRepo == Repo.id)
         console.log(DisplayOneRepo)
     }


    return(loading ? <h1 className="loading"><div>Loading...</div></h1> : <h1>{OneRepo} </h1> )


}