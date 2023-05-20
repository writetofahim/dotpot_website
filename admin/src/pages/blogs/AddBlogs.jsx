import React, { useContext, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSearchParams } from "react-router-dom";
import CommonSnackbar from "../../components/ComonSnackbar";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";
import BlogTags from "./BlogTags";

const AddBlogs = () => {
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [searchParams] = useSearchParams();

  const blogId = searchParams.get("id");

  const [message, setMessage] = useState("");
  const [snackbar, setSnackbar] = useState(false);

  useEffect(() => {
    if (blogId) {
      axios
        .get(`/blog/${blogId}`)
        .then((res) => {
          setTitle(res.data.title);
          setContent(res.data.body);
          setTags(res.data.tags);
          setSummary(res.data.summary);

          const preview = document.getElementById("preview");
          const imageDiv = document.getElementById("imageDiv");
          const image = new Image();
          image.src =
            import.meta.env.REACT_APP_SERVER_PATH + "/" + res.data.image;
          imageDiv.classList.remove("hidden");
          preview.innerHTML = "";
          preview.appendChild(image);
          postLogger({ level: "info", message: res });
        })
        .catch((err) => {
          console.log(err);
          postLogger({ level: "error", message: err });
        });
    }
  }, []);

  function handleChange(value) {
    setContent(value);
  }
  function handleChangeImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const preview = document.getElementById("preview");
      const imageDiv = document.getElementById("imageDiv");
      const image = new Image();
      image.src = reader.result;
      imageDiv.classList.remove("hidden");
      preview.innerHTML = "";
      preview.appendChild(image);
    };
    setFile(file);
  }

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let attachment;

    const newPost = {
      title,
      author: user._id,
      body: content,
      tags,
      summary,
      isPublished: true,
    };

    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const { data: resFiles } = await axios.post("/upload/blogs", formData);
        attachment = resFiles[0].filename;
        setFile(null);
        newPost.image = attachment;
        if (blogId) {
          const { data: d } = await axios.patch(`/blog/${blogId}`, newPost);
          console.log(d);
          setMessage("Blog Updated Successfully!");
        } else {
          const { data } = await axios.post("/blog", newPost);
          console.log(newPost);
          console.log(data);
          setMessage("Blog Posted Successfully!");
          handleReset();
        }
        setLoading(false);
        setSnackbar(true);
      }
      if (!file && blogId) {
        const { data: d } = await axios.patch(`/blog/${blogId}`, newPost);
        setMessage("Blog Updated Successfully!");
        setLoading(false);
        setSnackbar(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleReset = () => {
    setTitle("");
    setContent("");
    setSummary("");
    setTags([]);
    setFile(null);
    document.getElementById("pic").value = "";
    const imageDiv = document.getElementById("imageDiv");
    if (imageDiv) {
      imageDiv.classList.add("hidden");
    }
  };

  return (
    <div className="w-3/4 mx-auto py-5 ">
      {snackbar && (
        <CommonSnackbar
          message={message}
          open={snackbar}
          setOpen={setSnackbar}
        />
      )}
      <h2 className="text-xl text-center mb-5">
        {blogId ? "Edit" : "Add"} Blog
      </h2>
      <form onSubmit={handlePostSubmit}>
        <label className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-5 w-full"
          type="text"
          placeholder="Title"
        />
        <label className="block text-gray-700 font-bold mb-2">
          Blog Summary
        </label>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="mb-5 w-full"
          placeholder="Write a summary of the blog"
        ></textarea>
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Feature Image
            </label>
            <input
              type="file"
              name="pic"
              id="pic"
              accept="image/*"
              onChange={handleChangeImage}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-5">
            <BlogTags tags={tags} setTags={setTags} />
          </div>
          <div id="imageDiv" className="hidden">
            <div className="w-52 h-52 bg-gray-300 rounded-md flex items-center justify-center mx-auto mb-5">
              <div className="" id="preview"></div>
            </div>
          </div>
        </div>

        <ReactQuill
          placeholder="Write something..."
          className="h-80"
          value={content}
          onChange={handleChange}
        />
        <div className="mt-14 flex justify-center gap-5">
          <button
            type="submit"
            onClick={handlePostSubmit}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2"
          >
            Submit
            {loading && <FaSpinner className="animate-spin" />}
          </button>
          <button
            onClick={handleReset}
            type="reset"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;
