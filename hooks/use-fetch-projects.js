import { useState, useEffect } from 'react';

export const useFetchProjects = (projectKeys) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

    const fetchProjects = async () => {
      try {
        const responses = await Promise.all(
          projectKeys.map((key) =>
            fetch(`${baseUrl}/${key}`).then((res) => res.json())
          )
        );
        const newProjectData = responses.reduce((accumulator, result, index) => {
          accumulator[projectKeys[index]] = result[0] || undefined;
          return accumulator;
        }, {});
        setData(newProjectData);
      } catch (error_) {
        setError(error_);
      }
    };

    fetchProjects();
  }, [projectKeys]);

  return { data, error };
};
