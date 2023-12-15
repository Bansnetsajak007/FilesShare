//making an api call to server

import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const uplodeFile = async (data) => {
    try {
        const response = axios.post(`${API_URL}/upload`,data);
        // console.log(response.data);
        return((await response));
    } catch (error) {
        console.log("Error making an api call: ", error.message);
    }
}