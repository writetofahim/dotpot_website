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
import AcceptCookiesPopup from "./components/AcceptCookiesPopup/AcceptCookiesPopup";
import WebsiteDesign from "./pages/keyFeatures/WebsiteDesign";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Ai from "./pages/industriesWeServe/Ai"
import Education from "./pages/industriesWeServe/Education"
import FoodAndRestaurant from "./pages/industriesWeServe/FoodAndRestaurant"
import Gaming from "./pages/industriesWeServe/Gaming"
import Healthcare from "./pages/industriesWeServe/Healthcare"
import Logistics from "./pages/industriesWeServe/Logistics"
import Manufacturing from "./pages/industriesWeServe/Manufacturing"
import OnDemand from "./pages/industriesWeServe/OnDemand"
import RealEstate from "./pages/industriesWeServe/RealEstate"
import Retail from "./pages/industriesWeServe/Retail"
import SocialNetworking from "./pages/industriesWeServe/SocialNetworking"
import Travel from "./pages/industriesWeServe/Travel"
import Web3 from "./pages/industriesWeServe/Web3"

function App() {
  return (
    <div className="relative">
      <AcceptCookiesPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
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




        {/* Services Pages */}



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
          path="/key-features/website-design"
          element={<WebsiteDesign />}
        />
        <Route
          path="/key-features/mobile-app-development"
          element={<MobileAppDevelopment />}
        />

        <Route
          path="/key-features/website-development"
          element={<WebsiteDevelopment />}
        >
          {/* <Route path="mobile" element={<Mobile />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
          <Route path="cms" element={<Cms />} /> */}
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
          path="/who-we-works-with/enterprise-business"
          element={<EnterpriseBusiness />}
        />
        <Route
          path="/who-we-works-with/agencies-business"
          element={<AgenciesBusiness />}
        />



        {/* Industries We Serve Pages */}
        <Route
          path="/industries-we-serve/retail-ecommerce"
          element={<Retail />}
        />
        <Route
          path="/industries-we-serve/education"
          element={<Education />}
        />
        <Route
          path="/industries-we-serve/healthcare"
          element={<Healthcare />}
        />
        <Route
          path="/industries-we-serve/logistics"
          element={<Logistics />}
        />
        <Route
          path="/industries-we-serve/social-networking"
          element={<SocialNetworking />}
        />
        <Route
          path="/industries-we-serve/real-estate"
          element={<RealEstate />}
        />
        <Route
          path="/industries-we-serve/travel"
          element={<Travel />}
        />
        <Route
          path="/industries-we-serve/food-and-restaurant"
          element={<FoodAndRestaurant />}
        />
        <Route
          path="/industries-we-serve/on-demand-solution"
          element={<OnDemand />}
        />
        <Route
          path="/industries-we-serve/gaming"
          element={<Gaming />}
        />
        <Route
          path="/industries-we-serve/ai"
          element={<Ai />}
        />
        <Route
          path="/industries-we-serve/web3"
          element={<Web3 />}
        />
        <Route
          path="/industries-we-serve/manufacturing"
          element={<Manufacturing />}
        />

      </Routes>
    </div>
  );
}

export default App;
