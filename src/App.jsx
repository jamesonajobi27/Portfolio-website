
import './App.css'
import React from 'react'
// import { Octokit, App} from '@octokit/core'

function App() {
//   React.useEffect(() => {
//      // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
// const octokit = new Octokit({ auth: `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` });
  
// // const {
// //   data: { login },
// // } = octokit.rest.users.getAuthenticated();
// // console.log("Hello, %s", login);

// }, [])
          
const [repoData, setRepoData] = React.useState([])

React.useEffect(() => {

  fetch("https://api.github.com/users/jamesonajobi27/repos")
  .then(res => res.json())
  .then(data => { setRepoData(data);} )
  .catch(error => {displayError("REFESH PAGE") } )


}, [])

  return(<div>HIII</div>)
}

export default App
