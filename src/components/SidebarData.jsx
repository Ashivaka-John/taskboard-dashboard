/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { datas } from "../Data"


const SidebarData = ({toggle}) => {
  return (
    <div className="">
        
      {datas.map((data) => {
        return (
        <div
  className={`${
    data.absolute ? "absolute bottom-8" : "relative"
  } ${data.width} sidebar flex`}
  key={data.id}
          >

            <div className="mr-8 text-[1.7rem] mb-4 cursor-pointer ml-4 text-black font-bold">{data.icon}</div>
            <div
              className={`${
                toggle ? "opacity-0 delay-200 " : ""
              } text-[1rem] text-brown whitespace-pre cursor-pointer text-gray-600 font-bold`}
            >
              <Link to={data.text === "Main" ? "/" : `/${data.text}`}>{data.text}</Link>
            </div>
          </div>
        );
      })}


      


    </div>
  )
}

export default SidebarData
