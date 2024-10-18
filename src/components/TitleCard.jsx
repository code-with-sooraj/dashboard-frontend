import React from 'react'
import { FaCaretDown } from 'react-icons/fa'

const TitleCard = ({ title, date }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <h1 className="font-poppins text-xl md:text-2xl p-1" style={{ color: "#161E54" }}>{title}</h1>
            <div className='flex flex-row justify-between md:justify-end border-2 border-gray-200 w-full md:w-1/2 ml-auto rounded-lg p-2'>
                <p className='font-roboto text-xs md:text-sm' style={{ color: "#686868" }}>{date}</p>
                <FaCaretDown className="text-gray-500 text-lg md:text-xl" />
            </div>
        </div>
    )
}

export default TitleCard
