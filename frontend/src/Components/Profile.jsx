import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate("/user/dashboard")
    }
  return (
    <form id="login" >
            <div className="bg-white dark:bg-gray-800">
                <div className="container mx-auto bg-white rounded dark:bg-gray-800">
                    <div className="py-5 bg-white border-b border-gray-300 xl:w-full dark:border-gray-700 dark:bg-gray-800"></div>
                    <div className="mx-auto">
                        <div className="w-11/12 mx-auto xl:w-9/12 xl:mx-0">
                            <div className="relative h-48 mt-8 rounded">
                                <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form1.jpg" alt className="absolute object-cover w-full h-full rounded shadow" />
                                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black rounded opacity-50" />
                                <div className="absolute right-0 flex items-center px-3 py-2 mt-4 mr-4 rounded cursor-pointer">
                                    <p className="text-xs text-gray-100">Change Cover Photo</p>
                                    <div className="ml-2 text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                            <line x1={16} y1={5} x2={19} y2={8} />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 flex items-center justify-center w-20 h-20 ml-12 -mb-10 bg-center bg-no-repeat bg-cover rounded-full shadow">
                                    <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg" alt className="absolute top-0 bottom-0 left-0 right-0 z-0 object-cover w-full h-full rounded-full shadow" />
                                    <div className="absolute top-0 bottom-0 left-0 right-0 z-0 bg-black rounded-full opacity-50" />
                                    <div className="z-10 flex flex-col items-center justify-center text-gray-100 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                            <line x1={16} y1={5} x2={19} y2={8} />
                                        </svg>
                                        <p className="text-xs text-gray-100">Edit Picture</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full mt-16 xl:w-2/6 lg:w-1/2 md:w-1/2">
                                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Username
                                </label>
                                <input type="text" id="username" name="username" required className="py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 bg-transparent border border-gray-300 rounded shadow-sm dark:border-gray-700 focus:outline-none focus:border-indigo-700 dark:text-gray-400" placeholder="@example" />
                            </div>
                            <div className="flex flex-col w-full mt-8 xl:w-3/5 lg:w-1/2 md:w-1/2">
                                <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    About
                                </label>
                                <textarea id="about" name="about" required className="py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 bg-transparent border border-gray-300 rounded shadow-sm resize-none dark:border-gray-700 focus:outline-none focus:border-indigo-700 dark:text-gray-400" placeholder="Let the world know who you are" rows={5} defaultValue={""} />
                                <p className="w-full pt-1 text-xs text-right text-gray-500 dark:text-gray-400">Character Limit: 200</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-4 mx-auto mt-10 bg-white rounded dark:bg-gray-800">
                    <div className="py-5 border-b border-gray-300 xl:w-full dark:border-gray-700">
                        <div className="flex items-center w-11/12 mx-auto xl:w-full xl:mx-0">
                            <p className="text-lg font-bold text-gray-800 dark:text-gray-100 font-Poppins">Personal Information</p>
                            <div className="ml-2 text-gray-600 cursor-pointer dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4 mx-auto">
                        <div className="container mx-auto">
                            <div className="flex flex-col mb-6 xl:w-1/4 lg:w-1/2 md:w-1/2">
                                <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    First Name
                                </label>
                                <input type="text" id="FirstName" name="firstName" required className="py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 bg-transparent border border-gray-300 rounded shadow-sm dark:border-gray-700 focus:outline-none focus:border-indigo-700 dark:text-gray-400" placeholder />
                            </div>
                            <div className="flex flex-col mb-6 xl:w-1/4 lg:w-1/2 md:w-1/2">
                                <label htmlFor="LastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Last Name
                                </label>
                                <input type="text" id="LastName" name="lastName" required className="py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 bg-transparent border border-gray-300 rounded shadow-sm dark:border-gray-700 focus:outline-none focus:border-indigo-700 dark:text-gray-400" placeholder />
                            </div>
                            <div className="flex flex-col mb-6 xl:w-1/4 lg:w-1/2 md:w-1/2">
                                <label htmlFor="Email" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Email
                                </label>
                                <div className="flex border border-green-400 rounded shadow-sm">
                                    <div className="flex items-center px-4 py-3 border-r border-green-400 dark:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <rect x={3} y={5} width={18} height={14} rx={2} />
                                            <polyline points="3 7 12 13 21 7" />
                                        </svg>
                                    </div>
                                    <input type="text" id="Email" name="email" required className="w-full py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 bg-transparent rounded focus:outline-none dark:text-gray-400" placeholder="example@gmail.com" />
                                </div>
                                <div className="flex items-center justify-between pt-1 text-green-400">
                                    <p className="text-xs">Email submission success!</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                        <path
                                            className="heroicon-ui"
                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                              0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                                            stroke="currentColor"
                                            strokeWidth="0.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col mb-6 xl:w-1/4 lg:w-1/2 md:w-1/2">
                                <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Street Address
                                </label>
                                <input type="text" id="StreetAddress" name="streetAddress" required className="py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 bg-transparent border border-gray-300 rounded shadow-sm dark:border-gray-700 focus:outline-none focus:border-indigo-700 dark:text-gray-400" placeholder />
                            </div>
                            <div className="flex flex-col mb-6 xl:w-1/4 lg:w-1/2 md:w-1/2">
                                <label htmlFor="City" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    City
                                </label>
                                <div className="flex border border-gray-300 rounded shadow-sm dark:border-gray-700">
                                    <input type="text" id="City" name="city" required className="w-full py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 bg-transparent border border-transparent rounded focus:outline-none focus:border-indigo-700 dark:text-gray-400" placeholder="Los Angeles" />
                                    <div className="flex flex-col items-center justify-center px-4 text-gray-500 border-l border-gray-300 dark:border-gray-700 dark:text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col mb-6 xl:w-1/4 lg:w-1/2 md:w-1/2">
                                <label htmlFor="State/Province" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    State/Province
                                </label>
                                <input type="text" id="State/Province" name="state" required className="py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 bg-transparent border border-gray-300 rounded shadow-sm dark:border-gray-700 focus:outline-none focus:border-indigo-700 dark:text-gray-400" placeholder="California" />
                            </div>
                            <div className="flex flex-col mb-6 xl:w-1/4 lg:w-1/2 md:w-1/2">
                                <label htmlFor="Country" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Country
                                </label>
                                <input type="text" id="Country" name="country" required className="py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 bg-transparent border border-gray-300 rounded shadow-sm dark:border-gray-700 focus:outline-none focus:border-indigo-700 dark:text-gray-400" placeholder="United States" />
                            </div>
                            <div className="flex flex-col mb-6 xl:w-1/4 lg:w-1/2 md:w-1/2">
                                <div className="flex items-center pb-2">
                                    <label htmlFor="ZIP" className="text-sm font-bold text-gray-800 dark:text-gray-100">
                                        ZIP/Postal Code
                                    </label>
                                    <div className="ml-2 text-gray-600 cursor-pointer dark:text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                            <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                                <input type="text" name="zip" required id="ZIP" className="py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 bg-transparent border border-red-400 rounded shadow-sm focus:outline-none focus:border-indigo-700 dark:text-gray-400" placeholder={86745} />
                                <div className="flex items-center justify-between pt-1 text-red-400">
                                    <p className="text-xs">Incorrect Zip Code</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
                                        <circle cx={12} cy={12} r={10} />
                                        <line x1={15} y1={9} x2={9} y2={15} />
                                        <line x1={9} y1={9} x2={15} y2={15} />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container w-11/12 mx-auto mt-10 bg-gray-100 rounded dark:bg-gray-700 xl:w-full">
                    <div className="px-8 py-5 xl:w-full">
                        <div className="flex items-center mx-auto">
                            <div className="container mx-auto">
                                <div className="mx-auto xl:w-full">
                                    <p className="text-lg font-bold text-gray-800 dark:text-gray-100">Alerts</p>
                                    <p className="pt-1 text-sm text-gray-500 dark:text-gray-400">Get updates of any new activity or features. Turn on/off your preferences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pb-6 mx-auto">
                        <div className="flex items-center px-8 pb-4 text-gray-800 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={3} y={5} width={18} height={14} rx={2} />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                            <p className="ml-2 text-sm font-bold text-gray-800 dark:text-gray-100">Via Email</p>
                        </div>
                        <div className="px-8">
                            <div className="flex items-center justify-between mt-4 mb-8">
                                <div className="w-9/12">
                                    <p className="pb-1 text-sm text-gray-800 dark:text-gray-100">Comments</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when a post or comment is made</p>
                                </div>
                                <div className="relative bg-gray-200 rounded-full shadow-sm cursor-pointer">
                                    <input type="checkbox" name="email_comments" id="toggle1" className="absolute top-0 bottom-0 w-6 h-6 m-auto bg-white border border-transparent rounded-full shadow-sm appearance-none cursor-pointer focus:outline-none checkbox dark:bg-gray-400" />
                                    <label htmlFor="toggle1" className="block w-12 h-4 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label dark:bg-gray-800" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-9/12">
                                    <p className="pb-1 text-sm text-gray-800 dark:text-gray-100">Job Applications</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when a candidate applies to a job posting</p>
                                </div>
                                <div className="relative bg-gray-200 rounded-full shadow-sm cursor-pointer">
                                    <input type="checkbox" name="email_job_application" id="toggle2" className="absolute top-0 bottom-0 w-6 h-6 m-auto bg-white border border-transparent rounded-full shadow-sm appearance-none cursor-pointer focus:outline-none checkbox dark:bg-gray-400" />
                                    <label htmlFor="toggle2" className="block w-12 h-4 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label dark:bg-gray-800" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-9/12">
                                    <p className="pb-1 text-sm text-gray-800 dark:text-gray-100">Product Updates</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Get notifitied when there is a new product feature or upgrades</p>
                                </div>
                                <div className="relative bg-gray-200 rounded-full shadow-sm cursor-pointer">
                                    <input type="checkbox" name="email_product_update" id="toggle3" className="absolute top-0 bottom-0 w-6 h-6 m-auto bg-white border border-transparent rounded-full shadow-sm appearance-none cursor-pointer focus:outline-none checkbox dark:bg-gray-400" />
                                    <label htmlFor="toggle3" className="block w-12 h-4 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label dark:bg-gray-800" />
                                </div>
                            </div>
                        </div>
                        <div className="px-8 pb-4 border-b border-gray-300 dark:border-gray-700">
                            <div className="flex items-center text-gray-800 dark:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                </svg>
                                <p className="ml-2 text-sm font-bold text-gray-800 dark:text-gray-100">Push Notifications</p>
                            </div>
                        </div>
                        <div className="px-8">
                            <div className="flex items-center justify-between mt-4 mb-8">
                                <div className="w-9/12">
                                    <p className="pb-1 text-sm text-gray-800 dark:text-gray-100">Comments</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when a post or comment is made</p>
                                </div>
                                <div className="relative bg-gray-200 rounded-full shadow-sm cursor-pointer">
                                    <input type="checkbox" name="notification_comment" id="toggle4" className="absolute top-0 bottom-0 w-6 h-6 m-auto bg-white border border-transparent rounded-full shadow-sm appearance-none cursor-pointer focus:outline-none checkbox dark:bg-gray-400" />
                                    <label htmlFor="toggle4" className="block w-12 h-4 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label dark:bg-gray-800" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-9/12">
                                    <p className="pb-1 text-sm text-gray-800 dark:text-gray-100">Job Applications</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when a candidate applies to a job posting</p>
                                </div>
                                <div className="relative bg-gray-200 rounded-full shadow-sm cursor-pointer">
                                    <input type="checkbox" name="notification_application" id="toggle5" className="absolute top-0 bottom-0 w-6 h-6 m-auto bg-white border border-transparent rounded-full shadow-sm appearance-none cursor-pointer focus:outline-none checkbox dark:bg-gray-400" />
                                    <label htmlFor="toggle5" className="block w-12 h-4 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label dark:bg-gray-800" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-9/12">
                                    <p className="pb-1 text-sm text-gray-800 dark:text-gray-100">Product Updates</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Get notifitied when there is a new product feature or upgrades</p>
                                </div>
                                <div className="relative bg-gray-200 rounded-full shadow-sm cursor-pointer">
                                    <input type="checkbox" name="notification_updates" id="toggle6" className="absolute top-0 bottom-0 w-6 h-6 m-auto bg-white border border-transparent rounded-full shadow-sm appearance-none cursor-pointer focus:outline-none checkbox dark:bg-gray-400" />
                                    <label htmlFor="toggle6" className="block w-12 h-4 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label dark:bg-gray-800" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container w-11/12 mx-auto xl:w-full">
                    <div className="flex justify-end w-full py-4 bg-white sm:px-0 dark:bg-gray-800">
                        <button className="px-6 py-2 mr-4 text-xs text-indigo-600 transition duration-150 ease-in-out bg-gray-200 rounded focus:outline-none hover:bg-gray-300 dark:bg-gray-700 dark:text-indigo-600">Cancel</button>
                        <button className="px-8 py-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 rounded focus:outline-none hover:bg-indigo-600" type="submit" onClick={handleSubmit}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
  )
}

export default Profile