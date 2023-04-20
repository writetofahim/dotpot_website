/**
 * This is a React functional component called SingleBlog that renders a single blog post. 
 * It imports React, Link, useParams, Footer, Navbar, RecentBlogs, blogData, and parse.

It uses useParams to get the id of the blog post to be displayed. 
It then gets the data of the blog post using blogData[id] and renders it with img, title, date, categories, and desc.

The desc property of the blog object is parsed using parse to render any HTML tags that might be included in the blog post content.

This component also renders Navbar, RecentBlogs, and Footer.
 */

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import RecentBlogs from "../../components/RecentBlogs/RecentBlogs";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

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

  return (
    <>
      <Helmet>
        <title>{data ? data.title : "Dotpot iT - Blog"}</title>
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
      <div className="w-full md:p-[15vh] pt-[15vh]">
        {data && (
          <div className="full flex items-center justify-center">
            <div className="container flex flex-col items-center p-3 md:p-10 text-justify">
              <img
                className="w-full"
                src={`${import.meta.env.REACT_APP_SERVER_PATH}/${data.image}`}
                alt=""
              />
              <div className="md:w-5/5">
                <h3 className="my-5 text-3xl font-bold text-left">
                  {data.title}
                </h3>
                <p className="text-gray-400">{data.date}</p>
                {data?.tags.map((item, index) => (
                  <p
                    key={index}
                    className="inline px-3 py-1 border rounded-full mr-2 text-gray-400 hover:text-secondary-500 transition-all"
                  >
                    {item},{" "}
                  </p>
                ))}
                <div className="mt-5">{parse(data.body)}</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <RecentBlogs />
      {/* <ChatPopup /> */}
      <Footer />
    </>
  );
};

export default SingleBlog;
