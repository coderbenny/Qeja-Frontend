import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../context/axios";
import { AuthContext } from "../context/AuthContext";
import debounce from "lodash.debounce";

const RoomMates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roommates, setRoommates] = useState([]);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchRoommates = useCallback(async () => {
    const token = sessionStorage.getItem("access_token");
    if (!token) return;

    try {
      const res = await axios.get("/roommates", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        const data = res.data;
        const filteredRoommates = data.filter(
          (roommate) => roommate.email !== user.email
        );
        setRoommates(filteredRoommates);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }, [user.email]);

  useEffect(() => {
    fetchRoommates();

    return () => {
      setRoommates([]);
    };
  }, [fetchRoommates]);

  const handleViewMore = (id) => {
    navigate(`/profiles/${id}`);
  };

  const debouncedSearchChange = useMemo(
    () =>
      debounce((e) => {
        setSearchTerm(e.target.value);
      }, 300),
    []
  );

  useEffect(() => {
    return () => {
      debouncedSearchChange.cancel();
    };
  }, [debouncedSearchChange]);

  const filteredRoommates = useMemo(
    () =>
      roommates.filter((roommate) =>
        roommate.profile?.location
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())
      ),
    [roommates, searchTerm]
  );

  console.log(filteredRoommates);
  console.log(roommates);

  return (
    <div className="mx-auto h-[100vh] w-full py-20 px-4 cursor-pointer bg-gray-100">
      <div className="mb-4">
        <input
          type="text"
          defaultValue={searchTerm}
          onChange={debouncedSearchChange}
          placeholder="Search by location..."
          className="border rounded px-4 py-2 mb-2 w-full"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto">
        {roommates.length > 0 ? (
          roommates.map((roommate) => (
            <div
              key={roommate.id}
              className="rental-card bg-white rounded-md border-2 border-gray-200 overflow-hidden transition duration-300 ease-in-out transform hover:shadow-lg mb-1"
              onClick={() => handleViewMore(roommate.id)}
            >
              <img
                src={
                  roommate.profile?.profile_pic ||
                  "https://via.placeholder.com/150"
                }
                alt={roommate.name}
                className="w-full h-48 object-cover"
              />
              <div className="flex items-center p-4 justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1 capitalize">
                    {roommate.name}
                  </h3>
                  <p className="text-gray-500">
                    {roommate.profile?.location || "No location provided"}
                  </p>
                </div>
                <button className="view-details-btn hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out">
                  View Profile
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col p-3 items-center mx-auto justify-center text-center text-gray-500">
            <h2 className="text-center text-3xl mx-auto">
              No Roommates available
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomMates;
