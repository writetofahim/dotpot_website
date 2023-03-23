import React from "react";


const Card = ({title,link}) => {
  return(
    <a href={link} className="w-2/5 lg:w-1/5">
      <div className="w-full h-24 border flex items-center justify-center rounded-xl hover:shadow-xl hover:scale-105 transition-all bg-gray-100 hover:bg-purple-500 hover:text-white">
        <h3 className="text-xl font-bold text-center">{title}</h3>
      </div>
    </a>
  )
}

function Dashboard() {
  return (
    <div className="w-full">
      <h1 className="text-6xl font-bold text-center">Welcome To DotpotiT Dashbord</h1>
      <div className="w-full flex p-5 flex-wrap gap-5 justify-center mt-10">
        {
          data.map((item,index)=>(
            <Card {...item} key={index} />
          ))
        }
      </div>
    </div>
  );
}

export default Dashboard;

const data = [
  {
    title: "Dashboard",
    link: "/"
  },
  {
    title: "Chat",
    link: "/chat"
  },
  {
    title: "Job Applications",
    link: "/job-applications"
  },
  {
    title: "Orders",
    link: "/order"
  },
  {
    title: "Clients Review",
    link: "/client-response/all-responses"
  },
  {
    title: "Users",
    link: "/users/all-users"
  },
  {
    title: "Blogs",
    link: "/blogs/all-blogs"
  },
  {
    title: "Works",
    link: "/works/all-works"
  },
  {
    title: "Jobs",
    link: "/jobs/all-jobs"
  },
  {
    title: "All Services",
    link: "/services/all-services"
  },
  {
    title: "Add Services",
    link: "/services/add-services"
  },
  {
    title: "All Teams",
    link: "/team/all-team"
  },
  {
    title: "Add Team",
    link: "/team/add-team"
  },
  {
    title: "Edit Hero Section",
    link: "/hero"
  },
  {
    title: "Edit Company Infos",
    link: "/company-info"
  },
  {
    title: "Edit Clients Review",
    link: "/company-info"
  },
  {
    title: "Edit Contact Center Services",
    link: "/contact-center-service/all-contact-center-service"
  },
  {
    title: "Edit Key Features",
    link: "/key-features/all-key-features"
  },
  {
    title: "Edit Our Partners",
    link: "/our-partners/all-our-partners"
  },
  {
    title: "Edit Partnership Model",
    link: "/partnership-model/all-partnership-model"
  },
  {
    title: "Edit Industry We Serve",
    link: "/industry-we-serve/all-industry-we-serve"
  },
]