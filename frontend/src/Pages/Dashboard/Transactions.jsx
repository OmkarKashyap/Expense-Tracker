import React from 'react'
import Navigation from '../../Components/Dashboard/Navigation'
import TransactionComp from '../../Components/Dashboard/TransactionComp'

function Transactions() {
  return (
    <div className='flex'>
        <Navigation />
        <TransactionComp />
    </div>
  )
}

export default Transactions