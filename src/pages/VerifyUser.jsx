import { useState } from "react";
import { FaUserLock } from "react-icons/fa";

export default function VerifyUser() {
  const [verifyData, setVerifyData] = useState({code: ''});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setVerifyData({
      ...verifyData, 
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      const response = await fetch('/api/auth/verify-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(verifyData),
      });

      if(data.success === false){
        setError(data.message);
        setLoading(false);
      }

      const data = await response.json();
      console.log(data);
      setLoading(false);


    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-8'>Verify Account</h1>
      <FaUserLock className="my-5 mx-auto text-teal-900 w-12 h-12 sm:w-16 sm:h-16" />
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='Enter 6 digit code' name='code' className='border py-3 px-4 rounded-lg' onChange={handleChange}/>
        <button type='submit'
        className='rounded-lg p-3 bg-teal-900 hover:opacity-90 
        font-normal uppercase text-white disabled:opacity-60'>
          Verify Account
        </button>
      </form>

      <div className='flex gap-2 mt-3'>
        <p>Didn't get code</p>
          <p className='text-blue-700 hover:underline cursor-pointer'>Resend Code</p>
      </div>
    </div>
  )
}
