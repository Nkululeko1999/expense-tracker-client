import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ExpenseForm = ({ addExpense }) => {

    const { user } = useSelector((state) => state.user);

    // User token 
    const userAuthToken = user.currentUser;
    const { token } = userAuthToken;
  
    // User id
    const { id } = user.currentUser.data.id;

  // State for form data
  const [formData, setFormData] = useState({
    expenseName: '',
    amount: '',
    description: '',
    category: '',
    date: '', 
    userId: id
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Define request options
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData), // Convert form data to JSON string
      };
  
      // Send request to backend
      const response = await fetch('/api/expense/create-expense', requestOptions);
  
      // Check if request was successful
      if (response.ok) {
        // If successful, add expense to the parent component
        addExpense(formData);
        // Reset form after submission
        setFormData({
          expenseName: '',
          amount: '',
          description: '',
          category: '',
          date: ''
        });
      } else {
        // If request fails, throw an error
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Expense Name</label>
          <input
            type="text"
            name="expenseName"
            value={formData.expenseName}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            step="0.01"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-900 w-72 text-white py-2 px-4 rounded-md hover:bg-teal-950"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
