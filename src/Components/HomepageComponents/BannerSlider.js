import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  const [showText, setShowText] = useState(false);
  const [isScaled, setIsScaled] = useState(true);
  

  const handleScaleToggle = () => {
    setIsScaled(!isScaled);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,     
     arrows: false,     // Enable autoplay
    autoplaySpeed: 2000,    // Delay between slides in milliseconds
    pauseOnHover: false,
    afterChange: () => {
      setTimeout(() => {
        setShowText(true); // Show text and button after a delay
      }, 6000); // Adjust delay time as needed
    },
    beforeChange: () => {
      setShowText(false); // Hide text and button before slide change
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="w-full h-auto bg-white m-0"> {/* Ensure the outer container has no margin */}

    <Slider {...settings} className='h-full mb-0 pb-0'>
     <div className='relative h-auto  w-full p-0 '> 
        <img className="w-full h-[12rem] md:h-[36rem] 2xl:h-[46rem] object-cover" src="https://educationsafari.com/img/banner/Australia_1704872113.jpg" alt="" /> 
        <div className={`absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity duration-500 ${showText ? 'opacity-0' : 'opacity-50'}`}></div>
        {showText && (
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10 transition-transform duration-500 transform scale-100">
            <p>STUDY ABROAD</p>
            <h1 className="text-[2rem] font-semibold md:text-4xl" >STUDY IN AUSTRALIA</h1>
            <button className="mt-4 bg-gradient-to-r from-purple-900 via-pink-800 to-orange-900 px-4 py-2 text-white font-semibold rounded hover:bg-[#0d4d74]">Explore Now</button>
          </div>
        )}
      </div>

      <div className='relative w-full p-0'>
      <img  src = 'https://educationsafari.com/img/banner/canada_1704874859.jpg' className="w-full h-[12rem] md:h-[36rem] 2xl:h-[46rem] object-cover" />
      <div className={`absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity duration-500 ${showText ? 'opacity-0' : 'opacity-50'}`}></div>
      {showText && (

              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10 transition-transform duration-500 transform scale-100">
              <p>STUDY ABORAD</p>
            <h1 className="text-[2rem] font-semibold md:text-4xl" >STUDY IN CANADA</h1>

            <button className="bg-gradient-to-r mt-[1rem] w-[20vh] from-purple-900 via-pink-800  to-orange-900 px-[5px] py-[3px] text-white font-semibold rounded hover:bg-[#0d4d74]">Explore Now </button>
     </div>
    )}

      </div>

     <div className='relative w-full p-0'>
      <img  src = 'https://educationsafari.com/img/banner/uk_1704874877.jpg'   className="w-full h-[12rem] md:h-[36rem] 2xl:h-[46rem] object-cover"/>
      <div className={`absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity duration-500 ${showText ? 'opacity-0' : 'opacity-50'}`}></div>
      {showText && (
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10 transition-transform duration-500 transform scale-100">
            <p>STUDY ABORAD</p>
          <h1 className="text-[2rem] font-semibold md:text-4xl">STUDY IN UNITED KINGDOM</h1>
          <button className="bg-gradient-to-r mt-[1rem] w-[20vh] from-purple-900 via-pink-800  to-orange-900 px-[5px] py-[3px] text-white font-semibold rounded hover:bg-[#0d4d74]">Explore Now </button>
     </div>
    )}

     </div>
    </Slider>
    </div>
  );
};

export default BannerSlider;
