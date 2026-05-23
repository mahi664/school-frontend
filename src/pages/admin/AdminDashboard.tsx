import AdminLayout from "../../components/admin/AdminLayout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDashboardStats, getRecentEnquiries } from "../../services/dashboardService";
import type { DashboardStats } from "../../types/dashboardStats";
import {
    Bell,
    BadgeCheck,
    Star,
    Image,
    PlusCircle,
    MessageSquare,
    Settings
} from "lucide-react"
import type { Enquiry } from "../../types/enquiry";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [recentEnquiries, setRecentEnquiries] = useState<Enquiry[]>([]);

    useEffect(() => {
        const loadDashboardData = async () => {
            try {
                const [dashboardResponse, enquiryResponse] = await Promise.all([
                    getDashboardStats(),
                    getRecentEnquiries()
                ]);
                if(dashboardResponse.success) {
                    setStats(dashboardResponse.data);
                }
                if(enquiryResponse.success) {
                    setRecentEnquiries(enquiryResponse.data);
                }
            } catch (error) {
                console.error("Failed to fetch dashboard data", error);
            }
        };

        loadDashboardData();
    }, []);

    const cards = [
        {
            title: "Total Notices",
            value: stats?.totalNotices,
            icon: Bell,
            bg: "bg-blue-100",
            color: "text-blue-500"
        },
        {
            title: "Published Notices",
            value: stats?.publishedNotices,
            icon: BadgeCheck,
            bg: "bg-green-100",
            color: "text-green-500"
        },
        {
            title: "Important Notices",
            value: stats?.importantNotices,
            icon: Star,
            bg: "bg-red-100",
            color: "text-red-500"
        },
        {
            title: "Gallery Images",
            value: stats?.galleryImages,
            icon: Image,
            bg: "bg-purple-100",
            color: "text-purple-500"
        }
    ]

    return (
        <AdminLayout>   
            <div className="space-y-6 md:space-y-8">
                <h1 className="text-2xl md:text-4xl font-bold text-slate-800">
                    Welcome Back 👋🏻
                </h1>
                
                <p className="text-sm md:text-base text-slate-500 mt-2 mb-8">
                    School Overview
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {
                      cards.map((card) => (
                            <div key={card.title} className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm md:shadow-lg border border-slate-100 hover:translate-y-1 hover:shadow-xl transition duration-300 flex flex-col gap-5">
                                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl ${card.bg} flex item-center justify-center`}>
                                    <card.icon className={`${card.color} w-4 h-4 md:w-6 md:h-6 mt-3`} />
                                </div>
                                <p className="text-xs md:text-sm text-slate-500">
                                    {card.title}
                                </p>

                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-800 mt-4">
                                    {card.value ?? 0}
                                </h2>
                            </div>
                      ))
                    }
                </div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Enquiries */}
                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 px-6 py-4">
                        
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">
                                    Recent Enquiries
                                </h2>
                                <p className="text-gray-500 mt-1">
                                    Latest parent enquiries at a glance
                                </p>
                            </div>

                            <button
                                onClick={() => navigate("/admin/enquiries")}
                                className="px-4 py-2 rounded-xl border border-orange-200 text-orange-500 hover:bg-orange-200 transition"
                            >
                                View All →
                            </button>
                        </div>

                        <div className="grid gap-4">
                            {recentEnquiries.map((item) => (
                                <div
                                key={item.id}
                                className="flex items-center justify-between bg-white border border-gray-100 shadow-md rounded-2xl p-5 hover:shadow-lg transition-all"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                            <span className="font-semibold text-orange-500">
                                                {item.parentName.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-800 text-lg">
                                                {item.parentName}
                                            </h3>
                                            <p className="text-slate-500 text-sm mt-1">
                                                {item.studentStandard} • {new Date(
                                                    item.createdAt
                                                ).toLocaleDateString("en-GB")}
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap self-center mr-4
                                        ${
                                        item.status === "NEW"
                                            ? "bg-blue-100 text-blue-700"
                                            : item.status === "CONTACTED"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-green-100 text-green-700"
                                        }`}
                                    >
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 h-fit self-start sticky top-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Quick Actions
                        </h2>
                        <p className="text-gray-500 mt-1 mb-6">
                            Quick access to school management tools
                        </p>

                        <div className="space-y-3">
                            <button
                                onClick={() => navigate("/admin/notices")}
                                className="w-full flex items-center px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-semibold shadow-sm transition-all duration-200 cursor-pointer"
                            >
                                <PlusCircle size={22} className="mr-4" />
                                Add Notice
                            </button>
                            <button
                                onClick={() => navigate("/admin/gallery")}
                                className="w-full flex items-center px-6 py-4 rounded-2xl border border-slate-200 bg-white hover:border-orange-300 hover:shadow-sm transition-all duration-200 cursor-pointer"
                            >
                                <Image size={22} className="text-violet-500 mr-4 shrink-0" />
                                Upload Gallery Image
                            </button>
                            <button
                                onClick={() => navigate("/admin/enquiries")}
                                className="w-full flex items-center px-6 py-4 rounded-2xl border border-slate-200 bg-white hover:border-orange-300 hover:shadow-sm transition-all duration-200 cursor-pointer"
                            >
                                <MessageSquare size={22} className="text-green-500 mr-4 shrink-0" />
                                View Enquiries
                            </button>
                            <button
                                onClick={() => navigate("/admin/settings")}
                                className="w-full flex items-center px-6 py-4 rounded-2xl border border-slate-200 bg-white hover:border-orange-300 hover:shadow-sm transition-all duration-200 cursor-pointer"
                            >
                                <Settings size={22} className="text-blue-500 mr-4 shrink-0" />
                                Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;