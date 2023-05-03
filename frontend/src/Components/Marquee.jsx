import React from 'react'
import {marquee} from "../constants/marquee"

function Marquee() {
  return (
    <div class="relative flex overflow-x-hidden text-white bg-black mb-24">
        <div class="py-12 animate-marquee whitespace-nowrap">
            {
                marquee.map((marquee) => (
                    <span className="mx-4 text-4xl">
                        {marquee.src}
                    </span>
                ))
            }
        </div>
    </div>
    
  )
}

export default Marquee