function TopRepositories({
  repositories,
}) {
  return (
    <div className="dashboard-card">

      <div className="section-title">
        Top Repositories
      </div>

      {repositories.map((repo) => (

        <div
          key={repo.id}
          className="top-repo-item"
        >

          <div>

            <h6>{repo.name}</h6>

            <small>
              {repo.language}
            </small>

          </div>

          <span>
            ★ {repo.stargazers_count}
          </span>

        </div>

      ))}
    </div>
  );
}

export default TopRepositories;