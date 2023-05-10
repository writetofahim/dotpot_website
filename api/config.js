const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJSDocs = YAML.load("api.yaml");

const options = {
  customCssUrl: "./custom.css",
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
