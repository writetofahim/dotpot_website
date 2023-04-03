import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import RequireAdmin from "./components/RequireAdmin";
import { AuthContext } from "./contexts/AuthContext";
import DashboardLayout from "./Layouts/DashboardLayout";
import AddBlogs from "./pages/blogs/AddBlogs";
import AllBlogs from "./pages/blogs/AllBlogs";
import Chat from "./pages/chat/Chat";
import ChatBody from "./pages/chat/ChatBody";
import AddResponse from "./pages/client-response/AddResponse";
import AllResponse from "./pages/client-response/AllResponse";
import AddClientsReview from "./pages/clientsReview/AddClientsReview";
import AllClientsReview from "./pages/clientsReview/AllClientsReview";
import AddContactCenterService from "./pages/contactCenterService/AddContactCenterService";
import AllContactCenterService from "./pages/contactCenterService/AllContactCenterService";
import Dashboard from "./pages/Dashboard";
import AddIndustryWeServe from "./pages/indurstyWeServe/AddIndustryWeServe";
import AllIndustryWeServe from "./pages/indurstyWeServe/AllIndustryWeServe";
import JobApplications from "./pages/JobApplications";
import AddJobs from "./pages/jobs/AddJobs";
import AllJobs from "./pages/jobs/AllJobs";
import AddKeyFeatures from "./pages/keyFeatures/AddKeyFeatures";
import AllKeyFeatures from "./pages/keyFeatures/AllKeyFeatures";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import AllOrders from "./pages/orders/AllOrders";
import AddOurPartners from "./pages/ourPartners/AddOurPartners";
import AllOurPartners from "./pages/ourPartners/AllOurPartners";
import AddPartnershipModel from "./pages/partnershipModel/AddPartnershipModel";
import AllPartnershipModel from "./pages/partnershipModel/AllPartnershipModel";
import AddWhoWeWorksWith from "./pages/whoWeWorkWith/AddWhoWeWorksWith";
import All from "./pages/whoWeWorkWith/AllWhoWeWorksWith";
import CompanyInfo from "./pages/sections/CompanyInfo";
import Hero from "./pages/sections/Hero";
import AddService from "./pages/services/AddServices";
import AllServices from "./pages/services/AllServices";
import AddTeam from "./pages/team/AddTeam";
import AllTeam from "./pages/team/AllTeam";
import AddUsers from "./pages/users/AddUsers";
import AllUsers from "./pages/users/AllUsers";
import AddWorks from "./pages/works/AddWorks";
import AllWorks from "./pages/works/AllWorks";
import AllWhoWeWorksWith from "./pages/whoWeWorkWith/AllWhoWeWorksWith";
// import AddClientsReview from "./pages/clientsReview/AddClientsReview";

function App() {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(location?.pathname==="/" ? "/admin" : location?.pathname);
  }, [])
  
  useEffect(() => {
    if (!user) {
      navigate("/admin/login");
    }

    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname, user]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route
          exact
          path="/admin/"
          element={
            <RequireAdmin>
              <DashboardLayout />
            </RequireAdmin>
          }
        >
          <Route path="/admin/" element={<Dashboard />} />
          <Route path="/admin/chat" element={<Chat />}>
            <Route path="/admin/chat/:id" element={<ChatBody />} />
          </Route>
          <Route path="/admin/job-applications" element={<JobApplications />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route
            path="/admin/client-response/all-responses"
            element={<AllResponse />}
          />
          <Route
            path="/admin/client-response/add-responses"
            element={<AddResponse />}
          />
          <Route path="/admin/users/all-users" element={<AllUsers />} />
          <Route path="/admin/users/add-users" element={<AddUsers />} />
          <Route path="/admin/blogs/all-blogs" element={<AllBlogs />} />
          <Route path="/admin/blogs/add-blogs" element={<AddBlogs />} />
          <Route path="/admin/works/all-works" element={<AllWorks />} />
          <Route path="/admin/works/add-works" element={<AddWorks />} />
          <Route path="/admin/jobs/all-jobs" element={<AllJobs />} />
          <Route path="/admin/jobs/add-jobs" element={<AddJobs />} />
          <Route path="/admin/services/all-services" element={<AllServices />} />
          <Route path="/admin/services/add-services" element={<AddService />} />
          <Route path="/admin/team/all-team" element={<AllTeam />} />
          <Route path="/admin/team/add-team" element={<AddTeam />} />
          <Route
            path="/admin/clients-review/all-clients-review"
            element={<AllClientsReview />}
          />
          <Route
            path="/admin/clients-review/add-clients-review"
            element={<AddClientsReview />}
          />
          <Route
            path="/admin/industry-we-serve/all-industry-we-serve"
            element={<AllIndustryWeServe />}
          />
          <Route
            path="/admin/industry-we-serve/add-industry-we-serve"
            element={<AddIndustryWeServe />}
          />
          <Route
            path="/admin/contact-center-service/all-contact-center-service"
            element={<AllContactCenterService />}
          />
          <Route
            path="/admin/contact-center-service/add-contact-center-service"
            element={<AddContactCenterService />}
          />
          <Route path="/admin/order" element={<AllOrders />} />
          <Route
            path="/admin/key-features/all-key-features"
            element={<AllKeyFeatures />}
          />
          <Route
            path="/admin/key-features/add-key-feature"
            element={<AddKeyFeatures />}
          />
          <Route
            path="/admin/our-partners/all-our-partners"
            element={<AllOurPartners />}
          />
          <Route
            path="/admin/our-partners/add-our-partners"
            element={<AddOurPartners />}
          />
          <Route
            path="/admin/partnership-model/all-partnership-model"
            element={<AllPartnershipModel />}
          />
          <Route
            path="/admin/partnership-model/add-partnership-model"
            element={<AddPartnershipModel />}
          />

          <Route
            path="/admin/who-we-works-with/all-who-we-works-with"
            element={<AllWhoWeWorksWith />}
          />
          <Route
            path="/admin/who-we-works-with/add-who-we-works-with"
            element={<AddWhoWeWorksWith />}
          />

          <Route path="/admin/hero" element={<Hero />} />
          <Route path="/admin/company-info" element={<CompanyInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
