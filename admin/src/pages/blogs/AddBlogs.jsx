import React, { useContext, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import "react-quill/dist/quill.snow.css";
import { useSearchParams } from "react-router-dom";
import CommonSnackbar from "../../components/ComonSnackbar";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";
import BlogTags from "./BlogTags";
import Editor from "./Editor";
import UploadAudio from "./UploadAudio";

const INITIAL_VALUE = {
  title: "",
  slug: "",
  author: "",
  body: "",
  tags: [],
  categories: [],
  image: "",
  audio: "",
  isPublish: true,
};

const AddBlogs = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [summary, setSummary] = useState("");

  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);

  const [uploadedAudio, setUploadedAudio] = useState(null);

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
          console.log(res.data);
          setTitle(res.data.title);
          setBody(res.data.body);
          setTags(res.data.tags);
          setSummary(res.data.summary);

          setUploadedAudio(res.data.audio);

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

  const createSlug = (title) => {
    const trimmedTitle = title.trim();
    const slug = trimmedTitle
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/[^\w-]+/g, ""); // Remove non-word characters (except dashes)
    return slug;
  };

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
    setImageFile(file);
  }

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Handle submit called");

    const newPost = {
      title,
      slug: createSlug(title),
      author: user._id,
      body: body,
      tags,
      summary,
      isPublished: true,
    };

    try {
      if (imageFile) {
        console.log("Uploading image");
        const formData = new FormData();
        formData.append("file", imageFile);
        const { data: resFiles } = await axios.post("/upload/blogs", formData);
        newPost.image = resFiles[0].filename;
        setImageFile(null);
      }
      if (audioFile) {
        console.log("Uploading audio...");
        const audioFormData = new FormData();
        audioFormData.append("audioFile", audioFile);
        const { data: resFiles } = await axios.post(
          "/upload/audio",
          audioFormData
        );
        newPost.audio = resFiles[0].filename;
        setAudioFile(null);
      }
      console.log(newPost);
      if (blogId) {
        console.log("uploading full blog");
        const response = await axios.patch(`/blog/${blogId}`, newPost);
        console.log(response);
        setMessage("Blog Updated Successfully!");
        setSnackbar(true);
        setLoading(false);
      } else {
        console.log("adding full blog");
        const response = await axios.post("/blog", newPost);
        console.log(response);
        setMessage("Blog Posted Successfully!");
        setSnackbar(true);
        handleReset();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally called");
      setLoading(false);
    }
  };

  const handleReset = () => {
    setTitle("");
    setBody("");
    setSummary("");
    setTags([]);
    setImageFile(null);
    setAudioFile(null);
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
          required
        />
        <label className="block text-gray-700 font-bold mb-2">
          Blog Summary
        </label>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="mb-5 w-full"
          placeholder="Write a summary of the blog"
          required
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
          <div id="imageDiv" className="hidden">
            <div className="w-full bg-gray-100 rounded-md flex items-center justify-center mx-auto mb-5">
              <div className="" id="preview"></div>
            </div>
          </div>
          <div className="mb-5">
            <BlogTags
              tags={tags}
              setTags={setTags}
              isEditMode={blogId ? true : false}
            />
          </div>
          <UploadAudio
            selectedFile={audioFile}
            setSelectedFile={setAudioFile}
            prevAudio={
              uploadedAudio &&
              `${import.meta.env.REACT_APP_SERVER_PATH}/${uploadedAudio}`
            }
          />
        </div>
        <Editor
          initialValue={body}
          setValue={setBody}
          isEditMode={blogId ? true : false}
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
