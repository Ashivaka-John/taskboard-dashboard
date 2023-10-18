import React, { useState } from 'react';

const MiniCalendar = () => {
  const [date, setDate] = useState(new Date());

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfWeek = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={i}></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(<div key={day}>{day}</div>);
    }
    return days;
  };

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  return (
      <div className="  rounded-lg rounded-[20px] w-[350px] mt-[25px]">
             <div className="flex gap-5 mb-2">
          <button className='font-bold text-[20px] text-black' onClick={prevMonth}>&lt;</button>
          <h2 className="text-lg font-semibold">
            {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
          </h2>
          <button className='font-bold text-[20px] text-black' onClick={nextMonth}>&gt;</button>
        </div>
      <div className="bg-[#f0f0f0] p-4 rounded-lg h-[350px] ">
     
        <div className="grid grid-cols-7 gap-7">
          {weekdays.map((day, index) => (
            <div key={index} className="text-center text-sm font-bold">
              {day}
            </div>
          ))}
          {renderDays()}
        </div>
      </div>
    </div>
  );
};

export default MiniCalendar;
