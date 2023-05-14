import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../../context/globalContext'
import IncomeItem from '../IncomeItem'
import ExpenseForm from './ExpenseForm'

function ExpensesComp() {

  const {addIncome,expenses , getExpenses, deleteExpense, totalExpenses, deleteIncome} = useGlobalContext()

  useEffect(() =>{
    getExpenses()
  }, [])
  
  return (
    <div className='w-full h-screen text-white bg-gray-900'>
      <div className='bg-gray-900'>
        <div className='flex flex-col mt-20 '>
          <h1 className='flex justify-center text-2xl font-bold'>Expenses</h1>
          <h2 className="flex justify-center text-3xl font-semibold text-red-500 font-Poppins">Total Expense: <span>${totalExpenses()}</span></h2>
        </div>
        <div className='grid grid-cols-2 gap-2 mt-10 ml-5 bg-gray-900'>
            <div><ExpenseForm /></div>
            <div className=''>
              {expenses.map((expense) => {
                const {_id, title, amount, date, category, description, type} = expense;
                return <IncomeItem
                  key={_id}
                  id={_id} 
                  title={title} 
                  description={description} 
                  amount={amount} 
                  date={date} 
                  type={type}
                  category={category} 
                  indicatorColor="var(--color-red)"
                  deleteItem={deleteExpense}
                />
              })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default ExpensesComp

/*
<div className='w-full h-screen text-white bg-black'>
      <div className='flex flex-col mt-20 '>
        <h1 className='flex justify-center text-2xl font-bold'>Expenses</h1>
        <h2 className="flex justify-center text-3xl font-semibold text-red-500 font-Poppins">Total Expense: <span> ${totalExpenses()}</span></h2>
        <div className='flex mt-20'>
            <div><ExpenseForm /></div>
            <div className=''>
              {expenses.map((income) => {
                const {_id, title, amount, date, category, description, type} = income;
                return <IncomeItem
                  key={_id}
                  id={_id} 
                  title={title} 
                  description={description} 
                  amount={amount} 
                  date={date} 
                  type={type}
                  category={category} 
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              })}
            </div>
        </div>
      </div>
    </div>
    */