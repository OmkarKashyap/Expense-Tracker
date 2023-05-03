import React from 'react'
import {Link} from "react-router-dom"

function ExpenseView() {
  return (
    <div className='grid h-screen grid-cols-2 text-white bg-black'>
        <div>
            <div className='mt-48 ml-10 '>
                <div className='text-4xl font-semibold leading-relaxed text-white font-Popping'>Simple way to manage your<br /> money and Add <span className='text-green-500'>Expense</span></div>
                <div className='mt-6 mb-8 text-sm leading-6 text-gray-400 font-Poppins'>
                    Not only does help you do transactions, but you can also use it to pay<br /> your electricity bills, food bills, and many more things.
                </div>
                <button className='py-3 text-xs font-bold tracking-wide rounded-full font-Poppins bg-gradient-to-r from-blue-500 to-green-500 px-7 hover:scale-110 duration 300'><Link to="/register">Read More {">"}</Link></button>
            </div>
        </div>

        <div>
            Image 2
        </div>
    </div>
  )
}

export default ExpenseView