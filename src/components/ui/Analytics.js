import React from "react";

const Analytics = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        <span className="text-red-600 text-2xl font-bold">Coming Soon:</span>{" "}
        Analytics Dashboard
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg flex flex-col items-center justify-center text-center">
          <div className="text-4xl text-purple-800 mb-2">
            <i className="fas fa-clock"></i>
          </div>
          <p className="text-sm text-gray-800">
            Real-time analytics on posted houses
          </p>
        </div>
        <div className="p-4 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex flex-col items-center justify-center text-center">
          <div className="text-4xl text-blue-800 mb-2">
            <i className="fas fa-money-bill-wave"></i>
          </div>
          <p className="text-sm text-gray-800">
            Financial insights and transactions
          </p>
        </div>
        <div className="p-4 bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex flex-col items-center justify-center text-center">
          <div className="text-4xl text-green-800 mb-2">
            <i className="fas fa-chart-line"></i>
          </div>
          <p className="text-sm text-gray-800">
            Revenue and earnings projections
          </p>
        </div>
        <div className="p-4 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg flex flex-col items-center justify-center text-center">
          <div className="text-4xl text-yellow-800 mb-2">
            <i className="fas fa-user-chart"></i>
          </div>
          <p className="text-sm text-gray-800">
            Property owner performance metrics
          </p>
        </div>
        <div className="p-4 bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg flex flex-col items-center justify-center text-center">
          <div className="text-4xl text-pink-800 mb-2">
            <i className="fas fa-user-friends"></i>
          </div>
          <p className="text-sm text-gray-800">User engagement analytics</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-red-200 to-red-300 rounded-lg flex flex-col items-center justify-center text-center">
          <div className="text-4xl text-red-800 mb-2">
            <i className="fas fa-bell"></i>
          </div>
          <p className="text-sm text-gray-800">Notifications and alerts</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
