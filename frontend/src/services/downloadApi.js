import axios from 'axios';


const API_URL = 'http://localhost:4000';
// const API_URL = process.env.API_URL;

export const downloadFile = async (enteredCode , code) => {
    try {
        if(code == enteredCode) {
            const response = await axios.get(`${API_URL}/download/${code}`); //checking weather data is there on not
            return response.data;
        } else {
            throw new Error("Code does not match");
        }
    } catch (error) {
        console.log("Error making an api call: ", error.message);
    }
}