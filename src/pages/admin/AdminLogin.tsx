import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { adminLogin } from "../../services/adminAuthService";

const AdminLogin = () => {

    const [formData,
        setFormData] =
        useState({
            username: "",
            password: "",
        });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement
        >
    ) => {

        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();

        try {
            const response = await adminLogin(formData.username, formData.password);
            localStorage.setItem("adminToken", response.data.token);
            toast.success("Login successful!");
            navigate("/admin/dashboard");
        } catch (error) {
            toast.error("Invalid username or password");
        }
    };

    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex bg-slate-100">
            {/* Left Branding Section */}
            <div className="hidden md:flex w-1/2 bg-slate-900 text-white flex-col justify-center items-center p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"/>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"/>
                <img
                    src="/school-logo.png"
                    alt="School Logo"
                    className="w-28 mb-6 z-10"
                />

                <h1 className="text-4xl font-bold text-center z-10">
                    NEMS Admin Portal
                </h1>

                <p className="mt-4 text-lg text-slate-300 text-center max-w-lg z-10">
                    Manage school notices,
                    admissions, gallery
                    and website content
                    seamlessly.
                </p>
            </div>

            {/* Login Form */}
            <div className="w-full md:w-1/2 flex justify-center items-center px-4 sm:px-6 overflow-hidden">
                <div className="bg-white shadow-2xl rounded-[32px] p-8 md:p-12 w-full max-w-[95vw] md:max-w-lg mx-auto overflow-hidden">
                    <h2 className="text-3xl font-bold text-slate-800 text-center">
                        Welcome to NEMS Admin Portal
                    </h2>

                    <p className="text-center text-gray-500 mt-2 mb-8">
                        Secure Login for School Management
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5 w-full">
                        <input type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full box-border border border-slate-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"/>

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full box-border border border-slate-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"/>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] hover:bg-orange-600 transition-all duration-300 font-semibold">
                            Login
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-400 mt-8">
                        © Nathsagar English
                        Medium School, Ghotan
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;