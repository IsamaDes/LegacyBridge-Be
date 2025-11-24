import express from "express";
import v1Customers from "./routes/v1/customers";
import v2Customers from "./routes/v2/customers";
import errorHandler from "./middlewares/errorHandler.js";


const app = express();
app.use(express.json());

if (process.env.NODE_ENV !== "test") {
//   app.use("/api-docs", post-man);
}

app.get('/health', (req, res) => res.send('ok'));
app.use('/v1', v1Customers);
app.use('/v2', v2Customers)
app.use(errorHandler);

export default app;