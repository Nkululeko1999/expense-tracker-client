import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutCurrentUser } from '../redux/user/userSlice';
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { SiExpensify } from "react-icons/si";
import { FaFileExport } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";


export default function Dropdown({showDropdown, setDropdown}) {
    //Get user from the persisted local storage, dispatch isSignedIn to false when user click logout
    // const {user} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutCurrentUser());
        setDropdown(false);
    }

    const handleClick = () => {
        setDropdown(false);
    }

  return (
    <ul className="absolute right-4 sm:right-10 top-10 sm:top-12 mt-6 w-64 bg-white text-slate-950 rounded-md overflow-hidden shadow-xl sm:shadow-2xl z-10">
        <Link to='/dashboard' onClick={handleClick}>
            <li className="flex gap-2 items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <TbBrandGoogleAnalytics className="w-5 h-5" />
                Dashboard
            </li>
        </Link>
        <Link to='/expenses' onClick={handleClick}>
            <li className="flex gap-2 items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <SiExpensify className="w-5 h-5" />
                Expenses
            </li>
        </Link>
        <Link to='/exports' onClick={handleClick}>
            <li className="flex gap-2 items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <FaFileExport className="w-5 h-5" />
                Export Files
            </li>
        </Link>
        <Link to='/settings' onClick={handleClick}>
            <li className="flex gap-2 items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <IoSettings className="w-5 h-5" />
                Settings
            </li>
        </Link>
        <Link to='/profile' onClick={handleClick}>
            <li className="flex gap-2 items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <FaUser className="w-5 h-5" />
                Profile
            </li>
        </Link>
        <Link to='/signin' onClick={handleLogout}>
            <li className="flex gap-2 items-center px-4 py-2 border-y-2 hover:bg-gray-200 cursor-pointer">
                <BiLogOut className="w-5 h-5" />
                Logout
            </li>
        </Link>
    </ul>
  )
}
