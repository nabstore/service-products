const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = [
  "./src/modules/produtos/routes.js",
  "./src/modules/usuarios/routes.js",
  "./src/modules/compras/routes.js",
  "./src/modules/cartao/routes.js",
  "./src/modules/enderecos/routes.js",
  "./src/modules/entregas/routes.js",
];
const doc = {
  info: {
    version: "1.0.0",
    title: "Nabstore Backend",
    description: "Backend em monolito da loja Nabstore.",
  },
  host: "localhost:3020",
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
