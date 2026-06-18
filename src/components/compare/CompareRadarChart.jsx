import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

function CompareRadarChart({
  scoreA,
  scoreB,
  userA,
  userB,
}) {

  const data = [
    {
      metric: "Influence",
      userA:
        scoreA.influenceScore,
      userB:
        scoreB.influenceScore,
    },
    {
      metric: "Quality",
      userA:
        scoreA.repositoryQualityScore,
      userB:
        scoreB.repositoryQualityScore,
    },
    {
      metric: "Language",
      userA:
        scoreA.languageDiversityScore,
      userB:
        scoreB.languageDiversityScore,
    },
    {
      metric: "Productivity",
      userA:
        scoreA.productivityScore,
      userB:
        scoreB.productivityScore,
    },
    {
      metric: "Overall",
      userA:
        scoreA.overallScore,
      userB:
        scoreB.overallScore,
    },
  ];

  return (
    <div className="dashboard-card">

      <div className="section-title">
        Developer Radar Comparison
      </div>

      <div
        style={{
          width: "100%",
          height: 400,
        }}
      >

        <ResponsiveContainer>

          <RadarChart
            data={data}
          >

            <PolarGrid />

            <PolarAngleAxis
              dataKey="metric"
            />

            <PolarRadiusAxis
              domain={[0, 100]}
            />

            <Radar
              name={
                userA?.login
              }
              dataKey="userA"
              stroke="#2563eb"
              fill="#2563eb"
              fillOpacity={
                0.25
              }
            />

            <Radar
              name={
                userB?.login
              }
              dataKey="userB"
              stroke="#f97316"
              fill="#f97316"
              fillOpacity={
                0.25
              }
            />

            <Legend />

          </RadarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default CompareRadarChart;