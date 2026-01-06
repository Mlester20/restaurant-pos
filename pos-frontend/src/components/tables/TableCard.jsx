import React from 'react'
import { FaCheckDouble } from 'react-icons/fa'

const TableCard = ({ key, name, status, initials }) => {
  return (
    <div key={key} className='w-[300px] bg-[#262626] p-4 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-black/30'>
        <div className='flex items-center justify-between px-1'>
            <h1 className='text-white text-lg font-semibold'> {name} </h1>
            <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4a40] " : "text-[#f6b100] bg-[#7a5800] text-white" } px-2 py-1 rounded-lg`}>
                { status }
            </p>
        </div>
        <div className='flex items-center justify-center mt-5 mb-7'>
          <h1 className='bg-[#025cca] text-white rounded-full p-5 text-xl'> { initials } </h1>        
        </div>
    </div>
  )
}

export default TableCard