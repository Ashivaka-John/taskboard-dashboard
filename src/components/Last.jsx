import React from 'react'
import { BsBellFill } from 'react-icons/bs'
import {FaUserCircle } from 'react-icons/fa'
import MiniCalendar from './MiniCalender'
import Lines from './Lines'



const Last = () => {
  return (
    <div className=''>
      
          <div className='flex gap-5 ml-28 '>
              <BsBellFill className='text-[15px] mt-4'/>
              <FaUserCircle className='text-[39px] '/>
          </div>
         
      <div className='ml-[-160px]'>
        <MiniCalendar/>
      </div>
      <div className='ml-[-160px]'>
        <Lines/>
      </div>

  
          
    </div>
  )
}

export default Last
