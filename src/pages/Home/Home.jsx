import "./Home.css";

import SearchForm from "../../components/common/SearchForm";

function Home() {
  return (
    <main className="home-page">
      <div className="container">

        <div className="hero">

          <span className="hero-badge">
            GitHub Developer Analytics
          </span>

          <h1>
            Analyze Any GitHub Profile
          </h1>

          <p>
            Explore repositories, languages,
            activity and developer statistics
            instantly.
          </p>

          <SearchForm />

        </div>
      </div>
    </main>
  );
}

export default Home;