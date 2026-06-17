import { useState } from "react";

import CompareForm from "../../components/compare/CompareForm";
import CompareCard from "../../components/compare/CompareCard";
import CompareTable from "../../components/compare/CompareTable";
import { compareStats, } from "../../utils/compareStats";

import {
  getUser,
  getRepositories,
} from "../../services/github.service";

import {
  calculateStats,
} from "../../utils/githubStats";

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

  const handleCompare =
    async (
      usernameA,
      usernameB
    ) => {

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
    };

  return (
    <div className="container py-5">

      <h1 className="mb-4">
        Compare Users
      </h1>

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

        <CompareTable
          statsA={statsA}
          statsB={statsB}
        />

      </div>

    </div>
  );
}

export default Compare;