import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs.JS';
import ContactUs from './Pages/ContactUs';
import ConsultNow from './Pages/ConsultNow';
import Blogs from './Pages/Blog';
import Gallery from './Pages/Gallery';
import Services from './Pages/Services';
import StudyAbroad from './Pages/StudyAbroad';


function App() {
  return (
   <>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/consultnow" element={<ConsultNow />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/studybroad" element={<StudyAbroad />} />
 
      </Routes>

   </>
  );
}

export default App;
