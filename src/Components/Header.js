import React from "react";
import { LuClock4 } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
const Header = () =>{
    return (
        <>
        <div className="w-full h-auto bg-[#080050] pl-[1rem] pr-[1rem] pt-[5px] pb-[5px]">
            <div className="flex justify-between align-center items-center">
             <div className="flex justify-between space-x-[2rem]  align-center items-center">
                    <div className="flex justify-center space-x-[5px] align-center items-center ">
                    <LuClock4   className="text-white text-[1rem] font-bold"/>
                    <span className="text-white text-[0.8rem] font-semibold">Mon-Fri 9:00 to 18:00 </span>

                    </div>

                    <div className="flex justify-center space-x-[5px] align-center items-center ">
                    <BsTelephone className="text-white text-[1rem] font-bold" />
                    <span className="text-white text-[0.8rem] font-semibold">0424 640 356</span>
                    </div>

                    <div className="flex justify-center  space-x-[5px] align-center items-center " >
                    <MdEmail className="text-white text-[1rem] font-bold"/>
                    <span className="text-white text-[0.8rem] font-semibold ">info@educationsafari.com</span>
                    </div>

             </div>
             <div className="align-center items-center rounded-full bg-white p-[5px] ">
               <FaFacebookF className="text-black text-[1rem]" />
            
             </div>

            </div>
        </div>
        
        </>
    )
}
export default Header;