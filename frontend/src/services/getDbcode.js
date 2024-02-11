import axios from "axios";
const API_URL = 'http://localhost:4000';

export const getDBcode = async (code) => {
    try{
        const response = await axios.get(`${API_URL}/getDBcode/${code}`);
        console.log(response.data);
        return response.data.code;
    } catch(err){
        console.log(err.message);
    }
}