import { useEffect, useState } from "react";
/* eslint-disable */

type RequestConfig = {
  url: string;
  path?: string;
  dep?: boolean;
};

type typedFetchReturn<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  reFetch: () => void;
};

export const fetcher = async <T,>({ url, path }: RequestConfig): Promise<T> => {
  const apiResponse = await fetch(url + path);
  const apiData: T = await apiResponse.json();
  return apiData;
};

export const useTypedFetch = <T,>({
  url,
  path,
}: RequestConfig): typedFetchReturn<T> => {
  const [fetchedData, setFetchedData] = useState<T | null>(null);
  const [dep, setDep] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const reFetch = () => {
    setDep(!dep);
  };
  const typedFetch = async () => {
    try {
      setLoading(true);
      const res = await fetcher<T>({ url, path });
      setFetchedData(res);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err instanceof Error) {
        setError(err.message);
        console.log(err.message);
      }
    }
  };

  useEffect(() => {
    typedFetch();
  }, [url, path, dep]);

  return { data: fetchedData, loading, error, reFetch };
};
