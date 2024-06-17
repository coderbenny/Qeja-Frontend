export default function Overview() {
  const units = [1, 2, 3, 4, 5, 6];

  return (
    <div className="">
      <h1 className="font-bold text-xl mb-3">Overview</h1>

      <div className="">
        <div className="flex flex-col md:flex-row gap-2 mb-3">
          <div className="rounded-md bg-gray-200 h-[200px] w-full mb-2 md:mb-0">
            <h3 className="font-bold text-lg text-center">Messages</h3>
          </div>
          <div className="rounded-md bg-gray-200 h-[200px] w-full">
            <h3 className="font-bold text-lg text-center">Followers</h3>
          </div>
        </div>
        <div className="bg-gray-200 h-[230px] w-full">
          <div className="p-2">
            <div className="flex justify-between mb-2">
              <h3 className="font-bold text-lg text-center">My Units</h3>
              <div className="flex bg-white p-1 rounded-md">
                <label className="items-center px-1">Filter By</label>
                <select className="mr-2">
                  <option value="1">Rooms</option>
                  <option value="2">Yes</option>
                  <option value="3">No</option>
                </select>
                <select className="mr-2">
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-h-[170px] overflow-y-auto">
              {units.map((u, index) => (
                <div key={index} className="h-[160px] w-full bg-white"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
