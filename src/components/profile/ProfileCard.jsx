import { formatNumber } from "../../utils/formatNumber";

function ProfileCard({ user }) {
  return (
    <div className="profile-card">

      <img
        src={user.avatar_url}
        alt={user.login}
        className="profile-avatar"
      />
      <h2>{user.name}</h2>
      <p>@{user.login}</p>
      <p>{user.bio}</p>
      <div className="profile-meta">
        <span> Followers: {formatNumber(user.followers)} </span>
        <span> Following: {formatNumber(user.following)} </span>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="profile-link"
        >
        View GitHub Profile
      </a>  
    </div>
  );
}

export default ProfileCard;