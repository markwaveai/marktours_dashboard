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
  CalendarCheck,
  Briefcase,
} from "lucide-react";

/* -------------------- Views -------------------- */
import DashboardHome from "./Views/DashboardHome";
import UserManagement from "./Views/UserManagement";
import EMIPayments from "./Views/EMIPayments";
import RiskDefaulters from "./Views/RiskDefaulters";
import TourManagement from "./Views/TourManagement";
import EligibilityEngine from "./Views/EligibilityEngine";
import ReportsLogs from "./Views/ReportsLogs";
import CompanyPaid from "./Views/CompanyPaid";
import TourAssignment from "./Views/TourAssignment";
import EmployeeManagement from "./Views/EmployeeManagement";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, component: <DashboardHome /> },
    { name: "User Management", icon: Users, component: <UserManagement /> },
    { name: "Employee Management", icon: Briefcase, component: <EmployeeManagement /> },
    { name: "Tour Assignment", icon: CalendarCheck, component: <TourAssignment /> },
    { name: "EMI & Payments", icon: CreditCard, component: <EMIPayments /> },
    { name: "Risk & Defaulters", icon: AlertTriangle, component: <RiskDefaulters /> },
    { name: "Tour Management", icon: Plane, component: <TourManagement /> },
    { name: "Eligibility Engine", icon: Settings, component: <EligibilityEngine /> },
    { name: "Reports & Audit Logs", icon: FileText, component: <ReportsLogs /> },
    { name: "Company-Paid (12th Month)", icon: Gift, component: <CompanyPaid /> },
  ];

  const ActiveComponent =
    menuItems.find((item) => item.name === activeTab)?.component ||
    <DashboardHome />;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      {/* -------------------- DESKTOP SIDEBAR -------------------- */}
      <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 flex-col shadow-lg">
        <div className="h-20 flex items-center px-8 border-b bg-[#EEFB56]">
          <img
            src="/assets/images/Layer 2.png"
            alt="Mark Tours"
            className="w-[90px]"
          />
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                    activeTab === item.name
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-500 hover:bg-indigo-50 hover:text-indigo-600"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 mr-3 ${
                      activeTab === item.name
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                  />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t bg-gray-50">
          <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
              A
            </div>
            <div>
              <p className="text-sm font-bold">Admin User</p>
              <p className="text-xs text-gray-500">admin@marktours.com</p>
            </div>
          </div>

          <Link
            to="/"
            className="mt-3 flex items-center justify-center text-xs text-red-600 hover:bg-red-50 py-2 rounded-lg"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout Securely
          </Link>
        </div>
      </aside>

      {/* -------------------- MAIN CONTENT -------------------- */}
      <div className="flex-1 flex flex-col">

        {/* -------------------- MOBILE HEADER -------------------- */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 sticky top-0 z-20">
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>

            {/* ✅ ACTIVE TAB SHOWN HERE */}
            <span className="ml-3 font-bold truncate">{activeTab}</span>
          </div>

          <h1 className="hidden md:block text-xl font-bold">{activeTab}</h1>

          <div className="flex items-center gap-3">
            <button className="p-2 relative text-gray-500 hover:text-indigo-600">
              <Bell />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="hidden md:block text-right">
              <p className="text-xs text-gray-500">Today</p>
              <p className="text-sm font-bold">
                {new Date().toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </header>

        {/* -------------------- MOBILE BACKDROP -------------------- */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* -------------------- MOBILE SIDEBAR -------------------- */}
        <aside
          className={`fixed top-0 left-0 w-64 h-full bg-white z-40 transform transition-transform md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-16 flex items-center px-6 border-b bg-[#EEFB56]">
            <img src="/assets/images/Layer 2.png" className="w-20" />
          </div>

          <nav className="p-4">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      setActiveTab(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      activeTab === item.name
                        ? "bg-indigo-600 text-white"
                        : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </button>
                </li>
              ))}

              <li className="pt-4 border-t">
                <Link
                  to="/"
                  className="flex items-center px-4 py-3 text-red-600"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* -------------------- PAGE CONTENT -------------------- */}
        <main className="flex-1 overflow-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto animate-fade-in-up">
            {ActiveComponent}
          </div>
        </main>
      </div>
    </div>
  );
}
