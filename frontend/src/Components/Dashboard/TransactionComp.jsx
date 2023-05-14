import React from 'react'
import { useGlobalContext } from '../../context/globalContext';
function TransactionComp() {

  const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

  return (
    <div className='grid w-full h-screen grid-cols-2 pt-20 text-white bg-black'>
        <div className='flex flex-col'>
            <div className='flex justify-center mb-5 text-3xl font-semibold text-green-500 font-Poppins'>
                Incomes
            </div>
            <div>
            {...incomes.map((item) => 
              <div className='flex justify-between h-auto p-2 text-white bg-gray-600 border border-black'>
                <div className='w-10'>{item.title}</div>
                <div className='text-green-400'>$ {item.amount}</div>
                <div className='capitalize'>{item.category}</div>
              </div>
            )}
            </div>
        </div>
        <div>
        <div className='flex justify-center mb-5 text-3xl font-semibold text-red-500 font-Poppins'>
                Expenses
            </div>
            <div>
            {...expenses.map((item) => 
              <div className='flex justify-between h-auto p-2 text-white bg-gray-600 border border-black'>
                <div className='w-10'>{item.title}</div>
                <div className='text-red-400'>{item.amount}</div>
                <div className='capitalize'>{item.category}</div>
              </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default TransactionComp