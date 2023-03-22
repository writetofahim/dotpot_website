import React, { useContext, useEffect, useState } from "react";
import axios from "../../utils/axiosInstance";
import { FaSpinner } from "react-icons/fa"
import { useSearchParams } from "react-router-dom";
import CommonSnackbar from "../../components/ComonSnackbar";
import WorkTechnology from "./WorkTechnology";

const AddClientsReview = () => {

  const [title, setTitle] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [snackbar, setSnackbar] = useState(false);

  const [searchParams] = useSearchParams();
  const workId = searchParams.get("id");


  useEffect(() => {
    if (workId) {
      axios.get(`/work/${workId}`)
        .then(res => {
          console.log(res.data)
          const { image: img, title, technologies } = res.data.work
          setTitle(title);
          setTechnologies(technologies);

          const preview = document.getElementById("preview");
          const imageDiv = document.getElementById("imageDiv");
          const image = new Image();
          image.src = img.includes("https://") ? img : `${import.meta.env.REACT_APP_SERVER_PATH}/${img}`
          imageDiv.classList.remove("hidden");
          preview.innerHTML = "";
          preview.appendChild(image);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [])

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

    const newWork = {
      title,
      technologies,
    }

    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const { data: resFiles } = await axios.post("/upload/blogs", formData);
        attachment = resFiles[0].filename;
        setFile(null);
        newWork.image = attachment;
        if (workId) {
          const { data: d } = await axios.patch(`/work/${workId}`, newWork);
          console.log(d)
          setMessage("Work updated Successfully!")
        } else {
          const { data } = await axios.post("/work", newWork);
          console.log(newWork);
          console.log(data);
          setMessage("Work Posted Successfully!")
          handleReset();
        }
        setLoading(false);
        setSnackbar(true);

      }
      if (!file && workId) {
        const { data: d } = await axios.patch(`/work/${workId}`, newWork);
        setMessage("Work Updated Successfully!")
        setLoading(false);
        setSnackbar(true);
      }

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const handleReset = () => {
    setTitle("")
    setTechnologies([]);
    setFile(null);
    document.getElementById("pic").value = "";
    const imageDiv = document.getElementById("imageDiv");
    if (imageDiv) {
      imageDiv.classList.add("hidden");
    }
  }


  return (
    <div className="w-3/4 mx-auto py-5 ">
      {snackbar && <CommonSnackbar message={message} open={snackbar} setOpen={setSnackbar} />}
      <h2 className="text-xl text-center mb-5">{workId ? "Edit" : "Add"} Work</h2>
      <form onSubmit={handlePostSubmit}>
        <label className="block text-gray-700 font-bold mb-2">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="mb-5 w-full" type="text" placeholder="Title" required />
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
            <WorkTechnology technology={technologies} setTechnology={setTechnologies} />
          </div>
          <div id="imageDiv" className="hidden">
            <div className="w-52 h-52 bg-gray-300 rounded-md flex items-center justify-center mx-auto mb-5">
              <div className="" id="preview"></div>
            </div>
          </div>
        </div>

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
        </div>
      </form>
    </div>
  );
};

export default AddClientsReview;
