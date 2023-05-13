import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

const CompanyInfo = () => {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({});

  const [primaryLogo, setPrimaryLogo] = useState(null);
  const [secondaryLogo, setSecondaryLogo] = useState(null);

  // Data Fetching
  useEffect(() => {
    axios
      .get("/info")
      .then((response) => {
        setData(response.data[0]);
        postLogger({ level: "info", message: response });
      })
      .catch((error) => {
        console.error(error);
        postLogger({ level: "error", message: error });
      });
  }, []);

  // upload file to server
  const handleUploadFile = async (f) => {
    const fileFormData = new FormData();
    fileFormData.append("file", f);
    const { data: resFiles } = await axios.post("/upload/blogs", fileFormData);
    return resFiles[0].filename;
  };

  // console.log(data);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (secondaryLogo) {
      formData.secondary_logo = await handleUploadFile(secondaryLogo);
      setSecondaryLogo(null);
    }
    if (primaryLogo) {
      formData.primary_logo = await handleUploadFile(primaryLogo);
      setPrimaryLogo(null);
    }

    console.log(formData);
    axios
      .put(`/info/${data._id}`, formData)
      .then((response) => {
        console.log(response);
        postLogger({ level: "info", message: response });
      })
      .catch((error) => {
        console.error(error);
        postLogger({ level: "error", message: error });
      });
  };

  return (
    <div className="w-full">
      <h1 className="text-4xl text-primary-400 text-center font-bold">
        Company Info
      </h1>
      <hr className="my-5" />

      <div className="w-full flex justify-center">
        {data && (
          <form className="w-4/5 border rounded-xl p-5" onSubmit={handleSubmit}>
            <div className="w-full border-none mt-3">
              <label htmlFor="name" className="">
                Company Name:
              </label>
              <input
                type="text"
                name="name"
                className="w-full border-b mt-2"
                defaultValue={data.name}
                onChange={handleInputChange}
              />
            </div>
            <LogoInput
              logo={`${import.meta.env.REACT_APP_SERVER_PATH}/${
                data.primary_logo
              }`}
              setSelectedFile={setPrimaryLogo}
              title={"Primary logo"}
            />
            <LogoInput
              logo={`${import.meta.env.REACT_APP_SERVER_PATH}/${
                data.secondary_logo
              }`}
              setSelectedFile={setSecondaryLogo}
              title={"Secondary logo"}
            />
            <div className="w-full border-none mt-3">
              <label htmlFor="slogan" className="">
                Company Slogan:
              </label>
              <input
                type="text"
                name="slogan"
                className="w-full border-b mt-2"
                onChange={handleInputChange}
                defaultValue={data.slogan}
              />
            </div>
            <div className="w-full border-none mt-3">
              <label htmlFor="address" className="">
                Company Address:
              </label>
              <input
                type="text"
                name="address"
                className="w-full border-b mt-2"
                onChange={handleInputChange}
                defaultValue={data.address}
              />
            </div>
            <div className="w-full border-none mt-3">
              <label htmlFor="email" className="">
                Company Email:
              </label>
              {data.email.map((email, index) => (
                <input
                  key={index}
                  type="email"
                  name="email"
                  className="w-full border-b mt-2"
                  onChange={handleInputChange}
                  defaultValue={email}
                />
              ))}
            </div>
            <div className="w-full border-none mt-3">
              <label htmlFor="phone" className="">
                Company Phone:
              </label>
              {data.phone.map((phone, index) => (
                <input
                  key={index}
                  type="text"
                  name="phone"
                  className="w-full border-b mt-2"
                  onChange={handleInputChange}
                  defaultValue={phone}
                />
              ))}
            </div>
            <div className="w-full border-none mt-3">
              <label htmlFor="info" className="">
                Company Info:
              </label>
              <textarea
                type="text"
                name="other_info"
                className="w-full border-b mt-2"
                onChange={handleInputChange}
                defaultValue={data.other_info}
              />
            </div>
            <div className="w-full  mt-3 flex justify-center">
              <button
                type="submit"
                className="rounded-lg  p-3 bg-green-500 text-white "
              >
                Update
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CompanyInfo;

const LogoInput = ({ title, logo, setSelectedFile }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  function handleImageChange(event) {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();

    reader.onload = function (event) {
      setSelectedImage(event.target.result);
    };

    reader.readAsDataURL(file);
  }
  return (
    <div className="w-full border-none mt-3">
      <label htmlFor="name" className="">
        {title}:
      </label>
      <div className="md:flex justify-between gap-5">
        <input
          type="file"
          name="primary_logo"
          className="md:w-1/2 w-full border-b mt-2"
          onChange={handleImageChange}
        />
        <div className="md:w-1/2 w-full">
          {selectedImage && (
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={() => {
                  setSelectedImage(null);
                  setSelectedFile(null);
                }}
                className="text-xl text-left cursor-pointer"
              />
            </div>
          )}
          {selectedImage && <img src={selectedImage} alt="Selected" />}
          {!selectedImage && <img src={logo} alt="Primary logo" />}
        </div>
      </div>
    </div>
  );
};
