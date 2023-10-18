
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BsBellFill } from 'react-icons/bs'
import {FaUserCircle } from 'react-icons/fa'

const MrNice = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', reminder: '' });

  const handleCreateEvent = () => {
    if (newEvent.title) {
      setEvents([...events, { ...newEvent, date: selectedDate }]);
      setNewEvent({ title: '', reminder: '' });
    }
  };

  return (
    <div className="w-400">
       <div className='flex gap-5 ml-[280px] mb-4 '>
              <BsBellFill className='text-[15px] mt-4'/>
              <FaUserCircle className='text-[39px] '/>
          </div>
      <div className="w-[400] mb-8">
        <Calendar
          onChange={setSelectedDate}
                  value={selectedDate}
                  className='border-none bg-[#f0f0f0] rounded-[18px]'
        />
      </div>
      <div className="w-400">
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          className="w-400 p-2 border rounded-[8px]"
        />
        
        <button onClick={handleCreateEvent} className="w-400 ml-8 px-4 py-2 bg-black text-white rounded-[8px]">
          Create Event
        </button>
      </div>
      <div>
        {events.map((event) => (
          <div key={event.date.toString()} className="w-[360px] p-2 border rounded-[15px] my-2">
            <div>{event.date.toDateString()}</div>
            <div>{event.title}</div>
            <div>{event.reminder}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MrNice;
