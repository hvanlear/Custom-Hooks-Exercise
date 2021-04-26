import { useState, useEffect } from "react";
import uuid from "uuid";
import axios from "axios";

const useFetch = (url) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus("fetching");
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setStatus("fetched");
    };

    fetchData();
  }, [url]);
  return { status, data };
};

export default useFetch;
