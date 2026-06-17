export const filterAndSortRepositories = (
  repositories,
  search,
  sortBy
) => {

  let result =
    [...repositories];

  if (search) {

    result = result.filter(
      (repo) =>
        repo.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  }

  switch (sortBy) {

    case "stars":

      result.sort(
        (a, b) =>
          b.stargazers_count -
          a.stargazers_count
      );

      break;

    case "forks":

      result.sort(
        (a, b) =>
          b.forks_count -
          a.forks_count
      );

      break;

    case "updated":

      result.sort(
        (a, b) =>
          new Date(
            b.updated_at
          ) -
          new Date(
            a.updated_at
          )
      );

      break;

    case "name":

      result.sort((a, b) =>
        a.name.localeCompare(
          b.name
        )
      );

      break;

    default:
      break;
  }

  return result;
};