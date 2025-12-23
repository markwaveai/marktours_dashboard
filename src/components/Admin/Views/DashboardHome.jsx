import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, AreaChart, Area } from 'recharts';
import usersData from "../../../data/users.json";

export default function DashboardHome() {

    // Stats Calculation
    const totalUsers = usersData.length;
    const activeUsers = usersData.filter(u => u.status === "Active").length;
    const criticalRisk = usersData.filter(u => u.riskLevel === "Critical").length;
    const totalPendingEMI = usersData.reduce((acc, user) => {
        const amount = parseInt(user.emiAmount.replace(/[^0-9]/g, '')) || 0;
        return acc + amount;
    }, 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });


    // Prepare Data for Charts

    // 1. Status Distribution (Pie Chart)
    const statusCounts = usersData.reduce((acc, user) => {
        acc[user.status] = (acc[user.status] || 0) + 1;
        return acc;
    }, {});
    const pieData = Object.keys(statusCounts).map(key => ({ name: key, value: statusCounts[key] }));
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    // 2. Risk Level Distribution (Bar Chart)
    const riskCounts = usersData.reduce((acc, user) => {
        acc[user.riskLevel] = (acc[user.riskLevel] || 0) + 1;
        return acc;
    }, {});
    const riskData = Object.keys(riskCounts).map(key => ({ name: key, value: riskCounts[key] }));

    // 3. EMI Projection (Mock Line Chart)
    const emiProjectionData = [
        { month: 'Jan', collected: 4000, projected: 2400 },
        { month: 'Feb', collected: 3000, projected: 1398 },
        { month: 'Mar', collected: 2000, projected: 9800 },
        { month: 'Apr', collected: 2780, projected: 3908 },
        { month: 'May', collected: 1890, projected: 4800 },
        { month: 'Jun', collected: 2390, projected: 3800 },
    ];


    return (
        <div className="space-y-6">

            {/* Top Stats Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Widget title="Total Users" value={totalUsers} change="+12%" icon="👥" color="bg-blue-500" />
                <Widget title="Active Users" value={activeUsers} change="+5%" icon="✅" color="bg-green-500" />
                <Widget title="Projected Month EMI" value={totalPendingEMI} change="-2%" icon="💳" color="bg-orange-500" />
                <Widget title="Critical Risk" value={criticalRisk} change="0%" icon="⚠️" color="bg-red-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* User Status Distribution */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">User Status Distribution</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                    label
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Risk Analysis */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Risk Level Analysis</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={riskData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* EMI Trends */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 lg:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">EMI Collection Trends</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={emiProjectionData}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUk" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="collected" stroke="#8884d8" fillOpacity={1} fill="url(#colorUk)" />
                                <Area type="monotone" dataKey="projected" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    );
}

function Widget({ title, value, change, icon, color }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
                <span className={`inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded ${change.startsWith('+') ? 'bg-green-100 text-green-700' : change.startsWith('0') ? 'bg-gray-100 text-gray-700' : 'bg-red-100 text-red-700'}`}>
                    {change} from last month
                </span>
            </div>
            <div className={`p-3 rounded-lg ${color} text-white`}>
                {icon}
            </div>
        </div>
    );
}
