/**
 * This is a React functional component called SingleBlog that renders a single blog post. 
 * It imports React, Link, useParams, Footer, Navbar, RecentBlogs, blogData, and parse.

It uses useParams to get the id of the blog post to be displayed. 
It then gets the data of the blog post using blogData[id] and renders it with img, title, date, categories, and desc.

The desc property of the blog object is parsed using parse to render any HTML tags that might be included in the blog post content.

This component also renders Navbar, RecentBlogs, and Footer.
 */

import moment from "moment";
import React, { useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import {
  default as ReactHtmlParser,
  default as parse,
} from "react-html-parser";
import { BiLink } from "react-icons/bi";
import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import striptags from "striptags";
import dotpotiTLogo from "../../assets/img/icon.png";
import CommonSnackbar from "../../components/CommonSnackbar/CommonSnackbar";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";
import LoginModal from "../lgoin/LoginModal";
import CommentSection from "./CommentSection";
import LikesSection from "./LikesSection";
import NewBlogs from "./NewBlogs";
import NextBlog from "./NextBlog";
import WaveformPlayer from "./WaveformPlayer";
import "./blog.css";

const SingleBlog = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [comments, setComments] = useState([]);

  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Data Fetching
  useEffect(() => {
    axios
      .get(`/blog/${slug}`)
      .then((response) => {
        setData(response.data);
        setComments(response.data.comments);
        postLogger({ level: "info", message: response.data });
      })
      .catch((error) => {
        console.error(error);
        postLogger({ level: "error", message: error });
      });
  }, [slug]);

  const parsedArray = ReactHtmlParser(data?.body);
  const parsedString = renderToString(parsedArray); // convert array to string of HTML
  const slicedString = striptags(parsedString).slice(0, 160);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Hide the toast after 3 seconds
  };

  const url = window.location.href;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}`;
  const linkedinShareUrl = `https://www.linkedin.com/share?url=${encodeURIComponent(
    url
  )}`;
  const emailShareUrl = `mailto:?subject=${
    data?.title
  }&body=Read%20${encodeURIComponent(url)}`;

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
        <title>{data?.title}</title>

        <meta
          name="description"
          content={`${slicedString} Read more at http://dotpotit.com/blog/${data?.slug}.`}
        />
        <meta
          name="keywords"
          content="Dotpot iT, blog, articles, news, real estate, real estate app"
        />
        <link rel="canonical" href={`http://dotpotit.com/blog/${data?.slug}`} />

        <meta property="og:title" content={`${data?.title}`} />
        <meta
          property="og:description"
          content={`${slicedString} Read more at ${data?.url}.`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`http://dotpotit.com/blog/${data?.slug}`}
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta name="twitter:title" content={`${data?.title}`} />
        <meta
          name="twitter:description"
          content={`${slicedString} Read more at ${data?.url}.`}
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>

      <Navbar />
      {isLoginModalOpen && (
        <LoginModal
          setLoginModelOpen={setIsLoginModalOpen}
          setIsLoginSuccess={setIsLoginSuccess}
        />
      )}
      {isLoginSuccess && (
        <CommonSnackbar
          message={"Login Successful!"}
          open={isLoginSuccess}
          setOpen={setIsLoginSuccess}
        />
      )}
      {/* previous single blog start */}
      {/* <div className="bg-background-500">
        <div className="w-full md:p-[15vh] pt-[15vh] ">
          <NavigatorComponent navigationData={navigationData} />
          {data && (
            <div className="full flex items-center justify-center">
              <div className="container flex flex-col items-center p-3 md:p-10 text-justify">
                <img
                  className="w-full"
                  src={`${import.meta.env.REACT_APP_SERVER_PATH}/${
                    data?.image
                  }`}
                  alt=""
                />
                <div className="md:w-5/5">
                  <h1 className="my-5 text-3xl font-bold text-left text-textColor-500">
                    {data?.title}
                  </h1>
                  <p className="text-textColor-500">{data?.date}</p>
                  {data?.tags.map((item, index) => (
                    <p
                      key={index}
                      className="inline px-3 py-1 border border-border rounded-full mr-2 text-textColor-500 hover:text-textColor-500 transition-all"
                    >
                      {item},{" "}
                    </p>
                  ))}
                  <div className="mt-5 text-textColor-500">
                    {parse(data?.body)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div> */}
      {/* previous single blog end */}

      <div className="bg-gradient-to-r from-gray-100 to-primary-100 relative">
        <div className="container mx-auto pt-[15vh] backdrop-blur-3xl ">
          <div className="md:-ml-4 md:pl-0 pl-2">
            <NavigatorComponent navigationData={navigationData} />
          </div>
          {data && (
            <>
              <div className="full flex p-[20px]">
                <div className="container flex flex-col items-start ">
                  <span className="text-textColor-500 blog-content-font text-sm italic">
                    {moment(new Date(data?.createdAt)).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </span>
                  <h1 className="my-3 md:text-[3.75rem] text-xl leading-[1] font-bold text-textColor-500 blog-title-font">
                    {data?.title}
                  </h1>
                  {/* content summary start*/}
                  <p className="md:text-lg text-lg mb-5 text-textColor-500 blog-summary-font">
                    {data?.summary}
                  </p>
                  {/* content summary end*/}
                  <div className="mt-3 w-full flex items-center">
                    <img
                      className="w-full"
                      src={`${import.meta.env.REACT_APP_SERVER_PATH}/${
                        data?.image
                      }`}
                      alt={data?.title}
                    />
                  </div>

                  <div className="md:flex gap-10 md:mt-16 mt-10">
                    <div className="md:w-[15%] w-full relative">
                      {showToast && (
                        <div
                          className={`absolute top-20 left-0 bg-textColor-500 text-buttonText-500 text-xs py-2 px-4 rounded`}
                        >
                          Link copied
                        </div>
                      )}
                      {/* author information start */}
                      <div className="mt-3 mb-5">
                        <img
                          className="w-8 hidden"
                          src={dotpotiTLogo}
                          alt="Dotpot iT logo"
                        />
                        <Link
                          to={"/"}
                          className="font-bold underline cursor-pointer text-textColor-500"
                        >
                          Dotpot iT
                        </Link>
                        <div className="flex gap-3 mt-3">
                          <button
                            className="text-textColor-500"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                "https://www.dotpotit.com"
                              );
                              handleShowToast();
                            }}
                          >
                            <BiLink />
                          </button>
                          <a
                            href={"https://www.facebook.com/dotpotit"}
                            target="_blank"
                          >
                            <FaFacebook className="text-textColor-500" />
                          </a>
                          <a
                            href={"https://twitter.com/dotpotit"}
                            target="_blank"
                          >
                            <FaTwitter className="text-textColor-500" />
                          </a>
                          <a
                            href={"https://www.linkedin.com/company/dotpotit"}
                            target="_blank"
                          >
                            <FaLinkedin className="text-textColor-500" />
                          </a>
                        </div>
                      </div>
                      {/* author information end */}
                    </div>
                    <div className="md:w-[55%] w-full">
                      {/* listen the article start*/}

                      {data?.audio && (
                        <div className="w-full text-textColor-500">
                          <div className="w-full">
                            <WaveformPlayer
                              audioUrl={`${
                                import.meta.env.REACT_APP_SERVER_PATH
                              }/${data.audio}`}
                            />
                          </div>
                        </div>
                      )}

                      {/* listen the article end*/}
                      <p className="text-textColor-500">{data?.date}</p>
                      <div className=" text-textColor-500 gap-2 mt-20">
                        {/* <div className="flex gap-2 mb-2 md:text-xl text-base mt-3">
                        <span
                          className="md:text-7xl text-4xl font-bold -mt-2"
                          style={{ fontFamily: `Times New Roman` }}
                        >
                          {data?.summary?.slice(0, 1)}
                        </span>
                        <p className="italic">{data?.summary?.slice(1)}</p>
                      </div> */}
                        <div className="md:text-2xl text-xl mt-7 inline-block blog-content-font blog-content-body">
                          <div className="first-letter-large blog-utopia-font blog-content">
                            {parse(data?.body)}
                          </div>
                        </div>
                      </div>
                      <div className="my-5 border-t border-textColor-500 "></div>
                      {/* likes section start */}
                      <LikesSection
                        likes={data?.likes || []}
                        comments={comments}
                        blogId={data?._id}
                      />
                      {/* likes section end */}
                      <div>
                        <p className="mb-3 text-bold text-xl font-bold text-textColor-500 blog-summary-font">
                          Tags
                        </p>
                        <div className="flex gap-2 items-center flex-wrap">
                          {data?.tags.map((item, index) => (
                            <p
                              onClick={() => navigate(`/blog?tags=${item}`)}
                              key={index}
                              className="inline px-3 py-1 border border-border rounded-full mr-2 text-textColor-500 hover:text-textColor-500 transition-all hover:underline cursor-pointer hover:shadow-sm hover:shadow-cyan-300"
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* comment section start */}
                      <CommentSection
                        comments={comments}
                        setComments={setComments}
                        blogId={data?._id}
                        setIsLoginModalOpen={setIsLoginModalOpen}
                      />
                      {/* comment section end */}
                      {/* social media share start */}
                      <p className="mb-3 text-bold text-xl font-bold text-textColor-500 blog-summary-font mt-5">
                        Share on
                      </p>
                      <div className="flex flex-wrap space-x-4 ">
                        <a
                          href={facebookShareUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-blue-500 text-buttonText-500 px-4 py-2 rounded hover:bg-blue-600 duration-300"
                        >
                          <FaFacebook />
                        </a>
                        <a
                          href={twitterShareUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-blue-400 text-buttonText-500 px-4 py-2 rounded hover:bg-blue-500 duration-300"
                        >
                          <FaTwitter />
                        </a>
                        <a
                          href={linkedinShareUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-blue-800 text-buttonText-500 px-4 py-2 rounded hover:bg-blue-900 duration-300"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href={emailShareUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-red-500 text-buttonText-500 px-4 py-2 rounded hover:bg-red-600 duration-300"
                        >
                          <FaEnvelope />
                        </a>
                      </div>

                      {/* social media share end */}
                    </div>
                    <div className="md:w-[30%] w-full mt-5">
                      {/* <NewRecentBlogs currentBlogId={id} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-5 md:px-6 px-4">
                <NewBlogs currentBlogId={data?._id} isRelatedBlog={false} />
              </div>
              <div className="w-full mt-5 md:px-6 px-4">
                <NextBlog currentBlogId={data?._id} />
              </div>
              <div className="w-full mt-5 md:px-6 px-4 pb-16">
                <NewBlogs currentBlogId={data?._id} isRelatedBlog={true} />
              </div>
            </>
          )}
        </div>
      </div>

      {/* <RecentBlogs /> */}
      {/* <ChatPopup /> */}
      <Footer />
    </>
  );
};

export default SingleBlog;

const navigationData = [{ title: "Blogs", link: "/blog" }];
