import AdminLayout from "../../components/admin/AdminLayout";
import { useEffect, useState } from "react";
import { getAllEnquiries, updateEnquiryStatus } from "../../services/enquiryService";
import type { Enquiry as EnquiryType } from "../../types/enquiry";

const Enquiry = () => {
  const [enquiries, setEnquiries] = useState<EnquiryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchEnquiries = async () => {
    const data = await getAllEnquiries();
    setEnquiries(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleStatusUpdate = async (enquiryId: number, status: string) => {
    try {
      await updateEnquiryStatus(enquiryId, status);
      fetchEnquiries();
    } catch (error) {
      console.error("Error updating enquiry status:", error);
    }
  };

  const getStatusClass = (status: string) => {
    if (status === "NEW") return "bg-blue-100 text-blue-600";
    if (status === "CONTACTED") return "bg-yellow-100 text-yellow-700";
    return "bg-green-100 text-green-600";
  };

  return (
    <AdminLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">Enquiries</h1>
          <p className="text-slate-500 mt-2">Manage parent enquiries</p>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="space-y-5">
            {enquiries.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg border border-slate-100 p-5 hover:shadow-xl transition"
              >
                <div className="flex justify-between items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-xl font-bold text-slate-800">
                        {item.parentName}
                      </h2>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(item.status)}`}
                      >
                        {item.status === "NEW" ? "New" : item.status === "CONTACTED" ? "Contacted" : "Closed"}
                      </span>
                    </div>

                    <div className="mt-4 text-slate-600 space-y-2">
                      <p>📞 {item.phoneNumber}</p>
                      <p>🎓 {item.studentStandard || "N/A"}</p>
                      <p>💬 {item.message || "No message"}</p>
                      <p className="text-xs text-slate-400 mt-3">
                        Submitted: {new Date(item.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0">
                    {
                        item.status === "NEW" && (
                            <button
                            onClick={() => handleStatusUpdate(item.id, "CONTACTED")}
                            className="px-3 py-1.5 text-sm rounded-xl bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition"
                            >
                                Contacted
                            </button>
                        )
                    }
                    {
                        item.status !== "CLOSED" && (
                            <button
                            onClick={() => handleStatusUpdate(item.id, "CLOSED")}
                            className="px-3 py-1.5 text-sm rounded-xl bg-green-100 text-green-700 hover:bg-green-200 transition"
                            >
                                Closed
                            </button>       
                        )
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Enquiry;