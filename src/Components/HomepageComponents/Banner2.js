import React from "react";

const Banner2 = () =>{
    return (
        <>
        <div className="w-full h-auto m-0 pt-[1rem] pb-[1rem] pl-[4rem] pr-[4rem] bg-[#f5f5f5]">
            <div className="justify-between flex align-center items-center ">
            <div className="flex flex-col justify-cente w-[50%] align-center p-[5px]">
            <span className="text-[1.5rem] text-left text-[#1C094A] font-medium">Welcome To</span>
            <h1 className="text-[2rem] text-left text-[#1C094A] font-semibold">Education Safari </h1>
            <span className="text-[1rem] text-left  text-justify text-black">Welcome to Education Safari, registered education consultancy with a global presence with main offices in Australia, and Nepal. Our primary objective is to offer expert counselling and guidance to students who aspire to pursue their education in Australia and abroad.</span>
            <span  className="text-[1rem] text-left  text-justify mt-[1rem] text-black">Our company specializes in providing expert counseling and guidance to students aspiring to pursue education and migration services in Australia. Additionally, we offer English language classes in Chitwan, Nepal, enhancing students' linguistic skills for successful international studies.</span>
            <button className="bg-gradient-to-r mt-[1rem] w-[20vh] from-purple-900 via-pink-800  to-orange-900 px-[5px] py-[3px] text-white font-semibold rounded">View More</button>

            </div>
            <div className="flex h-auto w-[50%] justify-center align-center">
                <img src = '/images/girlwithfiles-removebg-preview.png' />
            </div>

            </div>


        </div>
        </>
    )
}
export default Banner2;