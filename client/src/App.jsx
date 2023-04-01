import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ApplyJob from './pages/applyJob/ApplyJob'
import Home from './pages/home/Home'
import Apply from "./pages/applyJob/Apply";
import AboutUs from "./pages/about/AboutUs";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Blogs from "./pages/blog/Blog";
import SingleBlog from "./pages/blog/SingleBlog";
import ApplyMobile from "./pages/applyJob/ApplyMobile";
import Login from "./pages/lgoin/Login";
import Register from "./pages/register/Register";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Terms_Conditions from "./terms_conditions/Terms_Conditions";
import Cti from "./pages/contactCenterservices/Cti"
import EmailMarketing from "./pages/contactCenterservices/EmailMarketing"
import ChatContact from "./pages/contactCenterservices/ChatContact"
import Collections from "./pages/contactCenterservices/Collections"
import Acd from "./pages/contactCenterservices/Acd"
import CustomerService from "./pages/contactCenterservices/CustomerService"
import Ivr from "./pages/contactCenterservices/Ivr"
import Pd from "./pages/contactCenterservices/Pd"
import MobileApp from "./pages/contactCenterservices/MobileApp";
import FixedPrice from "./pages/partnershipModels/FixedPrice";
import HireDedicatedModel from "./pages/partnershipModels/HireDedicatedModel";
import OnSiteDevelopment from "./pages/partnershipModels/OnSiteDevelopment";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply" element={<ApplyJob />} />
        <Route path="/apply/:id" element={<Apply />} />
        <Route path="/applym/:id" element={<ApplyMobile />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/terms_conditions" element={<Terms_Conditions />} />





        <Route path="/contact_center_services/cti" element={<Cti />} />
        <Route path="/contact_center_services/email-marketing" element={<EmailMarketing />} />
        <Route path="/contact_center_services/chat" element={<ChatContact />} />
        <Route path="/contact_center_services/pd" element={<Pd />} />
        <Route path="/contact_center_services/mobile-app" element={<MobileApp />} />
        <Route path="/contact_center_services/collection" element={<Collections />} />
        <Route path="/contact_center_services/customer-service" element={<CustomerService />} />
        <Route path="/contact_center_services/ivr" element={<Ivr />} />
        <Route path="/contact_center_services/acd" element={<Acd />} />




        <Route path="/partnership_model/fixed-price-model" element={<FixedPrice />} />
        <Route path="/partnership_model/hire-dedicated-model" element={<HireDedicatedModel />} />
        <Route path="/partnership_model/on-site-development-model" element={<OnSiteDevelopment />} />


      </Routes>
    </>
  )
}

export default App
