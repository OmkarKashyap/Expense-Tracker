import React from 'react'
import ProductCards from '../Components/Product/ProductCards'
import ProductContent from '../Components/Product/ProductContent'

function Product() {
  return (
  <div className="overflow-y-hidden bg-gray-900">
    <div className="container px-4 py-24 mx-auto f-f-p xl:px-0">
      <h1 className="text-3xl font-extrabold tracking-wider text-center text-white focus:outline-none lg:text-4xl lg:leading-9">How it works?</h1>
      <div className="md:mt-24 f-f-p">
        <div className="justify-center hidden w-full md:flex">
          <div className="relative flex flex-col items-center border-gray-300 md:items-end md:pr-12 md:border-r-4 md:w-1/2">
            <div aria-label="sign up" role="img">
              <img className="mt-10 focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg" alt="how it work" />
            </div>
            <div aria-label={2} role="img">
              <img className="mt-24 focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt />
            </div>
            <div className="flex flex-col items-center mt-12 lg:items-end md:w-8/12">
              <h1 className="text-xl font-bold leading-5 text-white focus:outline-none">Create a Wallet</h1>
              <h2 className="pl-3 mt-3 text-base leading-6 tracking-wide text-center text-gray-500 focus:outline-none md:text-right">Create a wallet by linking a payment method that you’re comfortable with. Paypal, Visa and more </h2>
            </div>
            <div aria-label="transactions" role="img">
              <img className="mt-24 focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg" alt />
            </div>
            <img className="absolute top-0 right-0 hidden -mt-2 -mr-1 md:block" src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png" alt />
          </div>
          <div className="flex flex-col items-center mt-20 md:items-start md:pl-12 lg:border-gray-400 md:mt-0 md:w-1/2">
            <div aria-label={1} role="img">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" alt />
            </div>
            <div className="flex flex-col items-center mt-6 md:items-start md:w-8/12">
              <h1 className="text-xl font-bold leading-5 text-white focus:outline-none">Sign Up for an Account</h1>
              <h2 className="mt-3 text-base leading-6 tracking-wide text-gray-500 focus:outline-none">Sign up on our website and opt for a program that suits you the best . </h2>
            </div>
            <div aria-label="wallet" role="img">
              <img className="mt-32 focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg" alt />
            </div>
            <div aria-label={3} role="img">
              <img className="mt-20 focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg" alt />
            </div>
            <div className="flex flex-col items-center mt-6 md:items-start md:w-8/12">
              <h1 className="text-xl font-bold leading-5 text-white focus:outline-none">Start your Transactions</h1>
              <h2 className="mt-3 text-base leading-6 tracking-wide text-gray-500 focus:outline-none">Start transactions right away. No more complicated process for anything else.</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full md:hidden">
          <img className="my-10 focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg" alt="how it work" />
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" alt />
          <div className="mt-10">
            <h1 className="text-xl font-bold leading-5 tracking-wide text-center">SignUp for an Account</h1>
            <h2 className="mt-3 text-base leading-6 tracking-wide text-center text-gray-500">Sign up on our website and opt for a program that suits you the best .</h2>
          </div>
          <img className="my-10 focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg" alt />
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt />
          <div className="mt-10">
            <h1 className="text-xl font-bold leading-5 tracking-wide text-center">Create a Wallet</h1>
            <h2 className="pl-3 mt-3 text-base leading-6 tracking-wide text-center text-gray-500">Create a wallet by linking a payment method that you’re comfortable with. Paypal, Visa and more</h2>
          </div>
          <img className="my-10 focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg" alt />
          <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg" alt />
          <div className="flex flex-col items-center mt-10 md:items-start md:w-8/12">
            <h1 className="text-xl font-bold leading-5 tracking-wide text-center">Start your Transactions</h1>
            <h2 className="mt-3 text-base leading-6 tracking-wide text-center text-gray-500">Start transactions right away. No more complicated process for anything else.</h2>
          </div>
        </div>
      </div>
    </div>
    <ProductCards />
    <ProductContent />

  </div>
  )
}

export default Product