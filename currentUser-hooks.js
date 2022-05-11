/** @format */

import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrentUser = (url) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(url);
      setUser(response.data);
    })();
  }, [url]);

  return user;
};

const App = () => {
  const user = useCurrentUser();
};
