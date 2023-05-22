import moment from "moment";
import React, { useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import { default as ReactHtmlParser } from "react-html-parser";
import { Link } from "react-router-dom";
import ReactVisibilitySensor from "react-visibility-sensor";
import striptags from "striptags";
import axios from "../../utils/axiosInstance";

const NextBlog = ({ currentBlogId }) => {
  const [blog, setBlog] = useState({});
  useEffect(() => {
    const url = "/blog?limit=2";
    axios
      .get(url)
      .then((response) => {
        const filtered = response.data.blogs.filter(
          (b) => b._id !== currentBlogId
        );
        setBlog(filtered[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentBlogId]);
  const parsedArray = ReactHtmlParser(blog?.body);
  const parsedString = renderToString(parsedArray); // convert array to string of HTML
  const slicedString = striptags(parsedString).slice(0, 200);
  return (
    <div key={blog._id} className={``}>
      <span className="inline-block w-full h-1.5 bg-textColor-500 text-textColor-500"></span>
      <h1
        className="text-4xl font-bold mt-3 mb-5 text-textColor-500"
        style={{ fontFamily: `Times New Roman` }}
      >
        Next
      </h1>
      <ReactVisibilitySensor partialVisibility key={blog._id}>
        {({ isVisible }) => (
          <div
            className={`md:flex items-center justify-between gap-5 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "translate-y-20 opacity-0"
            } duration-1000`}
          >
            <div className="md:w-1/2 w-full">
              <span
                className="text-sm text-textColor-500"
                style={{ fontFamily: `Times New Roman` }}
              >
                {moment(new Date(blog?.createdAt)).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )}
              </span>
              <Link
                to={`/blog/${blog._id}`}
                className="font-bold md:text-5xl text-2xl hover:underline mt-3 mb-3 block text-textColor-500 "
                style={{ fontFamily: `Times New Roman` }}
              >
                {blog.title}
              </Link>
              <p className="text-sm text-textColor-500 md:mb-0 mb-5">
                {slicedString}...
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <Link
                to={`/blog/${blog._id}`}
                className="font-bold mt-3 text-lg hover:underline"
              >
                <img
                  className="w-full"
                  src={`${import.meta.env.REACT_APP_SERVER_PATH}/${
                    blog?.image
                  }`}
                  alt={blog.title}
                />
              </Link>
            </div>
          </div>
        )}
      </ReactVisibilitySensor>
    </div>
  );
};

export default NextBlog;
