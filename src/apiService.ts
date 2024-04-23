import axios from 'axios';

// Create a custom agent to allow self-signed certificates


const BASE_URL = import.meta.env.VITE_BASE_URL;
// const BASE_URL = "https://reqres.in/api";



const fetchData = async () => {
    try {
        // const response = await axios.get(`${BASE_URL}/users?page=2`);
        const response = await axios.get(`${BASE_URL}/products/2801223`);
        return { hasError: false, ...response};
    } catch (error) {
        console.error("Error from fetchData ",error);
        return {data:[], hasError: true, message: error.message, status: error.status,code: error.code ,error:error};
    }
};



export { fetchData }; 

