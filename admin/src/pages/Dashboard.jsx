import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, link }) => {
  return (
    <Link to={link} className="w-2/5 lg:w-1/5">
      <div className="w-full h-24 border flex items-center justify-center rounded-xl hover:shadow-xl hover:scale-105 transition-all bg-gray-100 hover:bg-purple-500 hover:text-white">
        <h3 className="text-xl font-bold text-center">{title}</h3>
      </div>
    </Link>
  );
};

function Dashboard() {
  return (
    <div className="w-full">
      <h1 className="text-6xl font-bold text-center">
        Welcome To Dotpot iT Dashboard
      </h1>
      <div className="w-full flex p-5 flex-wrap gap-5 justify-center mt-10">
        {data.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

const data = [
  {
    title: "Dashboard",
    link: "/admin/",
  },
  {
    title: "Chat",
    link: "/admin/chat",
  },
  {
    title: "Job Applications",
    link: "/admin/job-applications",
  },
  {
    title: "Orders",
    link: "/admin/order",
  },
  {
    title: "Clients Review",
    link: "/admin/client-response/all-responses",
  },
  {
    title: "Users",
    link: "/admin/users/all-users",
  },
  {
    title: "Blogs",
    link: "/admin/blogs/all-blogs",
  },
  {
    title: "Works",
    link: "/admin/works/all-works",
  },
  {
    title: "Jobs",
    link: "/admin/jobs/all-jobs",
  },
  {
    title: "All Services",
    link: "/admin/services/all-services",
  },
  {
    title: "Add Services",
    link: "/admin/services/add-services",
  },
  {
    title: "All Teams",
    link: "/admin/team/all-team",
  },
  {
    title: "Add Team",
    link: "/admin/team/add-team",
  },
  {
    title: "Edit Hero Section",
    link: "/admin/hero",
  },
  {
    title: "Edit Company Infos",
    link: "/admin/company-info",
  },
  {
    title: "Edit Clients Review",
    link: "/admin/company-info",
  },
  {
    title: "Edit Contact Center Services",
    link: "/admin/contact-center-service/all-contact-center-service",
  },
  {
    title: "Edit Key Features",
    link: "/admin/key-features/all-key-features",
  },
  {
    title: "Edit Our Partners",
    link: "/admin/our-partners/all-our-partners",
  },
  {
    title: "Edit Partnership Model",
    link: "/admin/partnership-model/all-partnership-model",
  },
  {
    title: "Edit Industry We Serve",
    link: "/admin/industry-we-serve/add-industry-we-serve",
  },
];
