import { useEffect, useState } from "react";

const tourImages = {
  dubai: "/assets/tours/dubai.jpg",
  thailand: "/assets/tours/thailand.jpg",
  singapore: "/assets/tours/singapore.jpg",
  malaysia: "/assets/tours/malaysia.jpg",
  bali: "/assets/tours/bali.jpg",
  default: "/assets/tours/default.jpg",
};

export default function TourManagement() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    tour_name: "",
    tour_code: "",
    start_date: "",
    end_date: "",
    slots: "",
    tour_description: "",
    package_price: "",
    available_slots: "",
    booked_slots: "",
    arrival_at: "",
    depature_at: "",
    arrivals_place: "",
    depature_place: "",
    days_count: "",
    nights_count: "",
    emi_per_month: "",
    tour_image_url: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  const fetchTours = () => {
    setLoading(true);
    fetch("https://marktours-services-jn6cma3vvq-el.a.run.app/tours-config")
      .then((res) => res.json())
      .then((data) => {
        setTours(data.tours || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const getTourImage = (name = "") => {
    const lower = name.toLowerCase();
    if (lower.includes("dubai")) return tourImages.dubai;
    if (lower.includes("thailand")) return tourImages.thailand;
    if (lower.includes("singapore")) return tourImages.singapore;
    if (lower.includes("malaysia")) return tourImages.malaysia;
    if (lower.includes("bali")) return tourImages.bali;
    return tourImages.default;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveTour = (e) => {
    e.preventDefault();

    const url = isEdit
      ? `https://marktours-services-jn6cma3vvq-el.a.run.app/tours-config/${formData.tour_code}`
      : "https://marktours-services-jn6cma3vvq-el.a.run.app/tours-config";
    const method = isEdit ? "PUT" : "POST";

    // Helper to format date for API (adding time if missing)
    const formatDateTime = (dateStr) => {
      if (!dateStr) return null;
      if (dateStr.includes("T")) return dateStr;
      return `${dateStr}T09:00:00`; // Default time as seen in sample
    };

    // Automatic Tour Code generation (e.g., DU123015)
    const generateTourCode = (name) => {
      const prefix = (name || "TRP").substring(0, 2).toUpperCase();
      const suffix = Date.now().toString().slice(-6);
      return `${prefix}${suffix}`;
    };

    const payload = {
      tour_name: formData.tour_name,
      tour_code: isEdit ? formData.tour_code : generateTourCode(formData.tour_name),
      start_date: formatDateTime(formData.start_date),
      end_date: formatDateTime(formData.end_date),
      slots: Number(formData.slots),
      tour_description: formData.tour_description,
      package_price: Number(formData.package_price),
      available_slots: formData.available_slots ? Number(formData.available_slots) : Number(formData.slots),
      booked_slots: formData.booked_slots ? Number(formData.booked_slots) : 0,
      arrival_at: formatDateTime(formData.arrival_at),
      depature_at: formatDateTime(formData.depature_at),
      arrivals_place: formData.arrivals_place,
      depature_place: formData.depature_place,
      days_count: Number(formData.days_count),
      nights_count: Number(formData.nights_count),
      emi_per_month: Number(formData.emi_per_month),
      tour_image_url: formData.tour_image_url,
    };

    console.log("Tour Management Payload:", payload);

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.detail || "Save failed");
        }
        return res.json();
      })
      .then(() => {
        setShowCreateModal(false);
        resetForm();
        fetchTours();
      })
      .catch((err) => {
        console.error("Save tour failed:", err);
        alert(`Failed: ${err.message}`);
      });
  };

  const handleDeleteTour = (tourCode) => {
    if (!window.confirm("Are you sure you want to delete this tour?")) return;

    fetch(`https://marktours-services-jn6cma3vvq-el.a.run.app/tours-config/${tourCode}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete failed");
        fetchTours();
      })
      .catch((err) => console.error("Delete tour failed:", err));
  };

  const handleCreateClick = () => {
    resetForm();
    setShowCreateModal(true);
  };

  const handleEditClick = (tour) => {
    setFormData({
      ...tour,
      start_date: tour.start_date?.split("T")[0] || "",
      end_date: tour.end_date?.split("T")[0] || "",
      arrival_at: tour.arrival_at?.split("T")[0] || "",
      depature_at: tour.depature_at?.split("T")[0] || "",
    });
    setIsEdit(true);
    setShowCreateModal(true);
  };

  const resetForm = () => {
    setFormData({
      id: null,
      tour_name: "",
      tour_code: "",
      start_date: "",
      end_date: "",
      slots: "",
      tour_description: "",
      package_price: "",
      available_slots: "",
      booked_slots: "",
      arrival_at: "",
      depature_at: "",
      arrivals_place: "",
      depature_place: "",
      days_count: "",
      nights_count: "",
      emi_per_month: "",
      tour_image_url: "",
    });
    setIsEdit(false);
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800">Tour Management</h2>
        <button
          onClick={handleCreateClick}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-indigo-700"
        >
          Create New Tour
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col"
          >
            <div className="flex gap-3">
              <div className="w-[60%] h-[80px] rounded-lg overflow-hidden">
                <img
                  src={tour.tour_image_url || getTourImage(tour.tour_name)}
                  alt={tour.tour_name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-lg font-bold leading-tight">
                  {tour.tour_name.toUpperCase()}
                </h2>
                <p className="mt-1 text-gray-600 text-xs">
                  TRIP CODE : {tour.tour_code}
                </p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="border border-gray-300 bg-gray-50 rounded-lg py-1 text-center">
                <p className="text-black text-[10px] tracking-wider">
                  BOOKED
                </p>
                <p className="text-md font-semibold">{tour.booked_slots}</p>
              </div>

              <div className="border border-gray-300 bg-gray-50 rounded-lg py-1 text-center">
                <p className="text-black text-[10px] tracking-wider">
                  REVENUE
                </p>
                <p className="text-md font-semibold">
                  ₹{(tour.package_price * tour.booked_slots).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() => handleEditClick(tour)}
                className="flex-1 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTour(tour.tour_code)}
                className="flex-1 py-2 rounded-lg bg-rose-600 text-white text-xs font-semibold hover:bg-rose-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CREATE TOUR MODAL */}
      {showCreateModal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setShowCreateModal(false)}
        >
          <div
            className="bg-white w-full max-w-md rounded-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-4">
              {isEdit ? "Edit Tour" : "Create New Tour"}
            </h3>

            <form onSubmit={handleSaveTour} className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="text-xs font-semibold text-gray-500">Tour Name</label>
                  <input
                    name="tour_name"
                    placeholder="Tour Name"
                    value={formData.tour_name}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">Package Price (₹)</label>
                  <input
                    type="number"
                    name="package_price"
                    placeholder="Package Price"
                    value={formData.package_price}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">Start Date</label>
                  <input
                    type="date"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">End Date</label>
                  <input
                    type="date"
                    name="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">Arrival At</label>
                  <input
                    type="date"
                    name="arrival_at"
                    value={formData.arrival_at}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">Departure At</label>
                  <input
                    type="date"
                    name="depature_at"
                    value={formData.depature_at}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">Arrival Place</label>
                  <input
                    name="arrivals_place"
                    placeholder="Arrival Place"
                    value={formData.arrivals_place}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">Departure Place</label>
                  <input
                    name="depature_place"
                    placeholder="Departure Place"
                    value={formData.depature_place}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">Total Slots</label>
                  <input
                    type="number"
                    name="slots"
                    placeholder="Total Slots"
                    value={formData.slots}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">EMI Per Month (₹)</label>
                  <input
                    type="number"
                    name="emi_per_month"
                    placeholder="EMI"
                    value={formData.emi_per_month}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">Days Count</label>
                  <input
                    type="number"
                    name="days_count"
                    placeholder="Days"
                    value={formData.days_count}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">Nights Count</label>
                  <input
                    type="number"
                    name="nights_count"
                    placeholder="Nights"
                    value={formData.nights_count}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 text-sm"
                  />
                </div>

                {isEdit && (
                  <>
                    <div>
                      <label className="text-xs font-semibold text-gray-500">Available Slots</label>
                      <input
                        type="number"
                        name="available_slots"
                        placeholder="Available Slots"
                        value={formData.available_slots}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-2 text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-500">Booked Slots</label>
                      <input
                        type="number"
                        name="booked_slots"
                        placeholder="Booked Slots"
                        value={formData.booked_slots}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-2 text-sm"
                      />
                    </div>
                  </>
                )}

                <div className="col-span-2">
                  <label className="text-xs font-semibold text-gray-500">Image URL</label>
                  <input
                    name="tour_image_url"
                    placeholder="Image URL"
                    value={formData.tour_image_url}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 text-sm"
                  />
                </div>

                <div className="col-span-2">
                  <label className="text-xs font-semibold text-gray-500">Description</label>
                  <textarea
                    name="tour_description"
                    placeholder="Description"
                    value={formData.tour_description}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 text-sm h-20"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700"
                >
                  {isEdit ? "Save Changes" : "Create Tour"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    resetForm();
                  }}
                  className="flex-1 bg-gray-200 py-2 rounded-lg text-sm font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
