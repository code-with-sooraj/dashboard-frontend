import React from "react";

const ActivityCard = () => {
  return (
    <div className="text-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto sm:w-90 sm:h-80" style={{ background: "#161E54" }}>
      <h2 className="text-lg font-poppins mb-4">Recently Activity</h2>
      <p className="text-sm text-gray-300 mb-2">10:40 AM, Fri 10 Sept 2021</p>
      <h3 className="text-xl font-normal mb-3">You Posted a New Job</h3>
      <p className="font-poppins text-sm mb-6">
        Kindly check the requirements and terms of work and make sure everything is right.
      </p>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="font-poppins text-sm mb-4 sm:mb-0">Today you made 12 Activities</p>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600">
          See All Activity
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
