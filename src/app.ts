import express from "express";
import v1Customers from "./routes/v1/customers";
import v2Customers from "./routes/v2/customers";
import errorHandler from "./middlewares/errorHandler.js";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerSpec from "./config/swagger";
import swaggerUi from 'swagger-ui-express';

const app = express();
app.use(express.json());

if (process.env.NODE_ENV !== "test") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

app.get('/health', (req, res) => res.send('ok'));
app.use(errorHandler);

export default app;