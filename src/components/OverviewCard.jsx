import React from "react";

const OverviewCard = ({ title, count, tcolor, bgColor, urgent }) => {
  return (
    <div className={`p-4 md:p-6 rounded-lg shadow-md ${bgColor}`}>
      <h2 className="m-2 md:m-3 text-lg md:text-xl font-medium">{title}</h2>
      <p className="m-2 md:m-3 text-2xl md:text-3xl font-medium">{count}</p>
      <p className="m-2 md:m-3 text-xs md:text-sm" style={{ color: tcolor }}>{urgent}</p>
    </div>
  );
};

export default OverviewCard;
