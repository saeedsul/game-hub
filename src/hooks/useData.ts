
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse <T> {
    count: number; 
    results: T[];

}
 
const useData = <T>(endpoint: string, requestConfig? : AxiosRequestConfig, deps?: any[])=>{

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setLoading] = useState<boolean>(false);
  
    useEffect(() => {
      const controller = new AbortController();
  
      setLoading(true);
  
      apiClient
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then((response) => 
        {
          setData(response.data.results);
          setLoading(false);})
        .catch((err) => {
          if(err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
  
        return ()=> controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...(deps || [])]);
  
    return {data, error, isLoading};
}

export default useData;