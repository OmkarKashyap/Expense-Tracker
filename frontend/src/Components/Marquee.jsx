import React from 'react'
import {marquee} from "../constants/marquee"

function Marquee() {
  return (
    <div class="relative flex text-white bg-black mb-24">
        <div class="py-12 animate-marquee2 whitespace-nowrap flex">
            {
                marquee.map((marquee) => (
                    <div className="flex mx-4 text-4xl">
                        <img src={marquee.src} className='h-32 w-96' />
                    </div>
                ))
            }
        </div>
    </div>
    
  )
}

export default Marquee