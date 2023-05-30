import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import DashboardLayout from "./Layouts/DashboardLayout";
import RequireAdmin from "./components/RequireAdmin";
import { AuthContext } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import JobApplications from "./pages/JobApplications";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import AddBlogs from "./pages/blogs/AddBlogs";
import AllBlogs from "./pages/blogs/AllBlogs";
import Chat from "./pages/chat/Chat";
import AddResponse from "./pages/client-response/AddResponse";
import AllResponse from "./pages/client-response/AllResponse";
import AddClientsReview from "./pages/clientsReview/AddClientsReview";
import AllClientsReview from "./pages/clientsReview/AllClientsReview";
import AddContactCenterService from "./pages/contactCenterService/AddContactCenterService";
import AllContactCenterService from "./pages/contactCenterService/AllContactCenterService";
import AddIndustryWeServe from "./pages/indurstyWeServe/AddIndustryWeServe";
import AllIndustryWeServe from "./pages/indurstyWeServe/AllIndustryWeServe";
import AddJobs from "./pages/jobs/AddJobs";
import AllJobs from "./pages/jobs/AllJobs";
import AddKeyFeatures from "./pages/keyFeatures/AddKeyFeatures";
import AllKeyFeatures from "./pages/keyFeatures/AllKeyFeatures";
import AllOrders from "./pages/orders/AllOrders";
import AddOurPartners from "./pages/ourPartners/AddOurPartners";
import AllOurPartners from "./pages/ourPartners/AllOurPartners";
import AddPartnershipModel from "./pages/partnershipModel/AddPartnershipModel";
import AllPartnershipModel from "./pages/partnershipModel/AllPartnershipModel";
import CompanyInfo from "./pages/sections/CompanyInfo";
import Hero from "./pages/sections/Hero";
import AddService from "./pages/services/AddServices";
import AllServices from "./pages/services/AllServices";
import AddTeam from "./pages/team/AddTeam";
import AllTeam from "./pages/team/AllTeam";
import Theme from "./pages/theme/Theme";
import AddUsers from "./pages/users/AddUsers";
import AllUsers from "./pages/users/AllUsers";
import AddWhoWeWorksWith from "./pages/whoWeWorkWith/AddWhoWeWorksWith";
import AllWhoWeWorksWith from "./pages/whoWeWorkWith/AllWhoWeWorksWith";
import AddWorks from "./pages/works/AddWorks";
import AllWorks from "./pages/works/AllWorks";
import axios from "./utils/axiosInstance";
// import AddClientsReview from "./pages/clientsReview/AddClientsReview";

function App() {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate(location?.pathname === "/" ? "/admin" : location?.pathname);
  // }, []);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname, user]); // triggered on route change

  useEffect(() => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        if (error?.response?.status === 401) {
          return logout(); // call the logout function from your context
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          exact
          path="/"
          element={
            <RequireAdmin>
              <DashboardLayout />
            </RequireAdmin>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/job-applications" element={<JobApplications />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/client-response/all-responses"
            element={<AllResponse />}
          />
          <Route
            path="/client-response/add-responses"
            element={<AddResponse />}
          />
          <Route path="/users/all-users" element={<AllUsers />} />
          <Route path="/users/add-users" element={<AddUsers />} />
          <Route path="/blogs/all-blogs" element={<AllBlogs />} />
          <Route path="/blogs/add-blogs" element={<AddBlogs />} />
          <Route path="/works/all-works" element={<AllWorks />} />
          <Route path="/works/add-works" element={<AddWorks />} />
          <Route path="/jobs/all-jobs" element={<AllJobs />} />
          <Route path="/jobs/add-jobs" element={<AddJobs />} />
          <Route path="/services/all-services" element={<AllServices />} />
          <Route path="/services/add-services" element={<AddService />} />
          <Route path="/team/all-team" element={<AllTeam />} />
          <Route path="/team/add-team" element={<AddTeam />} />
          <Route
            path="/clients-review/all-clients-review"
            element={<AllClientsReview />}
          />
          <Route
            path="/clients-review/add-clients-review"
            element={<AddClientsReview />}
          />
          <Route
            path="/industry-we-serve/all-industry-we-serve"
            element={<AllIndustryWeServe />}
          />
          <Route
            path="/industry-we-serve/add-industry-we-serve"
            element={<AddIndustryWeServe />}
          />
          <Route
            path="/contact-center-service/all-contact-center-service"
            element={<AllContactCenterService />}
          />
          <Route
            path="/contact-center-service/add-contact-center-service"
            element={<AddContactCenterService />}
          />
          <Route path="/order" element={<AllOrders />} />
          <Route
            path="/key-features/all-key-features"
            element={<AllKeyFeatures />}
          />
          <Route
            path="/key-features/add-key-feature"
            element={<AddKeyFeatures />}
          />
          <Route
            path="/our-partners/all-our-partners"
            element={<AllOurPartners />}
          />
          <Route
            path="/our-partners/add-our-partners"
            element={<AddOurPartners />}
          />
          <Route
            path="/partnership-model/all-partnership-model"
            element={<AllPartnershipModel />}
          />
          <Route
            path="/partnership-model/add-partnership-model"
            element={<AddPartnershipModel />}
          />

          <Route
            path="/who-we-works-with/all-who-we-works-with"
            element={<AllWhoWeWorksWith />}
          />
          <Route
            path="/who-we-works-with/add-who-we-works-with"
            element={<AddWhoWeWorksWith />}
          />

          <Route path="/hero" element={<Hero />} />
          <Route path="/company-info" element={<CompanyInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
