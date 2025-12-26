import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    AreaChart,
    Area,
} from "recharts";

import usersData from "../../../data/users.json";
import employeesData from "../../../data/employees.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUsers,
    faUserCheck,
    faBriefcase,
    faCreditCard,
    faTriangleExclamation,
    faArrowUp,
    faArrowDown,
    faMinus,
} from "@fortawesome/free-solid-svg-icons";

export default function DashboardHome() {
    const totalUsers = usersData.length;
    const activeUsers = usersData.filter((u) => u.status === "Active").length;
    const totalEmployees = employeesData.length;
    const criticalRisk = usersData.filter(
        (u) => u.riskLevel === "Critical"
    ).length;

    const totalPendingEMI = usersData
        .reduce((acc, user) => {
            const amount = parseInt(user.emiAmount.replace(/[^0-9]/g, "")) || 0;
            return acc + amount;
        }, 0)
        .toLocaleString("en-IN", { style: "currency", currency: "INR" });

    const statusCounts = usersData.reduce((acc, user) => {
        acc[user.status] = (acc[user.status] || 0) + 1;
        return acc;
    }, {});
    const pieData = Object.keys(statusCounts).map((key) => ({
        name: key,
        value: statusCounts[key],
    }));

    const COLORS = ["#2563eb", "#22c55e", "#f59e0b", "#ef4444"];

    const riskCounts = usersData.reduce((acc, user) => {
        acc[user.riskLevel] = (acc[user.riskLevel] || 0) + 1;
        return acc;
    }, {});
    const riskData = Object.keys(riskCounts).map((key) => ({
        name: key,
        value: riskCounts[key],
    }));

    const emiProjectionData = [
        { month: "Jan", collected: 4000, projected: 2400 },
        { month: "Feb", collected: 3000, projected: 1398 },
        { month: "Mar", collected: 2000, projected: 9800 },
        { month: "Apr", collected: 2780, projected: 3908 },
        { month: "May", collected: 1890, projected: 4800 },
        { month: "Jun", collected: 2390, projected: 3800 },
    ];

    return (
        <div className="space-y-6">
            {/* STAT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <Widget title="Total Users" value={totalUsers} change="+12%" icon={faUsers} badge="bg-blue-600" />
                <Widget title="Active Users" value={activeUsers} change="+5%" icon={faUserCheck} badge="bg-green-600" />
                <Widget title="Employee Management" value={totalEmployees} change="+2" icon={faBriefcase} badge="bg-black" />
                <Widget title="Projected Month EMI" value={totalPendingEMI} change="-2%" icon={faCreditCard} badge="bg-orange-500" />
                <Widget title="Critical Risk" value={criticalRisk} change="0%" icon={faTriangleExclamation} badge="bg-red-600" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* PIE */}
                {/* USER STATUS DONUT (Premium UI) */}
                <div className="bg-white p-6 rounded-xl shadow-sm border relative">
                    <h3 className="text-lg font-semibold mb-4">User Status Distribution</h3>

                    <div className="h-[300px] relative">
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={75}
                                    outerRadius={100}
                                    dataKey="value"
                                    paddingAngle={3}
                                >
                                    {pieData.map((entry, index) => {
                                        const softColors = {
                                            Active: "#8B5CF6",     
                                            Completed: "#0D9488", 
                                            Late: "#64748B",      
                                            Defaulted: "#1E293B" 
                                        };

                                        return (
                                            <Cell
                                                key={index}
                                                fill={softColors[entry.name] || "#94a3b8"}
                                            />
                                        );
                                    })}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>

                        {/* CENTER TOTAL */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <p className="text-sm text-gray-500">Total Users</p>
                            <p className="text-3xl font-bold text-gray-900">{totalUsers}</p>
                        </div>
                    </div>

                    {/* CLEAN LEGEND */}
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        {pieData.map((item) => (
                            <div key={item.name} className="flex items-center gap-2">
                                <span
                                    className="w-3 h-3 rounded-full"
                                    style={{
                                        backgroundColor:
                                            item.name === "Active"
                                                ? "#8B5CF6"
                                                : item.name === "Completed"
                                                    ? "#0D9488"
                                                    : item.name === "Late"
                                                        ? "#64748B"
                                                        : "#1E293B",
                                    }}
                                ></span>
                                <span className="text-gray-600">
                                    {item.name} – {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* BAR */}
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h3 className="text-lg font-semibold mb-4">Risk Level Analysis</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer>
                            <BarChart data={riskData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* AREA */}
                <div className="bg-white p-6 rounded-xl shadow-sm border lg:col-span-2">
                    <h3 className="text-lg font-semibold mb-4">EMI Collection Trends</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer>
                            <AreaChart data={emiProjectionData}>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="collected" stroke="#6366f1" fill="#c7d2fe" />
                                <Area type="monotone" dataKey="projected" stroke="#22c55e" fill="#bbf7d0" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Widget({ title, value, change, icon, badge }) {
    const isPositive = change.startsWith("+");
    const isNeutral = change.startsWith("0");
    const trend = isPositive ? faArrowUp : isNeutral ? faMinus : faArrowDown;

    const trendStyle = isPositive
        ? "bg-green-100 text-green-700"
        : isNeutral
            ? "bg-gray-100 text-gray-700"
            : "bg-red-100 text-red-700";

    const isEMI = title.toLowerCase().includes("emi");

    return (
        <div className="bg-white rounded-xl border border-gray-200 py-5 px-4 shadow-sm hover:shadow-md transition grid grid-rows-[48px_40px_32px]">

            {/* Title + Icon (perfect vertical alignment) */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 font-medium leading-tight line-clamp-2 max-w-[70%]">
                    {title}
                </p>

                <div className={`w-7 h-7 rounded-full ${badge} flex items-center justify-center`}>
                    <FontAwesomeIcon icon={icon} className="text-white text-xs" />
                </div>
            </div>

            {/* Value */}
            <div className="flex items-center">
                <h3
                    className={`font-bold text-gray-900 leading-none ${isEMI ? "text-xl" : "text-2xl"
                        }`}
                >
                    {value}
                </h3>
            </div>

            {/* Trend */}
            <div className="flex items-center">
                <span
                    className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-2xl whitespace-nowrap ${trendStyle}`}
                >
                    <FontAwesomeIcon icon={trend} />
                    {change} from last month
                </span>
            </div>
        </div>
    );
}




