import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:8800/api/colors").then((response) => {
      console.log(response);
      setThemeColors(response.data.data);
    });
  }, []);

  return (
    <div className="p-3 md:p-5 ">
      <h1 className="text-xl font-bold">Theme </h1>
      <div className="flex flex-wrap gap-5 mt-5">
        {loading && (
          <div>
            <img
              src="https://ionic.io/blog/wp-content/uploads/2018/03/skeleton.gif"
              alt=""
            />
          </div>
        )}
        {themeColors.length > 0 &&
          !loading &&
          themeColors.map((color) => (
            <div
              key={color.name}
              className={`rounded-md bg-white shadow-2xl p-3 border-2 ${
                color.selected && "border-blue-600"
              } flex gap-5 items-center`}
            >
              <input checked={color.selected} readOnly type="radio" />
              <div className={`${color.selected && "gsd"}`}>{color.name}</div>
              <div>
                <div className="p-3 rounded-md shadow-lg flex gap-1">
                  {Object.values(color.colors.bgPrimary).map((code, i) => (
                    <div
                      key={i}
                      className={`w-5 h-10`}
                      style={{ backgroundColor: code }}
                    ></div>
                  ))}
                </div>
                <div className="p-3 rounded-md shadow-lg flex gap-1">
                  {Object.values(color.colors.primary).map((code, i) => (
                    <div
                      key={i}
                      className={`w-5 h-10`}
                      style={{ backgroundColor: code }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Theme;
