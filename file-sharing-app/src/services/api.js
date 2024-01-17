//making an api call to server

import axios from 'axios';

// const API_URL = 'http://localhost:4000';
const API_URL = 'https://fileshare-8j7r.onrender.com';

export const uplodeFile = async (data) => {
    try {
        const response = axios.post(`${API_URL}/upload`,data); //checking weather data is there on not
        // const mainData = (await response);
        // console.log(mainData);
        return((await response));
    } catch (error) {
        console.log("Error making an api call: ", error.message);
    }
}