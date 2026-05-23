import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ADMIN_API = API_BASE_URL.replace("/public", "");

export const createGallery = async (formData: FormData) => {
    const response = await axios.post(`${ADMIN_API}/admin/gallery`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
}

export const getGallery = async () => {
    const response = await axios.get(`${ADMIN_API}/admin/gallery`);
    return response.data;
}

export const deleteGallery = async (id: number) => {
    const response = await axios.delete(`${ADMIN_API}/admin/gallery/${id}`);
    return response.data;
}

export const toggleGalleryPublish = async (id: number) => {
    const response = await axios.patch(`${ADMIN_API}/admin/gallery/${id}/toggle-publish`);
    return response.data;
}