//making an api call to server

import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const uplodeFile = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/upload`,data); //checking weather data is there on not
        return response;
    } catch (error) {
        console.log("Error making an api call: ", error.message);
    }
}