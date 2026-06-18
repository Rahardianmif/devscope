import jsPDF from "jspdf";

export const generatePdfReport = ({
  user,
  stats,
  repositories,
  activities,
}) => {

  const pdf = new jsPDF();

  let y = 20;

  const pageHeight =
    pdf.internal.pageSize.height;

  const ensurePageSpace = (
    required = 20
  ) => {

    if (y + required > pageHeight - 20) {

      pdf.addPage();

      y = 20;

    }

  };

  // =====================================================
  // HEADER
  // =====================================================

  pdf.setFontSize(22);

  pdf.text(
    "DevScope Analytics Report",
    20,
    y
  );

  y += 10;

  pdf.setFontSize(10);

  pdf.text(
    `Generated: ${new Date().toLocaleString()}`,
    20,
    y
  );

  y += 20;

  // =====================================================
  // DEVELOPER PROFILE
  // =====================================================

  pdf.setFontSize(16);

  pdf.text(
    "Developer Profile",
    20,
    y
  );

  y += 10;

  pdf.setFontSize(12);

  const profileRows = [
    ["Name", user?.name || "-"],
    ["Username", user?.login || "-"],
    ["Company", user?.company || "-"],
    ["Location", user?.location || "-"],
    ["Blog", user?.blog || "-"],
    ["Followers", String(user?.followers || 0)],
    ["Following", String(user?.following || 0)],
    ["Public Repositories", String(user?.public_repos || 0)],
    ["GitHub Profile", user?.html_url || "-"],
  ];

  profileRows.forEach(([label, value]) => {

    ensurePageSpace();

    pdf.text(
      `${label}: ${value}`,
      20,
      y
    );

    y += 8;

  });

  y += 10;

  // =====================================================
  // STATISTICS
  // =====================================================

  ensurePageSpace(50);

  pdf.setFontSize(16);

  pdf.text(
    "GitHub Statistics",
    20,
    y
  );

  y += 10;

  pdf.setFontSize(12);

  const statRows = [
    ["Repositories", stats.totalRepos],
    ["Stars", stats.totalStars],
    ["Forks", stats.totalForks],
    ["Languages", stats.totalLanguages],
  ];

  statRows.forEach(([label, value]) => {

    pdf.text(
      `${label}: ${value}`,
      20,
      y
    );

    y += 8;

  });

  y += 10;

  // =====================================================
  // LANGUAGE BREAKDOWN
  // =====================================================

  ensurePageSpace(50);

  pdf.setFontSize(16);

  pdf.text(
    "Language Breakdown",
    20,
    y
  );

  y += 10;

  pdf.setFontSize(12);

  const languageStats = {};

  repositories.forEach((repo) => {

    if (!repo.language) return;

    languageStats[repo.language] =
      (languageStats[repo.language] || 0) + 1;

  });

  const totalLanguageRepos =
    Object.values(languageStats)
      .reduce(
        (acc, value) =>
          acc + value,
        0
      );

  Object.entries(languageStats)
    .sort((a, b) => b[1] - a[1])
    .forEach(([language, count]) => {

      ensurePageSpace();

      const percentage =
        (
          (count /
            totalLanguageRepos) *
          100
        ).toFixed(1);

      pdf.text(
        `${language}: ${count} repos (${percentage}%)`,
        20,
        y
      );

      y += 8;

    });

  y += 10;

  // =====================================================
  // TOP REPOSITORIES
  // =====================================================

  ensurePageSpace(80);

  pdf.setFontSize(16);

  pdf.text(
    "Top Repositories",
    20,
    y
  );

  y += 10;

  pdf.setFontSize(12);

  const topRepos =
    [...repositories]
      .sort(
        (a, b) =>
          b.stargazers_count -
          a.stargazers_count
      )
      .slice(0, 10);

  topRepos.forEach(
    (repo, index) => {

      ensurePageSpace();

      pdf.text(
        `${index + 1}. ${repo.name}`,
        20,
        y
      );

      y += 6;

      pdf.text(
        `Stars: ${repo.stargazers_count} | Forks: ${repo.forks_count} | Language: ${repo.language || "-"}`,
        25,
        y
      );

      y += 8;

    }
  );

  y += 10;

  // =====================================================
  // REPOSITORY SUMMARY
  // =====================================================

  ensurePageSpace(120);

  pdf.setFontSize(16);

  pdf.text(
    "Repository Summary",
    20,
    y
  );

  y += 10;

  pdf.setFontSize(10);

  repositories
    .slice(0, 20)
    .forEach((repo) => {

      ensurePageSpace();

      pdf.text(
        `${repo.name} | ${repo.language || "-"} | ★ ${repo.stargazers_count}`,
        20,
        y
      );

      y += 6;

    });

  y += 10;

  // =====================================================
  // RECENT ACTIVITY
  // =====================================================

  if (activities?.length) {

    ensurePageSpace(80);

    pdf.setFontSize(16);

    pdf.text(
      "Recent Activity",
      20,
      y
    );

    y += 10;

    pdf.setFontSize(10);

    activities
      .slice(0, 10)
      .forEach((activity) => {

        ensurePageSpace();

        pdf.text(
          `${activity.type} - ${activity.repo?.name || "-"}`,
          20,
          y
        );

        y += 6;

      });

  }

  y += 10;

  // =====================================================
  // FOOTER
  // =====================================================

  ensurePageSpace(20);

  pdf.setFontSize(10);

  pdf.text(
    "Generated by DevScope",
    20,
    y
  );

  pdf.save(
    `devscope-${user?.login || "report"}.pdf`
  );

};