import React from 'react'
import { FaThumbtack } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';
const SelectCard = ({ title, time }) => {
    return (
        <div className='border-gray-200 border-2 grid grid-cols-1 md:grid-cols-2 justify-around rounded-lg p-2 bg-slate-50'>
            <div className='ml-5'>
                <h1 className='font-normal text-lg' style={{ color: "#303030" }}>{title}</h1>
                <p className='font-roboto text-xs' style={{ color: "#686868" }}>{time}</p>
            </div>
            <div className='flex flex-row justify-end align-middle mt-5 gap-3 md:mr-10 md:mt-0'>
                <FaThumbtack style={{ color: "#B2B2B2", width: '20px', height: '20px' }} />
                <FaEllipsisH style={{ color: "#B2B2B2", width: '20px', height: '20px' }} />
            </div>
        </div>
    )
}

export default SelectCard
