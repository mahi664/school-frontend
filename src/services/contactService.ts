import axios from "axios";
import type { ContactEnquiryRequest } from "../types/contact";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const submitEnquiry = async (enquiryData: ContactEnquiryRequest) => {
    const response = await axios.post(`${API_BASE_URL}/enquiries`, enquiryData);
    return response.data;
};