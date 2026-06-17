import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${
      import.meta.env.VITE_GITHUB_TOKEN
    }`,
  },
});

export const getUser = async (
  username
) => {

  const response =
    await githubApi.get(
      `/users/${username}`
    );

  return response.data;
};

export const getRepositories =
  async (username) => {

    const response =
      await githubApi.get(
        `/users/${username}/repos`
      );

    return response.data;
  };

export const getActivities =
  async (username) => {

    const response =
      await githubApi.get(
        `/users/${username}/events/public`
      );

    return response.data;
  };