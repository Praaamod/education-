import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaRegHourglass } from "react-icons/fa";



const VisitOfficeSection = () =>{
    return(
        <>
        <div className="flex flex-col w-full bg-[#f5f5f5] pt-[5rem] pb-[5rem] ml-auto mr-auto justify-center align-center items-center mt-[2rem] mb-[5rem]">
         <p className="text-center font-bold text-[2.5rem] text-[#080050]">Visit Our Office</p>
        <div className="flex justify-center space-x-[0.8rem] w-auto    p-[1rem]  ">
         {items.map((currElem, index) =>(
         <div key = {index} className="flex  h-auto  w-auto justify-center align-center rounded-md items-center ">
          <div className="h-full w-[4.5rem] bg-[#080050] rounded-tl-md rounded-bl-md justify-center align-center items-center ">
            <p className="text-white text-[1.7rem] text-center ml-[1rem] mt-[3rem] ">{currElem.icon}</p>
          </div>
          <div className="flex flex-col w-[14rem] h-full justify-center align-center  rounded-tr-md rounded-br-md shadow-lg bg-white pt-[2rem] pb-[2rem]">
            <span className="text-center text-[1.5rem] text-black ">{currElem.heading}</span>
            <span className="text-center text-[0.8rem] ">{currElem.text}</span>
          </div>

         </div>


         ))}
         


        </div>
        <p className="text-center font-semibold text-[1.6rem] mt-[1rem] text-[#080050]">Chitwan Office</p>

        <div className="flex justify-center space-x-[0.8rem] w-auto    p-[1rem]  ">
                {Chitwan.map((currElem, index) =>(
                <div key = {index} className="flex  h-auto  w-auto justify-center align-center rounded-md items-center ">
                <div className="h-full w-[4.5rem] bg-[#f8690b] rounded-tl-md rounded-bl-md justify-center align-center items-center ">
                    <p className="text-white text-[1.7rem] text-center ml-[1rem] mt-[3rem] ">{currElem.icon}</p>
                </div>
                <div className="flex flex-col w-[14rem] h-full justify-center align-center  bg-white pt-[2rem] pb-[2rem] rounded-tr-md rounded-br-md shadow-lg">
                    <span className="text-center text-[1.5rem] text-black  ">{currElem.heading}</span>
                    <span className="text-center text-[0.8rem] ">{currElem.text}</span>
                </div>

                </div>


         ))}
         


        </div>

         

        </div>

        </>
    )
}

const items = [
    {
        heading:'Address',
        text:'14 Lincoln Avenue Plympton SA 5038, Australia',
        icon:<FaLocationDot />,
    },
    {
        heading:'Email Us On',
        text:'info@educationsafari.com',
        icon:<MdEmail />,
    },
    {
        heading:'Call Us On',
        text:'0424 640 356',
        icon:<MdCall  />,
    },
    {
        heading:'Opening Hours',
        text:'Mon-Fri: 09:00 AM to 05:00 PM',
        icon:<FaRegHourglass/>,
    },
]

const Chitwan = [
    {
        heading:'Address',
        text:'Narayani Complex, Milan Road, Narayangarh, Chitwan,Nepal',
        icon:<FaLocationDot />,
    },
    {
        heading:'Email Us On',
        text:'chitwan@educationsafari.com',
        icon:<MdEmail />,
    },
    {
        heading:'Call Us On',
        text:'9705095313',
        icon:<MdCall  />,
    },
    {
        heading:'Opening Hours',
        text:'Sun-Fri: 09:00 AM to 06:00 PM',
        icon:<FaRegHourglass/>,
    },

]
export default VisitOfficeSection;