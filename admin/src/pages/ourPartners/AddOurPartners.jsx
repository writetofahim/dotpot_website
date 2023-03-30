import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import CommonSnackbar from "../../components/ComonSnackbar";
import axios from "../../utils/axiosInstance";

const AddOurPartners = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [file, setFile] = useState(null);

  const [message, setMessage] = useState("");
  const [snackbar, setSnackbar] = useState(false);

  const [error, setError] = useState("")

  const [searchParams] = useSearchParams();
  const ourPartnerId = searchParams.get("id");

  useEffect(() => {
    if (ourPartnerId) {
      axios
        .get(`/our_partner/${ourPartnerId}`)
        .then((res) => {
          setCompanyName(res.data.data.companyName);
          setWebsiteUrl(res.data.data.websiteUrl);
          const img =res.data.data.logo
          const preview = document.getElementById("preview");
          const imageDiv = document.getElementById("imageDiv");
          const image = new Image();
          image.src = img.includes("https://") ? img : `${import.meta.env.REACT_APP_SERVER_PATH}/${img}`
          imageDiv.classList.remove("hidden");
          preview.innerHTML = "";
          preview.appendChild(image);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [ourPartnerId]);


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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("")

    const newCompany = {
      companyName,
      websiteUrl
    }
    try {
      if(file){
        const formData = new FormData();
        formData.append("file", file);
        const { data: resFiles } = await axios.post("/upload/blogs", formData);
        newCompany.logo = resFiles[0].filename;
        setFile(null);
      }
      if (ourPartnerId) {
        await axios.put(`/our_partner/${ourPartnerId}`, newCompany);
        setMessage("Update Successful!");
        setSnackbar(true);
      } else {
        await axios.post("/our_partner", newCompany);
        setMessage("Add Successful!");
        setSnackbar(true);
        setCompanyName("");
        setWebsiteUrl("");
      }
    } catch (err) {
      console.log(err)
      if(err.response?.data?.errors?.msg){
        setError(err.response?.data?.errors?.msg);
      } else{
        setError(err.message);
      }
      
    } finally{
      setIsLoading(false);
    }
  };



  return (
    <div className="max-w-lg mx-auto">
      {snackbar && (
        <CommonSnackbar
          message={message}
          open={snackbar}
          setOpen={setSnackbar}
        />
      )}
      <h1 className="text-center my-3">{ourPartnerId ? "Update":"Add"} Our partner</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
          Company Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Website URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter company url"
            type="text"
            required
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
          />
        </div>
       <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Upload Company Logo
            </label>
            <input
              type="file"
              name="pic"
              id="pic"
              accept="image/*"
              onChange={handleChangeImage}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required={!ourPartnerId}
            />
        </div>

        <div id="imageDiv" className="hidden">
            <div className="w-52 h-52 bg-gray-300 rounded-md flex items-center justify-center mx-auto mb-5">
              <div className="" id="preview"></div>
            </div>
        </div>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700
        text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2"
            type="submit"
            disabled={isLoading}
          >
            {isLoading
              ? ourPartnerId
                ? "Updating..."
                : "Adding..."
              : ourPartnerId
              ? "Update"
              : "Add"}
            {isLoading && <FaSpinner className="animate-spin" />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOurPartners;
