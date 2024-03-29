/**
 * This is a React component that renders a blog page with a list of blog cards and pagination. 
 * The component imports the Navbar, Footer, blogData, Stack, Link, BsArrowRight, Chip, and Pagination components from various packages and files.

The BlogCard component renders a card with a blog post image, categories, date, title, and a "Read More" link.

The Blog component renders a title, a description, a container for the list of BlogCards, and a Pagination component. It also renders the Navbar and Footer components.

Tailwind css is used for styling 
 */

import React, { useState } from "react";
import { AiOutlineDoubleRight, AiOutlineFieldTime } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import axios from "../../utils/axiosInstance";

import moment from "moment";
import ReactHtmlParser from "react-html-parser";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import postLogger from "../../utils/postLogger";

import { Skeleton } from "@mui/material";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import stripTags from "striptags";
import dotpotiTLogo from "../../assets/img/icon.png";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";

const BlogCard = (props) => {
  const id = props._id;
  return (
    <div className="container p-5 mx-auto border rounded-xl shadow-xl bg-background-500">
      <div className=" lg:flex lg:items-center">
        <img
          className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
          src={`${import.meta.env.REACT_APP_SERVER_PATH}/${props.image}`}
          alt="dotpot it logo | software developer company website"
        />

        <div className="lg:w-1/2 lg:mt-0 lg:mx-6 ">
          <h3 className="text-3xl uppercase">{props.title}</h3>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            {props.date}
          </p>

          <div className="flex flex-wrap gap-1 my-5">
            {props.tags.map((tag, index) => (
              <Link to={`/blog?tag=${tag}`} key={index}>
                <div className="px-3 py-2 border rounded-full">
                  <p className="text-gray-400">{tag}</p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to={`./${id}`}
            className="mt-2 text-secondary-300 hover:text-textColor-500 transition-all flex items-center"
          >
            Read more
            <AiOutlineDoubleRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

// const Blog = () => {
//   useScrollToTop();
//   const [data, setData] = useState(null);
//   const [page, setPage] = React.useState(1);
//   const [totalPages, setTotalPages] = React.useState(1);

//   const fetchData = async (page) => {
//     try {
//       const response = await axios.get(`/blog?page=${page}`);
//       postLogger({ level: "info", message: response });
//       console.log("blog data", response.data);
//       setData(response.data.blogs);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error(error);
//       postLogger({ level: "error", message: error });
//     }
//   };

//   React.useEffect(() => {
//     fetchData(page);
//   }, [page]);

//   const handlePrevPage = () => {
//     setPage(page - 1);
//   };

//   const handleNextPage = () => {
//     setPage(page + 1);
//   };

//   return (
//     <>
//       <Navbar />
//       <Particle />
//       <div className="w-full pt-[15vh]">
//         <div className="w-full flex flex-col items-center justify-center">
//           <h1 className="text-6xl mt-10 mb-2 font-bold ">Blogs</h1>
//           <p className="text-lg mb-10 px-4">
//             Follow our blog to get all the latest tech news
//           </p>
//           {/* <div className="container flex gap-5 md:gap-10 justify-center p-5 flex-wrap">
//                         {
//                             data && data.map((item, index) => (
//                                 <BlogCard2 key={index} {...item} />
//                             ))
//                         }
//                     </div> */}
//           <div className="container lg:grid lg:grid-cols-3 grid-cols-1 gap-5 lg:space-y-0 space-y-5 md:gap-10 justify-center lg:p-5 p-3 flex-wrap">
//             {data &&
//               data.map((item, index) => (
//                 <BlogCard2 key={item._id + index} {...item} index={index} />
//               ))}
//           </div>

//           {/* Pagination Start */}
//           <div className="flex justify-center mt-5 mb-5">
//             <nav aria-label="Page navigation example ">
//               <ul className="inline-flex -space-x-px">
//                 <li>
//                   <button
//                     onClick={handlePrevPage}
//                     disabled={page === 1}
//                     className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-background-500 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 "
//                   >
//                     <AiOutlineArrowRight className="rotate-180" />
//                   </button>
//                 </li>
//                 {Array.from({ length: totalPages }, (_, index) => (
//                   <li key={index}>
//                     <button
//                       onClick={() => setPage(index + 1)}
//                       className={`px-3 py-1.5 leading-tight text-gray-500 bg-background-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ${
//                         index + 1 === page
//                           ? "text-blue-600 border-blue-600 bg-blue-50"
//                           : ""
//                       }`}
//                     >
//                       {index + 1}
//                     </button>
//                   </li>
//                 ))}
//                 <li>
//                   <button
//                     onClick={handleNextPage}
//                     disabled={page === totalPages}
//                     className="px-3 py-2 leading-tight text-gray-500 bg-background-500 border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
//                   >
//                     <AiOutlineArrowRight />
//                   </button>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           {/* Pagination Start */}
//         </div>

//         {/* <ChatPopup /> */}
//       </div>
//       <Footer />
//     </>
//   );
// };

const navigationData = [{ title: "Blogs", link: "/blog" }];

const Blog = () => {
  useScrollToTop();
  const [data, setData] = useState(null);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const [showToast, setShowToast] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tags = queryParams.get("tags");

  const fetchData = async (page, tags = "") => {
    try {
      setIsLoading(true);
      setError("");
      let url = `/blog?page=${page}`;
      if (tags) {
        url += `&tags=${tags}`;
      }
      console.log(url);
      const response = await axios.get(url);
      postLogger({ level: "info", message: response });
      console.log("blog data", response.data);
      setData(response.data.blogs);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error(error);
      setError(error?.message);
      postLogger({ level: "error", message: error });
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData(page, tags);
  }, [page, tags]);

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Hide the toast after 3 seconds
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
        <title>Dotpot iT - Blog | A Leading it Company</title>
        <meta
          name="description"
          content="Read the latest articles and news from Dotpot iT's blog. Gain the insights of latest trends on tech."
        />
        <link rel="canonical" href="https://dotpotit.com/blog" />
        <meta property="og:title" content="Dotpot iT - Blog" />
        <meta
          property="og:description"
          content="Read the latest articles and news from Dotpot iT's blog. Gain the insights of latest trends on tech."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dotpotit.com/blog" />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta name="twitter:title" content="Dotpot iT - Blog" />
        <meta
          name="twitter:description"
          content="Read the latest articles and news from Dotpot iT's blog. Gain the insights of latest trends on tech."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>
      <Navbar />
      {/* <Particle /> */}

      <div className="w-full pt-[15vh] bg-background-500">
        <NavigatorComponent navigationData={navigationData} />
        {!tags && (
          <div className=" bg-[url(https://6amtech.com/wp-content/uploads/2023/03/Group-1597883190-scaled.webp)] bg-cover bg-no-repeat md:h-[300px] flex items-center justify-center mb-10">
            <div className="w-full p-3">
              <div className="container mx-auto border-2 border-white rounded-md backdrop-blur-3xl py-10 shadow-lg shadow-pink-200 flex items-center justify-center ">
                <div className="flex flex-col items-center px-2">
                  <h1 className="md:text-5xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-3">
                    Our Blogs
                  </h1>
                  <p className="text-center text-textColor-500 md:text-3xl text-xl  ">
                    Uncover a World of Stories and{" "}
                    <span className="text-secondary-500">Knowledge</span>
                  </p>
                  <p className="text-center">
                    Be the first to receive our latest news, guides, discounts,
                    and offers.
                  </p>
                  <div className="mt-3 relative">
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="space-x-2"
                    >
                      <input
                        className="px-3 py-2 rounded focus:outline-pink-100"
                        type="text"
                        placeholder="Your email"
                      />
                      <button
                        onClick={() => handleShowToast()}
                        className="py-2 px-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:from-pink-500 hover:to-yellow-500 duration-300"
                      >
                        Subscribe
                      </button>
                    </form>
                    {showToast && (
                      <div
                        className={`absolute top-12 left-0 bg-textColor-500 text-buttonText-500 text-xs py-2 px-4 rounded`}
                      >
                        Subscribe is coming soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="w-full flex flex-col items-center justify-center ">
          {tags ? (
            <div className="mb-16 ">
              <p className="text-3xl font-bold text-center">{tags} </p>
            </div>
          ) : (
            <>
              {/* <h1 className="text-6xl mt-10 mb-2 font-bold text-textColor-500">
                Blogs
              </h1>
              <p className="text-lg mb-10 px-4 text-textColor-500">
                Follow our blog to get all the latest tech news
              </p> */}
            </>
          )}

          {/* <div className="container flex gap-5 md:gap-10 justify-center p-5 flex-wrap">
                        {
                            data && data.map((item, index) => (
                                <BlogCard2 key={index} {...item} />
                            ))
                        }
                    </div> */}

          {isLoading && (
            <>
              <div className="container mx-auto p-5 md:flex w-full gap-5">
                <div className="md:w-1/2 w-full">
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={318}
                    className="rounded"
                  />
                </div>
                <div className="md:w-1/2 w-full">
                  <Skeleton width="100%" variant="text" height={40} />
                  <Skeleton width={150} />
                  <Skeleton width="100%" />
                  <Skeleton width="100%" />
                  <Skeleton width="100%" />
                  <Skeleton width="100%" />
                  <Skeleton width="100%" />
                  <Skeleton width="100%" />
                  <Skeleton width={100} />
                </div>
              </div>
              <div className="md:container w-full grid md:grid-cols-3 grid-cols-1 gap-10 grow p-5">
                {[...new Array(6)].map((_, i) => (
                  <div key={i} className="grow">
                    <Skeleton
                      className="rounded"
                      variant="rectangular"
                      width="100%"
                      height={218}
                    />
                    <Skeleton width="100%" />
                    <Skeleton width="100%" />
                    <Skeleton width="100%" />
                    <Skeleton width="100%" />
                    <Skeleton width={100} />
                  </div>
                ))}
              </div>
            </>
          )}
          {error && <p className="text-red-500">{error}</p>}
          <div className="container lg:grid lg:grid-cols-2 grid-cols-1 gap-5 lg:space-y-0 space-y-5 md:gap-10 justify-center lg:p-5 p-3 flex-wrap text-textColor-500">
            {data && <FirstBlog {...data[0]} />}
            {data &&
              data
                .slice(1)
                .map((item, index) => (
                  <BlogCard3 key={item._id + index} {...item} index={index} />
                ))}
          </div>

          {/* Pagination Start */}
          <div className="container px-5 flex md:justify-end justify-center items-center mt-5 mb-14">
            <div className="border border-t w-full"></div>
            <nav aria-label="Page navigation example ">
              <ul className="inline-flex gap-3">
                <li>
                  <button
                    onClick={handlePrevPage}
                    disabled={page === 1}
                    className="px-3 py-1.5 leading-tight bg-secondary-500 hover:bg-secondary-600 text-white text-lg "
                  >
                    Prev
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setPage(index + 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`px-3 py-1.5 leading-tight text-gray-500 bg-background-500 rounded-full hover:bg-secondary-500 hover:text-white border border-secondary-300 text-sm w-12 ${
                        index + 1 === page
                          ? "bg-secondary-500 text-white "
                          : " "
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleNextPage}
                    disabled={page === totalPages}
                    className="px-3 py-1.5 leading-tight bg-secondary-500 hover:bg-secondary-600 text-white text-lg "
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Pagination Start */}
        </div>

        {/* <ChatPopup /> */}
      </div>
      <Footer />
    </>
  );
};

export default Blog;

const FirstBlog = ({
  title,
  body,
  image,
  _id,
  tags,
  createdAt,
  index,
  slug,
}) => {
  const parsedArray = ReactHtmlParser(body);
  const parsedString = renderToString(parsedArray); // convert array to string of HTML
  const slicedString = stripTags(parsedString).slice(0, 600);
  const navigate = useNavigate();
  return (
    <div className="col-span-2 md:flex items-center gap-4">
      <div className="md:w-[45%] w-full relative">
        <div className="absolute top-0 left-0 w-[150px] h-[150px] rounded-xl bg-gradient-to-r from-[#fc5c53] to-[#ff406a]"></div>

        <div className="p-5">
          <img
            onClick={() => navigate(`/blog/${slug}`)}
            // className="w-full object-cover h-[400px] relative z-10 rounded-xl cursor-pointer"
            className="w-full aspect-video relative z-10 rounded-xl cursor-pointer"
            src={`${import.meta.env.REACT_APP_SERVER_PATH}/${image}`}
            alt={title}
          />
        </div>

        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] rounded-md bg-gradient-to-r from-[#f8a541] to-[#f8ae3f] "></div>
      </div>
      <div className="md:w-[55%] w-full p-4">
        <h3
          onClick={() => navigate(`/blog/${slug}`)}
          className="text-xl font-bold hover:underline cursor-pointer"
        >
          {title}
        </h3>
        <p className="my-3 text-textColor-500">
          {moment(new Date(createdAt)).format("MMM Do YY")}
        </p>
        <p className="my-3 text-textColor-500">
          {slicedString}...{" "}
          <Link
            className="text-secondary-300 cursor-pointer hover:text-secondary-600"
            to={`/blog/${slug}`}
          >
            Read more
          </Link>{" "}
        </p>
        <div className="flex items-center gap-2">
          <img
            className="w-4 "
            src={dotpotiTLogo}
            alt="dotpot it logo | software developer company website"
          />
          <p className="font-bold">Dotpot iT</p>
        </div>
      </div>
    </div>
  );
};

const BlogCard2 = ({
  title,
  body,
  image,
  _id,
  tags,
  createdAt,
  index,
  slug,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${slug}`)}
      className={`${
        index === 0 ? "col-span-3" : ""
      } p-3 bg-background-500 rounded-xl shadow-lg cursor-pointer group`}
    >
      <div className="">
        <img
          className={`${
            index === 0 ? "lg:h-[450px]" : "lg:h-[250px]"
          } h-[250px] w-full object-cover object-top`}
          src={`${import.meta.env.REACT_APP_SERVER_PATH}/${image}`}
          alt={title}
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, i) => (
          <div
            key={i}
            className={`text-sm rounded-full px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white`}
          >
            {tag}
          </div>
        ))}
      </div>
      <h3 className="text-xl font-[600] my-3 text-gray-500 group-hover:text-primary-600 duration-300 cursor-pointer group-hover:underline">
        {title.slice(0, 30)}...
      </h3>
      <p className="mb-3 text-gray-300 flex gap-2 items-center">
        {" "}
        <AiOutlineFieldTime className="text-2xl" />
        {moment(new Date(createdAt)).format("LL")}
      </p>
      <button className="bg-gradient-to-r from-primary-200 to-primary-500 px-3 py-1.5 rounded text-white hover:scale-105 transition-all">
        Read More
      </button>
    </div>
  );
};

const BlogCard3 = ({
  title,
  body,
  image,
  _id,
  tags,
  createdAt,
  index,
  slug,
}) => {
  const navigate = useNavigate();

  const parsedArray = ReactHtmlParser(body);
  const parsedString = renderToString(parsedArray); // convert array to string of HTML
  const slicedString = stripTags(parsedString).slice(0, 100);

  return (
    <div className="md:flex items-center gap-4">
      <div className="md:w-[45%] w-full relative">
        <div
          className={`absolute top-0 left-0 w-[calc(100%_-_30px)] aspect-video rounded-xl bg-gradient-to-r ${
            index % 2 === 0
              ? "from-[#4289ff] to-[#01fdd6]"
              : "from-[#f9a242] to-[#fe4f5f] "
          }  `}
        ></div>

        <div className="p-4">
          <img
            onClick={() => navigate(`/blog/${slug}`)}
            className="w-full aspect-video relative z-10 rounded-xl cursor-pointer"
            src={`${import.meta.env.REACT_APP_SERVER_PATH}/${image}`}
            alt={title}
          />
        </div>
      </div>
      <div className="md:w-[55%] w-full p-4">
        <h3
          onClick={() => navigate(`/blog/${slug}`)}
          className="text-lg font-bold hover:underline cursor-pointer"
        >
          {title}
        </h3>
        <p className="my-3 text-slate-500">
          {moment(new Date(createdAt)).format("MMM Do YY")}
        </p>
        <p className="my-3 text-slate-500">
          {slicedString}...{" "}
          <Link
            className="text-secondary-300 cursor-pointer hover:text-secondary-600"
            to={`/blog/${slug}`}
          >
            Read more
          </Link>
        </p>
        <div className="flex items-center gap-2">
          <img
            className="w-4 "
            src={dotpotiTLogo}
            alt="dotpot it logo | software developer company website"
          />
          <p className="font-bold">Dotpot iT</p>
        </div>
      </div>
    </div>
  );
};
