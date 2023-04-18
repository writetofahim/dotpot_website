/**
 * This is a React component that renders a blog page with a list of blog cards and pagination. 
 * The component imports the Navbar, Footer, blogData, Stack, Link, BsArrowRight, Chip, and Pagination components from various packages and files.

The BlogCard component renders a card with a blog post image, categories, date, title, and a "Read More" link.

The Blog component renders a title, a description, a container for the list of BlogCards, and a Pagination component. It also renders the Navbar and Footer components.

Tailwind css is used for styling 
 */

import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineDoubleRight,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import axios from "../../utils/axiosInstance";

import moment from "moment";
import ReactHtmlParser from "react-html-parser";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import postLogger from "../../utils/postLogger";

import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import stripTags from "striptags";

const BlogCard = (props) => {
  const id = props._id;
  return (
    <div className="container p-5 mx-auto border rounded-xl shadow-xl bg-white">
      <div className=" lg:flex lg:items-center">
        <img
          className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
          src={`${import.meta.env.REACT_APP_SERVER_PATH}/${props.image}`}
          alt=""
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
            className="mt-2 text-secondary-300 hover:text-secondary-500 transition-all flex items-center"
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
//                     className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 "
//                   >
//                     <AiOutlineArrowRight className="rotate-180" />
//                   </button>
//                 </li>
//                 {Array.from({ length: totalPages }, (_, index) => (
//                   <li key={index}>
//                     <button
//                       onClick={() => setPage(index + 1)}
//                       className={`px-3 py-1.5 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ${
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
//                     className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
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

const Blog = () => {
  useScrollToTop();
  const [data, setData] = useState(null);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const fetchData = async (page) => {
    try {
      const response = await axios.get(`/blog?page=${page}`);
      postLogger({ level: "info", message: response });
      console.log("blog data", response.data);
      setData(response.data.blogs);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error(error);
      postLogger({ level: "error", message: error });
    }
  };

  React.useEffect(() => {
    fetchData(page);
  }, [page]);

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Helmet>
        <title>Dotpot iT - Blog</title>
        <meta
          name="description"
          content="Read the latest articles and news from Dotpot iT's blog."
        />
        <meta name="keywords" content="Dotpot iT, blog, articles, news" />
        <link rel="canonical" href="https://dotpotit.com/blog" />
        <meta property="og:title" content="Dotpot iT - Blog" />
        <meta
          property="og:description"
          content="Read the latest articles and news from Dotpot iT's blog."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dotpotit.com/blog" />
        <meta
          property="og:image"
          content="https://dotpotit.com/assets/logo-492dab11.png"
        />
        <meta name="twitter:title" content="Dotpot iT - Blog" />
        <meta
          name="twitter:description"
          content="Read the latest articles and news from Dotpot iT's blog."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      <Navbar />
      {/* <Particle /> */}
      <div className="w-full pt-[15vh]">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-6xl mt-10 mb-2 font-bold ">Blogs</h1>
          <p className="text-lg mb-10 px-4">
            Follow our blog to get all the latest tech news
          </p>
          {/* <div className="container flex gap-5 md:gap-10 justify-center p-5 flex-wrap">
                        {
                            data && data.map((item, index) => (
                                <BlogCard2 key={index} {...item} />
                            ))
                        }
                    </div> */}
          <div className="container lg:grid lg:grid-cols-2 grid-cols-1 gap-5 lg:space-y-0 space-y-5 md:gap-10 justify-center lg:p-5 p-3 flex-wrap">
            {data && <FirstBlog {...data[0]} />}
            {data &&
              data
                .slice(1)
                .map((item, index) => (
                  <BlogCard3 key={item._id + index} {...item} index={index} />
                ))}
          </div>

          {/* Pagination Start */}
          <div className="flex justify-center mt-5 mb-5">
            <nav aria-label="Page navigation example ">
              <ul className="inline-flex -space-x-px">
                <li>
                  <button
                    onClick={handlePrevPage}
                    disabled={page === 1}
                    className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 "
                  >
                    <AiOutlineArrowRight className="rotate-180" />
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setPage(index + 1)}
                      className={`px-3 py-1.5 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ${
                        index + 1 === page
                          ? "text-blue-600 border-blue-600 bg-blue-50"
                          : ""
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
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
                  >
                    <AiOutlineArrowRight />
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

const FirstBlog = ({ title, body, image, _id, tags, createdAt, index }) => {
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
            onClick={() => navigate(`/blog/${_id}`)}
            className="w-full object-cover h-[400px] relative z-10 rounded-xl cursor-pointer"
            src={`${import.meta.env.REACT_APP_SERVER_PATH}/${image}`}
            alt=""
          />
        </div>

        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] rounded-md bg-gradient-to-r from-[#f8a541] to-[#f8ae3f] "></div>
      </div>
      <div className="md:w-[55%] w-full p-4">
        <h1
          onClick={() => navigate(`/blog/${_id}`)}
          className="text-xl font-bold hover:underline cursor-pointer"
        >
          {title}
        </h1>
        <p className="my-3 text-slate-500">
          {moment(new Date(createdAt)).format("MMM Do YY")}
        </p>
        <p className="my-3 text-slate-500">{slicedString}...</p>
        <div className="flex items-center gap-2">
          <img className="w-4 " src="./src/assets/img/icon.png" alt="" />
          <p className="font-bold">Dotpot iT</p>
        </div>
      </div>
    </div>
  );
};

const BlogCard2 = ({ title, body, image, _id, tags, createdAt, index }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className={`${
        index === 0 ? "col-span-3" : ""
      } p-3 bg-white rounded-xl shadow-lg cursor-pointer group`}
    >
      <div className="">
        <img
          className={`${
            index === 0 ? "lg:h-[450px]" : "lg:h-[250px]"
          } h-[250px] w-full object-cover object-top`}
          src={`${import.meta.env.REACT_APP_SERVER_PATH}/${image}`}
          alt=""
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

const BlogCard3 = ({ title, body, image, _id, tags, createdAt, index }) => {
  const navigate = useNavigate();

  const parsedArray = ReactHtmlParser(body);
  const parsedString = renderToString(parsedArray); // convert array to string of HTML
  const slicedString = stripTags(parsedString).slice(0, 100);
  return (
    <div className="md:flex items-center gap-4">
      <div className="md:w-[45%] w-full relative">
        <div
          className={`absolute top-0 left-0 w-[calc(100%_-_30px)] h-[200px] rounded-xl bg-gradient-to-r ${
            index % 2 === 0
              ? "from-[#4289ff] to-[#01fdd6]"
              : "from-[#f9a242] to-[#fe4f5f] "
          }  `}
        ></div>

        <div className="p-4">
          <img
            onClick={() => navigate(`/blog/${_id}`)}
            className="md:w-[300px] w-full object-cover h-[200px] relative z-10 rounded-xl cursor-pointer"
            src={`${import.meta.env.REACT_APP_SERVER_PATH}/${image}`}
            alt=""
          />
        </div>
      </div>
      <div className="md:w-[55%] w-full p-4">
        <h1
          onClick={() => navigate(`/blog/${_id}`)}
          className="text-lg font-bold hover:underline cursor-pointer"
        >
          {title}
        </h1>
        <p className="my-3 text-slate-500">
          {moment(new Date(createdAt)).format("MMM Do YY")}
        </p>
        <p className="my-3 text-slate-500">{slicedString}...</p>
        <div className="flex items-center gap-2">
          <img className="w-4 " src="./src/assets/img/icon.png" alt="" />
          <p className="font-bold">Dotpot iT</p>
        </div>
      </div>
    </div>
  );
};
