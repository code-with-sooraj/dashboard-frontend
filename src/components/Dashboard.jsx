import React from "react";
import OverviewCard from "./OverviewCard";
import BigCard from "./BigCard";
import SelectCard from "./SelectCard";
import TitleCard from "./TitleCard";
import ActivityCard from "./ActivityCard";

const Dashboard = () => {
  const overviewCardsData = [
    {
      title: "Available Position",
      count: "24",
      tcolor: "#FF5151",
      bgColor: "bg-red-100",
      urgent: "4 Urgently needed",
    },
    {
      title: "Job Open",
      count: "10",
      tcolor: "#3786F1",
      bgColor: "bg-blue-100",
      urgent: "4 Active hiring",
    },
    {
      title: "New Employees",
      count: "24",
      tcolor: "#EE61CF",
      bgColor: "bg-pink-100",
      urgent: "4 Department",
    },
  ];

  const bigCardsData = [
    {
      title: "Total Employees",
      count: "216",
      men: "120",
      women: "96",
      growth: "2",
    },
    {
      title: "Talent Request",
      count: "16",
      men: "6",
      women: "10",
      growth: "5",
    },
  ];

  const selectCardsData = [
    { title: "Outing schedule for every department", time: "5 Minutes ago" },
    { title: "Meeting HR department", time: "Yesterday, 12:30 PM" },
    {
      title: "IT department needs two more talents for UX/UI Designer position",
      time: "Yesterday, 9:15 AM",
    },
  ];

  return (
    <div className="flex-3 bg-white ml-4 md:ml-12 mt-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 ml-5">Dashboard</h1>

      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="flex flex-col w-full md:w-3/5">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 ml-5">
            {overviewCardsData.map((data, index) => (
              <OverviewCard
                key={index}
                title={data.title}
                count={data.count}
                tcolor={data.tcolor}
                bgColor={data.bgColor}
                urgent={data.urgent}
              />
            ))}
          </div>

          {/* Big Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ml-5">
            {bigCardsData.map((data, index) => (
              <BigCard
                key={index}
                title={data.title}
                count={data.count}
                men={data.men}
                women={data.women}
                growth={data.growth}
              />
            ))}
          </div>

          {/* Select Cards */}
          <div className="space-y-2 mb-6 ml-5 border-2 border-gray-300 p-5 rounded-lg">
            <TitleCard title="Announcement" date="Today, 13 Sep 2021" />
            {selectCardsData.map((data, index) => (
              <SelectCard key={index} title={data.title} time={data.time} />
            ))}

            <p className="text-center font-poppins" style={{color:"#FF5151", fontSize:"14px"}}>See all announcements</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 mb-6 ml-5 w-full md:w-2/5">
          <ActivityCard/>
          <div className="space-y-2 mb-6 ml-5 border-2 border-gray-300 p-5 rounded-lg">
            <div className="">            
              <TitleCard title="Upcoming Schedule" date="Today, 13 Sep 2021"/>
            </div>
            <h6 className="font-robot" style={{color:"#686868"}}>Priority</h6> 
            <SelectCard title="Review candidates application" time="Today, 11:30 AM"/>
            <h6 className="font-robot" style={{color:"#686868"}}>Other</h6>
            <SelectCard title="Interview with candidates" time="Today, 10:30 AM"/>
            <SelectCard title="Short meeting with product designer from IT Department" time="Today, 9:15 AM"/>
            <p className="text-center font-poppins" style={{color:"#FF5151", fontSize:"14px"}}>See all announcements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
