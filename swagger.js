const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = [
  "./src/modules/produtos/routes.js",
];
const doc = {
  info: {
    version: "1.0.0",
    title: "Service Products",
    description: "Microsserviço do Time Products.",
  },
  host: "localhost:3022",
  tags: [],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
      bearerFormat: 'JWT',
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
