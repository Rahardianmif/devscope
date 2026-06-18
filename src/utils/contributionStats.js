export const getCurrentStreak =
  (weeks) => {

    const days =
      weeks.flatMap(
        (week) =>
          week.contributionDays
      );

    let streak = 0;

    for (
      let i =
        days.length - 1;
      i >= 0;
      i--
    ) {

      if (
        days[i]
          .contributionCount > 0
      ) {

        streak++;

      } else {

        break;

      }

    }

    return streak;

  };

export const getLongestStreak =
  (weeks) => {

    const days =
      weeks.flatMap(
        (week) =>
          week.contributionDays
      );

    let current = 0;
    let longest = 0;

    days.forEach((day) => {

      if (
        day.contributionCount > 0
      ) {

        current++;

        longest =
          Math.max(
            longest,
            current
          );

      } else {

        current = 0;

      }

    });

    return longest;

  };

export const getBestDay =
  (weeks) => {

    const days =
      weeks.flatMap(
        (week) =>
          week.contributionDays
      );

    return days.reduce(
      (best, current) =>
        current
          .contributionCount >
        best.contributionCount
          ? current
          : best
    );

  };

  export const getAverageContribution =
  (weeks) => {

    const days =
      weeks.flatMap(
        (week) =>
          week.contributionDays
      );

    const total =
      days.reduce(
        (sum, day) =>
          sum +
          day.contributionCount,
        0
      );

    return (
      total /
      days.length
    ).toFixed(1);

  };

  export const getMostActiveMonth =
  (weeks) => {

    const days =
      weeks.flatMap(
        (week) =>
          week.contributionDays
      );

    const months = {};

    days.forEach((day) => {

      const month =
        new Date(
          day.date
        ).toLocaleString(
          "en-US",
          {
            month: "long",
          }
        );

      months[month] =
        (months[month] || 0) +
        day.contributionCount;

    });

    return Object.entries(
      months
    ).sort(
      (a, b) =>
        b[1] - a[1]
    )[0];

  };

  export const getConsistencyScore =
  (weeks) => {

    const days =
      weeks.flatMap(
        (week) =>
          week.contributionDays
      );

    const activeDays =
      days.filter(
        (day) =>
          day.contributionCount > 0
      ).length;

    return (
      (
        activeDays /
        days.length
      ) *
      100
    ).toFixed(0);

  };

  