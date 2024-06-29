import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "../context/axios";

export default function Overview() {
  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    const token = sessionStorage.getItem("access_token");
    try {
      const res = axios.delete(`/properties/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 204) {
        alert("property deleted succesfully");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="px-4">
      <h1 className="font-bold text-xl mb-3 text-red-600">Overview</h1>

      <div className="">
        <div className="flex flex-col md:flex-row gap-2 mb-3">
          <div className="rounded-md bg-gray-200 h-[200px] w-full mb-2 md:mb-0">
            <h3 className="font-bold text-lg text-center text-blue-600">
              Messages
            </h3>
            <div className="flex flex-col justify-center">
              {user?.received_messages.length > 0 ? (
                user.received_messages.map((m, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-300 h-[50px]"
                  ></div>
                ))
              ) : (
                <p className="flex items-center justify-center text-center mt-5">
                  No messages yet
                </p>
              )}
            </div>
          </div>
          <div className="rounded-md bg-gray-200 h-[200px] w-full">
            <h3 className="font-bold text-lg text-center text-blue-600">
              Followers
            </h3>
          </div>
        </div>
        <div className="bg-gray-200 h-[230px] w-full">
          <div className="p-2">
            <div className="flex justify-between mb-2">
              <h3 className="font-bold text-lg text-center text-red-600">
                My Units
              </h3>
              <div className="flex flex-wrap bg-white p-1 rounded-md">
                <label className="items-center px-1">Filter By</label>
                <select className="mr-2 mb-2 md:mb-0">
                  <option value="1">Rooms</option>
                  <option value="2">Yes</option>
                  <option value="3">No</option>
                </select>
                <select className="mr-2 mb-2 md:mb-0">
                  <option value="1">Balcony</option>
                  <option value="2">Yes</option>
                  <option value="3">No</option>
                </select>
                <select className="mr-2">
                  <option value="1">Parking</option>
                  <option value="2">Yes</option>
                  <option value="3">No</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[170px] overflow-y-auto">
              {user.properties.length > 0 ? (
                user.properties.map((u, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg shadow-md p-4 h-40 flex flex-col justify-center items-center hover:shadow-lg transition-shadow duration-200 bg-cover bg-center"
                    style={{ backgroundImage: `url(${u.pic1})` }}
                  >
                    <h4 className="font-bold text-white">Unit</h4>
                    <p className="text-gray-200">Location: {u.location}</p>
                    <button
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded"
                      onClick={() => handleDelete(u.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p className="font-semibold text-gray-500">
                  No Properties available
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
