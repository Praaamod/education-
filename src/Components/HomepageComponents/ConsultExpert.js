import React from "react";

const ConsultExpert= () =>{
    return (
        <>
        <div className="w-full h-auto bg-white mb-[3rem] mt-0 pl-[1rem] pt-[3rem] pr-[1rem]">
         <div className="bg-[#080050] w-auto h-auto  pl-auto pr-auto  pt-[1rem]  rounded-2xl pb-[1rem] ">
             <div className="flex flex-col pl-auto pr-auto ">
                <h1 className="text-white ml-[5rem] text-[3rem] font-normal text-left mb-[0.5rem]">Expert Counselling and Guidance</h1>
                    <div className="justify-center align-center items-center space-x-[3rem] flex ">
                      <span className="text-white text-left text-[1rem] font-normal">Our primary objective is to offer expert counselling and guidance to students who aspire to pursue their education in Australia and abroad.</span>
                      <button className="bg-[#e36011] w-auto h-[2.5rem] rounded  p-[0.5rem] text-center text-[1rem]  justify-center align-center items-center duration-0.3s hover:bg-[#0d4d74]">CONSULT NOW</button>
                </div>

             </div>
         </div>
         <div className="relative z-10  mt-[10rem]  flex justify-center items-center bg-white h-auto">
                <h1 className="text-[2rem] font-bold leading-relaxed text-thin  mb-[3rem] text-[#1C094A] text-center">
                    Student's Feedback
                </h1>
            </div>
        </div>
        </>
    )
}
export default ConsultExpert;