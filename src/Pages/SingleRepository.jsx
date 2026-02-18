import React from "react";
import { useParams } from "react-router-dom";

export default function SingleRepository() {
  const { OneRepo } = useParams();

  const [repoData, setRepoData] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getRepos() {
      const response = await fetch("https://api.github.com/users/jamesonajobi27/repos");
      const data = await response.json();
      setRepoData(data);
      data ? setLoading(false) : console.log("error");
    }

    getRepos();
  }, []);

  function DesignSingleRepo() {
    const displayOneRepo = repoData.find((repo) => OneRepo == repo.id);

    return (
      <section className="DesignSingleRepo">
        <h2 className="sectionTitle">Repository Details</h2>
        <div className="displayflex">
          <label>Name:</label>
          <h3>{displayOneRepo.name}</h3>
        </div>
        {displayOneRepo.description && (
          <div className="displayflex">
            <label>Description:</label>
            <h3>{displayOneRepo.description}</h3>
          </div>
        )}
        {displayOneRepo.language && (
          <div className="displayflex">
            <label>Most Used Language:</label>
            <h3>{displayOneRepo.language}</h3>
          </div>
        )}

        <div className="displayflex">
          <label>See Code:</label>
          <a target="_blank" rel="noreferrer" href={displayOneRepo.html_url}>
            <h3>{displayOneRepo.html_url}</h3>
          </a>
        </div>

        <div className="displayflex">
          <label>Forked:</label>
          <h3>{displayOneRepo.fork ? "Yes" : "No"}</h3>
        </div>
      </section>
    );
  }

  return loading ? (
    <h1 className="loading">
      <div>Loading...</div>
    </h1>
  ) : (
    <DesignSingleRepo />
  );
}
