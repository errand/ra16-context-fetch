import {useState, useEffect} from 'react'

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson ? response.json() : null;
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          setError(error)
        }
        return data
      })
      .then(data =>{
        setData(data)
      })
      .then(()=> setLoading(false))
  }, []);

  return [data, error, loading]
}
