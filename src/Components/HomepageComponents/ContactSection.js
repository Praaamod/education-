import React from "react";

const ContactSection = () =>{
    return(
        <>
         <div className="flex flex bg-white w-full justify-between align-center items-center space-x-[2rem]">
            <div className="w-[50%] flex flex-col justify-center align-center items-center"> 
                    <span className="text-[2.5rem] font-semibold text-[#080050] text-center">Contact Our Representative</span>
                    <span className="text-[0.8rem] font-normal text-[#080050] text-center">We will reply as soon as possible!</span>
                    <span  className="text-[0.8rem] font-normal text-[#080050] text-center">For a quick response, send us your info, by filling out the form.</span>
                
            </div>
            <div className="w-[50%] mt-10 p-6 bg-white ">
            <form >
                <div className="mb-[2rem]">
                    <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="fullName">
                        Full Name
                    </label>
                    <input
                        id="fullName"
                        type="text"
                        placeholder="Enter your name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-[2rem]">
                    <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-[2rem]">
                    <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="contactNumber">
                        Contact Number
                    </label>
                    <input
                        id="contactNumber"
                        type="text"
                        placeholder="Enter your phone number"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-[2rem]">
                    <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Enter your message..."
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-700 to-orange-500 text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        SEND MESSAGE
                    </button>
                </div>
            </form>
        </div>
         </div>
        </>
    )
}
export default ContactSection;