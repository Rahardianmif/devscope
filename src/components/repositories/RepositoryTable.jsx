import EmptyState from "../common/EmptyState";
import { formatNumber } from "../../utils/formatNumber";

function RepositoryTable({ repositories }) {

  if (!repositories.length) {
    return (
      <EmptyState
        title="No Repository Found"
        description="This user has no repositories."
      />
    );
  }

  return (
    

      <div className="table-responsive">

        <table className="repo-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Language</th>
              <th>Stars</th>
              <th>Forks</th>
              <th>Updated</th>
            </tr>
          </thead>

          <tbody>

            {repositories.map((repo) => (

              <tr key={repo.id}>

                <td>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="repo-link"
                  >
                    {repo.name}
                  </a>

                </td>

                <td>
                  {repo.language || "-"}
                </td>

                <td>
                  {formatNumber(
                    repo.stargazers_count
                  )}
                </td>

                <td>
                  {formatNumber(
                    repo.forks_count
                  )}
                </td>

                <td>
                  {new Date(
                    repo.updated_at
                  ).toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    
  );
}

export default RepositoryTable;