import React from 'react'
import Navigation from '../../Components/Dashboard/Navigation'
import IncomesComp from '../../Components/Dashboard/IncomesComp'

function Incomes() {
  return (
    <div className='flex'>
        <Navigation />
        <IncomesComp />
    </div>
  )
}

export default Incomes