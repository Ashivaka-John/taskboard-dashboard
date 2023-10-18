import { RxDashboard } from "react-icons/rx";
import { MdInsights } from "react-icons/md";
import { CgNotes } from "react-icons/Cg";
import { FiUser, FiLogOut } from "react-icons/fi";
import { SlCalender } from "react-icons/Sl";
import { TbHelpSquare } from "react-icons/tb";
import { IoMdSettings } from "react-icons/Io";


export const datas = [
  {
    id: 1,
    icon: <RxDashboard />,
    text: "Main",
    width: "17rem",
    absolute: false,
  },
  {
    id: 2,
    icon: <MdInsights />,
    text: "Tasks",
    width: "17rem",
    absolute: false,
  },
  {
    id: 3,
    icon: <CgNotes />,
    text: "Notes",
    width: "17rem",
    absolute: false,
  },
  {
    id: 4,
    icon: <FiUser />,
    text: "Statistics",
    width: "17rem",
    absolute: false,
  },
  {
    id: 5,
    icon: <SlCalender />,
    text:"Calendar",
    width: "17rem",
    absolute: false,
  },
  {
    id: 6,
    icon: <IoMdSettings />,
    text: "settings",
    width: "17rem",
    absolute: false,
  },
  {
    id: 8,
    icon: <TbHelpSquare />,
    text: "help",
    width: "17rem",
    absolute: false,
    class: "help",
  },
  {
    id: 9,
    icon: <FiLogOut />,
    text: "Logout",
    width: "17rem",
    absolute: true,
  },
];
