import { useCallback, useEffect, useState } from 'react';

async function sendHTTPRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || 'Something went wrong');
  }
  return resData;
}

export default function useHTTP(url, config, initialData) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);

  const sendRequest = useCallback(
    async function sendRequest() {
      setIsLoading(true);
      try {
        const resData = await sendHTTPRequest(url, config);
        setData(resData);
      } catch (error) {
        setError(error.message || 'Something went wrong');
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === 'GET' || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  // console.log(data);

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
}
