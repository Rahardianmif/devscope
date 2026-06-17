import StatCard from "./StatCard";

function StatsSection({ stats }) {
  return (
    <div className="row g-4">

      <div className="col-12 col-md-6 col-xl-3">
        <StatCard
          title="Repositories"
          value={stats.totalRepos}
        />
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        <StatCard
          title="Stars"
          value={stats.totalStars}
        />
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        <StatCard
          title="Forks"
          value={stats.totalForks}
        />
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        <StatCard
          title="Languages"
          value={stats.totalLanguages}
        />
      </div>

    </div>
  );
}

export default StatsSection;