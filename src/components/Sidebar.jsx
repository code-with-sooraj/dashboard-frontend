import React from "react";
import { MdHome, MdGroup, MdCalendarToday, MdBarChart, MdSettings } from "react-icons/md";
import { MdBusiness } from 'react-icons/md';


import Logo from '../assets/image.jpg'
import { MdHeadset } from 'react-icons/md'; // Material Design Headset Icon

const Sidebar = () => {
    return (
        <div className="w-64 bg-white h-screen p-6 border-r border-gray-300">
            <div className="mb-5 m-10"><img style={{maxWidth:"150%"}} src={Logo} alt="" width={150} height={100} /></div>
            <h3 className="font-roboto mt-10 mb-6" style={{ color: '#686868', fontSize: '12px', fontWeight: '500' }}>MAIN MENU</h3>
            <ul className="space-y-10">
                <li className="flex items-center space-x-5 text-red-500 group hover:text-[#FF5151]">
                    <MdHome className="text-grayCustom group-hover:text-[#FF5151]" size={24} />
                    <span className="text-gray-600 group-hover:text-[#FF5151]">Dashboard</span>
                </li>
                <li className="flex items-center space-x-5 group hover:text-[#FF5151]">
                    <MdGroup className="text-grayCustom group-hover:text-[#FF5151]" size={24} />
                    <span className="text-gray-600 group-hover:text-[#FF5151]">Recruitment</span>
                </li>
                <li className="flex items-center space-x-5 group hover:text-[#FF5151]">
                    <MdCalendarToday className="text-grayCustom group-hover:text-[#FF5151]" size={24} />
                    <span className="text-gray-600 group-hover:text-[#FF5151]">Schedule</span>
                </li>
                <li className="flex items-center space-x-5 group hover:text-[#FF5151]">
                    <MdBarChart className="text-grayCustom group-hover:text-[#FF5151]" size={24} />
                    <span className="text-gray-600 group-hover:text-[#FF5151]">Employee</span>
                </li>
                <li className="flex items-center space-x-5 group hover:text-[#FF5151]">
                    <MdBusiness className="text-grayCustom group-hover:text-[#FF5151]" size={24} />
                    <span className="text-gray-600 group-hover:text-[#FF5151]">Business</span>
                </li>
            </ul>
            <h3 className="font-roboto mt-10 mb-6" style={{ color: '#686868', fontSize: '12px', fontWeight: '500' }}>OTHER</h3>
            <ul className="space-y-10">
                <li className="flex items-center space-x-5 group hover:text-[#FF5151]">
                    <MdHeadset className="text-grayCustom group-hover:text-[#FF5151]" size={24} />
                    <span className="text-gray-600 group-hover:text-[#FF5151]">Support</span>
                </li>
                <li className="flex items-center space-x-5 group hover:text-[#FF5151]">
                    <MdSettings className="text-grayCustom group-hover:text-[#FF5151]" size={24} />
                    <span className="text-gray-600 group-hover:text-[#FF5151]">Settings</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
