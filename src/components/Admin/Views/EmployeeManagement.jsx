import { useState } from "react";
import employeesJson from "../../../data/employees.json";
import referralsJson from "../../../data/referrals.json";
import { FiEdit, FiTrash2, FiSearch, FiChevronDown, FiChevronUp } from "react-icons/fi";



export default function EmployeeManagement() {
    const [employeesData, setEmployeesData] = useState(employeesJson || []);
    const [showForm, setShowForm] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [search, setSearch] = useState("");
    const [errors, setErrors] = useState({});
    const [expandedRow, setExpandedRow] = useState(null);

    const emptyForm = {
        id: null,
        firstName: "",
        lastName: "",
        name: "",
        email: "",
        phone: "",
        branch: "",
        district: "",
        joiningDate: "",
        role: "Employee",
    };

    const branches = [
        "Mumbai Branch",
        "Delhi Branch",
        "Bangalore Branch",
        "Chennai Branch",
        "Hyderabad Branch",
    ];

    const roles = ["Admin", "Employee", "Agent", "User"];

    const [form, setForm] = useState(emptyForm);

    /* ================= ACTIONS ================= */
    const handleAdd = () => {
        setForm(emptyForm);
        setErrors({});
        setIsEdit(false);
        setShowForm(true);
    };

    const handleEdit = (emp) => {
        const parts = (emp.name || "").split(" ");
        setForm({
            ...emp,
            firstName: parts[0] || "",
            lastName: parts.slice(1).join(" "),
        });
        setErrors({});
        setIsEdit(true);
        setShowForm(true);
    };

    /* ================= VALIDATION ================= */
    const validateForm = () => {
        const e = {};

        if (!form.firstName) e.firstName = "First name is required";
        if (!form.lastName) e.lastName = "Last name is required";

        if (!form.email) {
            e.email = "Email is required";
        } else if (!form.email.includes("@")) {
            e.email = "Invalid email format";
        }

        if (!isEdit) {
            if (!form.phone) {
                e.phone = "Mobile number is required";
            } else if (!/^\d{10}$/.test(form.phone)) {
                e.phone = "Mobile number must be 10 digits";
            }
        }

        setErrors(e);

        // 🔔 POPUP IF ERROR
        if (Object.keys(e).length > 0) {
            alert(Object.values(e)[0]); // show first error
            return false;
        }

        return true;
    };

    /* ================= SAVE ================= */
    const handleSave = () => {
        if (!validateForm()) return;

        const payload = {
            ...form,
            name: `${form.firstName} ${form.lastName}`,
        };

        if (isEdit) {
            setEmployeesData((p) =>
                p.map((e) => (e.id === form.id ? payload : e))
            );
        } else {
            setEmployeesData((p) => [...p, { ...payload, id: Date.now() }]);
        }
        setShowForm(false);
    };

    const handleDelete = (id) => {
        if (window.confirm("Delete employee?")) {
            setEmployeesData((p) => p.filter((e) => e.id !== id));
        }
    };

    const filteredEmployees = employeesData.filter((e) =>
        `${e.name} ${e.email} ${e.phone}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const toggleRow = (id) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    const getReferrals = (agentName) => {
        return referralsJson.filter(r => r.referredBy === agentName);
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden  ">

            {/* HEADER */}
            <div className="p-6 py-3 flex justify-between items-center border-b bg-gradient-to-r from-gray-50 to-white">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">
                        Employee Management
                    </h2>
                    <p className="text-sm text-gray-500">
                        Manage employee records & roles
                    </p>
                </div>

                <div className="flex gap-3 items-center">
                    <div className="relative group">
                        <FiSearch
                            className="absolute left-3 top-2.5 text-indigo-600"
                            size={16}
                        />
                        <input
                            className="pl-9 pr-3 py-2 text-sm rounded-lg bg-gray-100 focus:bg-white border border-transparent focus:border-indigo-300 outline-none"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={handleAdd}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow"
                    >
                        + Add Member
                    </button>
                </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            {["S.No", "Name", "Email", "Mobile", "Branch", "Role", "Actions"].map((h) => (
                                <th key={h} className="px-4 py-3 text-center text-xs font-bold text-gray-700 uppercase">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="">
                        {filteredEmployees.map((e, i) => (
                            <>
                                <tr 
                                    key={e.id} 
                                    className={`border-b hover:bg-gray-50 ${(e.role === "Agent" || e.role === "User") ? "cursor-pointer" : ""}`} 
                                    onClick={() => (e.role === "Agent" || e.role === "User") && toggleRow(e.id)}
                                >
                                    <td className="px-4 py-3 text-gray-500 text-center">{i + 1}</td>
                                    <td className="px-4 py-3 font-medium text-gray-900 text-center flex items-center justify-center gap-2">
                                        {e.name}
                                        {(e.role === "Agent" || e.role === "User") && (expandedRow === e.id ? <FiChevronUp /> : <FiChevronDown />)}
                                    </td>
                                    <td className="px-4 py-3 text-gray-600 text-center">{e.email}</td>
                                    <td className="px-4 py-3 text-gray-600 text-center">{e.phone}</td>
                                    <td className="px-4 py-3 text-center">
                                        <span className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-700">
                                            {e.branch || "General"}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                                            {e.role}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 flex gap-2 text-center justify-center" onClick={(event) => event.stopPropagation()}>
                                        <button
                                            onClick={() => handleEdit(e)}
                                            className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                                        >
                                            <FiEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(e.id)}
                                            className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white"
                                        >
                                            <FiTrash2 />
                                        </button>
                                    </td>
                                </tr>
                                {expandedRow === e.id && (
                                    <tr >
                                        <td colSpan="7" className="px-1 bg-gray-50 overflow-auto" >
                                            {e.role === "Agent" ? (
                                                <div className="bg-white rounded-lg shadow-sm overflow-auto border w-[990px] [&::-webkit-scrollbar]:hidden">
                                                    <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden">
                                                        <table className="w-full text-xs">
                                                            <thead className="bg-gray-100">
                                                                <tr>
                                                                    {["S.No", "Name", "Email", "Phone", "Branch", "PAN", "Aadhar", "Passport", "Joining Date", "Status", "Tour", "Package", "Next EMI", "EMI Amount", "Risk", "Action"].map(rh => (
                                                                        <th key={rh} className="px-3 py-2 text-center font-medium text-gray-600 uppercase whitespace-nowrap">{rh}</th>
                                                                    ))}
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {getReferrals(e.name).length > 0 ? (
                                                                    getReferrals(e.name).map((ref, idx) => (
                                                                        <tr key={ref.id} className="border-b hover:bg-gray-50">
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">{idx + 1}</td>
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">{ref.name}</td>
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">{ref.email}</td>
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">{ref.mobile}</td>
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">{ref.branch}</td>
                                                                            {/* <td className="px-3 py-2 whitespace-nowrap text-center">{ref.role}</td> */}
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">{ref.pan}</td>
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">{ref.aadhar}</td>
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">{ref.passport}</td>
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">{ref.joiningDate}</td>
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">
                                                                                <span className={`px-2 py-0.5 rounded-full text-xs ${ref.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                                                    {ref.status}
                                                                                </span>
                                                                            </td>
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">{ref.tour}</td>
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">{ref.package}</td>
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">{ref.nextEMI}</td>
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">{ref.emiAmount}</td>
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">
                                                                                <span className={`px-2 py-0.5 rounded-full text-xs ${ref.risk === 'Low' ? 'bg-green-100 text-green-700' : ref.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                                                                                    {ref.risk}
                                                                                </span>
                                                                            </td>
                                                                            <td className="px-3 py-2 whitespace-nowrap text-center">
                                                                                <button className="text-indigo-600 hover:text-indigo-800 font-medium">{ref.action}</button>
                                                                            </td>
                                                                        </tr>
                                                                    ))
                                                                ) : (
                                                                    <tr>
                                                                        <td colSpan="16" className="px-4 py-8 text-center text-gray-500">
                                                                            No referrals found for this agent.
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="bg-white rounded-lg shadow-sm border p-6 m-2">
                                                    <h4 className="text-sm font-bold text-gray-800 mb-4 border-b pb-2">User Details</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                                                        <div className="space-y-1">
                                                            <p className="text-gray-500 text-xs uppercase tracking-wide">Full Name</p>
                                                            <p className="font-medium text-gray-900">{e.name}</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-gray-500 text-xs uppercase tracking-wide">Email Address</p>
                                                            <p className="font-medium text-gray-900">{e.email}</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-gray-500 text-xs uppercase tracking-wide">Phone Number</p>
                                                            <p className="font-medium text-gray-900">{e.phone}</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-gray-500 text-xs uppercase tracking-wide">Branch</p>
                                                            <p className="font-medium text-gray-900">{e.branch || "-"}</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-gray-500 text-xs uppercase tracking-wide">District</p>
                                                            <p className="font-medium text-gray-900">{e.district || "-"}</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-gray-500 text-xs uppercase tracking-wide">Status</p>
                                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${e.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                                                {e.status || "Active"}
                                                            </span>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-gray-500 text-xs uppercase tracking-wide">Joining Date</p>
                                                            <p className="font-medium text-gray-900">{e.joiningDate || "-"}</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-gray-500 text-xs uppercase tracking-wide">Role</p>
                                                            <p className="font-medium text-gray-900">{e.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                )}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MODAL */}
            {showForm && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
                    onClick={() => setShowForm(false)}>
                    <div onClick={(e) => e.stopPropagation()}
                        className="bg-white w-full max-w-xl rounded-xl shadow-xl overflow-hidden">

                        <div className="px-5 py-4 border-b flex justify-between items-center">
                            <h3 className="text-lg font-bold">
                                {isEdit ? "Edit Employee" : "Add Employee"}
                            </h3>
                            <button onClick={() => setShowForm(false)}>✕</button>
                        </div>

                        <div className="px-5 py-4 space-y-4">

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <input
                                        placeholder="First Name"
                                        className="border rounded-lg px-3 py-2 text-sm w-full"
                                        value={form.firstName}
                                        onChange={(e) =>
                                            setForm({ ...form, firstName: e.target.value })
                                        }
                                    />
                                    {errors.firstName && (
                                        <p className="text-xs text-red-600 mt-1">{errors.firstName}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        placeholder="Last Name"
                                        className="border rounded-lg px-3 py-2 text-sm w-full"
                                        value={form.lastName}
                                        onChange={(e) =>
                                            setForm({ ...form, lastName: e.target.value })
                                        }
                                    />
                                    {errors.lastName && (
                                        <p className="text-xs text-red-600 mt-1">{errors.lastName}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <input
                                    placeholder="Email"
                                    className="border rounded-lg px-3 py-2 text-sm w-full"
                                    value={form.email}
                                    onChange={(e) =>
                                        setForm({ ...form, email: e.target.value })
                                    }
                                />
                                {errors.email && (
                                    <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    placeholder="Mobile Number"
                                    disabled={isEdit}
                                    className={`border rounded-lg px-3 py-2 text-sm w-full ${
                                        isEdit ? "bg-gray-100 text-gray-500" : ""
                                    }`}
                                    value={form.phone}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                                        })
                                    }
                                />
                                {errors.phone && (
                                    <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                                )}
                            </div>

                            <select
                                className="border rounded-lg px-3 py-2 text-sm w-full"
                                value={form.branch}
                                onChange={(e) =>
                                    setForm({ ...form, branch: e.target.value })
                                }
                            >
                                <option value="">Select Branch</option>
                                {branches.map((b) => (
                                    <option key={b}>{b}</option>
                                ))}
                            </select>

                            <select
                                className="border rounded-lg px-3 py-2 text-sm w-full"
                                value={form.role}
                                onChange={(e) =>
                                    setForm({ ...form, role: e.target.value })
                                }
                            >
                                {roles.map((r) => (
                                    <option key={r}>{r}</option>
                                ))}
                            </select>
                        </div>

                        <div className="px-5 py-4 border-t bg-gray-50 flex justify-end gap-3">
                            <button
                                onClick={() => setShowForm(false)}
                                className="px-4 py-2 rounded-lg bg-gray-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-semibold"
                            >
                                {isEdit ? "Update" : "Save"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
