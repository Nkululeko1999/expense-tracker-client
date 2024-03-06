import React, { useState } from 'react';

const YourComponent = () => {
  const [formDataExcel, setFormDataExcel] = useState({
    dateFrom: '',
    dateTo: '',
    period: 'Last 30 days', // Default value
    category: 'Category 1' // Default value
  });

  const [formDataPdf, setFormDataPdf] = useState({
    // Define formDataPdf fields as needed
  });

  const handleExcelSubmit = (event) => {
    event.preventDefault();
    // Send formDataExcel to backend for processing
    console.log('Submitting Excel form:', formDataExcel);
    // Add your fetch or axios call to send the data to the backend here
  };

  const handlePdfSubmit = (event) => {
    event.preventDefault();
    // Send formDataPdf to backend for processing
    console.log('Submitting PDF form:', formDataPdf);
    // Add your fetch or axios call to send the data to the backend here
  };

  const handleExcelChange = (event) => {
    const { name, value } = event.target;
    setFormDataExcel({
      ...formDataExcel,
      [name]: value
    });
  };

  const handlePdfChange = (event) => {
    const { name, value } = event.target;
    setFormDataPdf({
      ...formDataPdf,
      [name]: value
    });
  };

  return (
    <div className='mt-16 px-4 sm:px-7 max-w-7xl mx-auto'>
      <h1 className='text-center text-lg font-semibold sm:font-bold md:text-xl lg:text-2xl mb-6'>File Management</h1>
      <div className='flex flex-col sm:flex-row gap-6 sm:flex-wrap my-7'>
        <div className='flex-grow bg-white p-4 rounded-lg border-2 mb-2 sm:mb-0'>
          <h2 className="text-lg font-semibold mb-2">Excel Spreadsheets</h2>
          <p className="mb-4">Export files as spreadsheets and use Excel to view your data.</p>
          <form onSubmit={handleExcelSubmit}>
            <div className="mb-4">
              <label htmlFor="dateFrom" className="block text-sm font-medium text-gray-700">Date From:</label>
              <input type="date" id="dateFrom" name="dateFrom" className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md" value={formDataExcel.dateFrom} onChange={handleExcelChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="dateTo" className="block text-sm font-medium text-gray-700">Date To:</label>
              <input type="date" id="dateTo" name="dateTo" className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md" value={formDataExcel.dateTo} onChange={handleExcelChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="period" className="block text-sm font-medium text-gray-700">Select Period:</label>
              <select id="period" name="period" className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md" value={formDataExcel.period} onChange={handleExcelChange}>
                <option>Last 30 days</option>
                <option>Last 60 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Filter by Category or Name:</label>
              <select id="category" name="category" className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md" value={formDataExcel.category} onChange={handleExcelChange}>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download</button>
          </form>
        </div>

        {/* PDF form goes here */}
      </div>
    </div>
  );
};

export default YourComponent;
