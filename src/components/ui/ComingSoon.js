import React from "react";

const ComingSoon = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        Coming Soon: Analytics Dashboard
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center">
          <div className="text-4xl text-green-500 mb-2">
            <i className="fas fa-clock"></i>
          </div>
          <p className="text-sm text-gray-700">
            Real-time analytics on posted houses
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center">
          <div className="text-4xl text-blue-500 mb-2">
            <i className="fas fa-money-bill-wave"></i>
          </div>
          <p className="text-sm text-gray-700">
            Financial insights and transactions
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center">
          <div className="text-4xl text-purple-500 mb-2">
            <i className="fas fa-chart-line"></i>
          </div>
          <p className="text-sm text-gray-700">
            Revenue and earnings projections
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center">
          <div className="text-4xl text-yellow-500 mb-2">
            <i className="fas fa-user-chart"></i>
          </div>
          <p className="text-sm text-gray-700">
            Property owner performance metrics
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center">
          <div className="text-4xl text-indigo-500 mb-2">
            <i className="fas fa-user-friends"></i>
          </div>
          <p className="text-sm text-gray-700">User engagement analytics</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center">
          <div className="text-4xl text-red-500 mb-2">
            <i className="fas fa-bell"></i>
          </div>
          <p className="text-sm text-gray-700">Notifications and alerts</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
