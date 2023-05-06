const { createThemes } = require('tw-colors');


/** @type {import('tailwindcss').Config} */

const theme = [
  {
      "colors": {
          "bgPrimary": {
              "100": "#FFF57D",
              "200": "#FFE94C",
              "300": "#FFDD1B",
              "400": "#FFD100",
              "500": "#FFEE00",
              "600": "#E6D000"
          },
          "bgSecondary": {
              "100": "#FFF78F",
              "200": "#FFF05C",
              "300": "#FFE929",
              "400": "#FFE200",
              "500": "#E6D600",
              "600": "#BFAB00"
          },
          "primary": {
              "100": "#7C7A3F",
              "200": "#61602F",
              "300": "#46451F",
              "400": "#2C2B0F",
              "500": "#333000",
              "600": "#1A1900"
          },
          "secondary": {
              "100": "#C4C177",
              "200": "#A4A453",
              "300": "#85822F",
              "400": "#65640B",
              "500": "#777000",
              "600": "#525100"
          },
          "gray": {
              "300": "#706e6e",
              "400": "#524f4f",
              "500": "#333131"
          },
          "border": "#E0D300",
          "particleColor": "#ADA528"
      },
      "_id": "6451e88ceaadb2dd3ffee79d",
      "name": "Cyberpunk",
      "selected": false,
      "__v": 0
  },
  {
      "colors": {
          "bgPrimary": {
              "100": "#1D263F",
              "200": "#1A2139",
              "300": "#141C2D",
              "400": "#0F1624",
              "500": "#0E1527",
              "600": "#070B14"
          },
          "bgSecondary": {
              "100": "#273B50",
              "200": "#223447",
              "300": "#1C2C3E",
              "400": "#162534",
              "500": "#182233",
              "600": "#0C141C"
          },
          "primary": {
              "100": "#D7DDE5",
              "200": "#BFC7D6",
              "300": "#A8B0C8",
              "400": "#9199B9",
              "500": "#E2E8F0",
              "600": "#6D7B8B"
          },
          "secondary": {
              "100": "#7B869E",
              "200": "#6C7790",
              "300": "#5D6783",
              "400": "#4E586F",
              "500": "#8A98AD",
              "600": "#2F3A4C"
          },
          "gray": {
              "300": "#706e6e",
              "400": "#524f4f",
              "500": "#333131"
          },
          "border": "#283241",
          "particleColor": "#fff"
      },
      "_id": "6451e9e7eaadb2dd3ffee79f",
      "name": "Dark",
      "selected": false,
      "__v": 0
  },
  {
      "colors": {
          "bgPrimary": {
              "100": "#3A4572",
              "200": "#2A3257",
              "300": "#1A1F3C",
              "400": "#0B0C21",
              "500": "#0E1526",
              "600": "#090C15"
          },
          "bgSecondary": {
              "100": "#4F5E7D",
              "200": "#3A4766",
              "300": "#26334F",
              "400": "#111E38",
              "500": "#0F172A",
              "600": "#0A0E19"
          },
          "primary": {
              "100": "#F0F3FB",
              "200": "#D1DCEE",
              "300": "#B2C0E1",
              "400": "#93ADD5",
              "500": "#B4C6EF",
              "600": "#8299C9"
          },
          "secondary": {
              "100": "#C2D2E8",
              "200": "#A4B4D3",
              "300": "#8696BE",
              "400": "#6879AA",
              "500": "#798FBF",
              "600": "#526A93"
          },
          "gray": {
              "300": "#706e6e",
              "400": "#524f4f",
              "500": "#333131"
          },
          "border": "#1B294A",
          "particleColor": "#1B294A"
      },
      "_id": "6451eabeeaadb2dd3ffee7a1",
      "name": "Night",
      "selected": false,
      "__v": 0
  },
  {
      "colors": {
          "bgPrimary": {
              "100": "#FFFFFF",
              "200": "#FDFDFD",
              "300": "#FAFAFA",
              "400": "#F7F7F7",
              "500": "#F2F2F2",
              "600": "#E7E7E7"
          },
          "bgSecondary": {
              "100": "#FFFFFF",
              "200": "#FEFEFE",
              "300": "#FCFCFC",
              "400": "#FAFAFA",
              "500": "#FFFFFF",
              "600": "#F7F7F7"
          },
          "primary": {
              "100": "#6B7280",
              "200": "#4B5563",
              "300": "#2D3748",
              "400": "#1D2D3E",
              "500": "#1F2937",
              "600": "#141E26"
          },
          "secondary": {
              "100": "#788DA5",
              "200": "#5E748F",
              "300": "#455978",
              "400": "#2B4062",
              "500": "#293546",
              "600": "#1C283A"
          },
          "gray": {
              "300": "#706e6e",
              "400": "#524f4f",
              "500": "#333131"
          },
          "border": "#DBE1E8"
      },
      "_id": "6455f8168e28866bcc00bd6a",
      "name": "Light",
      "selected": true,
      "__v": 0
  }
]

const plugins = [];

theme.forEach((t) => {
  plugins.push(createThemes({
    [t.name]: t.colors
  }));
});

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins,
}