import {useState, useEffect} from 'react'

export default function useJsonFetch(url, opts = {}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, opts)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(()=> setLoading(false))
  }, [url]);

  return [data, error, isLoading]
}
