import { useState } from "react";
import { Link } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    CreditCard,
    AlertTriangle,
    Plane,
    Settings,
    FileText,
    Gift,
    Bell,
    LogOut,
    Menu,
    X,
    CalendarCheck
} from "lucide-react";

// Import Views
import DashboardHome from "./Views/DashboardHome";
import UserManagement from "./Views/UserManagement";
import EMIPayments from "./Views/EMIPayments";
import RiskDefaulters from "./Views/RiskDefaulters";
import TourManagement from "./Views/TourManagement";
import EligibilityEngine from "./Views/EligibilityEngine";
import ReportsLogs from "./Views/ReportsLogs";
import CompanyPaid from "./Views/CompanyPaid";
import TourAssignment from "./Views/TourAssignment";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("Dashboard");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard, component: <DashboardHome /> },
        { name: "User Management", icon: Users, component: <UserManagement /> },
        { name: "Tour Assignment", icon: CalendarCheck, component: <TourAssignment /> },
        { name: "EMI & Payments", icon: CreditCard, component: <EMIPayments /> },
        { name: "Risk & Defaulters", icon: AlertTriangle, component: <RiskDefaulters /> },
        { name: "Tour Management", icon: Plane, component: <TourManagement /> },
        { name: "Eligibility Engine", icon: Settings, component: <EligibilityEngine /> },
        { name: "Reports & Audit Logs", icon: FileText, component: <ReportsLogs /> },
        { name: "Company-Paid (12th Month)", icon: Gift, component: <CompanyPaid /> },
    ];

    const ActiveComponent = menuItems.find(item => item.name === activeTab)?.component || <DashboardHome />;

    return (
        <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">

            {/* Sidebar (Desktop) */}
            <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 flex-col z-20 shadow-lg">
                <div className="h-20 flex items-center px-8 border-b border-gray-100">
                    <span className="text-3xl mr-2">📍</span>
                    <span className="font-bold text-xl text-gray-800 tracking-tight">Mark Tours</span>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-4">
                    <ul className="space-y-1">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => setActiveTab(item.name)}
                                    className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${activeTab === item.name
                                            ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                                            : "text-gray-500 hover:bg-indigo-50 hover:text-indigo-600"
                                        }`}
                                >
                                    <item.icon className={`w-5 h-5 mr-3 transition-colors ${activeTab === item.name ? "text-white" : "text-gray-400 group-hover:text-indigo-600"}`} />
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                    <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold border border-indigo-200">
                            A
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold text-gray-900 truncate">Admin User</p>
                            <p className="text-xs text-gray-500 truncate">admin@marktours.com</p>
                        </div>
                    </div>
                    <Link to="/" className="mt-3 flex items-center justify-center text-xs text-red-500 hover:text-red-600 hover:bg-red-50 py-2 rounded-lg transition-colors font-medium">
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout Securely
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-full relative overflow-hidden">

                {/* Mobile Header */}
                <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 z-10 sticky top-0">
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                        <span className="ml-3 font-bold text-gray-800">Mark Tours</span>
                    </div>

                    <h1 className="hidden md:block text-xl font-bold text-gray-800 tracking-tight">{activeTab}</h1>

                    <div className="flex items-center gap-2 md:gap-4">
                        <button className="p-2 relative text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                        <div className="h-8 w-px bg-gray-200 mx-2 hidden md:block"></div>
                        <div className="text-right hidden md:block">
                            <p className="text-xs font-medium text-gray-500">Today</p>
                            <p className="text-sm font-bold text-gray-800">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                        </div>
                    </div>
                </header>

                {/* Mobile Menu Backdrop */}
                {isMobileMenuOpen && (
                    <div className="absolute inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
                )}

                {/* Mobile Sidebar */}
                <div className={`absolute top-0 left-0 w-64 h-full bg-white z-40 transform transition-transform duration-300 md:hidden shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="h-16 flex items-center px-6 border-b border-gray-100">
                        <span className="text-2xl mr-2">📍</span>
                        <span className="font-bold text-lg text-gray-800">Mark Tours</span>
                    </div>
                    <nav className="p-4 overflow-y-auto">
                        <ul className="space-y-1">
                            {menuItems.map(item => (
                                <li key={item.name}>
                                    <button
                                        onClick={() => {
                                            setActiveTab(item.name);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg ${activeTab === item.name ? "bg-indigo-600 text-white" : "text-gray-600"
                                            }`}
                                    >
                                        <item.icon className="w-5 h-5 mr-3" />
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                            <li className="pt-4 border-t border-gray-100 mt-4">
                                <Link to="/" className="flex items-center px-4 py-3 text-sm font-medium text-red-600">
                                    <LogOut className="w-5 h-5 mr-3" />
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Dynamic Content */}
                <main className="flex-1 overflow-auto p-4 md:p-8 scroll-smooth" id="main-content">
                    {/* Fade-in Effect wrapper */}
                    <div className="max-w-7xl mx-auto animate-fade-in-up">
                        {ActiveComponent}
                    </div>
                </main>

            </div>
        </div>
    );
}
