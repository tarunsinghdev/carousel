import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchImages = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    fetchImages();
  }, [url]);

  return { loading, data };
};

export default useFetch;
