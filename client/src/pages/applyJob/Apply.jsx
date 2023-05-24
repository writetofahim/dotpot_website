import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BsArrowRight } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";
import NavbarJob from "../../components/NavbarJob/NavbarJob";
import { inputFields } from "../../data";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";
import ApplyJobSuccessModal from "./ApplyJobSuccessModal";

export const InputFields = ({ title, placeholder, type, name, required }) => {
  return (
    <div className="mt-1 text-gray-400">
      <label htmlFor={name}>{title}: </label> <br />
      <input
        className="p-2 rounded border w-full outline-none"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

const Apply = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  let { id } = useParams();

  // Data Fetching
  useEffect(() => {
    axios
      .get(`/job/${id}`)
      .then((response) => {
        setData(response.data);
        postLogger({ level: "info", message: response });
      })
      .catch((error) => {
        console.error(error);
        postLogger({ level: "error", message: error });
      });
  }, []);

  // post job application data to server
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setIsLoading(true);
      let resume;
      const filesArray = Array.from(e.target.cv.files);

      const formData = new FormData();
      filesArray.forEach((file) => {
        formData.append("files[]", file);
      });
      const { data: resFiles } = await axios.post("/upload/resumes", formData);
      postLogger({ level: "info", message: resFiles });
      resume = resFiles[0].filename;

      const application = {
        jobId: data._id,
        companyName: data.company,
        jobTitle: data.title,
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.number.value,
        resume: resume,
        address: e.target.address.value,
        education: e.target.education.value,
        experience: e.target.experience.value,
        coverLetter: e.target.coverLetter.value,
      };
      console.log(data);
      const { data: resData } = await axios.post(
        "/job_application",
        application
      );
      postLogger({ level: "info", message: resData });
      setIsLoading(false);
      setOpenModal(true);
      e.target.reset();
    } catch (error) {
      console.log(error);
      postLogger({ level: "error", message: error });
      if (error.response?.data?.errors?.msg) {
        setError(error.response.data.errors.msg);
      } else {
        setError(error.message);
      }
      setIsLoading(false);
    }
  };
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Dotpot iT",
              "telephone": "+880 1817 176 192",
              "email": [
                "help@dotpotit.com",
                "hr@dotpotit.com",
                "marketing@dotpotit.com"
              ]
            }
          `}
        </script>
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
      <NavbarJob />

      {openModal && (
        <ApplyJobSuccessModal
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <div className="w-full flex items-center justify-center overflow-x-hidden">
        <div className="w-full max-w-[1400px] container p-5 flex flex-col items-center">
          <h1 className="text-3xl text-textColor-500 font-bold mb-10">
            Apply Now for {data && data.title}
          </h1>
          <form
            onSubmit={handleSubmit}
            className="md:w-3/5 border rounded-xl p-5 shadow-lg mb-5"
          >
            <h3 className="text-xl text-center mb-3">{data && data.title}</h3>
            {inputFields.map((item, index) => (
              <InputFields key={index} {...item} />
            ))}
            <div className="mt-1 text-gray-400">
              <label htmlFor="education">Educational Qualification: </label>{" "}
              <br />
              <select
                className="p-2 rounded border w-full outline-none"
                type="text"
                name="education"
                id="education"
                placeholder="Educational Qualification"
                required
              >
                <option value="HSC">Higher Secondary School Certificate</option>
                <option value="BSC">Bachelor of Science</option>
                <option value="MSC">Master of Science</option>
              </select>
            </div>
            <div className="mt-1 text-gray-400">
              <label htmlFor="experience">Experience : </label> <br />
              <select
                className="p-2 rounded border w-full outline-none"
                type="text"
                name="experience"
                id="experience"
                placeholder="Educational Qualification"
                required
              >
                <option value="Fresher">Fresher</option>
                <option value="Less Than 1 year">Less Than 1 year</option>
                <option value="2 years">2 years</option>
                <option value="4 years">3 years</option>
                <option value="4 years">4 years</option>
                <option value="5 years">5 years</option>
                <option value="More Than 5 years">More Than 5 years</option>
              </select>
            </div>
            <div className="mt-1 text-gray-400">
              <label htmlFor="cover">Cover Latter: </label> <br />
              <textarea
                name="coverLetter"
                id="cover"
                rows="5"
                className="p-2 border w-full outline-none"
              ></textarea>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              disabled={isLoading}
              variant="contained"
              className="bg-primary-500 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3"
            >
              Submit Now{" "}
              {isLoading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <BsArrowRight />
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Apply;
