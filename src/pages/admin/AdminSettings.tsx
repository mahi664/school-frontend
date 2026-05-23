import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AdminLayout from "../../components/admin/AdminLayout";
import { getSchoolConfig, updateSchoolConfig } from "../../services/adminConfigService";

const AdminSettings = () => {
  const [formData, setFormData] = useState<any>({
    schoolName: "",
    phoneNumber: "",
    email: "",
    address: "",
    principalMessage: "",
    admissionOpen: false,
  });

  useEffect(() => {
    fetchConfig();
  }, []);

  const fetchConfig = async () => {
    try {
      const response = await getSchoolConfig();
      setFormData(response.data);
    } catch {
      toast.error("Failed to load settings");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await updateSchoolConfig(formData);
      toast.success("Settings updated");
    } catch {
      toast.error("Update failed");
    }
  };

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Settings</h1>
        <p className="text-slate-500 mt-2 mb-8">Manage school website settings</p>

        <div className="bg-white rounded-3xl shadow-lg p-8 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              name="schoolName"
              placeholder="School Name"
              value={formData.schoolName}
              onChange={handleChange}
              className=" box-border border rounded-2xl px-4 py-3"
            />
            <input
              name="phoneNummber"
              placeholder="Phone"
              value={formData.phoneNumber}
              onChange={handleChange}
              className=" box-border border rounded-2xl px-4 py-3"
            />
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className=" box-border border rounded-2xl px-4 py-3"
            />
            <input
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className=" box-border border rounded-2xl px-4 py-3"
            />
          </div>

          <textarea
            name="principalMessage"
            placeholder="Principal Message"
            value={formData.principalMessage}
            onChange={(e) => setFormData({ ...formData, principalMessage: e.target.value })}
            rows={5}
            className="mt-5 box-border border border-slate-300 rounded-2xl px-4 py-4 w-full min-h-[180px] resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <div className="mt-6 flex items-center justify-between bg-slate-50 border rounded-2xl p-4">
            <div>
                <h3 className="font-semibold text-slate-800">Admissions Status</h3>

                <p className="text-sm text-slate-500">
                    Enable or disable admissions on the website.
                </p>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                    type="checkbox"
                    checked={formData.admissionOpen}
                    onChange={(e) => setFormData({ ...formData, admissionOpen: e.target.checked })}
                    className="sr-only peer"
                    />
                    <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-orange-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
            </div>
          </div>
          
          <div className="flex justify-end mt-6">
            <button
                onClick={handleSave}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-semibold transition shadow-lg hover:shadow-xl"
            >
                Save Settings
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
