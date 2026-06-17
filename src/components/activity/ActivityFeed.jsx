import EmptyState
from "../common/EmptyState";

function ActivityFeed({ activities }) {

  const supportedEvents = [
    "PushEvent",
    "CreateEvent",
    "ForkEvent",
    "WatchEvent",
  ];

  const filteredActivities =
    activities.filter((activity) =>
      supportedEvents.includes(
        activity.type
      )
    );

    if (!filteredActivities.length) {

  return (
    <EmptyState
      title="No Activity"
      description="No recent activity available."
    />
  );

}

  return (
    <div className="dashboard-card">

      <div className="section-title">
        Recent Activity
      </div>

      {filteredActivities
        .slice(0, 10)
        .map((activity) => (

          <div
            key={activity.id}
            className="activity-item"
          >

            <div className="activity-type">
              {activity.type}
            </div>

            <div className="activity-repo">
              {activity.repo?.name}
            </div>

          </div>

      ))}

    </div>
  );
}

export default ActivityFeed;