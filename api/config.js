const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJSDocs = YAML.load("api.yaml");

const options = {
  customCssUrl: "/custom.css",
  customSiteTitle: "Dotpot iT | Api Docs",
  customfavIcon: "https://www.dotpotit.com/assets/icon-8664960d.png",
  customJsStr: [
    'console.log("Hello World")',
    `
      var x = 1;
      console.log(x);
      `,
  ],
};
//   module.exports = { swaggerServe: swaggerUI.serve, swaggerSetup: swaggerUI.setup(swaggerJSDocs) };

module.exports = {
  swaggerServe: swaggerUI.serve,
  swaggerSetup: swaggerUI.setup(swaggerJSDocs, options),
};
