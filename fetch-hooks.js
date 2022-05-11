/** @format */

import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (!uri)
      return fetch(url)
        .then((data) => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
  }, [url]);

  return { loading, data, error };
};

const App = () => {
  const { loading, data, error } = useFetch(`url`);

  if (loading) return <h1> loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return <div> {JSON.stringify(data, null, 2)}</div>;
};
