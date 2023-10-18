import React, { useState } from 'react';
import { AiFillFolder } from 'react-icons/ai';

const Folders = () => {

  const [folders, setFolders] = useState([]);

  const [showNewFolderPopup, setShowNewFolderPopup] = useState(false);

  const [newFolderName, setNewFolderName] = useState('');

  const createNewFolder = () => {
    if (newFolderName.trim() !== '') {

      const newFolder = {
        id: Date.now(), 
        name: newFolderName,
      };

      setFolders([...folders, newFolder]);
      setNewFolderName('');
      setShowNewFolderPopup(false);
    }
  };

  return (
    <div className="bg-white w-[400px] h-[240px] rounded-[15px] relative overflow-hidden">
      <div className="flex">
        <h1 className="font-bold ml-4 mt-4">Folders</h1>
        <h1 className="font-bold text-gray-600 mt-4 ml-64">
          <ins>See All</ins>
        </h1>
      </div>

      <div className='flex mt-4 gap-5 ml-4'>
        {folders.map((folder) => (
          <div
            key={folder.id}
            className='bg-[#f0f0f0] w-[90px] h-[90px] rounded-[15px]'
            onClick={() => {

              console.log(`Opened folder: ${folder.name}`);
            }}
          >
            <AiFillFolder className='text-[30px] mt-[25px] ml-[30px]' />
            <p className='mt-8 ml-4'>{folder.name}</p>
            <p className='ml-4'>Folder</p>
          </div>
        ))}
      </div>

      {showNewFolderPopup ? (
        <div className="flex mt-4 ml-4">
          <input
            type="text"
            placeholder="Enter folder name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <button
            onClick={createNewFolder}
            className="bg-black hover:bg-gray-600 rounded-[5px] text-white w-[90px] h-[30px] ml-2"
          >
            Create
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowNewFolderPopup(true)}
          className="bg-black hover:bg-gray-600 rounded-[5px] text-white w-[120px] h-[30px] ml-[250px] fixed mt-[10px]"
        >
          New folder
        </button>
      )}
    </div>
  );
};

export default Folders;
