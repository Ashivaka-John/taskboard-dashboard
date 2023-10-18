import React, { useState } from 'react';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { MdCheckBox } from 'react-icons/md';
import { GrReturn } from 'react-icons/Gr';
import { BiSolidTagAlt } from 'react-icons/bi';

const Tasks = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskDate, setNewTaskDate] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('');
  const [tasks, setTasks] = useState([]);
  

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleNewTaskSubmit = () => {
    if (newTaskText) {
      const newTask = {
        text: newTaskText,
        date: newTaskDate,
        time: newTaskTime,
        completed: false, 
      };

      
      setTasks([...tasks, newTask]);

      
      setPopupVisible(false);

     
      setNewTaskText('');
      setNewTaskDate('');
      setNewTaskTime('');
    }
  };

  const completeTask = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-white w-[630px] h-[380px] rounded-[15px] relative overflow-hidden">
      <div className="flex gap-[320px] ">
        <h1 className="font-bold ml-4 mt-4">Tasks</h1>
        <h1 className="font-bold text-gray-600 mt-4 ml-44">
          <ins>See All</ins>
        </h1>
      </div>
     
      <div className="ml-4 mt-2">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`flex bg-[#f0f0f0] h-[40px] w-[590px] mt-2 rounded-[15px] items-center gap-5 ${
              task.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            {task.completed ? (
              <MdCheckBox className="ml-2 cursor-pointer" onClick={() => completeTask(index)} />
            ) : (
              <MdCheckBoxOutlineBlank
                className="ml-2 cursor-pointer"
                onClick={() => completeTask(index)}
              />
            )}
            <p className="font-bold">{task.text}</p>
            <GrReturn />
            <div className="flex gap-5 items-center ml-16">
              <BiSolidTagAlt className="text-red-600" />
              <p className="text-gray-400">{task.date}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className=" bg-black hover:bg-gray-600 rounded-[5px] text-white w-[100px] h-[30px] ml-[490px] fixed mt-[20px]"
        onClick={togglePopup}
      >
        New Task
      </button>
      {isPopupVisible && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[370px] h-[250px] rounded-[15px]">
            {/* Popup content */}
            <h1 className="font-bold ml-4 mt-4">New Task</h1>
            <textarea
              className="ml-4 mt-2 w-[330px] h-[100px] rounded-[5px] border border-gray-300 p-2"
              placeholder="Enter task text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
            />
            <div className="flex ml-4 mt-2">
              <input
                type="date"
                className="w-[180px] h-[30px] rounded-[5px] border border-gray-300 p-2"
                placeholder="Date"
                value={newTaskDate}
                onChange={(e) => setNewTaskDate(e.target.value)}
              />
              <input
                type="time"
                className="w-[130px] h-[30px] rounded-[5px] border border-gray-300 p-2 ml-4"
                placeholder="Time"
                value={newTaskTime}
                onChange={(e) => setNewTaskTime(e.target.value)}
              />
            </div>
            <div className="flex ml-4 mt-2">
              <button
                className="bg-black hover:bg-gray-600 rounded-[5px] text-white w-[100px] h-[30px] ml-[120px]"
                onClick={togglePopup}
              >
                Close
              </button>
              <button
                className="bg-black hover:bg-gray-600 rounded-[5px] text-white w-[100px] h-[30px] ml-2"
                onClick={handleNewTaskSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
