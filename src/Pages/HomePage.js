import React from "react";
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Banner from "../Components/HomepageComponents/BannerSlider";
import Banner2 from '../Components/HomepageComponents/Banner2';
import OurServices from "../Components/HomepageComponents/OurServices";
import ConsultNow from "../Components/HomepageComponents/ConsultExpert";
import Feedback from "../Components/HomepageComponents/Feedback";
import ContactSection from "../Components/HomepageComponents/ContactSection";
import VisitOfficeSection from "../Components/HomepageComponents/VisitOfficeSection";
import ViewPostSection from "../Components/HomepageComponents/ViewPostSection";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import BannerSlider from "../Components/HomepageComponents/BannerSlider";
import SmallNav from "../SmallNav";

const HomePage = () => {
  return (
    <>
      <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-custom-img bg-cover bg-center z-10">
        <img src ="https://educationsafari.com/assets/aus-image.jpg"/>
      </div>
      <div className="relative z-10  space-y-0 ">
        <Header />
        <NavBar />
        <BannerSlider />
        <Banner2 />
       <ScrollToTopButton />
        <OurServices />
        <ConsultNow />
        <Feedback />
        <ContactSection />
        <VisitOfficeSection />
        <ViewPostSection />
      </div>
      </div>


        

    </>


  )
}
export default HomePage;