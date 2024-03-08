import {useState, useEffect} from 'react';
import axios from 'axios';
import {API_URL} from '../constants/env';

const useFetch = (endpoint, headers = {}) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    
    useEffect(() => {
        axios.get(`${API_URL}/${endpoint}`)
        .then((resp)=>{
            setData(resp.data.data);
        })
        .catch((err)=>{
            setError(err);
        })
        .finally(()=>{
            setLoading(false);
        });
    }
    , []);

    return {data, loading, error};
};


export default useFetch;

    

