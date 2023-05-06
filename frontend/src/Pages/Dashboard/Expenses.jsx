import React from 'react'
import Navigation from '../../Components/Dashboard/Navigation'
import ExpensesComp from '../../Components/Dashboard/ExpensesComp'

function Expenses() {
  return (
    <div className='flex'>
        <Navigation />
        <ExpensesComp />
    </div>
  )
}

export default Expenses