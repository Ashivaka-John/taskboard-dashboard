import { useState } from 'react';
import SidebarData from './SidebarData';



const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${toggle ? 'w-[5.8rem]' : ''} sidebar-container `}>
      <SidebarData toggle={toggle} />
      <div
        className="absolute top-[7rem]   items-center-left-5 w-10 h-10 bg-glass rounded-full cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >

      </div>
    </div>
  );
};

export default Navbar;
