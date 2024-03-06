import React from 'react'
import HeaderBreadcump from '../components/HeaderBreadcump'
import callImg from "../assets/mobilephone.png";
import ContactCards from '../components/ContactCards';

export default function Contact() {
  return (
    <div>
      <HeaderBreadcump title="Contact Us" />
      <div className='mt-16 px-4 sm:px-7 max-w-7xl mx-auto'>
        <div className='flex flex-col sm:flex-row gap-6 justify-between sm:flex-wrap my-7'>
          <div className='hidden sm:inline min-w-72 max-w-80 p-4 rounded-lg  mb-2 sm:mb-0'>
           <img className='' src={callImg} alt='contact' />
          </div>


        <form className='flex-grow sm:min-w-xl sm:max-w-2xl bg-white shadow-lg'>
          <div className='py-3 px-0 bg-teal-950 text-white'>
            <h2 className="text-lg font-semibold text-center">Let's help you Manage your expenses</h2>
          </div>
          <p className="my-6 px-4">
            Start managing your expenses with ease today!
          </p>

          <div className="mb-4 px-4">
            <input type="text" name="fullNames" className="border-gray-300 focus:ring-teal-900 focus:border-teal-900 px-2 py-3 block w-full
             shadow-sm sm:text-sm border rounded-md" placeholder='Full Names'/>
          </div>

          <div className="mb-4 px-4">
          <input type="email"  name="email" className="border-gray-300 focus:ring-teal-900 focus:border-teal-900 px-2 py-3 block w-full
             shadow-sm sm:text-sm border rounded-md" placeholder='Email'/>
          </div>

          <div className="mb-4 px-4">
          <input type="text"  name="countryOrRegion" className="border-gray-300 focus:ring-teal-900 focus:border-teal-900 px-2 py-3 block w-full
             shadow-sm sm:text-sm border rounded-md" placeholder='Country or State'/>
          </div>

          <div className="mb-4 px-4">
          <textarea name="message" className="border-gray-300 focus:ring-teal-900 focus:border-teal-900 px-2 py-2 block w-full
             shadow-sm sm:text-sm border rounded-md" placeholder='Enter your message' rows="6"></textarea>
          </div>

          <button className="bg-teal-950 hover:bg-teal-900 w-40 flex items-center gap-4 text-white font-bold mx-4 mb-4 py-2 px-4 rounded-none">
            Submit
          </button>
        </form>
        </div>
      </div> 

      <ContactCards />
    </div>
  )
}



