import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AdminLayout from "../../components/admin/AdminLayout";
import {
  getAllNotices,
  deleteNotice,
  togglePublish,
  toggleImportant,
  createNotice,
  updateNotice
} from "../../services/adminNoticeService";

const AdminNotices = () => {
  const [notices, setNotices] = useState<any[]>([]);
  const [ showModal, setShowModal ] = useState(false);
  const [ formData, setFormData ] = useState({
    title: "",
    description: "",
    category: "GENERAL",
    important: false,
    published: false,
    expiryDate: "",
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [editingNotice, setEditingNotice] = useState<any>(null);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await getAllNotices();
      setNotices(response.data);
    } catch {
      toast.error("Failed to load notices");
    }
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Delete notice?");
    if (!confirmed) return;

    try {
      await deleteNotice(id);
      toast.success("Notice deleted");
      fetchNotices();
    } catch {
      toast.error("Delete failed");
    }
  };

  const handlePublish = async (id: number) => {
    await togglePublish(id);
    fetchNotices();
  };

  const handleImportant = async (id: number) => {
    await toggleImportant(id);
    fetchNotices();
  };

  const handleCreateNotice = async () => {
    try {
        await createNotice(formData);
        toast.success("Notice created");
        setShowModal(false);
        setFormData({
            title: "",
            description: "",
            category: "GENERAL",
            important: false,
            published: false,
            expiryDate: "",
        });
        fetchNotices();
    } catch {
        toast.error("Failed to create notice");
    }
  };

  const handleAddNoticeClick = () => {
    setIsEditMode(false);
    setFormData({
      title: "",
      description: "",
      category: "GENERAL",
      important: false,
      published: false,
      expiryDate: "",
    });
    setShowModal(true);
  }

  const handleEditClick = (notice: any) => {
    setIsEditMode(true);
    setEditingNotice(notice);
    setFormData({
      title: notice.title || "",
      description: notice.description || "",
      category: notice.category.toUpperCase() || "GENERAL",
      important: notice.isImportant || false,
      published: notice.isPublished || false,
      expiryDate: notice.expiryDate ? new Date(notice.expiryDate).toLocaleDateString("en-CA") : "",
    });
    setShowModal(true);
  }

  const handleUpdateNotice = async () => {
    try {
      if(!editingNotice?.id) return;
      await updateNotice(editingNotice.id, formData);
      toast.success("Notice updated");
      setIsEditMode(false);
      setEditingNotice(null);
      setShowModal(false);
      fetchNotices();
    } catch {
      toast.error("Failed to update notice");
    }
  }

  return (
    <AdminLayout>
      <div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-8 pt-16 md:pt-0">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Notices</h1>
            <p className="text-slate-500 mt-2">Manage school notices</p>
          </div>

          <button
            onClick={() => handleAddNoticeClick()}
            className="w-full md:w-auto bg-orange-500 text-white px-5 py-3 rounded-2xl font-semibold hover:bg-orange-600 transition text-sm md:text-base"
          >
            + Add Notice
          </button>
        </div>

        {/*<div className="bg-white rounded-3xl shadow-lg overflow-hidden">*/}
          {notices.length === 0 ? (
            <div className="p-10 text-center text-slate-500">No notices available</div>
          ) : (
            <div className="space-y-5">
              {notices.map((notice) => (
                <div key={notice.id} className="bg-white rounded-2xl shadow-md p-4 md:p-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4 transition-all duration-300 hover:shadow-lg hover:translate-y-1">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-xl text-slate-800">{notice.title}</h3>
                      <div className="flex gap-2 mt-2">
                        <span
                          className={`text-xs px-3 py-1 rounded-full ${
                            notice.isPublished
                              ? "bg-green-100 text-green-700"
                              : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {notice.isPublished ? "Published" : "Draft"}
                        </span>

                        {notice.isImportant && (
                          <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">
                            Important
                          </span>
                        )}
                      </div>

                      {notice.important && (
                        <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">
                          Important
                        </span>
                      )}
                    </div>

                    <p className="text-slate-600 leading-7 mt-4">{notice.description}</p>
                  </div>

                  <div className="flex gap-2 items-center shrink-0 mt-2 md:mt-2 w-full md:w-auto">
                    <button
                      onClick={() => handlePublish(notice.id)}
                      className={`text-sm px-3 py-2 rounded-xl hover:scale-105 transition font-medium ${
                        notice.isPublished
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {notice.isPublished ? "Unpublish" : "Publish"}
                    </button>

                    <button
                      onClick={() => handleImportant(notice.id)}
                      className={`text-sm px-4 py-2 rounded-xl transition hover:scale-105 ${
                        notice.isImportant ? "bg-yellow-400 text-white" : "bg-yellow-100"
                      }`}
                    >
                      ⭐
                    </button>

                    <button
                      onClick={() => handleDelete(notice.id)}
                      className="text-sm px-4 py-2 rounded-xl bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEditClick(notice)}
                      className="text-sm px-4 py-2 rounded-xl border border-blue-300 text-blue-600 hover:bg-blue-50 transition"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        {/*</div>*/}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[32px] shadow-2xl p-8 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Add Notice</h2>

              <button onClick={() => setShowModal(false)} className="text-slate-500 text-xl">
                ✕
              </button>
            </div>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Notice Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
                className="w-full box-border border rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
                rows={5}
                className="w-full box-border border rounded-2xl px-4 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <div className="grid grid-cols-2 gap-4">
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value,
                    })
                  }
                  className="box-border border rounded-2xl px-4 py-4"
                >
                  <option>GENERAL</option>
                  <option>EXAM</option>
                  <option>HOLIDAY</option>
                  <option>EVENT</option>
                  <option>ADMISSION</option>
                  <option>ACADEMIC</option>
                </select>

                <input
                  type="date"
                  value={formData.expiryDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      expiryDate: e.target.value,
                    })
                  }
                  className="box-border border rounded-2xl px-4 py-4"
                />
              </div>

              <div className="flex justify-between">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={formData.important}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        important: e.target.checked,
                      })
                    }
                  />
                  Important Notice
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        published: e.target.checked,
                      })
                    }
                  />
                  Publish Now
                </label>
              </div>

              <button
                onClick={isEditMode ? handleUpdateNotice : handleCreateNotice}
                className="w-full bg-orange-500 text-white py-4 rounded-2xl font-semibold hover:bg-orange-600 transition"
              >
                {isEditMode ? "Update Notice" : "Create Notice"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminNotices;