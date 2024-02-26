import axios from "axios";

export interface FetchResponse <T> {
    count: number; 
    results: T[];

}

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2aafd4d70fe64daf8b574d00f19a1f5d'
    }
})