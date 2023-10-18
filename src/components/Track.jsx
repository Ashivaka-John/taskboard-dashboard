import React, { useState } from 'react';
import { BsFillAlarmFill } from 'react-icons/bs';

const Track = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <div className={`bg-white w-[400px] h-[100px] rounded-[15px] flex gap-5`}>
      <BsFillAlarmFill className='ml-8 mt-8 text-[23px]' />
      <div className='mt-4 ml-4'>
        <p className='font-bold text-[19px]'>Call Michael</p>
        <p>In 5 minutes</p>
      </div>
      
          <label htmlFor='check' className='bg-gray-100 cursor-pointer relative w-16 h-8 rounded-full mt-5 ml-8'>
        <input
          type='checkbox'
          id='check'
          className='sr-only'
          onChange={toggleSwitch}
          checked={isSwitchOn}
        />
        <span
          className={`w-2/5 h-4/5 absolute rounded-full left-1 top-1 transition-all duration-500 ${
            isSwitchOn ? 'left-9 bg-black' : 'left-1 bg-[#aaaaaa]'
          }`}
        ></span>
      </label>
   
    </div>
  );
};

export default Track;
