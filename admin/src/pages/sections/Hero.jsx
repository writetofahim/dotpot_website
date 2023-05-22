import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

const Hero = () => {
  const [file, setFile] = useState(null);
  const [heroData, setHeroData] = useState([]);
  const [formTitle, setFormTitle] = useState("Form");
  const [formButton, setFormButton] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: "",
    button_link: "",
    button_text: "",
  });
  // const [image, setImage] = useState(null);

  // Fetching Hero Data
  useEffect(() => {
    axios
      .get("/hero")
      .then((response) => {
        setHeroData(response.data);
        postLogger({ level: "info", message: response });
      })
      .catch((error) => {
        console.error(error);
        postLogger({ level: "error", message: error });
      });
  }, []);

  // Update form data when input values change
  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // handle change image
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
    console.log(file);
  }
  // Set input fields data while clicking the edit icon
  const handleClick = (hero) => {
    document.getElementById("Form").classList.remove("hidden");
    setFormTitle("Edit Form");
    setFormButton("Update");
    setFormData(hero);
    document.getElementById("pic").value = "";
    document.getElementById("preview").innerHTML = "";
  };

  // Add new Hero
  const handleAdd = () => {
    document.getElementById("Form").classList.remove("hidden");
    setFormData({
      title: "",
      subtitle: "",
      description: "",
      image: "",
      button_link: "",
      button_text: "",
    });
    setFormTitle("Add Form");
    setFormButton("Save");
  };

  // Handle Delete button
  const handleDelete = async (hero) => {
    const shouldDelete = window.confirm("Are you sure you want to delete?");
    if (shouldDelete) {
      try {
        const response = await axios.delete(`/hero/${hero._id}`);
        if (response.status == 200) {
          const newArray = heroData.filter((obj) => obj._id !== hero._id);
          setHeroData(newArray);
        }
        postLogger({ level: "info", message: response });
      } catch (error) {
        console.log(error);
        postLogger({ level: "error", message: error });
      }
    }
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    // const newImage = (formData.image = image);
    setFormData(newImage);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // form submission logic
    if (formButton == "Save") {
      // Add new Hero
      let attachment;
      let image;
      try {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);

          const { data: resFiles } = await axios.post(
            "/upload/blogs",
            formData
          );

          attachment = resFiles[0].filename;
          setFile(null);
          image = attachment;
          postLogger({ level: "info", message: resFiles });
        }
      } catch (err) {
        postLogger({ level: "error", message: err });
      }
      axios
        .post(`/hero`, {
          title: document.getElementById("title").value,
          subtitle: document.getElementById("subtitle").value,
          description: document.getElementById("description").value,
          // image: document.getElementById("image").value,
          image: image,
          button_link: document.getElementById("button_link").value,
          button_text: document.getElementById("button_text").value,
        })
        .then((response) => {
          console.log(response);
          postLogger({ level: "info", message: response });
        })
        .catch((error) => {
          console.error(error);
          postLogger({ level: "error", message: error });
        });
      setFormData({
        title: "",
        subtitle: "",
        description: "",
        image: "",
        button_link: "",
        button_text: "",
      });
      console.log(formData);
      // document.getElementById("Form").classList.add("hidden");
    } else {
      // update hero
      let attachment;
      let image;
      try {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);

          const { data: resFiles } = await axios.post(
            "/upload/blogs",
            formData
          );

          attachment = resFiles[0].filename;
          setFile(null);
          image = attachment;
          console.log("uploaded image", image);
          postLogger({ level: "info", message: resFiles });
        }
      } catch {}
      axios
        .put(`/hero/${formData._id}`, {
          title: document.getElementById("title").value,
          subtitle: document.getElementById("subtitle").value,
          description: document.getElementById("description").value,
          // image: document.getElementById("image").value,
          image: image,
          button_link: document.getElementById("button_link").value,
          button_text: document.getElementById("button_text").value,
        })
        .then((response) => {
          console.log(response);
          postLogger({ level: "info", message: response });
        })
        .catch((error) => {
          console.error(error);
          postLogger({ level: "error", message: error });
        });
      setFormData({
        title: "",
        subtitle: "",
        description: "",
        image: "",
        button_link: "",
        button_text: "",
      });
      document.getElementById("Form").classList.add("hidden");
    }
  };

  return (
    <div className="w-full min-h-full">
      <h1 className="text-center font-bold text-4xl text-primary-400 shadow">
        Edit Hero Section
      </h1>

      {/* hero sections */}
      <div className="container w-full flex justify-center">
        {/* heros */}
        <div className="flex flex-wrap justify-center overflow-hidden border-b h-52">
          {heroData.map((hero, index) => (
            <div
              key={index}
              className="border rounded-md w-80 h-20 bg-slate-200 m-3 p-3 hover:scale-105 hover:shadow-xl transition-all relative items-center flex justify-center"
            >
              <img
                className="opacity-50 absolute inset-0 w-full h-full object-cover"
                src={`${import.meta.env.REACT_APP_SERVER_PATH}/${hero.image}`}
                alt={hero.title}
              />
              <h2 className="text-lg w-full font-bold z-10 relative">
                {hero.title}
              </h2>
              <div className="flex gap-2 absolute top-1 right-1">
                <button onClick={() => handleClick(hero)}>
                  <FaEdit className="hover:scale-125 transition-all duration-200 ease-in-out" />
                </button>
                <button onClick={() => handleDelete(hero)}>
                  <MdDeleteForever className="hover:scale-125 transition-all duration-200 ease-in-out hover:text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* btn add */}
        <div className="py-3">
          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
          >
            Add
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto my-10 hidden"
        id="Form"
      >
        <h2 id="formTitle" className="text-xl font-semibold text-center mb-4">
          {formTitle}
        </h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subtitle"
            className="block text-gray-700 font-bold mb-2"
          >
            Subtitle
          </label>
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="h-28 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mt-4"></div>
        {/* img div */}
        <div id="imageDiv" className=" border">
          <div className="rounded-md flex items-center justify-center gap-3 mx-auto  m-5">
            <div
              className="border w-40 h-40 overflow-hidden"
              id="preview"
            ></div>
            <div className="border">
              <img
                className="  w-40 h-40 overflow-hidden"
                src={`${import.meta.env.REACT_APP_SERVER_PATH}/${
                  formData.image
                }`}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>

        {/* img input */}
        <input
          type="file"
          name="pic"
          id="pic"
          accept="image/*"
          onChange={handleChangeImage}
          className="shadow my-5 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <div className="mb-4">
          <label
            htmlFor="button_link"
            className="block text-gray-700 font-bold mb-2"
          >
            button_link
          </label>
          <input
            name="button_link"
            id="button_link"
            value={formData.button_link}
            onChange={handleChange}
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
        </div>
        <div className="mb-4">
          <label
            htmlFor="button_text"
            className="block text-gray-700 font-bold mb-2"
          >
            button_text
          </label>
          <input
            name="button_text"
            id="button_text"
            value={formData.button_text}
            onChange={handleChange}
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {formButton}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
