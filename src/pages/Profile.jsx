import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    gender: '',
    address: '',
    username: '',
    email: ''
  });

  useEffect(() => {
    // Simulating fetching user details from an API
    // Replace this with actual API call
    const fetchUserDetails = async () => {
      try {
        // Example data
        const userData = {
          firstName: 'John',
          lastName: 'Doe',
          phoneNumber: '1234567890',
          gender: 'Male',
          address: '123 Main St',
          username: 'johndoe',
          email: 'john@example.com'
        };
        setUserDetails(userData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className='mt-16'>
      <h1 className='text-center text-lg font-semibold sm:font-bold md:text-xl lg:text-2xl'>Update Profile</h1>
      <div className="flex flex-wrap flex-col sm:flex-row gap-6 max-w-80 sm:max-w-7xl my-5 sm:my-10 mx-auto sm:px-10 lg:px-5">
        <div className="flex-auto sm:basis-1/4 border-2 rounded-md max-h-64 min-h-48">
          <div className="flex flex-col justify-center items-center border-b-2 py-2 bg-slate-100">
            <p className="font-bold text-base">{userDetails.username}</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src="profile-picture.jpg" alt="Profile" className="w-32 h-32 rounded-full mt-4" />
            <button className="bg-teal-900 hover:bg-teal-950 text-white font-bold py-2 px-4 rounded mt-4">Change Profile</button>
          </div>
        </div>
        <div className="flex-auto sm:basis-1/2 bg-slate-100 border-2 rounded-md min-h-64">
          <form className="p-4">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 font-bold">First Name:</label>
              <input type="text" id="firstName" name="firstName" value={userDetails.firstName} className="form-input mt-1 block w-full rounded-md border-gray-300" readOnly />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 font-bold">Last Name:</label>
              <input type="text" id="lastName" name="lastName" value={userDetails.lastName} className="form-input mt-1 block w-full rounded-md border-gray-300" readOnly />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 font-bold">Phone Number:</label>
              <input type="text" id="phoneNumber" name="phoneNumber" value={userDetails.phoneNumber} className="form-input mt-1 block w-full rounded-md border-gray-300" readOnly />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700 font-bold">Gender:</label>
              <input type="text" id="gender" name="gender" value={userDetails.gender} className="form-input mt-1 block w-full rounded-md border-gray-300" readOnly />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 font-bold">Address:</label>
              <input type="text" id="address" name="address" value={userDetails.address} className="form-input mt-1 block w-full rounded-md border-gray-300" readOnly />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold">Email:</label>
              <input type="email" id="email" name="email" value={userDetails.email} className="form-input mt-1 block w-full rounded-md border-gray-300" readOnly />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

