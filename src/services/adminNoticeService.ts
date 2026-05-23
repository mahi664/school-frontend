import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ADMIN_API = API_BASE_URL.replace("/public", "");

export const getAllNotices = async () => {
  const response = await axios.get(`${ADMIN_API}/admin/notices`);
  return response.data;
};

export const createNotice = async (payload: any) => {
  const response = await axios.post(`${ADMIN_API}/admin/notices`, payload);
  return response.data;
};

export const deleteNotice = async (id: number) => {
  const response = await axios.delete(`${ADMIN_API}/admin/notices/${id}`);
  return response.data;
};

export const togglePublish = async (id: number) => {
  const response = await axios.patch(`${ADMIN_API}/admin/notices/${id}/publish`);
  return response.data;
};

export const toggleImportant = async (id: number) => {
  const response = await axios.patch(`${ADMIN_API}/admin/notices/${id}/important`);
  return response.data;
};

export const updateNotice = async (id: number, noticeData: any) => {
  const response = await axios.put(`${ADMIN_API}/admin/notices/${id}`, noticeData);
  return response.data;
};