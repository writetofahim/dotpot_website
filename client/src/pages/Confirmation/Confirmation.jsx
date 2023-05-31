import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AiFillDollarCircle, AiOutlineLink } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { IoMdBusiness } from "react-icons/io";
import { MdMail, MdMessage, MdPerson, MdPhone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import CommonSnackbar from "../../components/CommonSnackbar/CommonSnackbar";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import RangeSlider from "../../components/Range/RangeSlider";
import { AuthContext } from "../../contexts/AuthContext";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import axios from "../../utils/axiosInstance";

const Confirmation = () => {
  const [selectedBudget, setSelectedBudget] = useState(1000);
  const [files, setFiles] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isCompanySelected, setIsCompanySelected] = useState(false);

  const [successSnackBar, setSuccessSnackBar] = useState(false);

  const navigate = useNavigate();

  const { order } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const requestBody = {
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        phone: e.target.elements.phone.value,
        country: e.target.elements.country.value,
        business: e.target.elements.business.value,
        company_name: e.target.elements.companyName.value || "",
        files: e.target.elements.files.files[0],
        project_description: e.target.elements.project_description.value,
        demo_links: e.target.elements.demo_links.value,
        order: order,
      };

      console.log("requestBody", requestBody);

      // Make an HTTP POST request to the backend
      await axios.post("/send-email", requestBody);

      // Reset form and show success message
      e.target.reset();
      setIsSubmitting(false);
      setSuccessSnackBar(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error sending email:", error);
      setError("An error occurred while sending the email");
      setIsSubmitting(false);
    }
  };

  const handleBusinessChange = (e) => {
    const selectedValue = e.target.value;
    setIsCompanySelected(selectedValue === "company");
  };

  useScrollToTop();
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Dotpot iT",
              "address":"House-1, Road-3, Block-A, Mirpur-10, Dhaka, Bangladesh",
              "telephone": "+880 1817 176 192",
              "email": [
                "help@dotpotit.com",
                "hr@dotpotit.com",
                "marketing@dotpotit.com"
              ]
            }
          `}
        </script>
        <title>Confirmation | Dotpot iT leading iT company</title>
        <meta
          name="description"
          content="Dotpot iT provides website design, web development, AI, game, app, and blockchain development, along with comprehensive IT support services. Contact us now."
        />
        <link rel="canonical" href="https://dotpotit.com/confirmation" />
        <meta property="og:title" content="Confirmation | Dotpot iT" />
        <meta
          property="og:description"
          content="Dotpot iT provides website design, web development, AI, game, app, and blockchain development, along with comprehensive IT support services. Contact us now."
        />
        <meta
          name="keywords"
          content="it company, Website, web development, app development, it supports"
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta property="og:url" content="https://dotpotit.com/confirmation" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Confirmation | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Dotpot iT provides website design, web development, AI, game, app, and blockchain development, along with comprehensive IT support services. Contact us now."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      {successSnackBar && (
        <CommonSnackbar
          message={"Order placed successfully."}
          open={successSnackBar}
          setOpen={setSuccessSnackBar}
        />
      )}
      <div className="bg-background-500">
        <div className="container mx-auto p-5 pt-[15vh]">
          <h1 className="text-3xl text-textColor-500 font-bold mb-10 text-center">
            Place you order here
          </h1>
          <div>
            <h2 className="mb-3 font-bold text-xl text-textColor-500">
              You have selected
            </h2>
            {order.length === 0 && (
              <p className="">
                <span className="text-red-500">No service selected! </span>
                <span className="block">
                  Select services from{" "}
                  <Link to="/services" className="underline">
                    here
                  </Link>
                </span>
              </p>
            )}
            {order?.map((item) => (
              <div
                key={item._id}
                className="md:grid grid-cols-3 gap-5 border p-3 "
              >
                <div className="flex items-center gap-3 md:border-b-0 border-b-2 pb-2">
                  <img className="w-10" src={item.icon} alt={item.title} />
                  <h2 className=" text-lg text-textColor-500 font-semibold">
                    {item.title}
                  </h2>
                </div>
                <div className="px-6 py-4">
                  <p className="text-textColor-500 text-lg">Technology</p>
                  {item.technologies?.map((item, index) => (
                    <Options item={item} key={index} />
                  ))}
                </div>
                <div className="px-6 py-4">
                  <p className=" text-textColor-500 text-lg">Add ons</p>
                  {item.addons?.map((item, index) => (
                    <Options item={item} key={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="font-bold text-xl text-textColor-500 mt-3">
            Provide your information
          </p>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col md:flex-row items-center md:gap-5">
              <div className="border-b border-border w-full flex items-center mt-5">
                <MdPerson className="text-textColor-500 text-2xl" />
                <input
                  type="text"
                  placeholder="Your Full Name*"
                  name="name"
                  className="w-full p-2 text-gray-400  bg-background-500 outline-none"
                  required
                />
              </div>
              <div className="border-b border-border w-full flex items-center mt-5">
                <MdMail className="text-textColor-500 text-2xl" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  className="w-full p-2 text-gray-400  bg-background-500 outline-none"
                  required
                />
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center md:gap-5">
              <div className="border-b border-border w-full flex items-center mt-5">
                <MdPhone className="text-textColor-500 text-2xl" />
                <input
                  name="phone"
                  type="text"
                  placeholder="Contact Number*"
                  className="w-full p-2 text-gray-400  bg-background-500 outline-none"
                  required
                />
              </div>
              <div className="border-b border-border w-full flex items-center mt-5">
                <GoGlobe className="text-textColor-500 text-2xl" />
                <input
                  name="country"
                  type="text"
                  placeholder="Country"
                  className="w-full p-2 text-gray-400  bg-background-500 outline-none"
                  required
                />
              </div>
              <div className="border-b border-border w-full flex items-center mt-5">
                <IoMdBusiness className="text-textColor-500 text-2xl" />
                <select
                  name="business"
                  id=""
                  className="w-full p-2 text-gray-400  bg-background-500 outline-none"
                  onChange={handleBusinessChange}
                >
                  <option value="personal">Personal</option>
                  <option value="company">Company</option>
                </select>
              </div>
              {isCompanySelected && (
                <div className="border-b border-border w-full flex items-center mt-5">
                  <input
                    name="companyName"
                    type="text"
                    placeholder="Company Name"
                    className="w-full p-2 text-gray-400 bg-background-500 outline-none"
                    required
                  />
                </div>
              )}
            </div>
            <div className="border-b border-border w-full flex items-center mt-5">
              <input
                onChange={(e) => setFiles(e.target.files)}
                type="file"
                placeholder="Choose a file"
                name="files"
                className="w-full p-2 text-gray-400  bg-background-500 outline-none "
              />
            </div>
            <div className="border-b border-border w-full flex items-center mt-5 ">
              <div className="w-full lg:flex gap-3 items-center mb-2">
                <AiFillDollarCircle className="text-textColor-500 lg:text-2xl text-2xl inline-block lg:mr-0 mr-2" />
                {/* <div className='flex flex-wrap lg:text-base text-xs gap-3 mt-2'>
                            {["<1000", "2000", "3000", "5000", "7500", "10000", ">10000"].map((budget, i) => <div onClick={() => handleChangeBudget(budget)} key={i} className={`border rounded-full px-2 py-1 cursor-pointer hover:bg-primary-400 hover:border-primary-400 hover:text-white hover:scale-105 transition-all hover:shadow-md ${budget === selectedBudget && "bg-primary-400 border-primary-400 text-white hover:shadow-md"}`}>
                                {budget}$
                            </div>)}
                        </div> */}
                <RangeSlider
                  sliderValue={selectedBudget}
                  setSliderValue={setSelectedBudget}
                />
              </div>
            </div>
            <div className="border-b border-border w-full flex items-start mt-5 ">
              <MdMessage className="text-textColor-500 text-2xl mt-3" />
              <textarea
                name="project_description"
                type="text"
                placeholder="Project Description*"
                rows="5"
                className="w-full p-2 text-gray-400  bg-background-500 outline-none"
              ></textarea>
            </div>
            <div className="border-b border-border w-full flex items-start">
              <AiOutlineLink className="text-textColor-500 text-2xl mt-2" />
              <textarea
                name="demo_links"
                placeholder="Demo links"
                className="w-full p-2 text-gray-400  bg-background-500 outline-none"
                required
              />
            </div>
            <p className="text-gray-400  bg-background-500 mb-10 mt-14">
              We sign NDA for all our projects.
            </p>
            {error && <p className="text-red-500">{error}</p>}
            <button
              disabled={isSubmitting}
              variant="contained"
              className={`bg-secondary-400 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3 ${
                isSubmitting && "cursor-not-allowed"
              }`}
            >
              Confirm
              {isSubmitting ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <BsArrowRight />
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Confirmation;

const Options = ({ item }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={item.icon} alt={item.title} className="w-5 h-5" />
      <h2 className="text-textColor-500">{item.title}</h2>
      {/* <h2 className="text-textColor-500 font-bold ">{item.cost}</h2> */}
    </div>
  );
};
