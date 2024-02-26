import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse <T> {
    count: number; 
    results: T[];
}

const axiosInstance =  axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2aafd4d70fe64daf8b574d00f19a1f5d'
    }
});

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){this.endpoint = endpoint}

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
        .then(res=> res.data);    
    }
}

export default APIClient;