import React from "react";
import { useParams } from "react-router-dom";

export default function SingleRepository() {
  const { OneRepo } = useParams();
  const [repoData, setRepoData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadRepo() {
      try {
        const response = await fetch("https://api.github.com/users/jamesonajobi27/repos");
        const data = await response.json();
        if (Array.isArray(data)) {
          const selected = data.find((repo) => String(repo.id) === String(OneRepo));
          setRepoData(selected ?? null);
        }
      } finally {
        setLoading(false);
      }
    }

    loadRepo();
  }, [OneRepo]);

  if (loading) {
    return <h2 className="loading">Loading repository details...</h2>;
  }

  if (!repoData) {
    return (
      <main className="page-shell">
        <section className="content-card">
          <h2>Repository not found</h2>
          <p>The selected repository could not be loaded. Please return to the Projects page and try again.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section className="DesignSingleRepo">
        <div className="displayflex">
          <label>Name:</label>
          <h3>{repoData.name}</h3>
        </div>

        {repoData.description && (
          <div className="displayflex">
            <label>Description:</label>
            <h3>{repoData.description}</h3>
          </div>
        )}

        {repoData.language && (
          <div className="displayflex">
            <label>Primary Language:</label>
            <h3>{repoData.language}</h3>
          </div>
        )}

        <div className="displayflex">
          <label>See Code:</label>
          <a target="_blank" rel="noreferrer" href={repoData.html_url}>
            <h3>{repoData.html_url}</h3>
          </a>
        </div>

        <div className="displayflex">
          <label>Forked:</label>
          <h3>{repoData.fork ? "Yes" : "No"}</h3>
        </div>
      </section>
    </main>
  );
}
