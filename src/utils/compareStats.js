export const compareStats = (statsA, statsB) => {
  let scoreA = 0;
  let scoreB = 0;

  const metrics = {
    repositories:
      statsA.totalRepos > statsB.totalRepos
        ? "A"
        : statsA.totalRepos < statsB.totalRepos
        ? "B"
        : "DRAW",

    stars:
      statsA.totalStars > statsB.totalStars
        ? "A"
        : statsA.totalStars < statsB.totalStars
        ? "B"
        : "DRAW",

    forks:
      statsA.totalForks > statsB.totalForks
        ? "A"
        : statsA.totalForks < statsB.totalForks
        ? "B"
        : "DRAW",

    languages:
      statsA.totalLanguages > statsB.totalLanguages
        ? "A"
        : statsA.totalLanguages < statsB.totalLanguages
        ? "B"
        : "DRAW",
  };

  Object.values(metrics).forEach((winner) => {
    if (winner === "A") scoreA++;
    if (winner === "B") scoreB++;
  });

  return {
    metrics,
    scoreA,
    scoreB,
    winner:
      scoreA > scoreB
        ? "A"
        : scoreB > scoreA
        ? "B"
        : "DRAW",
  };
};