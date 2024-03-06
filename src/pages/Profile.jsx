import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';

export default function Profile() {
  const { user } = useSelector((state) => state.user);

  // User data
  const userAuthToken = user.currentUser;
  const { token } = userAuthToken;

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    gender: '',
    address: '',
    username: '',
    email: '',
    profilePic: null
  });

  const [profileImage, setProfileImage] = useState(null);

  const fetchUserDetails = async () => {
    try {
      // Get data from backend
      const response = await fetch('/api/profile/profile-details', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
  
      // Assuming the response contains user details in JSON format
      const res = await response.json();
      const userDetailsData = res.data;

      // Update userDetails state with the fetched data
      setUserDetails(userDetailsData);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleImageChange = (e) => {
    // Handle image upload
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update the user details in the database
    try {
      // Perform API call to update user details
      const formData = new FormData();
      formData.append('firstName', userDetails.firstName);
      formData.append('lastName', userDetails.lastName);
      formData.append('phoneNumber', userDetails.phoneNumber);
      formData.append('gender', userDetails.gender);
      formData.append('address', userDetails.address);
      formData.append('email', userDetails.email);
      if (profileImage) {
        formData.append('profilePic', profileImage);
      }

      const response = await fetch('/api/profile/update-profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData
      });

      if (response.ok) {
        // Update successful, do any additional actions if needed
        console.log('User profile updated successfully');
      } else {
        throw new Error('Failed to update user details');
      }
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  return (
    <div className='mt-16'>
      <h1 className='text-center text-lg font-semibold sm:font-bold md:text-xl lg:text-2xl'>Update Profile</h1>
      <div className="flex flex-wrap flex-col sm:flex-row gap-6 max-w-80 sm:max-w-7xl my-5 sm:my-10 mx-auto sm:px-10 lg:px-5">
        <div className="flex-auto sm:basis-1/4 border-2 rounded-md max-h-64 min-h-48">
          <div className="flex flex-col justify-center items-center border-b-2 py-2 bg-slate-100">
            <p className="font-bold text-base">{userDetails.username}</p>
          </div>
          <div className='flex flex-col items-center min-h-64 sm:min-h-84'>
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full mt-4" />
            ) : (
              <FaUserCircle size={64} className="text-gray-400 mt-4" />
            )}
            <label htmlFor="profileImageInput" className="bg-teal-900 hover:bg-teal-950 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">Change Profile Picture</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="profileImageInput" />
          </div>
        </div>
        <div className="flex-auto sm:basis-1/2 bg-slate-100 border-2 rounded-md min-h-64">
          <form className="p-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-slate-900 font-base sm:font-semibold">First Name:</label>
              <input type="text" id="firstName" name="firstName" value={userDetails.firstName || ''} onChange={handleChange} className="form-input mt-1 block w-full rounded-md border-gray-300 py-2 px-6" />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-slate-900 font-base sm:font-semibold">Last Name:</label>
              <input type="text" id="lastName" name="lastName" value={userDetails.lastName || ''} onChange={handleChange} className="form-input mt-1 block w-full rounded-lg border-gray-300 py-2 px-6" />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-slate-900 font-base sm:font-semibold">Phone Number:</label>
              <input type="text" id="phoneNumber" name="phoneNumber" value={userDetails.phoneNumber || ''} onChange={handleChange} className="form-input mt-1 block w-full rounded-md border-gray-300 py-2 px-6" />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-slate-900 font-base sm:font-semibold">Gender:</label>
              <input type="text" id="gender" name="gender" value={userDetails.gender || ''} onChange={handleChange} className="form-input mt-1 block w-full rounded-md border-gray-300 py-2 px-6" />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-slate-900 font-base sm:font-semibold">Address:</label>
              <input type="text" id="address" name="address" value={userDetails.address || ''} onChange={handleChange} className="form-input mt-1 block w-full rounded-md border-gray-300 py-2 px-6" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-slate-900 font-base sm:font-semibold">Email:</label>
              <input type="email" id="email" name="email" value={userDetails.email || ''} onChange={handleChange} className="form-input mt-1 block w-full rounded-md border-gray-300 py-2 px-6" />
            </div>
            <button type="submit" className="bg-teal-900 hover:bg-teal-950 text-white font-bold py-2 px-4 rounded mt-4">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}
