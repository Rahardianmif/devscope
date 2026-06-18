
import {
    getCurrentStreak,
    getLongestStreak,
    getBestDay,
    getAverageContribution,
    getMostActiveMonth,
    getConsistencyScore,
} from "../../utils/contributionStats";

function ContributionHeatmap({
    contributions,
    summary,
}) {

    if (
        !contributions ||
        contributions.length === 0
    ) {
        return null;
    }

    const currentStreak =
        getCurrentStreak(
            contributions
        );

    const longestStreak =
        getLongestStreak(
            contributions
        );

    const bestDay =
        getBestDay(
            contributions
        );
    const averageContribution =
        getAverageContribution(
            contributions
        );

    const mostActiveMonth =
        getMostActiveMonth(
            contributions
        );

    const consistencyScore =
        getConsistencyScore(
            contributions
        );

    const getLevel = (
        count
    ) => {

        if (count === 0)
            return "level-0";

        if (count <= 2)
            return "level-1";

        if (count <= 5)
            return "level-2";

        if (count <= 10)
            return "level-3";

        return "level-4";

    };

    return (
        <div className="dashboard-card">

            <div className="section-title">
                Contribution Activity
            </div>

            <div className="contribution-summary">

                <div className="summary-item">

                    <div className="summary-value">
                        {
                            summary?.totalContributions || 0
                        }
                    </div>

                    <div className="summary-label">
                        Contributions
                    </div>

                </div>

                <div className="summary-item">

                    <div className="summary-value">
                        {currentStreak}
                    </div>

                    <div className="summary-label">
                        Current Streak
                    </div>

                </div>

                <div className="summary-item">

                    <div className="summary-value">
                        {longestStreak}
                    </div>

                    <div className="summary-label">
                        Longest Streak
                    </div>

                </div>

                <div className="summary-item">

                    <div className="summary-value">
                        {
                            bestDay?.contributionCount || 0
                        }
                    </div>

                    <div className="summary-label">
                        Best Day
                    </div>

                </div>

            </div>

            <div className="heatmap">

                {contributions.map(
                    (week, weekIndex) => (

                        <div
                            key={weekIndex}
                            className="heatmap-week"
                        >

                            {week.contributionDays.map(
                                (day) => (

                                    <div
                                        key={day.date}
                                        className={`heatmap-cell ${getLevel(
                                            day.contributionCount
                                        )}`}
                                        title={`${day.date} • ${day.contributionCount} contributions`}
                                    />

                                )
                            )}

                        </div>

                    )
                )}

            </div>

            <div className="heatmap-legend">
                <span>Less</span>
                <div className="level-0" />
                <div className="level-1" />
                <div className="level-2" />
                <div className="level-3" />
                <div className="level-4" />
                <span>More</span>
            </div>
            <div className="insight-grid">

                <div className="insight-card">

                    <div className="insight-value">
                        {mostActiveMonth?.[0]}
                    </div>

                    <div className="insight-label">
                        Most Active Month
                    </div>

                </div>

                <div className="insight-card">

                    <div className="insight-value">
                        {averageContribution}
                    </div>

                    <div className="insight-label">
                        Avg / Day
                    </div>

                </div>

                <div className="insight-card">

                    <div className="insight-value">
                        {bestDay?.contributionCount}
                    </div>

                    <div className="insight-label">
                        Best Day
                    </div>

                </div>

                <div className="insight-card">

                    <div className="insight-value">
                        {consistencyScore}%
                    </div>

                    <div className="insight-label">
                        Consistency
                    </div>

                </div>

            </div>

        </div>
    );
}

export default ContributionHeatmap;