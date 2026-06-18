import {
  useEffect,
  useState,
} from "react";

import {
  getContributions,
} from "../services/githubGraphql.service";

function useContributions(
  username
) {

  const [
    contributions,
    setContributions,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [summary, setSummary] =
  useState(null);

  useEffect(() => {

    if (!username) return;

    const fetchData =
      async () => {

        try {

          setLoading(true);

          const data =
            await getContributions(
              username
            );

          setContributions(
  data.weeks
);

setSummary({
  totalContributions:
    data.totalContributions,
});

        } catch (error) {

          console.error(error);

        } finally {

          setLoading(false);

        }

      };

    fetchData();

  }, [username]);

  return {
  contributions,
  summary,
  loading,
};

}

export default useContributions;