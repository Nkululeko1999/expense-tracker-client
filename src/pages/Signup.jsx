import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Signup</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='username' name='username' className='border py-3 px-4 rounded-lg' />
        <input type='email' placeholder='email' name='email' className='border py-3 px-4 rounded-lg' />
        <input type='password' placeholder='password' name='password' className='border py-3 px-4 rounded-lg' />
        <input type='password' placeholder='confirm password' name='confirmPassword' className='border py-3 px-4 rounded-lg' />
        <button type='submit'
        className='rounded-lg p-3 bg-teal-900 hover:opacity-90 
        font-normal uppercase text-white disabled:opacity-60'
        >Signup</button>
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
