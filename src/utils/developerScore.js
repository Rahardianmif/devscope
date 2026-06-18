export const calculateDeveloperScore = (
  user,
  stats
) => {

  const influenceScore =
    Math.min(
      100,
      (
        (
          user.followers * 2 +
          stats.totalStars +
          stats.totalForks
        ) / 10
      )
    );

  const repositoryQualityScore =
    stats.totalRepos > 0
      ? Math.min(
          100,
          (
            (
              stats.totalStars +
              stats.totalForks
            ) /
            stats.totalRepos
          ) * 5
        )
      : 0;

  const languageDiversityScore =
    stats.totalRepos > 0
      ? Math.min(
          100,
          (
            stats.totalLanguages /
            stats.totalRepos
          ) * 100
        )
      : 0;

  const productivityScore =
    Math.min(
      100,
      (
        stats.totalRepos * 2 +
        stats.totalStars
      ) / 5
    );

  const overallScore =
    (
      influenceScore +
      repositoryQualityScore +
      languageDiversityScore +
      productivityScore
    ) / 4;

  return {

    influenceScore:
      Math.round(
        influenceScore
      ),

    repositoryQualityScore:
      Math.round(
        repositoryQualityScore
      ),

    languageDiversityScore:
      Math.round(
        languageDiversityScore
      ),

    productivityScore:
      Math.round(
        productivityScore
      ),

    overallScore:
      Math.round(
        overallScore
      ),

  };

};

export const getStrengthMetric =
  (score) => {

    const metrics = [
      {
        name: "Influence",
        value:
          score.influenceScore,
      },
      {
        name:
          "Repository Quality",
        value:
          score.repositoryQualityScore,
      },
      {
        name:
          "Language Diversity",
        value:
          score.languageDiversityScore,
      },
      {
        name:
          "Productivity",
        value:
          score.productivityScore,
      },
    ];

    return metrics.sort(
      (a, b) =>
        b.value - a.value
    )[0];
  };