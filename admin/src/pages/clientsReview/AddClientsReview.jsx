import React, { useContext, useEffect, useState } from "react";
import axios from "../../utils/axiosInstance";
import { FaSpinner } from "react-icons/fa"
import { useSearchParams } from "react-router-dom";
import CommonSnackbar from "../../components/ComonSnackbar";

const AddClientsReview = () => {

  const [clientName, setClientName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [snackbar, setSnackbar] = useState(false);

  const [searchParams] = useSearchParams();
  const reviewId = searchParams.get("id");


  useEffect(() => {
    if (reviewId) {
      axios.get(`/client_review/${reviewId}`)
        .then(res => {
          const { client_name, client_image, company_name, position, review_text } = res.data
          setClientName(client_name)
          setCompanyName(company_name)
          setPosition(position)
          setReviewText(review_text)



          const preview = document.getElementById("preview");
          const imageDiv = document.getElementById("imageDiv");
          const image = new Image();
          image.src = client_image.includes("https://") ? client_image : `${import.meta.env.REACT_APP_SERVER_PATH}/${client_image}`
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

    const newClient_review = {
      client_name: clientName,
      company_name: companyName,
      position: position,
      review_text: reviewText
    }

    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const { data: resFiles } = await axios.post("/upload/blogs", formData);
        attachment = resFiles[0].filename;
        setFile(null);
        newClient_review.client_image = attachment;
        if (reviewId) {
          const { data: d } = await axios.put(`/client_review/${reviewId}`, newClient_review);
          console.log(d)
          setMessage("client_review updated Successfully!")
        } else {
          const { data } = await axios.post("/client_review", newClient_review);
          console.log(newClient_review);
          console.log(data);
          setMessage("client_review Posted Successfully!")
          handleReset();
        }
        setLoading(false);
        setSnackbar(true);

      }
      if (!file && reviewId) {
        const { data: d } = await axios.put(`/client_review/${reviewId}`, newClient_review);
        setMessage("client_review Updated Successfully!")
        setLoading(false);
        setSnackbar(true);
      }

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const handleReset = () => {
    setClientName("")
    setCompanyName("")
    setReviewText("")
    setPosition("")
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
      <h2 className="text-xl text-center mb-5">{reviewId ? "Edit" : "Add"} Client Review</h2>
      <form onSubmit={handlePostSubmit}>
        <label className="block text-gray-700 font-bold mb-2">Client Name</label>
        <input value={clientName} onChange={(e) => setClientName(e.target.value)} className="mb-5 w-full" type="text" placeholder={clientName} required />
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Client Image
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
            <div className="w-52 h-52 bg-gray-300 rounded-md flex items-center justify-center mx-auto mb-5">
              <div className="" id="preview"></div>
            </div>
          </div>
          <label className="block text-gray-700 font-bold mb-2">Company Name</label>
          <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="mb-5 w-full" type="text" placeholder="Company Name" required />
          <label className="block text-gray-700 font-bold mb-2">Designation</label>
          <input value={position} onChange={(e) => setPosition(e.target.value)} className="mb-5 w-full" type="text" placeholder="Designation" required />
          <label className="block text-gray-700 font-bold mb-2">Review Text</label>
          <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} className="mb-5 w-full" type="text" placeholder="Review Text" required />
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
