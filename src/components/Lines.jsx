import React from 'react'
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { BiSolidTagAlt } from 'react-icons/bi';

const Lines = () => {
  return (
      <div className=''>
          
          <div className='flex gap-4 mt-[28px]'>
              <h1 className='text-[#f0f0f0] font-semi-bold'>11:00</h1>
              <div className="w-3/4 h-px bg-[#f0f0f0] font-light mt-[15px]"></div>
          </div>
      <div className='mt-[20px] flex gap-4'>
        <h1 className=''>11:40</h1>
        <div className='bg-[#f0f0f0] w-[300px] h-[100px] rounded-[15px] flex'>
             <MdCheckBoxOutlineBlank
                className="ml-2 mt-4 cursor-pointer text-[17px]"
          />
          <p className='mt-3 text-[17px] ml-8'>Call Michael</p>
           <BiSolidTagAlt className="text-red-600 mt-4 ml-28 text-[17px]" />
        </div>
      </div>
      <div className='flex gap-4 mt-[28px]'>
              <h1 className='text-[#f0f0f0] font-semi-bold'>13:00</h1>
              <div className="w-3/4 h-px bg-[#f0f0f0] font-light mt-[15px]"></div>
      </div>
      
      <div className='flex gap-4 mt-[68px]'>
              <h1 className='text-[#f0f0f0] font-semi-bold'>14:00</h1>
              <div className="w-3/4 h-px bg-[#f0f0f0] font-light mt-[15px]"></div>
          </div>
          
    </div>
  )
}

export default Lines
