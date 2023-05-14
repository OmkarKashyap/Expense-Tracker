import React from 'react'
import Product2Image from "../../assets/Product2Img.jpg"
import ProductDashboard from "../../assets/ProductDashboardImg.jpg"
function ProductContent() {
  return (
    <div>
        <div class="relative p-4 bg-white dark:bg-gray-800 h-full">
    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div class="lg:col-start-2 md:pl-20">
            <h4 class="text-2xl mt-0 font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
                Manage everything
            </h4>
            <ul class="mt-10">
                <li>
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                One-look dashboard
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                Know everything about your business in a single glance with your new dashboard.
                            </p>
                        </div>
                    </div>
                </li>
                <li class="mt-10">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                Orders, managed
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                All your orders in one place so you can manage your delivery, collection, asap and pre-orders in one place.
                            </p>
                        </div>
                    </div>
                </li>
                <li class="mt-10">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                Email &amp; SMS Notifications
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                Never miss a new order with notifications via your dashboard, by sound, and to your email and phone.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="relative mt-10 mx-4 md:mx-4 lg:mt-0 lg:col-start-1 text-white flex flex-col ">
             {/*class="relative w-auto mx-auto rounded shadow-lg*/}
                <div className='flex justify-start w-full p-20 pt-10 pl-0 '><img className="rounded-xl w-76 h-72" src={Product2Image} /></div>
                <div className='flex justify-end p-20 pt-0 pr-0'><img className="h-80 rounded-xl w-96"  src={ProductDashboard} /></div>
        </div>
    </div>
</div>

    </div>
  )
}

export default ProductContent