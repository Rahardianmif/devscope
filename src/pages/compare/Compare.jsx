import { useState } from "react";
import CompareForm from "../../components/compare/CompareForm";
import CompareCard from "../../components/compare/CompareCard";
import CompareTable from "../../components/compare/CompareTable";
import ExportComparePdfButton from "../../components/compare/ExportComparePdfButton";
import { compareStats } from "../../utils/compareStats";
import { calculateStats } from "../../utils/githubStats";
import { getUser, getRepositories, } from "../../services/github.service";
import CompareInsightCard from "../../components/compare/CompareInsightCard";
import { calculateDeveloperScore, } from "../../utils/developerScore";
import CompareRadarChart from "../../components/compare/CompareRadarChart";
import ScoreBreakdown from "../../components/compare/ScoreBreakdown";

function Compare() {

  const [userA, setUserA] =
    useState(null);

  const [userB, setUserB] =
    useState(null);

  const [statsA, setStatsA] =
    useState(null);

  const [statsB, setStatsB] =
    useState(null);

  const comparison =
    statsA && statsB
      ? compareStats(
        statsA,
        statsB
      )
      : null;

  const scoreA =
    userA && statsA
      ? calculateDeveloperScore(
        userA,
        statsA
      )
      : null;

  const scoreB =
    userB && statsB
      ? calculateDeveloperScore(
        userB,
        statsB
      )
      : null;



  const handleCompare =
    async (
      usernameA,
      usernameB
    ) => {

      try {

        const [
          profileA,
          profileB,
          reposA,
          reposB,
        ] = await Promise.all([
          getUser(usernameA),
          getUser(usernameB),
          getRepositories(
            usernameA
          ),
          getRepositories(
            usernameB
          ),
        ]);

        setUserA(profileA);
        setUserB(profileB);

        setStatsA(
          calculateStats(reposA)
        );

        setStatsB(
          calculateStats(reposB)
        );

      } catch (error) {

        console.error(error);

      }

    };

  return (
    <div className="container py-5">

      <div className="compare-header">

        <h1>
          Compare Users
        </h1>

        <p>
          Compare repositories,
          stars, forks, and
          languages between
          GitHub developers.
        </p>

      </div>

      {
        userA &&
        userB &&
        statsA &&
        statsB && (

          <div className="d-flex justify-content-end mb-4">

            <ExportComparePdfButton
              userA={userA}
              userB={userB}
              statsA={statsA}
              statsB={statsB}
            />

          </div>

        )
      }

      <CompareForm
        onCompare={
          handleCompare
        }
      />

      <div className="row g-4 mt-2">

        <div className="col-md-6">

          <CompareCard
            user={userA}
            score={
              comparison?.scoreA || 0
            }
          />

        </div>

        <div className="col-md-6">

          <CompareCard
            user={userB}
            score={
              comparison?.scoreB || 0
            }
          />

        </div>

      </div>

      <div className="mt-4">

        {
          scoreA &&
          scoreB && (

            <CompareInsightCard
              scoreA={scoreA}
              scoreB={scoreB}
              userA={userA}
              userB={userB}
            />

          )
        }

        {
          scoreA &&
          scoreB && (

            <div className="mt-4">

              <CompareRadarChart
                scoreA={scoreA}
                scoreB={scoreB}
                userA={userA}
                userB={userB}
              />

            </div>

          )
        }

        {
          scoreA &&
          scoreB && (

            <div className="mt-4">

              <ScoreBreakdown
                scoreA={scoreA}
                scoreB={scoreB}
              />

            </div>

          )
        }

        <CompareTable
          statsA={statsA}
          statsB={statsB}
        />

      </div>

    </div>
  );
}

export default Compare;