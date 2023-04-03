import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/about/AboutUs";
import Apply from "./pages/applyJob/Apply";
import ApplyJob from "./pages/applyJob/ApplyJob";
import ApplyMobile from "./pages/applyJob/ApplyMobile";
import Blogs from "./pages/blog/Blog";
import SingleBlog from "./pages/blog/SingleBlog";
import Contact from "./pages/contact/Contact";
import Acd from "./pages/contactCenterservices/Acd";
import ChatContact from "./pages/contactCenterservices/ChatContact";
import Collections from "./pages/contactCenterservices/Collections";
import Cti from "./pages/contactCenterservices/Cti";
import CustomerService from "./pages/contactCenterservices/CustomerService";
import EmailMarketing from "./pages/contactCenterservices/EmailMarketing";
import Ivr from "./pages/contactCenterservices/Ivr";
import MobileApp from "./pages/contactCenterservices/MobileApp";
import Pd from "./pages/contactCenterservices/Pd";
import Home from "./pages/home/Home";
import AiDevelopment from "./pages/keyFeatures/AiDevelopment";
import BlockchainDevelopment from "./pages/keyFeatures/BlockchainDevelopment";
import ContactCenterSupport from "./pages/keyFeatures/ContactCenterSupport";
import DedicatedTeam from "./pages/keyFeatures/DedicatedTeam";
import ItSupport from "./pages/keyFeatures/ItSupport";
import MobileAppDevelopment from "./pages/keyFeatures/MobileAppDevelopment";
import WebsiteDevelopment from "./pages/keyFeatures/websiteDevelopment/WebsiteDevelopment";
import Backend from "./pages/keyFeatures/websiteDevelopment/technologiesWeWorkOn/Backend";
import Cms from "./pages/keyFeatures/websiteDevelopment/technologiesWeWorkOn/Cms";
import Frontend from "./pages/keyFeatures/websiteDevelopment/technologiesWeWorkOn/Frontend";
import Mobile from "./pages/keyFeatures/websiteDevelopment/technologiesWeWorkOn/Mobile";
import Login from "./pages/lgoin/Login";
import FixedPrice from "./pages/partnershipModels/FixedPrice";
import HireDedicatedModel from "./pages/partnershipModels/HireDedicatedModel";
import OnSiteDevelopment from "./pages/partnershipModels/OnSiteDevelopment";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Register from "./pages/register/Register";
import Services from "./pages/services/Services";
import Terms_Conditions from "./terms_conditions/Terms_Conditions";
import AgenciesBusiness from "./pages/whoWeWorksWith/AgenciesBusiness";
import EnterpriseBusiness from "./pages/whoWeWorksWith/EnterpriseBusiness";
import SmallToMediumBusiness from "./pages/whoWeWorksWith/SmallToMediumBusiness";
import StartupBusiness from "./pages/whoWeWorksWith/StartupBusiness";

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



        {/* Contact Center Service Pages */}
        <Route path="/contact_center_services/cti" element={<Cti />} />
        <Route
          path="/contact_center_services/email-marketing"
          element={<EmailMarketing />}
        />
        <Route path="/contact_center_services/chat" element={<ChatContact />} />
        <Route path="/contact_center_services/pd" element={<Pd />} />
        <Route
          path="/contact_center_services/mobile-app"
          element={<MobileApp />}
        />
        <Route
          path="/contact_center_services/collection"
          element={<Collections />}
        />
        <Route
          path="/contact_center_services/customer-service"
          element={<CustomerService />}
        />
        <Route path="/contact_center_services/ivr" element={<Ivr />} />
        <Route path="/contact_center_services/acd" element={<Acd />} />




        {/* Partnership Model Pages */}
        <Route
          path="/partnership_model/fixed-price-model"
          element={<FixedPrice />}
        />
        <Route
          path="/partnership_model/hire-dedicated-model"
          element={<HireDedicatedModel />}
        />
        <Route
          path="/partnership_model/on-site-development-model"
          element={<OnSiteDevelopment />}
        />



        {/* Key features */}
        <Route
          path="/key-features/ai-development"
          element={<AiDevelopment />}
        />
        <Route path="/key-features/it-support" element={<ItSupport />} />
        <Route
          path="/key-features/blockchain-development"
          element={<BlockchainDevelopment />}
        />
        <Route
          path="/key-features/mobile-app-development"
          element={<MobileAppDevelopment />}
        />

        <Route
          path="/key-features/website-development"
          element={<WebsiteDevelopment />}
        >
          <Route path="mobile" element={<Mobile />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
          <Route path="cms" element={<Cms />} />
        </Route>
        <Route
          path="/key-features/dedicated-team"
          element={<DedicatedTeam />}
        />
        <Route
          path="/key-features/contact-center-support"
          element={<ContactCenterSupport />}
        />


        {/* Who We Works With Pages */}
        <Route
          path="/who-we-works-with/startup-business"
          element={<StartupBusiness />}
        />
        <Route
          path="/who-we-works-with/small-and-medium-business"
          element={<SmallToMediumBusiness />}
        />
        <Route
          path="/who-we-works-with/Enterprise-business"
          element={<EnterpriseBusiness />}
        />
        <Route
          path="/who-we-works-with/agencies-business"
          element={<AgenciesBusiness />}
        />
      </Routes>
    </>
  );
}

export default App;
