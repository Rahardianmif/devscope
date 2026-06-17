function CompareCard({
  user,
  score,
}) {

  if (!user) return null;

  return (
    <div className="dashboard-card">

      <img
        src={user.avatar_url}
        alt={user.login}
        className="profile-avatar"
      />

      <h4>
        {user.name || user.login}
      </h4>

      <p>
        @{user.login}
      </p>

      <div className="compare-score">
        Score: {score}
      </div>

    </div>
  );
}

export default CompareCard;