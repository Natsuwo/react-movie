import { useEffect, useState } from "react";

const useFetch = (url, hook, single = false) => {
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (single) {
        setData(data);
      } else {
        setData(data.results);
        setTotalPage(data.total_pages);
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getData();
  }, [url, ...hook]);
  return { data, totalPage };
};

export default useFetch;
