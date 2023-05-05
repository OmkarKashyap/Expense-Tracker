import React, { useState } from 'react'
import avatar from '../img/avatar.png'
import { signout } from '../utils/Icons'
import { menuItems } from '../utils/menuItems'
/*
function Navigation({active, setActive}) {
  return (
    <div>
        <div className='p-[2rem] h-[100%] bg-black text-white rounded-3xl flex flex-col justify-between gap-8'>
            <div className="h-[100px] flex align-center gap-4">
                <img className='object-cover bg-gray-300 border-2 rounded-full' src={avatar} alt="" />
                <div className="text">
                    <h2 className='text-green-500'>Mike</h2>
                    <p className='text-blue-500'>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </div>

    </div>
  )
}

export default Navigation

*/