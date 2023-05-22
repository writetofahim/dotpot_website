import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavbarJob from "../../components/NavbarJob/NavbarJob";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";
import desktopImg from "../../assets/img/applyjob/Home page herov2_desktop.png";
import SearchIcon from "@mui/icons-material/Search";

export const JobCard = (props) => {
  const [love, setLove] = useState(false);
  const handelChick = (_id) => {
    props.setId(props._id);
    props.setActiveJob(props);
  };
  return (
    <>
      {/* For Large screen */}
      <div
        className={`"cursor-pointer job-card w-full p-5 border border-border rounded-xl hover:border border-border-primary-500 text-gray-400 gap-1 hidden md:block md:hover:scale-105 md:hover:shadow-xl transition-all" ${
          props.activeJob?._id === props._id ? "ring-4" : ""
        }`}
        onClick={() => handelChick(props._id)}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-bold hover:underline cursor-pointer text-xl">
            {props.title}
          </h3>

          <div className="ritht flex items-center justify-center">
            {love ? (
              <AiFillHeart
                className="text-textColor-500 text-2xl"
                onClick={() => setLove(!love)}
              />
            ) : (
              <AiOutlineHeart
                className="text-textColor-500 text-2xl"
                onClick={() => setLove(!love)}
              />
            )}
            {/* <div className="cursor-pointer p-5 rounded-full hover:bg-primary-100">
                            <SlOptionsVertical />
                        </div> */}
          </div>
        </div>
        <div className="flex items-center">
          <p className="mr-3">{props.company}</p>
          {/* <p>{props.rating}</p>
                    <AiFillStar /> */}
        </div>
        <div className="flex items-center gap-2">
          <TfiLocationPin />
          <p>{props.location}</p>
        </div>
        {props.isRemote ? <p>Remote</p> : <p>On Site</p>}
        <h3 className="p-1 bg-gray-200 w-max my-1 rounded text-primary-500">
          Salary : {props.salary.min}TK - {props.salary.max}TK
        </h3>
        <div className="flex flex-wrap gap-1">
          {props.benefits.map((item, index) => (
            // <Chip label={item} key={index} variant="outlined" />
            <div
              key={index}
              className="border border-border  rounded-full px-2"
            >
              <p className="text-textColor-500 text-sm p-1 ">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* For Small Device */}
      <Link to={`/applym/${props._id}`}>
        <div
          className="job-card w-full p-5 border border-border rounded-xl hover:border border-border-primary-500 text-gray-400 gap-1  md:hidden"
          onClick={() => props.setId(props._id)}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold hover:underline cursor-pointer text-xl">
              {props.title}
            </h3>

            <div className="ritht flex items-center justify-center">
              {love ? (
                <AiFillHeart
                  className="text-textColor-500 text-2xl"
                  onClick={() => setLove(!love)}
                />
              ) : (
                <AiOutlineHeart
                  className="text-textColor-500 text-2xl"
                  onClick={() => setLove(!love)}
                />
              )}
              <div className="cursor-pointer p-5 rounded-full hover:bg-primary-100">
                <SlOptionsVertical />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <p className="mr-3">{props.company}</p>
            {/* <p>{props.rating}</p>
                        <AiFillStar /> */}
          </div>
          <div className="flex items-center gap-2">
            <TfiLocationPin />
            <p>{props.location}</p>
          </div>
          {props.isRemote ? <p>Remote</p> : <p>On Site</p>}
          <h3 className="p-1 bg-gray-200 text-primary-500 w-max my-1 rounded">
            Salary : {props.salary.min}TK - {props.salary.max}TK
          </h3>
          <div className="flex flex-wrap gap-1">
            {props.benefits.map((item, index) => (
              // <Chip label={item} key={index} variant="outlined" />
              <div
                key={index}
                className="border border-border  rounded-full px-2"
              >
                <p className="text-textColor-500 text-sm p-1 ">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};

const ApplyJob = () => {
  useScrollToTop();
  const [id, setId] = useState(null);
  const [data, setData] = useState(null);
  const [activeJob, setActiveJob] = useState(null);
  const [foundJobs, setFoundJobs] = useState("[]");
  const [saveArr, setSaveArr] = useState("[]");
  const [SearchData, setSearchData] = useState("");

  // Data Fetching
  useEffect(() => {
    axios
      .get("/job")
      .then((response) => {
        setData(response.data.jobs);
        setSaveArr(response.data.jobs);
        postLogger({ level: "info", message: response });
      })
      .catch((error) => {
        console.error(error);
        postLogger({ level: "error", message: error });
      });
  }, []);

  useEffect(() => {
    setActiveJob(data && data[0]);
  }, [data]);

  const handleChange = (e) => {
    const {value} = e.target
    setSearchData(value)
    performSearch(value)
    console.log( value.length)
    if(value.length<=0){
      setData(saveArr)
    }
    
  };
  const performSearch = (value)=>{
    console.log("value is ",value)
    const foundJobs = data?.filter(obj=> obj.title.toLowerCase().includes(value.toLowerCase()))
    setFoundJobs (foundJobs)
    // console.log(foundJobs)
    if(foundJobs.length > 0){
      console.log('length of data',foundJobs.length, 'and the data is',foundJobs)
      setData(foundJobs)
    }else{
      console.log("no data found")
    }
  }

  // console.log(data)
  return (
    <>
      <NavbarJob />
      <Helmet>
        <title>Apply | Dotpot iT A Leading it Company</title>
        <meta
          name="description"
          content="Dotpot iT provides web development, AI, game, app, and blockchain development, along with comprehensive IT support services. Contact us now."
        />
        <link rel="canonical" href="https://dotpotit.com/apply" />
        <meta property="og:title" content="Apply | Dotpot iT" />
        <meta
          property="og:description"
          content="Dotpot iT provides web development, AI, game, app, and blockchain development, along with comprehensive IT support services. Contact us now."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="web development, AI development, game development, app development, IT support"
        />
        <meta property="og:url" content="https://dotpotit.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Dotpot iT provides web development, AI, game, app, and blockchain development, along with comprehensive IT support services. Contact us now."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>
      {/* <JobSearchbar /> */}

      <div className="w-full flex items-center justify-center bg-background-500 mb-10">
        <div className="w-full max-w-[1400px] container  px-5">
          {/* new design */}
          <div className="relative ">
            <div className="h-[350px]  ">
              <img
                className="w-full h-[350px] object-cover"
                src={desktopImg}
                alt="Cover photo for apply jobs"
              />
              <div className="backdrop-blur-sm py-10 md:backdrop-blur-none w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 md:px-14">
                <h2 className="text-5xl font-bold text-buttonText-500">
                  Welcome
                </h2>
                <p className="text-xl font-semibold text-buttonText-500">
                  Create the future you want
                </p>
                <div>
                  <div className="md:flex gap-1 items-center mt-7">
                    <div className="rounded-sm w-full md:w-2/5 bg-background-500 flex items-center h-12 my-3 px-2">
                      <SearchIcon className="text-gray-300" />
                      <input
                        className="outline-none w-full"
                        type="text"
                        placeholder="Search by job title. 'e.g. Ui/Ux designer or Web Developer'"
                        value={SearchData}
                        onChange={handleChange}
                      />
                    </div>
                    <button className=" h-12 bg-secondary-500 text-buttonText-500 font-semibold px-3 rounded-sm hover:bg-secondary-400">
                      Find Jobs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* new design ends */}
          <h2
            className={
              activeJob
                ? "text-center text-4xl my-10 font-bold  text-gray-400 transition-all"
                : "text-4xl my-10 font-bold  text-gray-400"
            }
          >
            Available Jobs
          </h2>
          <div className="w-full flex flex-col md:flex-row justify-between gap-5">
            {/* Left sidebar */}
            <div className="left md:w-2/5 flex flex-col gap-5 ">
              {data &&
                data?.map((item, index) => (
                  <JobCard
                    key={index}
                    {...item}
                    setId={setId}
                    setActiveJob={setActiveJob}
                    activeJob={activeJob}
                  />
                ))}
            </div>

            {/* Right sidebar */}
            <div
              className={`"right md:w-3/5 sticky top-20 rounded-xl shadow-xl overflow-hidden border border-border" ${
                activeJob ? "block transition-all duration-1000" : "hidden"
              }`}
              id="jobDetails"
            >
              {activeJob !== null && (
                <>
                  {/* // Top Section */}
                  <div className="p-5 w-full shadow">
                    <h3 className="font-bold hover:underline cursor-pointer text-xl text-textColor-500">
                      {activeJob.title}
                    </h3>
                    <div className="flex items-center text-textColor-500">
                      <p className="mr-3">{activeJob.company}</p>
                      <p>{activeJob.rating}</p>
                      <AiFillStar />
                    </div>
                    <div className="flex items-center gap-2 text-textColor-500">
                      <TfiLocationPin />
                      <p>{activeJob.location}</p>
                    </div>
                    <p>{activeJob.type}</p>
                    <h3 className="p-1 bg-gray-200 w-max my-1 rounded text-primary-500">
                      Salary : {activeJob.salary.min}TK - {activeJob.salary.max}
                      TK
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {activeJob.benefits.map((item, index) => (
                        // <Chip label={item} key={index} variant="outlined" />
                        <div
                          key={index}
                          className="border border-border  rounded-full px-2"
                        >
                          <p className="text-textColor-500 text-sm p-1 ">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Link to={`/apply/${id}`}>
                      <button
                        variant="contained"
                        className="bg-secondary-400 px-10 py-3 text-buttonText-500 rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3"
                      >
                        Apply Now <BsArrowRight />
                      </button>
                    </Link>
                  </div>

                  {/* // Bottom Section */}
                  <div className="p-5 w-full text-gray-500">
                    <h3 className="text-xl font-bold">Job Details</h3>
                    <p className="">{activeJob.type}</p>
                    <Divider className="py-3" />
                    <h3 className="text-xl font-bold mt-2">Benefits</h3>
                    <div className="flex">
                      {activeJob.benefits.map((item, index) => (
                        // <Chip label={item} key={index} variant="outlined" className='mr-1' />
                        <div
                          key={index}
                          className="border border-border rounded-full px-2"
                        >
                          <p className="text-textColor-500 text-sm p-1">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Divider className="py-3" />
                    <h3 className="text-xl font-bold mt-2">
                      Full Job Description
                    </h3>
                    <p className="text-justify">{activeJob.des}</p>

                    <Divider className="py-3" />
                    <h3 className="text-xl font-bold mt-2">
                      Position Responsibilities
                    </h3>
                    <p>As a {activeJob.title}, you will:</p>
                    <ul className="list-disc pl-10">
                      {activeJob.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <Divider className="py-3" />
                    <h3 className="text-xl font-bold mt-2">Qualification</h3>
                    <ul className="list-disc pl-10">
                      {activeJob.qualifications.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <Divider className="py-3" />
                    <h3 className="text-xl font-bold mt-2">Experience</h3>
                    <ul className="list-disc pl-10">
                      {activeJob?.experience?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <Divider className="py-3" />
                    <h3 className="text-xl font-bold mt-2">Education</h3>
                    <ul className="list-disc pl-10">
                      {activeJob?.education?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApplyJob;
