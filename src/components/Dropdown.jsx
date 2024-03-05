import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSignedIn } from '../redux/user/userSlice';


export default function Dropdown() {
    //Get user from the persisted local storage, dispatch isSignedIn to false when user click logout
    // const {user} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userSignedIn());
    }

  return (
    <ul className="absolute right-4 sm:right-10 top-10 sm:top-12 mt-6 w-64 bg-white text-slate-950 rounded-md overflow-hidden shadow-xl sm:shadow-2xl z-10">
        <Link to='/settings'>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
        </Link>
        <Link to='/profile'>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
        </Link>
        <Link to='/signin' onClick={handleLogout}>
            <li className="px-4 py-2 border-y-2 hover:bg-gray-100 cursor-pointer">Logout</li>
        </Link>
    </ul>
  )
}
