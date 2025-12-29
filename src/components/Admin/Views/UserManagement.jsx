import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash2, FiSearch } from "react-icons/fi";

const BASE_URL = "https://marktours-services-jn6cma3vvq-el.a.run.app";
const AGENT_ID = 10001;

export default function UserManagement() {
  const [usersData, setUsersData] = useState([]);
  const [search, setSearch] = useState("");

  const [expandedUserId, setExpandedUserId] = useState(null);
  const [extraDetails, setExtraDetails] = useState([]);
  const [extraLoading, setExtraLoading] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [originalUser, setOriginalUser] = useState(null);

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
    try {
      const res = await fetch(`${BASE_URL}/user-details`);
      const data = await res.json();
      setUsersData(data.user_details || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /* ================= SEARCH ================= */
  const filteredUsers = usersData.filter((u) =>
    `${u.name} ${u.email} ${u.mobile} ${u.branch}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  /* ================= ROW CLICK ================= */
  const toggleRow = async (user) => {
    if (expandedUserId === user.user_id) {
      setExpandedUserId(null);
      return;
    }

    setExpandedUserId(user.user_id);
    setExtraLoading(true);
    setExtraDetails([]);

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
    setForm({ ...u });
    setShowForm(true);
  };

  /* ================= SAVE ================= */
  const handleSave = async () => {
    const isUpdate = Boolean(originalUser);

    const payload = isUpdate
      ? { agent_id: AGENT_ID, ...form }
      : { agent_id: AGENT_ID, ...form, is_active: true };

    const url = isUpdate
      ? `${BASE_URL}/user-details/${originalUser.user_id}`
      : `${BASE_URL}/user-details`;

    try {
      const res = await fetch(url, {
        method: isUpdate ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

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
      {/* HEADER */}
      <div className="p-6 flex justify-between items-center border-b">
        <div>
          <h2 className="text-xl font-bold">Travel Assessment</h2>
          <p className="text-sm text-gray-500">
            Manage traveler records & roles
          </p>
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search traveler info..."
              className="pl-10 pr-4 py-2 border rounded-lg text-sm w-64"
            />
          </div>

          <button
            onClick={handleAddUser}
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
          >
            + Add Member
          </button>
        </div>
      </div>

      {/* TABLE HEADER */}
      <div className="grid grid-cols-7 gap-4 px-6 py-3 text-xs font-semibold text-gray-500 bg-gray-50">
        <div>S.NO</div>
        <div>NAME</div>
        <div>EMAIL</div>
        <div>MOBILE</div>
        <div>BRANCH</div>
        <div>ROLE</div>
        <div>ACTIONS</div>
      </div>

      {/* USERS */}
      {filteredUsers.map((u, i) => (
        <div key={u.user_id} className="border-b">
          {/* MAIN ROW */}
          <div
            onClick={() => toggleRow(u)}
            className="grid grid-cols-7 gap-4 px-6 py-4 text-sm cursor-pointer hover:bg-gray-50"
          >
            <div>{i + 1}</div>
            <div className="font-medium">{u.name}</div>
            <div>{u.email}</div>
            <div>{u.mobile}</div>
            <div>{u.branch}</div>
            <div>{u.is_active ? "Agent" : "Inactive"}</div>
            <div className="flex gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(u);
                }}
                className="text-indigo-600"
              >
                <FiEdit />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(u.user_id);
                }}
                className="text-red-500"
              >
                <FiTrash2 />
              </button>
            </div>
          </div>

          {/* EXPANDED DETAILS */}
          {expandedUserId === u.user_id && (
            <div className="bg-gray-50 px-6 pb-6">
              {extraLoading && <p className="py-4">Loading details...</p>}

              {!extraLoading && extraDetails.length === 0 && (
                <p className="py-4 text-gray-500">
                  No extra details found
                </p>
              )}

              {!extraLoading && extraDetails.length > 0 && (
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-xs border rounded-lg">
                    <thead className="bg-gray-200">
                      <tr>
                        {[
                          "S.No",
                          "Name",
                          "Surname",
                          "Mobile",
                          "Passport No",
                          "Issued By",
                          "Passport",
                          "DOB",
                          "Nationality",
                          "Gender",
                          "Tour Code",
                          "Agreed",
                          "Aadhar Front",
                          "Aadhar Back",
                          "Created",
                        ].map((h) => (
                          <th key={h} className="px-3 py-2 text-left">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {extraDetails.map((d, index) => (
                        <tr key={d.id} className="border-t bg-white">
                          <td className="px-3 py-2">{index + 1}</td>
                          <td className="px-3 py-2">{d.name || "-"}</td>
                          <td className="px-3 py-2">{d.surname || "-"}</td>
                          <td className="px-3 py-2">{d.mobile || "-"}</td>
                          <td className="px-3 py-2">{d.passportno || "-"}</td>
                          <td className="px-3 py-2">{d.issuedby || "-"}</td>

                          <td className="px-3 py-2">
                            <div
                              className={
                                d.is_passport_available
                                  ? "text-green-600 font-semibold"
                                  : "text-red-500 font-semibold"
                              }
                            >
                              {d.is_passport_available ? "YES" : "NO"}
                            </div>
                            {d.is_passport_available &&
                              d.passport_image_url && (
                                <button
                                  onClick={() =>
                                    window.open(
                                      d.passport_image_url,
                                      "_blank"
                                    )
                                  }
                                  className="text-indigo-600 underline text-xs mt-1"
                                >
                                  View
                                </button>
                              )}
                          </td>

                          <td className="px-3 py-2">{d.dob || "-"}</td>
                          <td className="px-3 py-2">
                            {d.nationality || "-"}
                          </td>
                          <td className="px-3 py-2">{d.gender || "-"}</td>
                          <td className="px-3 py-2">{d.tour_code || "-"}</td>
                          <td className="px-3 py-2">
                            {d.isagreed ? "Yes" : "No"}
                          </td>

                          <td className="px-3 py-2">
                            {d.aadhar_front_url ? (
                              <>
                                <div className="text-green-600 font-semibold">
                                  UPLOADED
                                </div>
                                <button
                                  onClick={() =>
                                    window.open(
                                      d.aadhar_front_url,
                                      "_blank"
                                    )
                                  }
                                  className="text-indigo-600 underline text-xs"
                                >
                                  View
                                </button>
                              </>
                            ) : (
                              "-"
                            )}
                          </td>

                          <td className="px-3 py-2">
                            {d.aadhar_back_url ? (
                              <>
                                <div className="text-green-600 font-semibold">
                                  UPLOADED
                                </div>
                                <button
                                  onClick={() =>
                                    window.open(
                                      d.aadhar_back_url,
                                      "_blank"
                                    )
                                  }
                                  className="text-indigo-600 underline text-xs"
                                >
                                  View
                                </button>
                              </>
                            ) : (
                              "-"
                            )}
                          </td>

                          <td className="px-3 py-2">
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
        </div>
      ))}
    </div>
  );
}
