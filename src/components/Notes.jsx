import React, { useState } from 'react';

const Notes = () => {
  
  const [notes, setNotes] = useState([]);
  
  
  const [newNoteText, setNewNoteText] = useState('');

  
  const [showNewNoteForm, setShowNewNoteForm] = useState(false);


  const addNewNote = () => {
    if (newNoteText.trim() !== '') {
 
      setNotes([...notes, newNoteText]);
      setNewNoteText('');
      setShowNewNoteForm(false);
    }
  };

  return (
    <div className="bg-white w-[530px] h-[330px] rounded-[15px] relative overflow-hidden">
      <div className="flex">
        <h1 className="font-bold ml-4 mt-4">Notes</h1>
        <h1 className="font-bold text-gray-600 mt-4 ml-[395px]">
          <ins>See All</ins>
        </h1>
      </div>

      <div className="overflow-y-auto h-[200px]">
        {notes.map((note, index) => (
          <div
            key={index}
            className="flex bg-gray-200 h-[60px] w-[400px] mt-2 ml-4 rounded-[10px] items-center gap-5"
          >
            <p className="ml-2">{note}</p>
          </div>
        ))}
      </div>

      <button
        className="bg-black hover:bg-gray-600 rounded-[5px] text-white w-[120px] h-[30px] ml-[280px] mt-[10px] fixed bottom-12"
        onClick={() => setShowNewNoteForm(!showNewNoteForm)}
      >
        New note
      </button>

      {showNewNoteForm && (
        <div className="flex mt-[-15px] ml-4">
          <input
            type="text"
            placeholder="Enter a new note"
            value={newNoteText}
            onChange={(e) => setNewNoteText(e.target.value)}
            className="border rounded-[5px] w-[350px] p-2"
          />
          <button
            onClick={addNewNote}
            className="bg-black hover:bg-gray-600 rounded-[5px] text-white w-[60px] h-[30px] ml-2"
          >
            Create
          </button>
          <button
            onClick={() => setShowNewNoteForm(false)}
            className="bg-gray-400 hover:bg-gray-600 rounded-[5px] text-black w-[60px] h-[30px] ml-2"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Notes;
