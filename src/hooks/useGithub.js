import { useEffect, useState } from "react";

import {
  getUser,
  getRepositories,
  getActivities,
} from "../services/github.service";

export default function useGithub(
  username
) {
  const [user, setUser] = useState(null);

  const [repositories, setRepositories] =
    useState([]);

  const [activities, setActivities] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [
          userData,
          repoData,
          activityData,
        ] = await Promise.all([
          getUser(username),
          getRepositories(username),
          getActivities(username),
        ]);

        setUser(userData);
        setRepositories(repoData);
        setActivities(activityData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return {
    user,
    repositories,
    activities,
    loading,
    error,
  };
}