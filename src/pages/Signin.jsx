import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { signInFailure, signInStart, signInSuccess, userSignedIn } from '../redux/user/userSlice';
import { FaUserLock } from 'react-icons/fa';


export default function Signin() {
  const { user } = useSelector((state) => state.user);
  const { error, loading, isLoggedIn } = user;

  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  console.log("Loading Status " + loading);

  const navigate = useNavigate();

  // handle change from input and update the loginData
  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  };

  //Handle submit form 
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //set loading to true before submitting signup data
      dispatch(signInStart());
      console.log(("loading has to be true"));
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log(data);

      if(data.success === false){
        toast.error(data.message);
        dispatch(signInFailure(data.message));

        return
      }

      toast.success(data.message);
      //After getting the data, everything went well 
      dispatch(signInSuccess(data));

      // dispatch(userSignedIn);
      dispatch(userSignedIn(data));
      
      navigate('/');

      // Clear Form
      setLoginData({
        email: '',
        password: ''
      });

    } catch (error) {
      dispatch(signInFailure(error.message));
      toast.error(error);
    }
  }


  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Signin</h1>
      <FaUserLock className="my-5 mx-auto text-teal-900 w-12 h-12 sm:w-16 sm:h-16" />
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='email' placeholder='email' name='email' className='border py-3 px-4 rounded-lg' onChange={handleChange}/>
        <input type='password' placeholder='password' name='password' className='border py-3 px-4 rounded-lg' onChange={handleChange}/>
        <button type='submit' disabled={loading}
        className='rounded-lg p-3 bg-teal-900 hover:opacity-90 
        font-normal uppercase text-white disabled:opacity-60'>
          {loading? 'Loading...': 'Sign In'}
        </button>
      </form>

      <div className='flex gap-2 mt-3'>
        <p>Already have an account?</p>
        <Link to='/signin'>
          <p className='text-blue-700 hover:underline'>Sign in</p>
        </Link>
      </div>
    </div>
  )
}
