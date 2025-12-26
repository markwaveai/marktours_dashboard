import React, { useState } from "react";
import usersJson from "../../../data/users.json";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { format, addMonths, parseISO } from "date-fns";

export default function UserManagement() {
  const [usersData, setUsersData] = useState(usersJson || []);
  const [showForm, setShowForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState({});
  const [viewingDoc, setViewingDoc] = useState(null); // { label: 'PAN', data: { urls, files } }


  const emptyForm = {
    id: null,
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    region: "",
    pancardProof: { urls: [], files: [] },
    aadharCard: { urls: [], files: [] },
    passport: { urls: [], files: [] },
    joiningDate: "",
    status: "Active",
    tour: "",
    packageAmount: "",
    nextEmiDate: "",
    emiAmount: "",
    riskLevel: "Low",
  };

  const branches = [
    "Mumbai Branch",
    "Delhi Branch",
    "Bangalore Branch",
    "Chennai Branch",
    "Kolkata Branch",
    "Pune Branch",
    "Hyderabad Branch",
    "Ahmedabad Branch",
    "Jaipur Branch",
    "Lucknow Branch",
    "Chandigarh Branch",
    "Bhopal Branch"
  ];

  const [form, setForm] = useState(emptyForm);

  /* ================= ADD ================= */
  const handleAddUser = () => {
    setForm(emptyForm);
    setErrors({});
    setIsEdit(false);
    setShowForm(true);
  };

  /* ================= EDIT ================= */
  const handleEdit = (user) => {
    // Split full name into first and last names
    const nameParts = (user.name || "").split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    setForm({
      ...emptyForm,
      ...user,
      firstName,
      lastName,
      phone: user.phone ? user.phone.replace(/\D/g, '').slice(-10) : "",
      pancardProof: typeof user.pancardProof === 'object' ? user.pancardProof : { urls: [], files: [] },
      aadharCard: typeof user.aadharCard === 'object' ? user.aadharCard : { urls: [], files: [] },
      passport: typeof user.passport === 'object' ? user.passport : { urls: [], files: [] },
    });
    setErrors({});
    setIsEdit(true);
    setShowForm(true);
  };

  /* ================= VALIDATION ================= */
  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name required";

    if (!form.email.trim()) newErrors.email = "Email required";
    else if (!form.email.includes("@"))
      newErrors.email = "Email must contain @";

    if (!form.phone.trim()) newErrors.phone = "Mobile required";
    else if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Mobile must be 10 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ================= SAVE ================= */
  const handleSave = () => {
    if (!validateForm()) return;

    const finalForm = {
      ...form,
      name: `${form.firstName} ${form.lastName}`.trim(),
      // Preserve objects if they have data, otherwise use "-"
      pancardProof: (form.pancardProof.urls?.length > 0 || form.pancardProof.files?.length > 0) ? form.pancardProof : "-",
      aadharCard: (form.aadharCard.urls?.length > 0 || form.aadharCard.files?.length > 0) ? form.aadharCard : "-",
      passport: (form.passport.urls?.length > 0 || form.passport.files?.length > 0) ? form.passport : "-",
    };

    if (isEdit) {
      setUsersData((prev) =>
        prev.map((u) => (u.id === form.id ? finalForm : u))
      );
    } else {
      setUsersData((prev) => [...prev, { ...finalForm, id: Date.now() }]);
    }
    setShowForm(false);
  };

  /* ================= DELETE ================= */
  const handleDelete = (id) => {
    if (window.confirm("Delete this user?")) {
      setUsersData((prev) => prev.filter((u) => u.id !== id));
    }
  };

  /* ================= SEARCH ================= */
  const filteredUsers = usersData.filter((u) =>
    `${u.name || ""} ${u.email || ""} ${u.phone || ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  /* ================= FILE UPLOAD ================= */
  const handleFilesUpload = (field, files) => {
    if (!files) return;
    const previews = Array.from(files).map((f) =>
      URL.createObjectURL(f)
    );
    setForm((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        files: [...prev[field].files, ...previews],
      },
    }));
  };

  /* ================= URL ADD ================= */
  const handleUrlAdd = (field, value) => {
    const urls = value
      .split(",")
      .map((u) => u.trim())
      .filter(Boolean);
    setForm((prev) => ({
      ...prev,
      [field]: { ...prev[field], urls },
    }));
  };

  const renderDocStatus = (doc) => {
    if (typeof doc === 'string') return doc;
    if (doc?.urls?.length > 0 || doc?.files?.length > 0) return "Uploaded";
    return "-";
  };

  return (
    <div className="bg-white  rounded-xl  border-grey-50 shadow border">

      {/* HEADER */}
      <div className="p-6 flex justify-between items-center border-b border-gray-100 bg-white">
        <div>
          <h2 className="text-lg font-bold text-gray-800">Traveler Administration</h2>
          <p className="text-xs text-gray-500 mt-0.5">Manage and track traveler profiles</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <input
              className="bg-gray-50 border border-gray-200 pl-10 pr-4 py-2 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all w-80 outline-none"
              placeholder="Search traveler info..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute left-3 top-2 text-gray-400">🔍</span>
          </div>
          <button
            onClick={handleAddUser}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-sm hover:shadow transition-all active:scale-95 flex items-center gap-2"
          >
            <span>+</span> Add Traveler
          </button>
        </div>
      </div>

      {/* TABLE (ONE-LINE ALIGNMENT) */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm whitespace-nowrap">
          <thead className="bg-gray-50 text-xs uppercase">
            <tr>

              
              {[
                "S.No",
                "Name",
                "Email",
                "Mobile",
                "Branch",
                "PAN",
                "Aadhar",
                "Passport",
                "Joining Date",
                "Status",
                "Tour",
                "Package",
                "Next EMI",
                "EMI Amount",
                "Risk",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-center whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((u, i) => (
              <tr
                key={u.id}
                className="border-t border-gray-50 hover:bg-indigo-50/50 transition-all duration-200 group/row"
              >
                <td className="px-4 py-3">{i + 1}</td>
                <td className="px-4 py-3">{u.name}</td>
                <td className="px-4 py-3">{u.email}</td>
                <td className="px-4 py-3">{u.phone}</td>
                <td className="px-4 py-3">{u.region}</td>
                <td
                  className="px-4 py-3 cursor-pointer select-none hover:bg-indigo-50 text-green-300 transition-colors"
                  onDoubleClick={() => setViewingDoc({ label: "PAN Card", data: u.pancardProof })}
                  title="Double click to view"
                >
                  {renderDocStatus(u.pancardProof)}
                </td>
                <td
                  className="px-4 py-3 cursor-pointer select-none hover:bg-indigo-50 text-green-300 transition-colors"
                  onDoubleClick={() => setViewingDoc({ label: "Aadhar Card", data: u.aadharCard })}
                  title="Double click to view"
                >
                  {renderDocStatus(u.aadharCard)}
                </td>
                <td
                  className="px-4 py-3 cursor-pointer select-none hover:bg-indigo-50 text-green-300 transition-colors"
                  onDoubleClick={() => setViewingDoc({ label: "Passport", data: u.passport })}
                  title="Double click to view"
                >
                  {renderDocStatus(u.passport)}
                </td>
                <td className="px-4 py-3">{u.joiningDate}</td>
                {/* <td className="px-4 py-3">{u.status}</td> */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    {/* STATUS TEXT */}
                    <span
                      className={`text-sm font-semibold
    ${u.status === "Active"
                          ? "text-green-600"
                          : u.status === "Late"
                            ? "text-orange-700"
                            : u.status === "Completed"
                              ? "text-blue-600"
                              : "text-red-600"
                        }`}
                    >
                      {u.status}
                    </span>
                  </div>
                </td>

                <td className="px-4 py-3">{u.tour}</td>
                <td className="px-4 py-3 font-semibold text-gray-900">{u.packageAmount}</td>
                <td className="px-4 py-3 relative group" onClick={(e) => e.stopPropagation()}>
                  <span className="cursor-help border-b border-dotted border-gray-400 text-xs">
                    {u.nextEmiDate}
                  </span>

                  {/* Tooltip */}
                  <div className={`hidden group-hover:block absolute z-[60] ${i < 3 ? 'top-full mt-2' : 'bottom-full mb-2'} left-0 w-64 bg-white border border-indigo-100 rounded-xl shadow-2xl p-4 animate-in fade-in slide-in-from-bottom-2 duration-200`}>
                    <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                      Previous EMIs
                    </h4>

                    <div className="space-y-2">
                      {u.previousEmis && u.previousEmis.length > 0 ? (
                        u.previousEmis.map((emi, index) => (
                          <div key={index} className="flex justify-between text-xs items-center">
                            <span className="text-gray-500">{emi.month}</span>
                            <span className={`font-semibold ${emi.status === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
                              {emi.amount} ({emi.status})
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="text-xs text-gray-500">No previous EMIs</div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-gray-100 mt-3">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-gray-500">Total Paid:</span>
                        <span className="text-green-600">{u.totalPaid}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">{u.emiAmount}</td>
                <td className={`px-4 py-3 font-medium ${u.riskLevel === "Low" ? "text-green-600" :
                  u.riskLevel === "Medium" ? "text-orange-500" :
                    u.riskLevel === "High" ? "text-red-600" :
                      u.riskLevel === "Critical" ? "text-red-800 font-bold" :
                        "text-gray-400"
                  }`}>
                  {u.riskLevel === "None" ? "-" : u.riskLevel}
                </td>
                <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleEdit(u); }}
                      className="p-1.5 bg-indigo-50 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition-all"
                      title="Edit"
                    >
                      <FiEdit className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDelete(u.id); }}
                      className="p-1.5 bg-red-50 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition-all"
                      title="Delete"
                    >
                      <FiTrash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ADD / EDIT FORM */}
      {
        showForm && (
          <div
            className="fixed inset-0 bg-gray-900/40 backdrop-blur-[2px] flex justify-center items-center z-50 animate-in fade-in duration-200"
            onClick={() => setShowForm(false)}
          >
            <div
              className="bg-white p-8 rounded-2xl w-[680px] max-h-[90vh] overflow-y-auto shadow-xl relative animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="font-bold text-2xl text-gray-900">
                    {isEdit ? "Update Traveler Info" : "Register New Traveler"}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">Please provide the travelers details below</p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* NAME ROW */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div>
                  <label className="text-xs">First Name *</label>
                  <input
                    className="w-full border px-3 py-2 rounded text-sm"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="text-xs">Last Name *</label>
                  <input
                    className="w-full border px-3 py-2 rounded text-sm"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs">{errors.lastName}</p>
                  )}
                </div>

                <div>
                  <label className="text-xs">Name</label>
                  <input
                    className="w-full border px-3 py-2 rounded text-sm bg-gray-100"
                    value={`${form.firstName} ${form.lastName}`}
                    readOnly
                  />
                </div>
              </div>

              {[
                ["email", "Email *"],
                ["phone", "Mobile *"],
                ["region", "Branch"],
                ["joiningDate", "Joining Date"],
                ["tour", "Tour"],
                ["packageAmount", "Package Amount"],
                ["nextEmiDate", "Next EMI"],
                ["emiAmount", "EMI Amount"],
              ].map(([k, label]) => (
                <div key={k} className="mb-3">
                  <label className="text-xs">{label}</label>
                  {k === "region" ? (
                    <select
                      className="w-full border px-3 py-2 rounded text-sm"
                      value={form[k]}
                      onChange={(e) =>
                        setForm({ ...form, [k]: e.target.value })
                      }
                    >
                      <option value="">Select Branch</option>
                      {branches.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={k.includes("Date") ? "date" : "text"}
                      className={`w-full border px-3 py-2 rounded text-sm ${isEdit && k === "phone" ? "bg-gray-50 text-gray-500 cursor-not-allowed" : ""
                        }`}
                      value={form[k]}
                      readOnly={isEdit && k === "phone"}
                      onChange={(e) => {
                        let val = e.target.value;
                        if (k === "phone") {
                          // Only allow digits and limit to 10
                          val = val.replace(/\D/g, "").slice(0, 10);
                        }
                        setForm({ ...form, [k]: val });
                      }}
                    />
                  )}
                  {errors[k] && (
                    <p className="text-red-500 text-xs">{errors[k]}</p>
                  )}
                </div>
              ))}

              {["status", "riskLevel"].map((k) => (
                <div key={k} className="mb-3">
                  <label className="text-xs capitalize">{k}</label>
                  <select
                    className="w-full border px-3 py-2 rounded text-sm"
                    value={form[k]}
                    onChange={(e) =>
                      setForm({ ...form, [k]: e.target.value })
                    }
                  >
                    {(k === "status"
                      ? ["Active", "Inactive"]
                      : ["Low", "Medium", "High"]
                    ).map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </div>
              ))}

              {[
                ["pancardProof", "PAN"],
                ["aadharCard", "Aadhar"],
                ["passport", "Passport"],
              ].map(([field, label]) => (
                <div key={field} className="mb-4">
                  <label className="text-xs">{label}</label>
                  <input
                    className="w-full border px-3 py-2 rounded text-sm mb-2"
                    placeholder="Image URLs (comma separated)"
                    onChange={(e) =>
                      handleUrlAdd(field, e.target.value)
                    }
                  />
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) =>
                      handleFilesUpload(field, e.target.files)
                    }
                  />
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {[...form[field].files, ...form[field].urls].map(
                      (src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt=""
                          className="h-16 w-16 object-cover rounded border"
                        />
                      )
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-12 flex justify-end gap-4 border-t border-gray-100 pt-8">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2.5 rounded-xl font-semibold text-gray-500 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-indigo-600 text-white px-8 py-2.5 rounded-xl font-bold shadow-md hover:bg-indigo-700 transform hover:-translate-y-0.5 transition-all active:scale-95"
                >
                  {isEdit ? "Save Profile" : "Create Profile"}
                </button>
              </div>
            </div>
          </div>
        )
      }

      {/* DOCUMENT PREVIEW MODAL */}
      {
        viewingDoc && (
          <div
            className="fixed inset-0 bg-gray-900/40 backdrop-blur-[2px] flex justify-center items-center z-[100] animate-in fade-in duration-200"
            onClick={() => setViewingDoc(null)}
          >
            <div
              className="bg-white p-8 rounded-2xl w-[640px] shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6 border-b border-gray-50 pb-4">
                <h3 className="font-bold text-xl text-gray-800">{viewingDoc.label} Verification Proof</h3>
                <button
                  onClick={() => setViewingDoc(null)}
                  className="p-2 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all"
                >
                  ✕
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-4">
                {renderDocStatus(viewingDoc.data) === "Uploaded" ? (
                  <div className="grid grid-cols-2 gap-4">
                    {[...(viewingDoc.data.urls || []), ...(viewingDoc.data.files || [])].map((src, idx) => (
                      <div key={idx} className="group relative rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                        <img src={src} alt="Proof" className="w-full h-48 object-cover" />
                        <a
                          href={src}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold"
                        >
                          Open Original
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center text-gray-400 italic">
                    No documents uploaded for this field.
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition"
                  onClick={() => setViewingDoc(null)}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
}


