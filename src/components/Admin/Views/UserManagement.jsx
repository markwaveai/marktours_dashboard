import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const BASE_URL = "https://marktours-services-jn6cma3vvq-el.a.run.app";
const AGENT_ID = 10001;

export default function UserManagement() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [originalUser, setOriginalUser] = useState(null);

  const [selectedUser, setSelectedUser] = useState(null);
  const [extraDetails, setExtraDetails] = useState([]);
  const [extraLoading, setExtraLoading] = useState(false);

  const emptyForm = {
    user_id: null,
    name: "",
    address: "",
    branch: "",
    mobile: "",
    email: "",
    is_active: true,
  };

  const [form, setForm] = useState(emptyForm);

  /* ================= GET USERS ================= */
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/user-details`);
      const data = await res.json();
      setUsersData(data.user_details || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /* ================= GET EXTRA DETAILS ================= */
  const fetchExtraDetails = async (user) => {
    setSelectedUser(user);
    setExtraDetails([]);
    setExtraLoading(true);

    try {
      const res = await fetch(
        `${BASE_URL}/user-extra-details/${user.user_id}`
      );
      const data = await res.json();
      setExtraDetails(data.user_extra_details || []);
    } catch (err) {
      console.error(err);
    } finally {
      setExtraLoading(false);
    }
  };

  /* ================= ADD ================= */
  const handleAddUser = () => {
    setForm(emptyForm);
    setOriginalUser(null);
    setShowForm(true);
  };

  /* ================= EDIT ================= */
  const handleEdit = (u) => {
    setOriginalUser(u);
    setForm({
      user_id: u.user_id,
      name: u.name,
      address: u.address,
      branch: u.branch,
      mobile: u.mobile,
      email: u.email,
      is_active: u.is_active,
    });
    setShowForm(true);
  };

  /* ================= SAVE ================= */
  const handleSave = async () => {
    const isUpdate = Boolean(originalUser);

    const payload = isUpdate
      ? {
          user_id: originalUser.user_id,
          agent_id: AGENT_ID,
          ...form,
        }
      : {
          agent_id: AGENT_ID,
          ...form,
          is_active: true,
        };

    const url = isUpdate
      ? `${BASE_URL}/user-details/${originalUser.user_id}`
      : `${BASE_URL}/user-details`;

    try {
      const res = await fetch(url, {
        method: isUpdate ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error();

      fetchUsers();
      setShowForm(false);
    } catch {
      alert("Save failed");
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete user?")) return;
    await fetch(`${BASE_URL}/user-details/${id}`, { method: "DELETE" });
    fetchUsers();
  };

  return (
    <div className="bg-white rounded-xl shadow border">
      <div className="p-6 flex justify-between border-b">
        <h2 className="font-bold text-lg">User Management</h2>
        <button
          onClick={handleAddUser}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
        >
          + Add User
        </button>
      </div>

      {/* ================= USERS TABLE ================= */}
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            {["S.No", "Name", "Email", "Mobile", "Branch", "Status", "Action"].map(
              (h) => (
                <th key={h} className="px-4 py-3">
                  {h}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {usersData.map((u, i) => (
            <tr
              key={u.user_id}
              className="hover:bg-gray-100 cursor-pointer"
              onClick={() => fetchExtraDetails(u)}
            >
              <td className="px-4 py-2">{i + 1}</td>
              <td className="px-4 py-2">{u.name}</td>
              <td className="px-4 py-2">{u.email}</td>
              <td className="px-4 py-2">{u.mobile}</td>
              <td className="px-4 py-2">{u.branch}</td>
              <td className="px-4 py-2">
                {u.is_active ? "Active" : "Inactive"}
              </td>
              <td className="px-4 py-2 flex gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(u);
                  }}
                >
                  <FiEdit />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(u.user_id);
                  }}
                >
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ================= EXTRA DETAILS (FULL FIELDS) ================= */}
      {selectedUser && (
        <div className="p-6 border-t bg-gray-50">
          <h3 className="font-bold text-lg mb-4">
            Extra Details – {selectedUser.name} (ID: {selectedUser.user_id})
          </h3>

          {extraLoading && <p>Loading...</p>}

          {!extraLoading && extraDetails.length === 0 && (
            <p>No extra details found</p>
          )}

          {!extraLoading && extraDetails.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-xs border">
                <thead className="bg-gray-200">
                  <tr>
                    {[
                      "Passenger",
                      "Surname",
                      "Mobile",
                      "Passport No",
                      "Issued By",
                      "Passport Available",
                      "DOB",
                      "Nationality",
                      "Gender",
                      "Tour Code",
                      "Agreed",
                      "Passport Image",
                      "Aadhar Front",
                      "Aadhar Back",
                      "Pancard",
                      "Created",
                    ].map((h) => (
                      <th key={h} className="px-2 py-2">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {extraDetails.map((d) => (
                    <tr key={d.id} className="border-t">
                      <td className="px-2 py-1">{d.name || "-"}</td>
                      <td className="px-2 py-1">{d.surname || "-"}</td>
                      <td className="px-2 py-1">{d.mobile || "-"}</td>
                      <td className="px-2 py-1">{d.passportno || "-"}</td>
                      <td className="px-2 py-1">{d.issuedby || "-"}</td>
                      <td className="px-2 py-1">
                        {d.is_passport_available ? "Yes" : "No"}
                      </td>
                      <td className="px-2 py-1">{d.dob || "-"}</td>
                      <td className="px-2 py-1">{d.nationality || "-"}</td>
                      <td className="px-2 py-1">{d.gender || "-"}</td>
                      <td className="px-2 py-1">{d.tour_code || "-"}</td>
                      <td className="px-2 py-1">
                        {d.isagreed ? "Yes" : "No"}
                      </td>
                      <td className="px-2 py-1">
                        {d.passport_image_url ? "Uploaded" : "-"}
                      </td>
                      <td className="px-2 py-1">
                        {d.aadhar_front_url ? "Uploaded" : "-"}
                      </td>
                      <td className="px-2 py-1">
                        {d.aadhar_back_url ? "Uploaded" : "-"}
                      </td>
                      <td className="px-2 py-1">
                        {d.pancard_url ? "Uploaded" : "-"}
                      </td>
                      <td className="px-2 py-1">
                        {new Date(d.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ================= FORM MODAL ================= */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl w-[600px]">
            <h3 className="text-xl font-bold mb-6">
              {originalUser ? "Edit User" : "Add User"}
            </h3>

            {["name", "email", "mobile", "branch", "address"].map((k) => (
              <input
                key={k}
                placeholder={k}
                value={form[k]}
                onChange={(e) =>
                  setForm({ ...form, [k]: e.target.value })
                }
                className="w-full border px-3 py-2 mb-3"
              />
            ))}

            <button
              onClick={handleSave}
              className="bg-indigo-600 text-white px-6 py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
