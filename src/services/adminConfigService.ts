import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ADMIN_API = API_BASE_URL.replace("/public", "");

export const getSchoolConfig = async () => {
  const response = await axios.get(`${ADMIN_API}/admin/config`);
  return response.data;
};

export const updateSchoolConfig = async (payload: any) => {
  const response = await axios.put(`${ADMIN_API}/admin/config`, payload);
  return response.data;
};