export const calculateStats = (repositories) => {
  const totalRepos = repositories.length;

  const totalStars = repositories.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  const totalForks = repositories.reduce(
    (sum, repo) => sum + repo.forks_count,
    0
  );

  const languages = new Set();

  repositories.forEach((repo) => {
    if (repo.language) {
      languages.add(repo.language);
    }
  });

  return {
    totalRepos,
    totalStars,
    totalForks,
    totalLanguages: languages.size,
  };
};