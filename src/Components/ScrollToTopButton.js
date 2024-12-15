import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);



    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // This enables smooth scrolling
        });
      };

      const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // Adjust the value as needed
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);

  return (
    <button 
    onClick={scrollToTop}
     className={`fixed bottom-4 right-4 bg-orange-500 p-2 rounded-md text-white hover:bg-orange-600 transition-opacity duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0' }`}
        style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
        >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
};

export default ScrollToTopButton;
