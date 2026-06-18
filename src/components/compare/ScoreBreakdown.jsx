function ScoreBreakdown({
  scoreA,
  scoreB,
}) {

  const metrics = [
    {
      label: "Influence",
      a:
        scoreA.influenceScore,
      b:
        scoreB.influenceScore,
    },
    {
      label: "Quality",
      a:
        scoreA.repositoryQualityScore,
      b:
        scoreB.repositoryQualityScore,
    },
    {
      label: "Language",
      a:
        scoreA.languageDiversityScore,
      b:
        scoreB.languageDiversityScore,
    },
    {
      label: "Productivity",
      a:
        scoreA.productivityScore,
      b:
        scoreB.productivityScore,
    },
    {
      label: "Overall",
      a:
        scoreA.overallScore,
      b:
        scoreB.overallScore,
    },
  ];

  return (
    <div className="dashboard-card">

      <div className="section-title">
        Score Breakdown
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

          {metrics.map(
            (
              metric
            ) => (

              <tr
                key={
                  metric.label
                }
              >

                <td>
                  {
                    metric.label
                  }
                </td>

                <td>
                  {metric.a}
                </td>

                <td>
                  {metric.b}
                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>
  );
}

export default ScoreBreakdown;