import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getSchoolConfig = async () => {
    const response = await axios.get(`${API_BASE_URL}/config`);
    return response.data;
};