import React,{useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useCookies } from 'react-cookie'

function Navbar() {

  const [cookies, setCookies] = useCookies(["access_token"])
  const [profilePressed, setProfilePressed] = useState(false)
  const navigate = useNavigate()

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/login")
  }
  
  return (
    <nav className='fixed top-0 left-0 w-full pt-4 text-white font-Poppins'>
        <div className='container flex justify-between mx-auto'>
            <Link to="/"><span className='text-3xl font-bold '> Fin.<span className="text-green-500">Man</span></span></Link>
            <ul className='flex items-center text-sm tracking-wide gap-x-8'>
                <li className='py-1 duration-300 hover:scale-125'><a className="text-gray-300 cursor-pointer text-md hover:text-green-500"><Link to="/">Home</Link></a></li>
                <li className='py-1 duration-300 hover:scale-125'><a className="text-gray-300 cursor-pointer text-md hover:text-green-500"><Link to="/product">Product</Link></a></li>
                {cookies.access_token ? (<li className='py-1 duration-300 hover:scale-125'><a className="text-gray-300 cursor-pointer text-md hover:text-green-500"><Link to="/user/dashboard">Dashboard</Link></a></li>):(<div className='hidden'></div>)}
                <li className='py-1 duration-300 hover:scale-125'><a className="text-gray-300 cursor-pointer text-md hover:text-green-500"><Link to="/payments">Payments</Link></a></li>
                <li className='py-1 duration-300 hover:scale-125'><a className="text-gray-300 cursor-pointer text-md hover:text-green-500"><Link to="/about">About Us</Link></a></li>
            </ul>
            {!cookies.access_token ? (
            <div>
                <button className='py-3 text-xs tracking-wide bg-black rounded-full p-7 '><Link to="/login">Login</Link></button>
                <button className='py-3 text-xs font-bold tracking-wide rounded-full font-Poppins bg-gradient-to-r from-blue-500 to-green-500 px-7 hover:scale-110 duration 300'><Link to="/register">Sign Up</Link></button>
                
            </div>
            ) : (
              <div>
                <button onClick={() => setProfilePressed(!profilePressed)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                </button>
                
                {profilePressed ? (<button className="flex px-3 py-2 text-sm text-gray-200 border" onClick={logout}>Logout</button>):(<div></div>)}
                
              </div>
            )}
        </div>
        
    </nav>
  )
}

export default Navbar