import React from 'react'

function ContactCards() {
  return (
    <div className="flex px-5 sm:px-0 flex-col sm:flex-row justify-center gap-8 my-16">
        <div className="flex-shrink-0 max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden border-l-8 border-teal-900">
            <div className="px-4 py-5">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                </div>
                <div className="ml-3">
                <h3 className="text-lg font-semibold leading-tight text-gray-900">Email</h3>
                <p className="text-base my-5 text-gray-600">expensetracker@company.co.za</p>
                </div>
            </div>
            </div>
        </div>
  
        <div className="flex-shrink-0 max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden border-l-8 border-orange-700">
            <div className="px-4 py-5">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                </div>
                <div className="ml-3">
                <h3 className="text-lg font-semibold leading-tight text-gray-900">Phone</h3>
                <p className="text-base my-5 text-gray-600">(+27) 11 678 5467</p>
                </div>
            </div>
            </div>
        </div>
  
        <div className="flex-shrink-0 max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden border-l-8 border-yellow-900">
            <div className="px-4 py-5">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-yellow-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                </div>
                <div className="ml-3">
                <h3 className="text-lg font-semibold leading-tight text-gray-900">Physica Address</h3>
                <p className="text-base my-5 text-gray-600">34 Yaz Street, Johannesburg, South Africa.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ContactCards
