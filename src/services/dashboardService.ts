import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ADMIN_API = API_BASE_URL.replace("/public", "");

export const getDashboardStats = async () => {
    const response = await axios.get(`${ADMIN_API}/admin/dashboard/stats`);
    return response.data;
}

export const getRecentEnquiries = async () => {
    const response = await axios.get(`${ADMIN_API}/admin/enquiries/recent-enquiries`);
    return response.data;
}