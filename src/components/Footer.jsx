import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import Discover from '../Image/PaymentGatewayBrand/Discover_logo_PNG2.png'
import Paytm from '../Image/PaymentGatewayBrand/Paytm_logo_PNG1.png'
import MasterCard from '../Image/PaymentGatewayBrand/Mastercard_logo_PNG20.png'
import GooglePay from '../Image/PaymentGatewayBrand/Google_Pay_logo_PNG1.png'
import PayPal from '../Image/PaymentGatewayBrand/Paypal_logo_PNG1.png'
import Visa from '../Image/PaymentGatewayBrand/Visa_logo_PNG3.png'



const Footer = () => {
  const [showInfo1, setShowInfo1] = useState(true);
  const [showInfo2, setShowInfo2] = useState(true);
  const [showInfo3, setShowInfo3] = useState(true);

  const toggleInfo1 = () => {
    setShowInfo1(!showInfo1);
  };

  const toggleInfo2 = () => {
    setShowInfo2(!showInfo2);
  };

  const toggleInfo3 = () => {
    setShowInfo3(!showInfo3);
  };

  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="container mx-auto flex flex-wrap justify-evenly">

        <div className="w-full m-4 md:w-1/3  text-left ">
          <h3 className='text-2xl font-semibold mb-4'>About Information</h3>
          <hr className='border-2 border-teal-500 w-20 mb-5' />
          <p className='text-left '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
        </div>
        <div className={`w-fit text-left m-4  `}>
          <h3 className="text-2xl  font-semibold mb-4">
            Information
            <button
              className="ml-2 p-2 bg-gray-600 text-white rounded-full"
              onClick={toggleInfo1}
            >
              {showInfo1 ? (
                <ChevronUpIcon className="w-4 h-4" />
              ) : (
                <ChevronDownIcon className="w-4 h-4" />
              )}
            </button>
          </h3>
          <hr className='border-2 border-teal-500 w-20 mb-5' />
          {showInfo1 && (
            <ul className="mb-8  w-fit   ">
              <li className=''>About Information</li>
              <li>Contact Us</li>
              <li>Shipping</li>
              <li>Sitemap</li>
              <li>FAQs</li>
              <li>Store</li>
            </ul>
          )}
        </div>
        <div className={`w-fit text-left m-4`}>
          <h3 className="text-2xl font-semibold mb-4">
            Quick links
            <button
              className="ml-2 p-2 bg-gray-600 text-white rounded-full"
              onClick={toggleInfo2}
            >
              {showInfo2 ? (
                <ChevronUpIcon className="w-4 h-4" />
              ) : (
                <ChevronDownIcon className="w-4 h-4" />
              )}
            </button>
          </h3>
          <hr className='border-2 border-teal-500 w-20 mb-5' />
          {showInfo2 && (
            <ul className="mb-8">
              <li>Delivery Information</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms And Conditions</li>
              <li>Search</li>
            </ul>
          )}
        </div>
        <div className={`w-fit text-left m-4`}>
          <h3 className="text-2xl font-semibold mb-4">
            Contact Us
            <button
              className="ml-2 p-2 bg-gray-600 text-white rounded-full"
              onClick={toggleInfo3}
            >
              {showInfo3 ? (
                <ChevronUpIcon className="w-4 h-4" />
              ) : (
                <ChevronDownIcon className="w-4 h-4" />
              )}
            </button>
          </h3>
          <hr className='border-2 border-teal-500 w-20 mb-5' />
          {showInfo3 && (
            <div>
              <p>33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</p>
              <p>Electshop@Exampledemo.Com</p>
              <p>(+91)012-345-6789</p>
            </div>
          )}
        </div>
      </div>
      <hr className='border-1 border-gray-400 w-full mb-5' />
      <div className="flex w-full md:flex-row  md:justify-between space-y-3 items-center flex-col ">
        <div className=" text-sm ml-6  text-gray-400">
          © 2023, Electshop - Electronics Store (Password: Demo) Created By Shivam
        </div>
        <div className=" flex h-8 mr-6 space-x-3 text-zinc-50 ">
          <img src={PayPal} className='w-12  bg-slate-100 p-2 rounded-md' alt="PayPal" />
          <img src={GooglePay} className='w-12  bg-slate-100 p-2 rounded-md' alt="GooglePay" />
          <img src={Paytm} className='w-12 bg-slate-100 p-2 rounded-md' alt="Paytm" />
          <img src={MasterCard} className='w-12 bg-slate-100 p-2 rounded-md' alt="MasterCard" />
          <img src={Visa} className='w-12 bg-slate-100 p-2 rounded-md' alt="Visa" />
          <img src={Discover} className='w-12 bg-slate-100 p-2 rounded-md' alt="Discover" />

        </div>
      </div>
    </footer>
  );
};

export default Footer;
