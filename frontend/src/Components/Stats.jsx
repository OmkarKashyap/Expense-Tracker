import React from 'react'
import {stats} from "../constants/stats"

function Stats() {
  return (
    <section className='flex flex-row flex-wrap mb-6 bg-gray-900 sm:mb-20'>
        {stats.map((stat) => (
            <div key={stat.id} className='flex flex-row items-center justify-start flex-1 m-5 ml-10 '>
                <h4 className='font-Poppins font-semibold xs:[text-40px] text-[40px] xs:leading-[53px] leading-[43px] text-green-500'>{stat.value}</h4>
                <p className='font-Poppins font-semibold xs:[text-20px] text-[15px] xs:leading-[26px] leading-[21px] text-white uppercase ml-3'>{stat.title}</p>
            </div>
        ))}
    </section>
  )
}

export default Stats