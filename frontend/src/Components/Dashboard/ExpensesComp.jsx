import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../../context/globalContext'
import IncomeItem from '../IncomeItem'
import ExpenseForm from './ExpenseForm'

function ExpensesComp() {

  const {addIncome,expenses , getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

  useEffect(() =>{
    getExpenses()
  }, [])
  
  return (
    <div className='w-full h-screen text-white bg-black'>
      <div>
        <h1>Expenses</h1>
        <h2 className="total-income">Total Expense: <span>${totalExpenses()}</span></h2>
        <div className='flex mt-20'>
            <div><ExpenseForm /></div>
            <div>
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