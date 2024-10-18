import React from 'react';
import { FaBell, FaCommentDots, FaSearch } from 'react-icons/fa';
import User from '../assets/user2.png'
import { FaCaretDown } from 'react-icons/fa';
const Header = () => {
  return (
    <div className=' bg-white ml-12'>
    <div className="flex w-full items-center justify-between p-4">
      <div className="flex items-center m-2 border border-gray-300 rounded-lg px-3 py-2 w-1/4 h-12">
        <input type="text" placeholder="Search" className="outline-none flex-grow bg-transparent text-sm"/>
        <FaSearch className="text-gray-400" />
      </div>
      <div className="flex items-center mr-12 space-x-10 ">

        <div className="relative">
          <FaBell className="text-gray-500 text-xl" />
          <span className="absolute top-0 right-0 bg-red-500 h-2 w-2 rounded-full"></span>
        </div>
        <FaCommentDots className="text-gray-500 text-xl" />

        <div className="flex items-center space-x-2">
          <img src={User} alt="Profile" className="w-10 h-10 rounded-full mr-3"/>
          <span className="font-poppins" style={{color:"#161E54"}}>Admirra John</span>
          <FaCaretDown className="text-gray-500 text-xl" />
        </div>
      </div>
    </div>
    <hr className="w-full border-t-1 border-gray-300 mt-4 ml-5" />
    </div>
  );
};

export default Header;
