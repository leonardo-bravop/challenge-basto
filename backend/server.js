const express = require("express");
require("dotenv").config();
const volleyball = require("volleyball");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(volleyball);
app.use(express.json());

app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.send(err.message);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Basto server running on port:${port}`);
});
