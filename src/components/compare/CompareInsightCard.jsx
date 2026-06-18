function CompareInsightCard({
  scoreA,
  scoreB,
  userA,
  userB,
}) {

  const winner =
    scoreA.overallScore >
    scoreB.overallScore
      ? userA
      : userB;

  return (

    <div className="dashboard-card">

      <div className="compare-insight-title">
        Developer Insight
      </div>

      <div className="compare-winner">

        🏆

        {
          winner?.name ||
          winner?.login
        }

      </div>

      <div className="compare-score-grid">

        <div>

          <div className="score-value">
            {
              scoreA.overallScore
            }
          </div>

          <div>
            User A Score
          </div>

        </div>

        <div>

          <div className="score-value">
            {
              scoreB.overallScore
            }
          </div>

          <div>
            User B Score
          </div>

        </div>

      </div>

    </div>

  );

}

export default CompareInsightCard;