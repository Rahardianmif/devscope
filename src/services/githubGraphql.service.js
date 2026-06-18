import axios from "axios";

const githubGraphql = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

export const getContributions =
  async (username) => {

    const query = `
      query($login:String!) {
        user(login:$login) {

          contributionsCollection {

            contributionCalendar {

              totalContributions

              weeks {

                contributionDays {

                  contributionCount
                  date

                }

              }

            }

          }

        }
      }
    `;

    const response =
      await githubGraphql.post(
        "",
        {
          query,
          variables: {
            login: username,
          },
        }
      );

    const calendar =
      response.data.data.user
        .contributionsCollection
        .contributionCalendar;

    return {
      totalContributions:
        calendar.totalContributions,
      weeks:
        calendar.weeks,
    };

  };

export default githubGraphql;