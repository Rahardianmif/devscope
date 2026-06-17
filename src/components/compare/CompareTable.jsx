import { compareStats } from "../../utils/compareStats";

function CompareTable({
  statsA,
  statsB,
}) {
  if (!statsA || !statsB) {
    return null;
  }

  const result = compareStats(
    statsA,
    statsB
  );

  return (
    <div className="dashboard-card">

      <div className="compare-winner">

        {result.winner === "DRAW"
          ? "🤝 Draw"
          : `🏆 User ${result.winner} Wins`}

      </div>

      <table className="repo-table">

        <thead>
          <tr>
            <th>Metric</th>
            <th>User A</th>
            <th>User B</th>
          </tr>
        </thead>

        <tbody>

          <tr>

            <td>Repositories</td>

            <td
              className={
                result.metrics.repositories === "A"
                  ? "winner-cell"
                  : ""
              }
            >
              {statsA.totalRepos}
            </td>

            <td
              className={
                result.metrics.repositories === "B"
                  ? "winner-cell"
                  : ""
              }
            >
              {statsB.totalRepos}
            </td>

          </tr>

          <tr>

            <td>Stars</td>

            <td
              className={
                result.metrics.stars === "A"
                  ? "winner-cell"
                  : ""
              }
            >
              {statsA.totalStars}
            </td>

            <td
              className={
                result.metrics.stars === "B"
                  ? "winner-cell"
                  : ""
              }
            >
              {statsB.totalStars}
            </td>

          </tr>

          <tr>

            <td>Forks</td>

            <td
              className={
                result.metrics.forks === "A"
                  ? "winner-cell"
                  : ""
              }
            >
              {statsA.totalForks}
            </td>

            <td
              className={
                result.metrics.forks === "B"
                  ? "winner-cell"
                  : ""
              }
            >
              {statsB.totalForks}
            </td>

          </tr>

          <tr>

            <td>Languages</td>

            <td
              className={
                result.metrics.languages === "A"
                  ? "winner-cell"
                  : ""
              }
            >
              {statsA.totalLanguages}
            </td>

            <td
              className={
                result.metrics.languages === "B"
                  ? "winner-cell"
                  : ""
              }
            >
              {statsB.totalLanguages}
            </td>

          </tr>

        </tbody>

      </table>

      <div className="compare-summary">

        <div className="compare-summary-item">
          User A Score: {result.scoreA}
        </div>

        <div className="compare-summary-item">
          User B Score: {result.scoreB}
        </div>

      </div>

    </div>
  );
}

export default CompareTable;