import React from 'react'
import {Link} from "react-router-dom"

function TransactionsView() {
  return (
    <div className='grid h-screen grid-cols-2 text-white bg-black'>
        <div>
            Image
        </div>
        <div>
            <div className='mt-48 ml-10 '>
                <div className='text-4xl font-semibold leading-relaxed text-white font-Popping'>Wonderful & Effortless way <br /> to view your <span className='text-green-500'>Transaction</span></div>
                <div className='mt-6 mb-8 text-sm leading-6 text-gray-400 font-Poppins'>
                    Simplifying your life by helping you with easy-to-use app that takes <br />care of your finances  in a better way
                </div>
                <button className='py-3 text-xs font-bold tracking-wide rounded-full font-Poppins bg-gradient-to-r from-blue-500 to-green-500 px-7 hover:scale-110 duration 300'><Link to="/register">Read More {">"}</Link></button>
            </div>
        </div>
    </div>
  )
}

export default TransactionsView