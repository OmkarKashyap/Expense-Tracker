import React from 'react'

function Button({name, icon, onClick, bg, bPad, color, bRad}) {
  return (
    <div className='flex gap-2 align-middle transition-all duration-100 ease-in-out cursor-pointer font-Poppins' style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
    }} 
    onClick={onClick}>
        {icon}
        {name}
    </div>
    
  )
}

export default Button