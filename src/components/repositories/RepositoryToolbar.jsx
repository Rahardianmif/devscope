function RepositoryToolbar({
  search,
  setSearch,
  sortBy,
  setSortBy,
}) {

  return (
    <div className="repo-toolbar">

      <input
        type="text"
        placeholder="Search repository..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        className="repo-search"
      />

      <select
        value={sortBy}
        onChange={(e) =>
          setSortBy(
            e.target.value
          )
        }
        className="repo-sort"
      >

        <option value="stars">
          Stars
        </option>

        <option value="forks">
          Forks
        </option>

        <option value="updated">
          Updated
        </option>

        <option value="name">
          Name
        </option>

      </select>

    </div>
  );
}

export default RepositoryToolbar;