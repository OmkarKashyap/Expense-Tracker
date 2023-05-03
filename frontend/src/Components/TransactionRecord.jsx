import React from 'react'
import {Link} from "react-router-dom"

function TransactionRecord() {
  return (
    <div className='grid h-screen grid-cols-2 text-white bg-black'>
        <div>
            Image 3
        </div>
        <div>
            <div className='mt-48 ml-10 '>
                <div className='text-4xl font-semibold leading-relaxed text-white font-Popping'>Keep a track of your <br /> transaction <span className='text-green-500'>easily</span> with <br /> Fin.Man</div>
                <div className='mt-6 mb-8 text-sm leading-6 text-gray-400 font-Poppins'>
                    With Fin.Man, you will be getting details of your weekly transactions <br /> in a detailed manner so that you can keep a record of your <br />money spent
                </div>
                <button className='py-3 text-xs font-bold tracking-wide rounded-full font-Poppins bg-gradient-to-r from-blue-500 to-green-500 px-7 hover:scale-110 duration 300'><Link to="/register">Read More {">"}</Link></button>
            </div>
        </div>
    </div>
  )
}

export default TransactionRecord
