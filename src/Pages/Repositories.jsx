import React from "react";
import { Link } from "react-router-dom";

export default function Repositories() {
  const [loading, setLoading] = React.useState(false);
  const [repoData, setRepoData] = React.useState([]);

  React.useEffect(() => {
    async function getRepos() {
      setLoading(true);
      const response = await fetch("https://api.github.com/users/jamesonajobi27/repos");
      const data = await response.json();
      setRepoData(data);
      data ? setLoading(false) : console.log("error");
    }

    getRepos();
  }, []);

  function DesignOneRepo({ repo }) {
    const { name, id, description } = repo;

    return (
      <Link className="DesignOneRepo" to={`/Repositories/${id}`}>
        <div className="name">{name}</div>
        <div className="Description">{description ?? "No description provided"}</div>
      </Link>
    );
  }

  const showAllProjects = repoData.map((item) => (
    <DesignOneRepo key={item.id} repo={item} />
  ));

  return loading ? (
    <h1 className="loading">
      <div>Loading...</div>
    </h1>
  ) : (
    <section className="DesignAllRepoContent">
      <h1 className="sectionTitle">Repositories</h1>
      <div className="Content">
        My repositories include personal projects, cloned learning projects I admired,
        and projects I&apos;ve contributed to. I&apos;m a strong fan of open source because
        knowledge grows best when we share and collaborate.
      </div>
      <div className="DesignAllRepo">{showAllProjects}</div>
    </section>
  );
}
