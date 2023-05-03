import React from 'react'
import Ellipse from "../assets/Ellipse.png"
import Expense from "../assets/expenses.png"
import {Link} from "react-router-dom"
import Stats from '../Components/Stats'
import Marquee from '../Components/Marquee'
import Features from '../Components/Features'
import TransactionsView from '../Components/TransactionsView'
import ExpenseView from '../Components/ExpenseView'
import TransactionRecord from '../Components/TransactionRecord'

function Home() {
  return (
    <div>
      <div className='bg-black h-auto flex px-[10%] py-[6%]'>
          <img src={Ellipse} className='absolute z-20 w-6 left-24 top-56 animate-ping' />
          <img src={Ellipse} className='absolute z-20 w-6 right-96 top-36 animate-ping' />
          <img src={Ellipse} className='absolute z-20 w-6 left-64 bottom-24 animate-ping' />
          <img src={Ellipse} className='absolute z-20 w-6 right-40 top-64 animate-ping' />
          <div className='flex-1 text-white pt-7 '>
              <div className='absolute py-12 left-20'>
                  <h1 className='font-Poppins font-bold text-5xl leading-[72px] py-5'>Manage your <br /> <span className='text-green-500'>money</span> in the best <br />way <span className='text-green-500'>possible.</span></h1>
                  <h3 className='pb-5 text-lg leading-relaxed text-gray-400'>Fin.Man is the app that manages your finances with its <br />ever smart features</h3>
                  <Link to="/register"><button className='px-10 py-4 text-xs font-bold tracking-wide rounded-full bg-gradient-to-r from-blue-500 to-green-500 w-100 hover:scale-110 duration 300'>GET STARTED</button></Link>
              </div>
          </div>
          <div className='flex-1'>
              <img src={Expense} className='w-`9/12 mt-12 z-30 rounded-full' />
          </div>
      </div>
      <div className='bg-black'>
        <Stats />
        <Marquee />
        <Features />
        <TransactionsView />
        <ExpenseView />
        <TransactionRecord />
      </div>
    </div>
  )
}

export default Home