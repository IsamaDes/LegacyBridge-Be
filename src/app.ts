import express from "express";
import v1Customers from "./routes/v1/customers";
import v2Customers from "./routes/v2/customers";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.send('ok'));
app.use(errorHandler);

export default app;