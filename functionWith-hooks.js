/** @format */

import { useState, useEffect } from "react";
import axios from "axios";

export const useFunction = (getFunction) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getFunction();
      setState(result);
    })();
  }, [getFunction]);

  return state;
};

const serverResourse = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const localStorage = (key) => () => {
  return localStorage.getItem(key);
};

const App = () => {
  const value = useFunction(serverResourse("/api/data"));

  const valueKey = useFunction(localStorage("key"));
};
