import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/services/';

export const getServices = async () => {
    try {
        const response = await axios.get(API_URL);
        return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
        console.error("Error fetching services:", error);
        return [];
    }
};
import axios from 'axios';

const SUBSERVICE_URL = 'http://127.0.0.1:8000/api/subservices/';

export const getSubServices = async () => {
    try {
        const response = await axios.get(SUBSERVICE_URL);
        return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
        console.error("Error fetching sub-services:", error);
        return [];
    }
};