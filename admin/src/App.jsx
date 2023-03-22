import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import DashboardLayout from "./Layouts/DashboardLayout";
import AddBlogs from "./pages/blogs/AddBlogs";
import AllBlogs from "./pages/blogs/AllBlogs";
import Chat from "./pages/chat/Chat";
import AddResponse from "./pages/client-response/AddResponse";
import AllResponse from "./pages/client-response/AllResponse";
import Dashboard from "./pages/Dashboard";
import JobApplications from "./pages/JobApplications";
import AddJobs from "./pages/jobs/AddJobs";
import AllJobs from "./pages/jobs/AllJobs";
import Orders from "./pages/Orders";
import CompanyInfo from "./pages/sections/CompanyInfo";
import Hero from "./pages/sections/Hero";
import AddServices from "./pages/services/AddServices";
import AllServices from "./pages/services/AllServices";
import AddTeam from "./pages/team/AddTeam";
import AllTeam from "./pages/team/AllTeam";
import AddUsers from "./pages/users/AddUsers";
import AllUsers from "./pages/users/AllUsers";
import AddWorks from "./pages/works/AddWorks";
import AllWorks from "./pages/works/AllWorks";
import Login from "./pages/Login";
import ChatBody from "./pages/chat/ChatBody";
import { AuthContext } from "./contexts/AuthContext";
import RequireAdmin from "./components/RequireAdmin";

function App() {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname, user]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<RequireAdmin><DashboardLayout /></RequireAdmin>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} >
            <Route path="/chat/:id" element={<ChatBody />} />
          </Route>
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
          <Route path="/services/add-services" element={<AddServices />} />
          <Route path="/team/all-team" element={<AllTeam />} />
          <Route path="/team/add-team" element={<AddTeam />} />
          <Route path="/section/hero" element={<Hero />} />
          <Route path="/section/company-info" element={<CompanyInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
