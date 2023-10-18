import Navbar from "./components/Navbar"
import Tasks from "./components/Tasks"
import {BiSearchAlt2} from "react-icons/bi"
import Track from "./components/Track"
import Folders from "./components/Folders"
import Notes from "./components/Notes"
import Statistic from "./components/Statistic"
// import Example from "./components/Example"
import MrNice from "./components/MrNice"



function App() {
 

  return (
    <>
      <div className=" h-screen bg-[#f0f0f0] w-3/4 object-cover items-center">
          <br/>
          <div className="flex">
              <br/>
              <h1 className='font-bold mb-4 ml-4 text-[18px]'>DOIT</h1>

              <h1 className='font-bold top-8 text-black ml-52'>Main</h1>
          
              <div className="relative mb-3 ml-[790px]" data-te-input-wrapper-init>
              <input
                  type="search"
                  className="peer block min-h-[auto] w-full rounded-[20px] bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-black-400"
                  id="exampleSearch2"
                  placeholder="Type query" 

                />

              <label
                htmlFor="exampleSearch2"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary flex items-center gap-5"
                >Search <BiSearchAlt2 className="ml-[90px]"/></label>
           </div>
      </div>
      
        
      <Navbar />
       <div className="ml-[250px] mt-[-300px]">
        <Tasks/>
        </div>
        <div className="ml-[908px] mt-[-380px]">
          <Track/>
        </div>
        <div className="ml-[908px] mt-[30px]">
         <Folders/>
        </div>
        <div className="ml-[250px] mt-[40px]">
          <Notes/>
        </div>
        <div className="ml-[810px] mt-[-330px]">
           <Statistic/>
        </div>
       
        
    
       
      </div>
       <div className="ml-[1380px] mt-[-815px] ">
          <MrNice/>
      </div>
  
      </>
  )
}

export default App
