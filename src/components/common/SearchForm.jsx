import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    navigate(`/dashboard/${username}`);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="search-input"
      />

      <button type="submit" className="search-btn">
        Analyze
      </button>
    </form>
  );
}

export default SearchForm;