import usersData from "../../../data/users.json";

export default function UserManagement() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">All Users</h2>
                <div className="flex gap-2">
                    <input type="text" placeholder="Search users..." className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">Add User</button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-500 font-semibold">
                        <tr>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Tour</th>
                            <th className="px-6 py-4">Next EMI</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Risk Level</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {usersData.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{user.name}</p>
                                            <p className="text-xs text-gray-400">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-700' :
                                            user.status === 'Late' ? 'bg-yellow-100 text-yellow-700' :
                                                user.status === 'Defaulted' ? 'bg-red-100 text-red-700' :
                                                    'bg-gray-100 text-gray-700'
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{user.tour}</td>
                                <td className="px-6 py-4">{user.nextEmiDate}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{user.emiAmount}</td>
                                <td className="px-6 py-4">
                                    <span className={`flex items-center gap-1 ${user.riskLevel === 'High' || user.riskLevel === 'Critical' ? 'text-red-500' :
                                            user.riskLevel === 'Medium' ? 'text-yellow-500' : 'text-green-500'
                                        }`}>
                                        <span className={`w-2 h-2 rounded-full ${user.riskLevel === 'High' || user.riskLevel === 'Critical' ? 'bg-red-500' :
                                                user.riskLevel === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                                            }`}></span>
                                        {user.riskLevel}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-indigo-600 hover:text-indigo-800 font-medium mr-3">Edit</button>
                                    <button className="text-red-600 hover:text-red-800 font-medium">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-4 border-t border-gray-100 bg-gray-50 text-xs text-gray-500 flex justify-between">
                <span>Showing {usersData.length} users</span>
                <div className="flex gap-2">
                    <button className="px-2 py-1 bg-white border rounded hover:bg-gray-100" disabled>Previous</button>
                    <button className="px-2 py-1 bg-white border rounded hover:bg-gray-100" disabled>Next</button>
                </div>
            </div>
        </div>
    );
}
