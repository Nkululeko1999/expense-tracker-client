import { useEffect, useState } from "react";
import { FaUserLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function VerifyUser() {
  const [verifyData, setVerifyData] = useState({userId: '', code: ''});

  //Initialize dispatch 
  const dispatch = useDispatch();

  const navigate = useNavigate();


  //Get user data, error and loading from local storage -> persisted data
  const { user } = useSelector((state) => state.user);
  const { currentUser, error, loading } = user;
  console.log(user);

  //set user Id
  const userId = currentUser.data.id;

  //add userId to verifyData
  useEffect(() => {
    setVerifyData((verifyData) => ({
      ...verifyData,
      userId: userId
    }));
  }, [userId]);


  const handleChange = (event) => {
    setVerifyData({
      ...verifyData, 
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      //Set loading to true
      dispatch(signInStart());

      const response = await fetch('/api/auth/verify-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(verifyData),
      });

      const data = await response.json();
      console.log(data);

      if(data.success === false){
        dispatch(signInFailure(data.message));
        toast.error(data.message);
      }

      toast.success(data.message);
      dispatch(signInSuccess(data));
      navigate('/signin');
     

    } catch (error) {
      dispatch(signInFailure(error.message));
      toast.error(error)
    }
  }

  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-8'>Verify Account</h1>
      <FaUserLock className="my-5 mx-auto text-teal-900 w-12 h-12 sm:w-16 sm:h-16" />
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='Enter 6 digit code' name='code' className='border py-3 px-4 rounded-lg' onChange={handleChange}/>
        <button type='submit' disabled={loading}
        className='rounded-lg p-3 bg-teal-900 hover:opacity-90 
        font-normal uppercase text-white disabled:opacity-60'>
          {loading? 'Verifying Code' : 'Verify Account'}
        </button>
      </form>

      <div className='flex gap-2 mt-3'>
        <p>Didn't get code</p>
          <p className='text-blue-700 hover:underline cursor-pointer'>Resend Code</p>
      </div>
    </div>
  )
}
