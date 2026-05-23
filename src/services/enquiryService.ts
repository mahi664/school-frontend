import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ADMIN_API = API_BASE_URL.replace("/public", "");

export const getAllEnquiries = async () => {
    const response = await axios.get(`${ADMIN_API}/admin/enquiries`);
    return response.data;
}

export const updateEnquiryStatus = async (enquiryId: number, status: string) => {
    const response = await axios.patch(`${ADMIN_API}/admin/enquiries/${enquiryId}/status`, { status });
    return response.data;
}