const axios = require('axios');



  axios.get('https://api.example.com/data')
    .then(response => {
      console.log('', response.data);
      // Do something with the data here
    })
    .catch(error => {
      console.log(error);
    });


    console.log("HEllo")
module.exports = {
  // dark theme starts
  // colors: {
  //   bgPrimary: {
  //     100: "#1D263F",
  //     200: "#1A2139",
  //     300: "#141C2D",
  //     400: "#0F1624",
  //     // Base color
  //     500: "#0E1527",
  //     600: "#070B14"
  //   },
  //   bgSecondary: {
  //     100: "#273B50",
  //     200: "#223447",
  //     300: "#1C2C3E",
  //     400: "#162534",
  //     // Base color
  //     500: "#182233",
  //     600: "#0C141C"
  //   },
  //   primary: {
  //     100: "#D7DDE5",
  //     200: "#BFC7D6",
  //     300: "#A8B0C8",
  //     400: "#9199B9",
  //     // Base color
  //     500: "#E2E8F0",
  //     600: "#6D7B8B"
  //   },
  //   secondary: {
  //     100: "#7B869E",
  //     200: "#6C7790",
  //     300: "#5D6783",
  //     400: "#4E586F",
  //     // Base color
  //     500: "#8A98AD",
  //     600: "#2F3A4C"
  //   },
  //   gray: {
  //     300: "#706e6e",
  //     400: "#524f4f",
  //     500: "#333131",
  //   },
  //   border:"#283241",
  // },
  // dark theme ends

  // coffee theme starts
  // only base color changed and border color
  // colors: {
  //   bgPrimary: {
  //     100: "#1D263F",
  //     200: "#1A2139",
  //     300: "#141C2D",
  //     400: "#0F1624",
  //     // Base color
  //     500: "#1D141C",
  //     600: "#070B14"
  //   },
  //   bgSecondary: {
  //     100: "#273B50",
  //     200: "#223447",
  //     300: "#1C2C3E",
  //     400: "#162534",
  //     // Base color
  //     500: "#20161F",
  //     600: "#0C141C"
  //   },
  //   primary: {
  //     100: "#D7DDE5",
  //     200: "#BFC7D6",
  //     300: "#A8B0C8",
  //     400: "#9199B9",
  //     // Base color
  //     500: "#756E63",
  //     600: "#6D7B8B"
  //   },
  //   secondary: {
  //     100: "#7B869E",
  //     200: "#6C7790",
  //     300: "#5D6783",
  //     400: "#4E586F",
  //     // Base color
  //     500: "#B3ADA4",
  //     600: "#2F3A4C"
  //   },
  //   gray: {
  //     300: "#706e6e",
  //     400: "#524f4f",
  //     500: "#333131",
  //   },
  //   border:"#3E2E3C",
  // },
  // coffee theme ends

  // night theme starts
  // colors: {
  //   bgPrimary: {
  //     100: "#3A4572",
  //     200: "#2A3257",
  //     300: "#1A1F3C",
  //     400: "#0B0C21",
  //     500: "#0E1526", // base color
  //     600: "#090C15",
  //   },
  //   bgSecondary: {
  //     100: "#4F5E7D",
  //     200: "#3A4766",
  //     300: "#26334F",
  //     400: "#111E38",
  //     500: "#0F172A", // base color
  //     600: "#0A0E19",
  //   },
  //   primary: {
  //     100: "#F0F3FB",
  //     200: "#D1DCEE",
  //     300: "#B2C0E1",
  //     400: "#93ADD5",
  //     500: "#B4C6EF", // base color
  //     600: "#8299C9",
  //   },
  //   secondary: {
  //     100: "#C2D2E8",
  //     200: "#A4B4D3",
  //     300: "#8696BE",
  //     400: "#6879AA",
  //     500: "#798FBF", // base color
  //     600: "#526A93",
  //   },
  //   gray: {
  //     300: "#706e6e",
  //     400: "#524f4f",
  //     500: "#333131",
  //   },
  //   border: "#1B294A",
  // },
  // night theme ends

  // cyberpunk theme starts
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
  // cyberpunk theme ends


//  getting data from database




};
