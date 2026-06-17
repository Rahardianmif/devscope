import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function DashboardHeader() {

  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!username.trim()) return;

    navigate(
      `/dashboard/${username}`
    );

  };

  return (
    <header className="dashboard-header">

      <div className="dashboard-logo">
        DevScope
      </div>

      <form
        onSubmit={handleSubmit}
        className="dashboard-search"
      >

        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) =>
            setUsername(
              e.target.value
            )
          }
        />

        <button type="submit">
          Search
        </button>

      </form>
        <Link
        to="/compare"
        className="compare-link"
        >
        Compare Users
        </Link>
    </header>
  );
}

export default DashboardHeader;