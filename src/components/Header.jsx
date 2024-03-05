import { Link } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

export default function Header() {
    const { user } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(null);
    const [showDropdown, setDropdown] = useState(false);
    
    // Get whether is Logged in or not 
    const userLoggedIn = user.isLoggedIn;
    
    // Check if user and its nested properties are not null before accessing them
    if (user && user.currentUser && user.currentUser.data && user.currentUser.data.profilePic) {
        const userProfilePic = user.currentUser.data.profilePic;
        if (Object.keys(userProfilePic).length > 0 && userProfilePic.constructor === Object) {
            setProfile(userProfilePic);     
        }
    }

    // Handle dropdown when user clicks on profile icon
    const handleToggleDropdown = () => {
        setDropdown(!showDropdown);
    }
    
    return (
        <div>
            <header className='bg-white text-slate-950 shadow-md p-3 sm:py-5 sm:px-12'>
                <div className='flex justify-between items-center max-w-x6l mx-auto'>
                    <Link to='/'>
                        <h1 className='font-bold text-teal-950 text-base md:text-3xl flex flex-wrap opacity-85'>
                            <span>Expense</span>
                            <span>Tracker</span>
                        </h1>
                    </Link>

                    <ul className='flex gap-4 opacity-85 text-sm sm:text-base font-normal sm:font-medium'>
                        <Link to='/'>
                            <li className='hidden sm:inline hover:underline cursor-pointer'>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li className='hidden sm:inline hover:underline'>About</li>
                        </Link>
                        <Link to='/contact'>
                            <li className='hover:underline'>Contact</li>
                        </Link>
                    </ul>

                    <ul className='flex gap-4 items-center opacity-85 text-sm sm:text-base font-normal sm:font-medium'>
                        <Link to='/signin'>
                            <li className={`${userLoggedIn ? 'hidden' : 'hover:underline'}`}>Signin</li>
                        </Link>
                        <Link to='/signup'>
                            <li className={`${userLoggedIn ? 'hidden' : 'hover:underline cursor-pointer'}`}>Signup</li>
                        </Link>
                        <li onClick={handleToggleDropdown} className={`${userLoggedIn ? 'hover:underline cursor-pointer' : 'hidden'}`}>
                            {profile ? (<img src="" alt="profile" />) : (
                                <FaUserCircle className="text-teal-950 block mx-auto h-6 w-6 sm:h-8 sm:w-8 rounded-full sm:mx-0 sm:shrink-0 
                                hover:cursor-pointer" />)}
                        </li>
                        {showDropdown && <Dropdown showDropdown={showDropdown} setDropdown={setDropdown}/>}
                    </ul>      
                </div>
            </header>
        </div>
    )
}
