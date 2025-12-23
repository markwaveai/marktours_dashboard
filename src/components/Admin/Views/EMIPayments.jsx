import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import usersData from "../../../data/users.json";

export default function EMIPayments() {

    // Calculate overdue amount
    const overdueUsers = usersData.filter(u => u.status === "Late" || u.status === "Defaulted");
    const totalOverdue = overdueUsers.reduce((acc, user) => {
        const amount = parseInt(user.emiAmount.replace(/[^0-9]/g, '')) || 0;
        return acc + amount;
    }, 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

    // Mock payment history data
    const paymentHistory = [
        { date: "2023-12-01", amount: 45000, type: "Online" },
        { date: "2023-12-02", amount: 32000, type: "Bank Transfer" },
        { date: "2023-12-03", amount: 58000, type: "Online" },
        { date: "2023-12-04", amount: 21000, type: "Cash" },
        { date: "2023-12-05", amount: 67000, type: "Online" },
        { date: "2023-12-06", amount: 43000, type: "Cheque" },
        { date: "2023-12-07", amount: 89000, type: "Online" },
    ];

    return (
        <div className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-gray-500 text-sm">Total Collected (This Month)</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">₹5,43,000</h3>
                    <span className="text-green-600 text-xs font-medium">+15% from last month</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-gray-500 text-sm">Total Overdue Amount</p>
                    <h3 className="text-2xl font-bold text-red-600 mt-1">{totalOverdue}</h3>
                    <span className="text-red-500 text-xs font-medium">{overdueUsers.length} users overdue</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-gray-500 text-sm">Upcoming Collections (Next 7 Days)</p>
                    <h3 className="text-2xl font-bold text-blue-600 mt-1">₹1,25,000</h3>
                    <span className="text-gray-500 text-xs font-medium">12 payments scheduled</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Payment Graph */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Collections</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={paymentHistory}>
                                <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="amount" fill="#6366f1" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Transactions List */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800">Recent Transactions</h3>
                    </div>
                    <div className="overflow-y-auto max-h-[300px]">
                        <table className="w-full text-left text-sm text-gray-600">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3">Date</th>
                                    <th className="px-6 py-3">Mode</th>
                                    <th className="px-6 py-3 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {paymentHistory.map((txn, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-3">{txn.date}</td>
                                        <td className="px-6 py-3">
                                            <span className="px-2 py-1 bg-gray-100 rounded text-xs">{txn.type}</span>
                                        </td>
                                        <td className="px-6 py-3 text-right font-medium text-gray-900">₹{txn.amount.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}
