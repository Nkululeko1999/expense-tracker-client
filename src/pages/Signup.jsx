import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


export default function Signup() {
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // handle change from input and update the registerData
  const handleChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value
    });
  };

  //Handle submit form 
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //Check if password is matching
      if (registerData.password !== registerData.confirmPassword) {
        // Handle case where password does not match confirmPassword
        toast.error("Passwords do not match");
        console.log("Passwords do not match");
        return; // Exit the function early if passwords don't match
      }

      //remove confirm password
      const { confirmPassword, ...newRegisterData } = registerData;
      setRegisterData(newRegisterData);

      console.log(newRegisterData);

      //set loading to true before submitting signup data
      setLoading(true);
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRegisterData),
      });

      const data = await response.json();
      console.log(data);

      if(data.success === false){
        setError(data.message);
        setLoading(false);
        toast.error(error);
      }

      //Navigate user to verify account if user is created successfully
      toast.success(data.message);
      navigate('/verify-user');

      //After getting the data, everything went well 
      setLoading(false);

      //Clear form if everything goes well

    } catch (error) {
      setLoading(false);
      setError(error.message);
      toast.error(error);
    }
  }


  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Signup</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='username' name='username' className='border py-3 px-4 rounded-lg' onChange={handleChange}/>
        <input type='email' placeholder='email' name='email' className='border py-3 px-4 rounded-lg' onChange={handleChange}/>
        <input type='password' placeholder='password' name='password' className='border py-3 px-4 rounded-lg' onChange={handleChange}/>
        <input type='password' placeholder='confirm password' name='confirmPassword' className='border py-3 px-4 rounded-lg' onChange={handleChange}/>
        <button type='submit' disabled={loading}
        className='rounded-lg p-3 bg-teal-900 hover:opacity-90 
        font-normal uppercase text-white disabled:opacity-60'>
          {loading? 'Loading...': 'Sign up'}
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
