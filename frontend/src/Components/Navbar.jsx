import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full pt-4 text-white font-Poppins'>
        <div className='container flex justify-between mx-auto'>
            <Link to="/"><span className='text-3xl font-bold '> Fin.<span className="text-green-500">Man</span></span></Link>
            <ul className='flex items-center text-sm tracking-wide gap-x-8'>
                <li className='py-1 duration-300 hover:scale-125'><a className="text-gray-300 cursor-pointer text-md hover:text-green-500"><Link to="/">Home</Link></a></li>
                <li className='py-1 duration-300 hover:scale-125'><a className="text-gray-300 cursor-pointer text-md hover:text-green-500"><Link to="/product">Product</Link></a></li>
            </ul>
            <div>
                <button className='py-3 text-xs tracking-wide bg-black rounded-full p-7 '><Link to="/login">Login</Link></button>
                <button className='py-3 text-xs font-bold tracking-wide rounded-full font-Poppins bg-gradient-to-r from-blue-500 to-green-500 px-7 hover:scale-110 duration 300'><Link to="/register">Sign Up</Link></button>
                
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar