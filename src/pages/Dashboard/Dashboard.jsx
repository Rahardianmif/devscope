import {
  useState,
  lazy,
  Suspense,
} from "react";

import { useParams } from "react-router-dom";

import useGithub from "../../hooks/useGithub";
import useContributions from "../../hooks/useContributions";

import ProfileCard from "../../components/profile/ProfileCard";
import StatsSection from "../../components/stats/StatsSection";
import TopRepositories from "../../components/repositories/TopRepositories";
import ActivityFeed from "../../components/activity/ActivityFeed";
import RepositoryToolbar from "../../components/repositories/RepositoryToolbar";
import RepositoryTable from "../../components/repositories/RepositoryTable";

import DashboardHeader from "../../components/common/DashboardHeader";
import Skeleton from "../../components/common/Skeleton";
import ErrorState from "../../components/common/ErrorState";
import ThemeToggle from "../../components/common/ThemeToggle";

import ExportPdfButton from "../../components/export/ExportPdfButton";
import toast from "react-hot-toast";

import {
  calculateStats,
} from "../../utils/githubStats";

import {
  getLanguageStats,
  getTopRepositories,
} from "../../utils/repositoryAnalytics";

import {
  filterAndSortRepositories,
} from "../../utils/repositoryFilter";

const LanguageChart = lazy(() =>
  import(
    "../../components/analytics/LanguageChart"
  )
);

const ContributionHeatmap = lazy(() =>
  import(
    "../../components/analytics/ContributionHeatmap"
  )
);

function Dashboard() {

  const { username } =
    useParams();

  const {
    contributions,
    summary,
  } = useContributions(
    username
  );

  const {
    user,
    repositories,
    activities,
    loading,
    error,
  } = useGithub(
    username
  );

  const [search, setSearch] =
    useState("");

  const [sortBy, setSortBy] =
    useState("stars");

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

  const stats =
    calculateStats(
      repositories
    );

  const languageStats =
    getLanguageStats(
      repositories
    );

  const topRepositories =
    getTopRepositories(
      repositories
    );

  const filteredRepositories =
    filterAndSortRepositories(
      repositories,
      search,
      sortBy
    );

  return (

    <div className="container py-5">

      <div id="dashboard-content">

        <DashboardHeader />

        {/* Toolbar */}

        <div className="d-flex gap-2 justify-content-end mb-4">

          <ThemeToggle />

          <ExportPdfButton
            user={user}
            stats={stats}
            repositories={repositories}
            activities={activities}
          />

        </div>

        {/* Profile & KPI */}

        <div className="row g-4">

          <div className="col-lg-4">

            <ProfileCard
              user={user}
            />

          </div>

          <div className="col-lg-8">

            <StatsSection
              stats={stats}
            />

          </div>

        </div>

        {/* Analytics */}

        <div className="row g-4 mt-1">

          <div className="col-lg-6">

            <Suspense
              fallback={
                <Skeleton />
              }
            >

              <LanguageChart
                data={
                  languageStats
                }
              />

            </Suspense>

          </div>

          <div className="col-lg-6">

            <TopRepositories
              repositories={
                topRepositories
              }
            />

          </div>

        </div>

        {/* Heatmap */}

        <div className="row g-4 mt-1">

          <div className="col-12">

            <Suspense
              fallback={
                <Skeleton />
              }
            >

              <ContributionHeatmap
                contributions={
                  contributions
                }
                summary={
                  summary
                }
              />

            </Suspense>

          </div>

        </div>

        {/* Activity & Repository */}

        <div className="row g-4 mt-1">

          <div className="col-lg-4">

            <ActivityFeed
              activities={
                activities
              }
            />

          </div>

          <div className="col-lg-8">

            <div className="dashboard-card">

              <RepositoryToolbar
                search={search}
                setSearch={
                  setSearch
                }
                sortBy={sortBy}
                setSortBy={
                  setSortBy
                }
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

    </div>

  );

}

export default Dashboard;