export const getLanguageStats = (
  repositories
) => {

  const counts = {};

  repositories.forEach((repo) => {

    if (!repo.language) return;

    counts[repo.language] =
      (counts[repo.language] || 0) + 1;

  });

  return Object.entries(counts).map(
    ([name, value]) => ({
      name,
      value,
    })
  );
};

export const getTopRepositories = (
  repositories
) => {

  return [...repositories]
    .sort(
      (a, b) =>
        b.stargazers_count -
        a.stargazers_count
    )
    .slice(0, 5);

};