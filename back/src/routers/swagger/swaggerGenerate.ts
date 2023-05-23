const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Desafio FullStack, M6 Sprint 2 - Wigny",
    description: "Este é um pequeno servidor para a conclusão do desafio :)",
    contact: {
      name: "LinkedIn - Wigny Oliveira",
      url: "https://www.linkedin.com/in/wigny-oliveira/",
      email: "wigny_36@hotmail.com",
    },
    version: "1.0.0",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./swagger.output.json";
const endpointsFiles = ["./src/app.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc)
  .then(() => {
    require("./src/app.ts");
  })
  .catch((err) => {
    console.error(err);
  });
