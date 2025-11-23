
import swaggerJSDoc from "swagger-jsdoc"

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LegacyBridge Api",
      version: "1.0.0",
      description: "API documentation for LegacyBridge app",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local dev server",
      },
      {
        url: "", 
        description: "Production server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: [
     "./src/routes/*.ts",
    "./src/controllers/*.ts",
    "./build/routes/*.js",
    "./build/controllers/*.js",
    "./dist/routes/*.js",
    "./dist/controllers/*.js",
  ],
};

const swaggerDefinition = swaggerJSDoc(options);
export default  swaggerDefinition;