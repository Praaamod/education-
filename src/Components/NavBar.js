import SmallNav from "../SmallNav";
import BigNav from '../Components/BigNav';
import React, { useState, useEffect } from 'react';


const NavBar = () =>{

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return(
    <>
     <header className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
      {isScrolled ?
       <SmallNav  isVisible={isScrolled} /> : <BigNav />}
    </header>

    </>
  )
}
export default NavBar;