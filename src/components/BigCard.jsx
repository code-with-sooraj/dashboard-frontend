import React from 'react'
import Line from '../assets/line.png'

const BigCard = ({ title, count, men, women, growth }) => {
    return (
        <div className='flex flex-col md:flex-row border-2 border-gray-300 p-4 rounded-lg'>
            <div className='flex flex-col'>
                <h1 className='font-poppins text-xl md:text-2xl m-3'>{title}</h1>
                <p className='font-poppins text-3xl md:text-5xl m-3'>{count}</p>
                <p className='text-xs mt-3 ml-3 text-grayCustom2'>{men} Men</p>
                <p className='text-xs mt-2 ml-3 text-grayCustom2'>{women} Women</p>
            </div>
            <div className='flex flex-col items-center md:grid md:items-start mt-4 md:mt-0'>
                <img src={Line} alt="" className='w-24 h-24 md:w-32 md:h-32' />
                <p className='p-2 mt-2 md:mt-0 ml-2 text-center rounded-md' style={{ background: '#FFEFE7' }}>+{growth}% Past month</p>
            </div>
        </div>
    )
}

export default BigCard
