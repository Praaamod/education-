import React from "react";
import Footer from "../Footer";


const ViewPostSection = () =>{
    return(
        <>
       <div className="w-full bg-white">
       <div>
      <header className="bg-white py-6 shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl text-center text-indigo-900">Recent Post</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10">
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-indigo-500 to-orange-500 text-white py-2 px-6 rounded-lg">View All</button>
        </div>
      </main>
      <Footer />
    </div>

       </div>
        </>
    )
}
export default ViewPostSection