import React from "react";

const themeColors = [
  {
    name: "Dark",
    selected: true,
    colors: {
      bgPrimary: {
        100: "#1D263F",
        200: "#1A2139",
        300: "#141C2D",
        400: "#0F1624",
        // Base color
        500: "#0E1527",
        600: "#070B14",
      },
      bgSecondary: {
        100: "#273B50",
        200: "#223447",
        300: "#1C2C3E",
        400: "#162534",
        // Base color
        500: "#182233",
        600: "#0C141C",
      },
      primary: {
        100: "#D7DDE5",
        200: "#BFC7D6",
        300: "#A8B0C8",
        400: "#9199B9",
        // Base color
        500: "#E2E8F0",
        600: "#6D7B8B",
      },
      secondary: {
        100: "#7B869E",
        200: "#6C7790",
        300: "#5D6783",
        400: "#4E586F",
        // Base color
        500: "#8A98AD",
        600: "#2F3A4C",
      },
      gray: {
        300: "#706e6e",
        400: "#524f4f",
        500: "#333131",
      },
      border: "#283241",
    },
  },
  {
    name: "Cyberpunk ",
    selected: true,
    colors: {
      bgPrimary: {
        100: "#FFF57D",
        200: "#FFE94C",
        300: "#FFDD1B",
        400: "#FFD100",
        500: "#FFEE00", // base color
        600: "#E6D000",
      },
      bgSecondary: {
        100: "#FFF78F",
        200: "#FFF05C",
        300: "#FFE929",
        400: "#FFE200",
        500: "#E6D600", // base color
        600: "#BFAB00",
      },
      primary: {
        100: "#7C7A3F",
        200: "#61602F",
        300: "#46451F",
        400: "#2C2B0F",
        500: "#333000", // base color
        600: "#1A1900",
      },
      secondary: {
        100: "#C4C177",
        200: "#A4A453",
        300: "#85822F",
        400: "#65640B",
        500: "#777000", // base color
        600: "#525100",
      },
      gray: {
        300: "#706e6e",
        400: "#524f4f",
        500: "#333131",
      },
      border: "#E0D300",
    },
  },
];

const Theme = () => {
  return (
    <div className="p-3 md:p-5 ">
      <h1 className="text-xl font-bold">Theme </h1>
      <div className="flex flex-wrap gap-5 mt-5">
        {themeColors.map((color) => (
          <div key={color.name} className="rounded bg-white shadow-lg p-3">
            {color.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theme;
