import moment from "moment";
import React, { useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import { default as ReactHtmlParser } from "react-html-parser";
import { Link } from "react-router-dom";
import ReactVisibilitySensor from "react-visibility-sensor";
import striptags from "striptags";
import axios from "../../utils/axiosInstance";

const NewBlogs = ({ currentBlogId, isRelatedBlog }) => {
  const [data, setData] = useState([]);

  // Data Fetching
  useEffect(() => {
    const url = isRelatedBlog
      ? `/blog/recent/${currentBlogId}`
      : "/blog?limit=6";
    axios
      .get(url)
      .then((response) => {
        const filtered = response.data.blogs.filter(
          (b) => b._id !== currentBlogId
        );
        setData(filtered);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [isRelatedBlog, currentBlogId]);
  return (
    <div className="">
      <span className="inline-block w-full h-1.5 bg-textColor-500 text-textColor-500"></span>
      <h1
        className="text-4xl font-bold mt-3 mb-5 text-textColor-500"
        style={{ fontFamily: `Times New Roman` }}
      >
        {isRelatedBlog ? "Related" : "Recent"} Blogs
      </h1>
      {data?.length === 0 && (
        <p className="text-textColor-500">No blogs found!</p>
      )}
      <div className="md:grid grid-cols-5 gap-10 md:space-y-0 space-y-14">
        {data.splice(1, 6)?.map((blog) => {
          const parsedArray = ReactHtmlParser(blog?.body);
          const parsedString = renderToString(parsedArray); // convert array to string of HTML
          const slicedString = striptags(parsedString).slice(0, 90);
          return (
            <ReactVisibilitySensor partialVisibility key={blog._id}>
              {({ isVisible }) => (
                <div
                  key={blog._id}
                  className={`p-2 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "translate-y-20 opacity-0"
                  } duration-1000`}
                >
                  <Link
                    to={`/blog/${blog._id}`}
                    className="font-bold mt-3 text-lg hover:underline"
                  >
                    <img
                      className="w-full aspect-video object-cover"
                      src={`${import.meta.env.REACT_APP_SERVER_PATH}/${
                        blog?.image
                      }`}
                      alt=""
                    />
                  </Link>
                  <span className="text-sm text-textColor-500">
                    {moment(new Date(blog?.createdAt)).format("MMMM Do YYYY")}
                  </span>
                  <Link
                    to={`/blog/${blog._id}`}
                    className="font-bold text-md leading-5 hover:underline mt-3 mb-3 block text-textColor-500"
                  >
                    {blog.title}
                  </Link>
                  <p className="text-sm text-textColor-500">
                    {slicedString}...
                  </p>
                </div>
              )}
            </ReactVisibilitySensor>
          );
        })}
      </div>
    </div>
  );
};

export default NewBlogs;