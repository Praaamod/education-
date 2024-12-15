import React, { useState, useRef, useEffect } from 'react';import { MdHome } from "react-icons/md";
import Dropdown from './Dropdown';
import { RiArrowDropDownLine } from "react-icons/ri";


const NavBar = () =>{

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);


    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setDropdownOpen(false);
        }
      };

      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);



    return(
        <>
        <div className="sticky top-0 z-50 w-full bg-white pl-[1rem]  pt-[5px] pb-[5px] pr-[1rem] shadow-md">
         <div className="flex justify-between  items-center align-center ">
          <div className="bg-black text-white  ">
            <img src='/Images/eduSafari.png' className="h-[20vh] w-auto object-cover"/>
          </div>
          <div className="flex justify-between   items-center items-center">
            <ul className="flex justify-between  align-center items-center space-x-[3rem]">
                <li className='flex space-x-2 align-center items-center justify-center'>
                    <MdHome />
                    Home
                </li>
                <li>About Us</li>
                <li className="relative flex items-center cursor-pointer" ref={dropdownRef}>
                 Services
                 <RiArrowDropDownLine 
                        className="ml-2 cursor-pointer"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                 />
                  {dropdownOpen && <Dropdown />}
                  
                 </li>

                <li>StudyAbroad</li>
                <li>Blogs</li>
                <li>Gallery</li>
                <li>Contact Us</li>
                <button className="text-center bg-[#f8690b] hover:bg-[#0d4d74] transition-all duration-300 ease-in-out text-[1.1rem] rounded-md pt-[0.7rem] pb-[0.7rem] pl-[2rem] pr-[2rem]  text-center">
                Consult Now </button>
            </ul>

          </div>

         </div>

        </div>
        </>
    )
}
export default NavBar;