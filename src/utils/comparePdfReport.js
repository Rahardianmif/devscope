import jsPDF from "jspdf";

import { compareStats } from "./compareStats";

import {
  calculateDeveloperScore,
  getStrengthMetric,
} from "./developerScore";

export const generateComparePdf = ({
  userA,
  userB,
  statsA,
  statsB,
}) => {

  const pdf = new jsPDF();

  const scoreA =
    calculateDeveloperScore(
      userA,
      statsA
    );

  const scoreB =
    calculateDeveloperScore(
      userB,
      statsB
    );

  const strengthA =
    getStrengthMetric(
      scoreA
    );

  const strengthB =
    getStrengthMetric(
      scoreB
    );

  const result =
    compareStats(
      statsA,
      statsB
    );

  const winner =
    scoreA.overallScore >
    scoreB.overallScore
      ? (
          userA?.name ||
          userA?.login
        )
      : (
          userB?.name ||
          userB?.login
        );

  let y = 20;

  // =====================================
  // HEADER
  // =====================================

  pdf.setFillColor(
    37,
    99,
    235
  );

  pdf.rect(
    0,
    0,
    210,
    35,
    "F"
  );

  pdf.setTextColor(
    255,
    255,
    255
  );

  pdf.setFontSize(22);

  pdf.text(
    "DevScope Compare Report",
    20,
    18
  );

  pdf.setFontSize(10);

  pdf.text(
    `Generated ${new Date().toLocaleDateString()}`,
    20,
    26
  );

  pdf.setTextColor(
    0,
    0,
    0
  );

  y = 50;

  // =====================================
  // EXECUTIVE SUMMARY
  // =====================================

  pdf.setFillColor(
    248,
    250,
    252
  );

  pdf.roundedRect(
    15,
    y,
    180,
    30,
    4,
    4,
    "F"
  );

  pdf.setFontSize(14);

  pdf.text(
    "Executive Summary",
    20,
    y + 10
  );

  pdf.setFontSize(12);

  pdf.text(
    `Winner: ${winner}`,
    20,
    y + 20
  );

  pdf.text(
    `${scoreA.overallScore} vs ${scoreB.overallScore}`,
    120,
    y + 20
  );

  y += 45;

  // =====================================
  // DEVELOPER CARDS
  // =====================================

  pdf.setFillColor(
    255,
    255,
    255
  );

  pdf.roundedRect(
    15,
    y,
    85,
    45,
    3,
    3
  );

  pdf.roundedRect(
    110,
    y,
    85,
    45,
    3,
    3
  );

  pdf.setFontSize(13);

  pdf.text(
    "Developer A",
    20,
    y + 10
  );

  pdf.text(
    "Developer B",
    115,
    y + 10
  );

  pdf.setFontSize(10);

  pdf.text(
    userA?.name ||
      "-",
    20,
    y + 18
  );

  pdf.text(
    userB?.name ||
      "-",
    115,
    y + 18
  );

  pdf.text(
    `@${userA?.login}`,
    20,
    y + 25
  );

  pdf.text(
    `@${userB?.login}`,
    115,
    y + 25
  );

  pdf.text(
    `Followers: ${userA?.followers}`,
    20,
    y + 32
  );

  pdf.text(
    `Followers: ${userB?.followers}`,
    115,
    y + 32
  );

  pdf.text(
    `Score: ${scoreA.overallScore}`,
    20,
    y + 39
  );

  pdf.text(
    `Score: ${scoreB.overallScore}`,
    115,
    y + 39
  );

  y += 60;

  // =====================================
  // ADVANCED ANALYTICS
  // =====================================

  pdf.setFontSize(15);

  pdf.text(
    "Advanced Analytics",
    20,
    y
  );

  y += 10;

  const analytics = [
    [
      "Influence",
      scoreA.influenceScore,
      scoreB.influenceScore,
    ],
    [
      "Repository Quality",
      scoreA.repositoryQualityScore,
      scoreB.repositoryQualityScore,
    ],
    [
      "Language Diversity",
      scoreA.languageDiversityScore,
      scoreB.languageDiversityScore,
    ],
    [
      "Productivity",
      scoreA.productivityScore,
      scoreB.productivityScore,
    ],
  ];

  pdf.setFontSize(10);

  pdf.text(
    "Metric",
    20,
    y
  );

  pdf.text(
    "User A",
    110,
    y
  );

  pdf.text(
    "User B",
    150,
    y
  );

  y += 8;

  analytics.forEach(
    (row) => {

      pdf.text(
        row[0],
        20,
        y
      );

      pdf.text(
        String(row[1]),
        110,
        y
      );

      pdf.text(
        String(row[2]),
        150,
        y
      );

      y += 8;

    }
  );

  y += 10;

  // =====================================
  // STRENGTH ANALYSIS
  // =====================================

  pdf.setFontSize(15);

  pdf.text(
    "Strength Analysis",
    20,
    y
  );

  y += 10;

  pdf.setFontSize(11);

  pdf.text(
    `User A Best Area: ${strengthA.name}`,
    20,
    y
  );

  y += 8;

  pdf.text(
    `User B Best Area: ${strengthB.name}`,
    20,
    y
  );

  y += 15;

  // =====================================
  // GITHUB METRICS
  // =====================================

  pdf.setFontSize(15);

  pdf.text(
    "GitHub Metrics",
    20,
    y
  );

  y += 10;

  const metrics = [
    [
      "Repositories",
      statsA.totalRepos,
      statsB.totalRepos,
    ],
    [
      "Stars",
      statsA.totalStars,
      statsB.totalStars,
    ],
    [
      "Forks",
      statsA.totalForks,
      statsB.totalForks,
    ],
    [
      "Languages",
      statsA.totalLanguages,
      statsB.totalLanguages,
    ],
  ];

  pdf.setFontSize(10);

  metrics.forEach(
    (row) => {

      pdf.text(
        row[0],
        20,
        y
      );

      pdf.text(
        String(row[1]),
        110,
        y
      );

      pdf.text(
        String(row[2]),
        150,
        y
      );

      y += 8;

    }
  );

  y += 10;

  // =====================================
  // FINAL VERDICT
  // =====================================

  pdf.setFillColor(
    241,
    245,
    249
  );

  pdf.roundedRect(
    15,
    y,
    180,
    30,
    4,
    4,
    "F"
  );

  pdf.setFontSize(15);

  pdf.text(
    "Final Verdict",
    20,
    y + 10
  );

  pdf.setFontSize(11);

  pdf.text(
    `Winner: ${winner}`,
    20,
    y + 20
  );

  pdf.text(
    `Overall Score: ${scoreA.overallScore} vs ${scoreB.overallScore}`,
    80,
    y + 20
  );

  // =====================================
  // SAVE
  // =====================================

  pdf.save(
    `compare-${userA?.login}-vs-${userB?.login}.pdf`
  );

};