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
import { useParams } from "react-router-dom";
import striptags from "striptags";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";
import NewBlogs from "./NewBlogs";
import NextBlog from "./NextBlog";

const SingleBlog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Data Fetching
  useEffect(() => {
    axios
      .get(`/blog/${id}`)
      .then((response) => {
        setData(response.data);
        postLogger({ level: "info", message: response.data });
      })
      .catch((error) => {
        console.error(error);
        postLogger({ level: "error", message: error });
      });
  }, [id]);

  const parsedArray = ReactHtmlParser(data?.body);
  const parsedString = renderToString(parsedArray); // convert array to string of HTML
  const slicedString = striptags(parsedString).slice(0, 160);

  return (
    <>
      <Helmet>
        <title>{data?.title}</title>
        <meta
          name="description"
          content={`${slicedString} Read more at http://dotpotit.com/blog/${data?.url}.`}
        />
        <meta
          name="keywords"
          content="Dotpot iT, blog, articles, news, real estate, real estate app"
        />
        <link rel="canonical" href={`http://dotpotit.com/blog/${data?._id}`} />

        <meta property="og:title" content={`${data?.title}`} />
        <meta
          property="og:description"
          content={`${slicedString} Read more at ${data?.url}.`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`http://dotpotit.com/blog/${data?._id}`}
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

      <div className="bg-background-500">
        <div className="container mx-auto pt-[15vh] ">
          <NavigatorComponent navigationData={navigationData} />
          {data && (
            <div className="full flex ">
              <div className="container flex flex-col items-start p-4 md:p-6 text-justify">
                <span
                  className="text-textColor-500"
                  style={{ fontFamily: `Times New Roman` }}
                >
                  {moment(new Date(data?.createdAt)).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </span>
                <h1
                  className="my-3 md:text-5xl text-xl font-bold text-textColor-500"
                  style={{
                    fontFamily: `Times New Roman`,
                    textAlign: "left",
                  }}
                >
                  {data?.title}
                </h1>
                {/* content highligh text */}

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
                  <div className="md:w-[10%] w-full">
                    {/* author information start */}
                    {/* <div className="mt-3 flex gap-2 items-center">
                      <img
                        className="w-8"
                        src={dotpotiTLogo}
                        alt="Dotpot iT logo"
                      />
                      <h1>Dotpot iT</h1>
                    </div> */}
                    {/* author information end */}
                  </div>
                  <div className="md:w-[65%] w-full">
                    <p className="text-textColor-500">{data?.date}</p>
                    <div className=" text-textColor-500 gap-2">
                      <div className="flex gap-2 mb-2 md:text-xl text-base mt-3">
                        <span
                          className="md:text-7xl text-4xl font-bold -mt-2"
                          style={{ fontFamily: `Times New Roman` }}
                        >
                          {data?.summary?.slice(0, 1)}
                        </span>
                        <p className="italic">{data?.summary?.slice(1)}</p>
                      </div>
                      <span className="md:text-xl text-base mt-7 inline-block">
                        {parse(data?.body)}
                      </span>
                    </div>
                    <div className="my-5 border-t border-textColor-500 "></div>
                    <div>
                      <p className="mb-3 text-bold text-xl font-bold text-textColor-500">
                        Tags
                      </p>
                      <div className="flex gap-2 items-center flex-wrap">
                        {data?.tags.map((item, index) => (
                          <p
                            key={index}
                            className="inline px-3 py-1 border border-border rounded-full mr-2 text-textColor-500 hover:text-textColor-500 transition-all"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-[25%] w-full mt-5">
                    {/* <NewRecentBlogs currentBlogId={id} /> */}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="w-full mt-5 md:px-6 px-4">
            <NewBlogs currentBlogId={id} isRelatedBlog={false} />
          </div>
          <div className="w-full mt-5 md:px-6 px-4">
            <NextBlog currentBlogId={id} />
          </div>
          <div className="w-full mt-5 md:px-6 px-4 mb-5">
            <NewBlogs currentBlogId={id} isRelatedBlog={true} />
          </div>
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
