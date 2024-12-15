import React from 'react';
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#080050] text-white py-10">
      <div className="container mx-auto my-auto ">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0 w-[18rem] relative">
            <h2 className="text-lg font-bold mb-4">ABOUT COMPANY</h2>
            <img src="/Images/eduSafari-removebg-preview__1_-removebg-preview.png" alt="Education Safari Logo" className="mb-4  text-white relative h-[6rem] w-[10rem]"/>
            <span className="text-[0.7rem] ml-auto mr-auto text-left">Education Safari is a education consultancy with a global presence with main offices in Australia, and Nepal.</span>
            <div className="mt-4">
              <a href="#" className="text-white">
              <FaFacebook className='text-[1.5rem]'/>
               </a>
            </div>
          </div>
          <div className="mb-6 w-[18rem] md:mb-0">
            <h2 className="text-lg font-bold mb-4">SERVICES</h2>
            <ul className='space-y-[0.8rem] justify-center align-center items-center'>
              <li className='text-[0.8rem] ml-auto mr-auto text-left'>Education Counselling</li>
              <li  className='text-[0.8rem] ml-auto mr-auto text-left'>Admission Assistance</li>
              <li  className='text-[0.8rem] ml-auto mr-auto text-left'>Visa Guidance</li>
              <li  className='text-[0.8rem] ml-auto mr-auto text-left'>Pre-Departure Support</li>
              <li  className='text-[0.8rem] ml-auto mr-auto text-left'>English Language</li>
            </ul>
          </div>
          <div className="mb-6 w-[18rem] md:mb-0 space-y-[0.7rem]">
            <h2 className="text-lg font-bold mb-4">CONTACT US</h2>
            <p className='underline'><strong >Australia Office</strong></p>
            <div className='flex justify-left space-x-[0.3rem] align-center items-center'>
               <HiLocationMarker  className='text-[0.8rem]' />
               <p className='text-[0.8rem] text-left'>14 Lincoln Avenue Plympton SA 5038, Australia</p>
            </div>
            <div className='flex justify-left space-x-[0.3rem] align-center items-center'>
               
               <BsFillTelephoneFill className='text-[0.8rem]' />
              <p className='text-[0.8rem]  text-left'>Telephone: 08 8472 8260</p>
            </div>
            <div className='flex justify-left space-x-[0.3rem] align-center items-center'>
               <BsFillTelephoneFill className='text-[0.8rem]' />
              <p className='text-[0.8rem] text-left'>Mobile phone: 0424 640 356</p>
            </div>
            <div className='flex justify-left space-x-[0.3rem] align-center items-center'>
              <MdEmail className='text-[0.8rem]'/>
              <p className='text-[0.8rem]  text-left'>Email: info@educationsafari.com</p>
            </div>
          </div>
          <div className='w-[18rem] mb-6 space-y-[0.7rem]'>
            <h2 className="text-lg font-bold mb-4">WORKING HOURS</h2>
            <p className='text-[0.8rem] ml-auto mr-auto text-left'>MONDAY: 9 AM to 6 PM</p>
            <p className='text-[0.8rem] ml-auto mr-auto text-left'>TUESDAY: 9 AM to 6 PM</p>
            <p className='text-[0.8rem] ml-auto mr-auto text-left'>WEDNESDAY: 9 AM to 6 PM</p>
            <p className='text-[0.8rem] ml-auto mr-auto text-left'>THURSDAY: 9 AM to 6 PM</p>
            <p className='text-[0.8rem] ml-auto mr-auto text-left'>FRIDAY: 9 AM to 6 PM</p>
          </div>
        </div>
        <hr className='w-full mt-[0.6rem] ml-0 mr-0 p-0' />
        <div className="flex justify-between mt-10">
          <p  className='text-[0.8rem]'>Copyright © 2024 <strong>Education Safari</strong> All rights reserved</p>
          <p  className='text-[0.8rem]'>Powered by <strong>Bitmap I.T. Solution Pvt. Ltd.</strong></p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;