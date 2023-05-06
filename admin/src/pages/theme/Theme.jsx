import React, { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import CommonSnackbar from "../../components/CommonSnackbar";
import axios from "../../utils/axiosInstance";

// const themeColors = [
//   {
//     name: "Dark",
//     selected: true,
//     colors: {
//       bgPrimary: {
//         100: "#1D263F",
//         200: "#1A2139",
//         300: "#141C2D",
//         400: "#0F1624",
//         // Base color
//         500: "#0E1527",
//         600: "#070B14",
//       },
//       bgSecondary: {
//         100: "#273B50",
//         200: "#223447",
//         300: "#1C2C3E",
//         400: "#162534",
//         // Base color
//         500: "#182233",
//         600: "#0C141C",
//       },
//       primary: {
//         100: "#D7DDE5",
//         200: "#BFC7D6",
//         300: "#A8B0C8",
//         400: "#9199B9",
//         // Base color
//         500: "#E2E8F0",
//         600: "#6D7B8B",
//       },
//       secondary: {
//         100: "#7B869E",
//         200: "#6C7790",
//         300: "#5D6783",
//         400: "#4E586F",
//         // Base color
//         500: "#8A98AD",
//         600: "#2F3A4C",
//       },
//       gray: {
//         300: "#706e6e",
//         400: "#524f4f",
//         500: "#333131",
//       },
//       border: "#283241",
//     },
//   },
//   {
//     name: "Cyberpunk ",
//     selected: false,
//     colors: {
//       bgPrimary: {
//         100: "#FFF57D",
//         200: "#FFE94C",
//         300: "#FFDD1B",
//         400: "#FFD100",
//         500: "#FFEE00", // base color
//         600: "#E6D000",
//       },
//       bgSecondary: {
//         100: "#FFF78F",
//         200: "#FFF05C",
//         300: "#FFE929",
//         400: "#FFE200",
//         500: "#E6D600", // base color
//         600: "#BFAB00",
//       },
//       primary: {
//         100: "#7C7A3F",
//         200: "#61602F",
//         300: "#46451F",
//         400: "#2C2B0F",
//         500: "#333000", // base color
//         600: "#1A1900",
//       },
//       secondary: {
//         100: "#C4C177",
//         200: "#A4A453",
//         300: "#85822F",
//         400: "#65640B",
//         500: "#777000", // base color
//         600: "#525100",
//       },
//       gray: {
//         300: "#706e6e",
//         400: "#524f4f",
//         500: "#333131",
//       },
//       border: "#E0D300",
//     },
//   },
// ];

const Theme = () => {
  const [themeColors, setThemeColors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [changing, setChanging] = useState(false);
  const [error, setError] = useState("");

  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");

  useEffect(() => {
    setLoading(true);
    axios
      .get("/colors")
      .then((response) => {
        setThemeColors(response.data.data);
      })
      .catch((err) => {
        setError("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleChangeTheme = (id) => {
    setChanging(true);
    axios
      .post(`/colors/selected/${id}`)
      .then((response) => {
        if (response?.status === 200) {
          setThemeColors((prev) =>
            prev.map((color) => {
              return { ...color, selected: color._id === id ? true : false };
            })
          );
          setMessage("Theme changed successfully!");
          setSeverity("success");
          setOpen(true);
        }
      })
      .catch((err) => {
        setMessage("Something went wrong!");
        setSeverity("error");
        setOpen(true);
      })
      .finally(() => {
        setChanging(false);
      });
  };

  return (
    <>
      {open && (
        <CommonSnackbar
          message={message}
          open={open}
          setOpen={setOpen}
          severity={severity}
        />
      )}
      <div className="p-3 md:p-5 ">
        <div className="flex gap-3 items-center">
          <h1 className="text-xl font-bold relative z-10">Theme</h1>
          <div className={`${changing ? "block" : "hidden"}`}>
            <ImSpinner2 className="animate-spin" />
          </div>
        </div>
        <div className="flex flex-wrap gap-5 mt-5">
          {loading && (
            <div className="flex flex-wrap -mt-[50px]">
              {[...new Array(3)].map((_, i) => (
                <img
                  key={i}
                  className="md:w-[350px] h-[230px] w-full"
                  src="https://ionic.io/blog/wp-content/uploads/2018/03/skeleton.gif"
                  alt=""
                />
              ))}
            </div>
          )}
          {themeColors.length > 0 &&
            !loading &&
            themeColors.map((color) => (
              <div
                key={color.name}
                onClick={() => handleChangeTheme(color._id)}
                className={`md:w-[350px] w-full rounded-md ${
                  color?.selected
                    ? "bg-gray-200 border-blue-600"
                    : "bg-gray-50 hover:bg-gray-200 hover:border-blue-600"
                } shadow-2xl p-3 border-2 flex gap-5 items-center justify-between cursor-pointer ${
                  changing && "cursor-not-allowed duration-300"
                }`}
              >
                <input
                  className="cursor-pointer"
                  checked={color?.selected}
                  disabled={loading}
                  readOnly
                  type="radio"
                />
                <div
                  className={`${
                    color.selected ? "text-gray-900" : "text-gray-500"
                  } font-bold`}
                >
                  {color.name}
                </div>
                <div className="w-max">
                  <div className="w-full p-3 rounded shadow-lg flex gap-1 bg-white mb-2">
                    {Object.values(color.colors.bgPrimary).map((code, i) => (
                      <div
                        key={i}
                        className={`w-5 h-10 `}
                        style={{ backgroundColor: code }}
                      ></div>
                    ))}
                  </div>
                  <div className="w-full p-3 rounded shadow-lg flex gap-1 bg-white">
                    {Object.values(color.colors.primary).map((code, i) => (
                      <div
                        key={i}
                        className={`w-5 h-10 `}
                        style={{ backgroundColor: code }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          {error && <p className="text-red-400 text-lg ">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Theme;
