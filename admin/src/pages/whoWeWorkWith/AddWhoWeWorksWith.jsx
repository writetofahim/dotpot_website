import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import CommonSnackbar from "../../components/ComonSnackbar";
import axios from "../../utils/axiosInstance";

const AddWhoWeWorksWith = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [link, setLink] = useState("");

  const [message, setMessage] = useState("");
  const [snackbar, setSnackbar] = useState(false);

  const [searchParams] = useSearchParams();
  const whoWeWorksWithId = searchParams.get("id");

  useEffect(() => {
    if (whoWeWorksWithId) {
      axios
        .get(`/who_we_work_with/${whoWeWorksWithId}`)
        .then((res) => {
          setTitle(res.data.data.title);
          setIcon(res.data.data.icon);
          setLink(res.data.data.link);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [whoWeWorksWithId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (whoWeWorksWithId) {
        await axios.put(`/who_we_work_with/${whoWeWorksWithId}`, {
          title,
          icon,
          link
        });
        setMessage("Update Successful!");
        setSnackbar(true);
      } else {
        await axios.post("/who_we_work_with", {
          title,
          description,
          icon,
          link
        });
        setMessage("Add Successful!");
        setSnackbar(true);
        setTitle("");
        setIcon("");
      }
    } catch (err) {
      alert("Error creating industry.");
    }
    setIsLoading(false);
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
      <h1 className="text-center my-3">{whoWeWorksWithId ? "Update":"Add"} Who We Works With</h1>
      <form onSubmit={handleSubmit} className="p-2">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        {/* <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter description"
            rows="8"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div> */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="icon">
            Icon
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter icon"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="link">
            Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700
        text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2"
            type="submit"
            disabled={isLoading}
          >
            {isLoading
              ? whoWeWorksWithId
                ? "Updating..."
                : "Adding..."
              : whoWeWorksWithId
              ? "Update"
              : "Add"}
            {isLoading && <FaSpinner className="animate-spin" />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWhoWeWorksWith;
