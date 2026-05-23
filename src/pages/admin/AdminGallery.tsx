import { useState, useEffect } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { createGallery, getGallery, deleteGallery, toggleGalleryPublish } from "../../services/adminGalleryService";
import toast from "react-hot-toast";

const AdminGallery = () => {
    const [formData, setFormData] = useState(
        {
            title: "",
            category: "EVENT",
            featured: false,
            displayOrder: 1,
            published: true,
            image: null as File | null,
        }
    );
    const [successMessage, setSuccessMessage] = useState<string | null>("");
    const [galleryItems, setGalleryItems] = useState<any[]>([]);

    const fetchGallery = async () => {
        try {
            const response = await getGallery();
            setGalleryItems(response.data);
        } catch {
            toast.error("Error fetching gallery items");
        }
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    const handleSubmit = async() => {
        try {
            const payload = new FormData();
            payload.append("title", formData.title);
            payload.append("category", formData.category);
            payload.append("featured", String(formData.featured));
            payload.append("displayOrder", String(formData.displayOrder));
            payload.append("published", String(formData.published));
            if (formData.image) {
                payload.append("image", formData.image);
            }

            await createGallery(payload);
            setSuccessMessage("Gallery image uploaded successfully!");
            fetchGallery();
            setFormData({
                title: "",
                category: "EVENT",
                featured: false,
                displayOrder: 1,
                published: true,
                image: null,
            });
        } catch {
            toast.error("Error creating gallery item");
        }
    }

    const handleDelete = async (id: number) => {
        const confirmed = window.confirm("Delete this image?");
        if (confirmed) {
            try {
                await deleteGallery(id);
                toast.success("Gallery image deleted successfully!");
                fetchGallery();
            } catch {
                toast.error("Error deleting gallery image");
            }
        }
    }

    const handleTogglePublish = async (id: number) => {
        try {
            const response = await toggleGalleryPublish(id);
            if(response.success) {
                setGalleryItems((prev) => prev.map((item) => item.id === id ? { ...item, published: response.data.published } : item));
            }
        } catch {
            toast.error("Error updating publish status");
        }
    }
    return (
        <AdminLayout>
            <div className="mx-w-3xl">
                <h1 className="text-4xl font-bold text-slate-800">
                    Gallery Upload
                </h1>

                <p className="text-slate-500 mt-2 mb-8">
                    Upload school gallery images
                </p>

                {successMessage && (
                    <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-2xl">
                        {successMessage}
                    </div>
                )}

                <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 space-y-6">
                    <input
                        type="text"
                        placeholder="Title"
                        className="w-full box-border border rounded-2xl px-4 py-4"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />

                    <select
                        className="w-full box-border border rounded-2xl px-4 py-4"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                        <option value="EVENT">Event</option>
                        <option value="SPORTS">Sport</option>
                        <option value="ACADEMIC">Academic</option>
                        <option value="CULTURAL">Cultural</option>
                        <option value="CELEBRATIONS">Celebration</option>
                        <option value="ACHIEVEMENTS">Achievement</option>
                        <option value="CAMPUS">Campus</option>
                    </select>

                    <div className="space-y-2 mt-4">
                        <label className="text-sm font-medium text-slate-700">
                            Upload Image
                        </label>
                        <input
                            key={formData.title}
                            type="file"
                            accept="image/*"
                            onChange={(e) => setFormData({ ...formData, image: e.target.files ? e.target.files[0] : null })}
                            className="w-full box-border border border-slate-200 rounded-2xl px-4 py-4 bg-slate-100 cursor-pointer"
                        />
                    </div>

                    <div className="max-w-[180px]">
                        <label className="text-sm font-medium text-slate-700">
                            Display Order
                        </label>
                        <input
                            type="number"
                            placeholder="Display Order"
                            className="w-full box-border border rounded-2xl px-4 py-4 mt-2"
                            value={formData.displayOrder}
                            onChange={(e) => setFormData({ ...formData, displayOrder: Number(e.target.value) })}
                        />
                    </div>
                    <div className="flex gap-8 items-center">
                        <label className="flex items-center gap-2 text-slate-700">
                            <input
                                type="checkbox"
                                checked={formData.featured}
                                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                            />
                            Featured
                        </label>

                        <label className="flex items-center gap-2 text-slate-700">
                            <input
                                type="checkbox"
                                checked={formData.published}
                                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                            />
                            Published
                        </label>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-orange-500 text-white py-4 rounded-2xl font-semibold hover:bg-orange-600 transition"
                    >
                        Upload Image
                    </button>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-6">
                        Uploaded Gallery
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl hover:transalate-y-1 transition-all duration-300">
                                <img src={item.imageUrl} alt={item.title} className="w-full h-56 object-cover" />
                                <div className="p-5">
                                    <h3 className="text-lg font-bold">{item.title}</h3>
                                    <p className="text-sm text-slate-600 font-medium mt-1">{item.category}</p>
                                    <div className="flex gap-2 mt-4">
                                        {
                                            item.published ? (
                                                <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                                                    {item.published ? "Published" : "Draft"}
                                                </span>
                                            ) : (<span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                                                    {item.published ? "Published" : "Draft"}
                                                </span>)
                                        }
                                        
                                        {item.featured && (
                                            <span className="px-3 py-1 rounded-full text-xs bg-orange-100 text-orange-700">
                                                Featured
                                            </span>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => handleTogglePublish(item.id)}
                                        className={`mt-4 w-full rounded-2xl py-1.5 transition-all duration-300 border 
                                            ${item.published ? "border-yellow-400 bg-yellow-50 text-yellow-700 hover:bg-yellow-100" : "border-green-400 bg-green-50 text-green-700 hover:bg-green-100"}`}
                                    >
                                        {item.published ? "Unpublish" : "Publish"}
                                    </button>

                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="mt-2 w-full border border-red-200 text-red-500 rounded-2xl py-1.5 hover:bg-red-50 hover:border-red-300 transition-all duration-300"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminGallery;