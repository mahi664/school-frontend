import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Bell,
  Image,
  Settings,
  LogOut,
  MessageSquare,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Notices",
      path: "/admin/notices",
      icon: <Bell size={20} />,
    },
    {
      name: "Gallery",
      path: "/admin/gallery",
      icon: <Image size={20} />,
    },
    {
      name: "Enquiries",
      path: "/admin/enquiries",
      icon: <MessageSquare size={20} />,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: <Settings size={20} />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  const location = useLocation();

  console.log("sidebarOpen:", sidebarOpen);

  return (
  <div className="min-h-screen bg-slate-100 md:flex relative">

    {/* Mobile Header */}
    <div className="fixed top-0 left-0 right-0 h-16 bg-slate-900 text-white flex items-center justify-between px-4 z-40 md:hidden shadow-lg">
      <h1 className="text-lg font-bold">NEMS Admin</h1>

      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
      >
        {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>

    {/* Overlay */}
    {sidebarOpen && (
      <div
        className="fixed inset-0 bg-black/40 z-40 md:hidden"
        onClick={() => setSidebarOpen(false)}
      />
    )}

    {/* Sidebar */}
    <aside
      className={`
        fixed top-0 left-0 z-50
        h-screen w-[280px]
        bg-slate-900 text-white
        flex flex-col shadow-2xl
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "block" : "hidden"}
        md:translate-x-0
        md:sticky
        md:w-72
        md:flex
      `}
    >
      {/* Logo */}
      <div className="p-6 pt-20 md:pt-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold text-white">
          NEMS Admin
        </h1>

        <p className="text-sm text-slate-400 mt-2 leading-relaxed">
          School Management Portal
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all
              ${
                location.pathname === item.path
                  ? "bg-slate-800 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }
            `}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white text-slate-900 hover:bg-orange-100 transition"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>

    {/* Main Content */}
    <main className="flex-1 p-6 md:p-10 pt-20 md:pt-10">
      {children}
    </main>
  </div>
);
}
export default AdminLayout;