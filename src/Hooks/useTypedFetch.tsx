import { useEffect, useState } from "react";

type RequestConfig = {
  url: string;
  path?: string;
};

type typedFetchReturn<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
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
    })();
  }, [url, path]);

  return { data: fetchedData, loading, error };
};
