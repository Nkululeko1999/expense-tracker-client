import React from 'react';
import { FaFileExcel } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

export default function Exports() {
  return (
    <div className='mt-16 px-4 sm:px-7 max-w-7xl mx-auto'>
      <h1 className='text-center text-lg font-semibold sm:font-bold md:text-xl lg:text-2xl mb-6'>File Management</h1>
      <div className='flex flex-col sm:flex-row gap-6 sm:flex-wrap my-7'>
        {/* Excel */}
        <div className='flex-grow bg-white p-4 rounded-lg border-2 mb-2 sm:mb-0'>
          <h2 className="text-lg font-semibold mb-2">Excel Spreadsheets</h2>
          <p className="mb-4">Export files as spreadsheets and use Excel to view your data.</p>

          <div className="mb-4">
            <label htmlFor="dateFrom" className="block text-sm font-medium mb-2 text-gray-700">Date From:</label>
            <input type="date" id="dateFrom" name="dateFromExcel" className="border-gray-300 focus:ring-teal-900 focus:border-teal-900 px-2 py-2 block w-full shadow-sm sm:text-sm border rounded-md"/>
          </div>

          <div className="mb-4">
            <label htmlFor="dateTo" className="block text-sm font-medium mb-2 text-gray-700">Date To:</label>
            <input type="date" id="dateTo" name="dateToExcel" className="border-gray-300 focus:ring-teal-900 focus:border-teal-900 px-2 py-2 block w-full shadow-sm sm:text-sm border rounded-md"/>
          </div>

          <div className="mb-4">
            <label htmlFor="period" className="block text-sm font-medium mb-2 text-gray-700">Select Period:</label>
            <select id="period" name="periodExcel" className="border-gray-300 focus:ring-teal-900 focus:border-teal-900 px-2 py-2 block w-full shadow-sm sm:text-sm border rounded-md">
              <option>Last 30 days</option>
              <option>Last 60 days</option>
              <option>Last 90 days</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium mb-2 text-gray-700">Filter by Category or Name:</label>
            <select id="category" name="categoryExcel" className="border-gray-300 focus:ring-teal-900 focus:border-teal-900 px-2 py-2 block w-full shadow-sm sm:text-sm border rounded-md">
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </select>
          </div>

          <button className="bg-teal-900 hover:bg-teal-950 w-40 flex items-center gap-4 text-white font-bold py-2 px-4 rounded">
            <FaFileExcel className='w-4 h-4'/>
            Download
          </button>
        </div>


        {/* PDF  */}

        <div className='flex-grow bg-white p-4 rounded-lg border-2'>
          <h2 className="text-lg font-semibold mb-2">PDF</h2>
          <p className="mb-4">Export files as pdf and use Adobe or any app that support pdf to view your data.</p>

          <div className="mb-4">
            <label htmlFor="dateFrom" className="block text-sm font-medium mb-2 text-gray-700">Date From:</label>
            <input type="date" id="dateFrom" name="dateFromPdf" className="border-gray-300 focus:ring-teal-900 focus:border-teal-900 px-2 py-2 block w-full shadow-sm sm:text-sm border rounded-md"/>
          </div>

          <div className="mb-4">
            <label htmlFor="dateTo" className="block text-sm font-medium mb-2 text-gray-700">Date To:</label>
            <input type="date" id="dateTo" name="dateToPdf" className="border-gray-300 focus:ring-teal-900 focus:border-teal-900 px-2 py-2 block w-full shadow-sm sm:text-sm border rounded-md"/>
          </div>

          <div className="mb-4">
            <label htmlFor="period" className="block text-sm font-medium mb-2 text-gray-700">Select Period:</label>
            <select id="period" name="periodPdf" className="border-gray-300 focus:ring-teal-900 focus:border-teal-900 px-2 py-2 block w-full shadow-sm sm:text-sm border rounded-md">
              <option>Last 30 days</option>
              <option>Last 60 days</option>
              <option>Last 90 days</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium mb-2 text-gray-700">Filter by Category or Name:</label>
            <select id="category" name="categoryPdf" className="border-gray-300 focus:ring-teal-900 focus:border-teal-900 px-2 py-2 block w-full shadow-sm sm:text-sm border rounded-md">
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </select>
          </div>

          <button className="bg-teal-900 hover:bg-teal-950 w-40 flex items-center gap-4 text-white font-bold py-2 px-4 rounded">
            <FaFilePdf className='w-4 h-4'/>
            Download
          </button>
        </div>
    </div>
   </div> 
  )
}
