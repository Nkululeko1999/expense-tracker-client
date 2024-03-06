import React, { useState, useEffect } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from 'react-redux';

const Expenses = () => {
  const { user } = useSelector((state) => state.user);

  // User token 
  const userAuthToken = user.currentUser;
  const { token } = userAuthToken;
  
  // State to store the list of expenses
  const [expenses, setExpenses] = useState([]);

  // Function to add expense to the list
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Fetch expenses from backend using useEffect
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch('/api/expense/all-expenses', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const fetchedData = await response.json();
          const data = fetchedData.data;
          console.log(data);
          setExpenses(data);
        } else {
          throw new Error('Failed to fetch expenses');
        }
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className='mt-16 px-4 sm:px-7 max-w-7xl mx-auto'>
      <h1 className='text-center text-lg font-semibold sm:font-bold md:text-xl lg:text-2xl mb-6'>Manage Expenses</h1>
      <div className="flex flex-col gap-6">
        <div className="bg-white border-2 rounded-md">
          {/* Render the ExpenseForm component and pass the addExpense function as a prop */}
          <ExpenseForm addExpense={addExpense} />
        </div>

        <div className="bg-white border-2 rounded-md p-4">
          <p className="text-lg font-semibold mb-4">Expenses</p>
          {/* Render the list of expenses in a table */}
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {expenses.map((expense, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{expense.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap">R{expense.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{expense.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(expense.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap flex gap-4">
                      <FaEdit className='w-6 h-6 text-teal-900' />
                      <RiDeleteBin6Line className='w-6 h-6 text-teal-900' />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
