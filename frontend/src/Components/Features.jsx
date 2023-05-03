import React from 'react'

function Features() {
  return (
    <div className='flex flex-col gap-4 bg-black'>
        <div className='flex flex-col gap-2'>
            <div className='flex justify-center mb-4 text-4xl font-semibold text-white align-middle font-Poppins'>
                What makes us different?
            </div>
            <div className='flex justify-center text-gray-500 align-middle font-Poppins'>
                Our niche is to help you manage your finances so that you are in control of your money.
            </div>
        </div>
        <div className='grid grid-cols-4 m-10'>
            <div className=''>
                <div className='w-6 mt-10 mb-4 ml-28 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>
                </div>

                <div className='text-white font-Poppins px-[40px] text-2xl font-semibold mb-4'>Multiple Method</div>
                <div className='text-gray-500 px-[30px] text-sm font-Poppins mb-4'>Using this app is pretty easy. As we have developed this with workable yet easy features.</div>
                <div className='text-green-500 px-[30px] underline'>Read More {">"}</div>
            </div>
            <div>
            <div className='w-6 mt-10 mb-4 ml-28 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                </svg>
                </div>

                <div className='text-white font-Poppins px-[40px] text-2xl font-semibold mb-4'>Newest Tech</div>
                <div className='text-gray-500 px-[30px] text-sm font-Poppins mb-4'>Designed and developed with latest software and robust technologies.</div>
                <div className='text-green-500 px-[30px] underline'>Read More {">"}</div>
            </div>
            <div>
            <div className='w-6 mt-10 mb-4 ml-28 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                </svg>
                </div>

                <div className='text-white font-Poppins px-[40px] text-2xl font-semibold mb-4'>Security First</div>
                <div className='text-gray-500 px-[30px] text-sm font-Poppins mb-4'>Designed with latest technology. This ensures robust safety and privacy of data</div>
                <div className='text-green-500 px-[30px] underline'>Read More {">"}</div>
            </div>
            <div>
            <div className='w-6 mt-10 mb-4 ml-28 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
                </div>

                <div className='text-white font-Poppins px-[40px] text-2xl font-semibold mb-4'>User Friendly</div>
                <div className='text-gray-500 px-[30px] text-sm font-Poppins mb-4'>It's user friendly features and design is the reason for the app's popularity</div>
                <div className='text-green-500 px-[30px] underline'>Read More {">"}</div>
            </div>

        </div>
    </div>
  )
}

export default Features