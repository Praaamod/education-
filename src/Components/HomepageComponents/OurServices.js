import React from "react";

const OurServices  = () =>{
    return (
        <>
        <div className="h-auto mt-[2rem] w-full bg-white pl-[1rem] mb-[2rem] pr-[1rem]">
         <h1 className="font-medium text-gray-600 text-center text-[3rem]">Our Services</h1>
          <div className="flex justify-center space-x-[1.5rem] ml-auto mr-auto mt-[2rem]  items-center align-center">
         {Services.map((curElem, index) =>(
            <div key={index} className="h-auto transition-transform duration-900  ease-in-out hover:-translate-y-2 hover:cursor-pointer bg-[#e5e7eb] w-[22%] pl-[5px] pr-[5px] pt-[0.7rem] pb-[0.7rem] rounded-3xl justify-top items-center align-center flex flex-col">
            <img src = {curElem.img} alt= 'img' className="h-[25vh]  mb-[0.5rem] w-auto  object-cover" />
            <h1 className="font-semibold text-[#1C094A] text-[1.6rem] mt-[0.5rem] mb-[0.5rem] text-center">{curElem.heading}</h1>
            <span className="text-[0.7rem] ml-[5px] mr-[5px] font-normal text-back text-justify text-center">{curElem.description}</span>


        
           </div>

         ))}
                 

          


        </div>
        </div>
        
        </>
    )
}

const Services = [
    {
        id:1,
        "img":"/Images/counselling-removebg-preview.png",
        "description":"Our experienced team of counsellors is dedicated to understanding the unique needs and aspirations of each student. We provide personalized counselling sessions to help students explore suitable courses, institutions, and career pathways in Australia.",
        "heading":"Education Counselling",

    },
    {
        id:2,
        "img":"/Images/adminassistance-removebg-preview-removebg-preview.png",
        "description":"Navigating the complex admission processes can be daunting for international students. We assist in preparing and submitting applications to Australian universities and colleges, ensuring that all necessary documentation is complete and accurate.",
        "heading":"Admission Assistance",

    },
  
    {
        id:3,
        "img":"/Images/Visa-removebg-preview.png",
        "description":"Securing an Australian student visa is a crucial step in the journey. Our visa experts guide students through the visa application process, making it as smooth and stress-free as possible.",
        "heading":"Visa Guidance",

    },
    {
        id:4,
        "img":"/Images/globplan-removebg-preview.png",
        "description":"We understand that moving to a new country can be overwhelming. To ease the transition, we provide pre-departure briefings, helping students with essential information about life in Australia and preparing them for the new experience",
        "heading":"Pre-Departure Support",

    },

]
export default OurServices;