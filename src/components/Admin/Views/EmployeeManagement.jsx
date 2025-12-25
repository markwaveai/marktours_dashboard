import { useState } from "react";
import employeesJson from "../../../data/employees.json";
import { FiEdit, FiTrash2, FiSearch } from "react-icons/fi";

export default function EmployeeManagement() {
    const [employeesData, setEmployeesData] = useState(employeesJson || []);
    const [showForm, setShowForm] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [search, setSearch] = useState("");
    const [errors, setErrors] = useState({});

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

    const validateForm = () => {
        const e = {};
        if (!form.firstName) e.firstName = "Required";
        if (!form.lastName) e.lastName = "Required";
        if (!form.email.includes("@")) e.email = "Invalid email";
        if (!isEdit && !/^\d{10}$/.test(form.phone))
            e.phone = "10 digit mobile required";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

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

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

            {/* HEADER */}
            <div className="p-6 flex justify-between items-center border-b bg-gradient-to-r from-gray-50 to-white">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">
                        Employee Management
                    </h2>
                    <p className="text-sm text-gray-500">
                        Manage employee records & roles
                    </p>
                </div>

                <div className="flex gap-3 items-center">
                    {/* SEARCH */}
                    <div className="relative group">
                        <FiSearch
                            className="absolute left-3 top-2.5 text-indigo-600 group-focus-within:text-indigo-800 transition-colors"
                            size={16}
                        />
                        <input
                            className="pl-9 pr-3 py-2 text-sm rounded-lg bg-gray-100 focus:bg-white border border-transparent focus:border-indigo-300 outline-none transition"
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
                            {[
                                "S.No",
                                "Name",
                                "Email",
                                "Mobile",
                                "Branch",
                                "Role",
                                "Actions",
                            ].map((h) => (
                                <th
                                    key={h}
                                    className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase"
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployees.map((e, i) => (
                            <tr
                                key={e.id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                                <td className="px-4 py-3 font-medium text-gray-900">
                                    {e.name}
                                </td>
                                <td className="px-4 py-3 text-gray-600">{e.email}</td>
                                <td className="px-4 py-3 text-gray-600">{e.phone}</td>
                                <td className="px-4 py-3">
                                    <span className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-700">
                                        {e.branch || "General"}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                                        {e.role}
                                    </span>
                                </td>
                                <td className="px-4 py-3 flex gap-2">
                                    <button
                                        onClick={() => handleEdit(e)}
                                        className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
                                        title="Edit"
                                    >
                                        <FiEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(e.id)}
                                        className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition"
                                        title="Delete"
                                    >
                                        <FiTrash2 />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MODAL */}
            {showForm && (
                <div
                    className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
                    onClick={() => setShowForm(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white w-full max-w-xl rounded-xl shadow-xl"
                    >
                        {/* MODAL HEADER */}
                        <div className="px-5 py-4 border-b flex justify-between items-center">
                            <h3 className="text-lg font-bold text-gray-900">
                                {isEdit ? "Edit Employee" : "Add Employee"}
                            </h3>
                            <button
                                onClick={() => setShowForm(false)}
                                className="text-gray-500 hover:text-black"
                            >
                                ✕
                            </button>
                        </div>

                        {/* FORM */}
                        <div className="px-5 py-4 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    placeholder="First Name"
                                    className="border rounded-lg px-3 py-2 text-sm"
                                    value={form.firstName}
                                    onChange={(e) =>
                                        setForm({ ...form, firstName: e.target.value })
                                    }
                                />
                                <input
                                    placeholder="Last Name"
                                    className="border rounded-lg px-3 py-2 text-sm"
                                    value={form.lastName}
                                    onChange={(e) =>
                                        setForm({ ...form, lastName: e.target.value })
                                    }
                                />
                            </div>

                            <input
                                placeholder="Email"
                                className="border rounded-lg px-3 py-2 text-sm w-full"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                            />

                            <input
                                placeholder="Mobile Number"
                                disabled={isEdit}
                                className={`border rounded-lg px-3 py-2 text-sm w-full ${isEdit
                                        ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                                        : ""
                                    }`}
                                value={form.phone}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                                    })
                                }
                            />

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

                        {/* FOOTER */}
                        <div className="px-5 py-4 border-t bg-gray-50 flex justify-end gap-3">
                            <button
                                onClick={() => setShowForm(false)}
                                className="px-4 py-2 rounded-lg text-sm bg-gray-200 hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-6 py-2 rounded-lg text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow"
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
