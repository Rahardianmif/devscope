import { useState } from "react";
import { useParams } from "react-router-dom";

import useGithub from "../../hooks/useGithub";

import ProfileCard from "../../components/profile/ProfileCard";
import StatsSection from "../../components/stats/StatsSection";

import LanguageChart from "../../components/analytics/LanguageChart";

import TopRepositories from "../../components/repositories/TopRepositories";

import ActivityFeed from "../../components/activity/ActivityFeed";
import RepositoryToolbar from "../../components/repositories/RepositoryToolbar";
import RepositoryTable from "../../components/repositories/RepositoryTable";

import DashboardHeader from "../../components/common/DashboardHeader";
import Skeleton from "../../components/common/Skeleton";
import ErrorState from "../../components/common/ErrorState";

import { calculateStats } from "../../utils/githubStats";

import {
  getLanguageStats,
  getTopRepositories,
} from "../../utils/repositoryAnalytics";

import { filterAndSortRepositories } from "../../utils/repositoryFilter";

function Dashboard() {
  const { username } = useParams();

  const {
    user,
    repositories,
    activities,
    loading,
    error,
  } = useGithub(username);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("stars");

  if (loading) {
    return (
      <div className="container py-5">
        <Skeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <ErrorState />
      </div>
    );
  }

  const stats = calculateStats(repositories);

  const languageStats =
    getLanguageStats(repositories);

  const topRepositories =
    getTopRepositories(repositories);

  const filteredRepositories =
    filterAndSortRepositories(
      repositories,
      search,
      sortBy
    );

  return (
    <div className="container py-5">

      <DashboardHeader />

      {/* Profile & KPI */}

      <div className="row g-4">

        <div className="col-lg-4">
          <ProfileCard user={user} />
        </div>

        <div className="col-lg-8">
          <StatsSection stats={stats} />
        </div>

      </div>

      {/* Analytics */}

      <div className="row g-4 mt-1">

        <div className="col-lg-6">
          <LanguageChart data={languageStats} />
        </div>

        <div className="col-lg-6">
          <TopRepositories
            repositories={topRepositories}
          />
        </div>

      </div>

      {/* Activity & Repository */}

      <div className="row g-4 mt-1">

        <div className="col-lg-4">

          <ActivityFeed
            activities={activities}
          />

        </div>

        <div className="col-lg-8">

          <div className="dashboard-card">

            <RepositoryToolbar
              search={search}
              setSearch={setSearch}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />

            <RepositoryTable
              repositories={
                filteredRepositories
              }
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;