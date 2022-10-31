// import express from "express";
const express = require("express");
// import bodyParser from "body-parser";
const bodyParser = require("body-parser");
// import viewEngine from "./config/viewEngine";
const viewEngine = require("./config/viewEngine");
// import initWebRoutes from "./route/web";
const initWebRoutes = require("./route/web");
const connectDB = require("./config/connectDB");

require("dotenv").config();

const app = express();

// config app
// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoutes(app);

connectDB();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Backend Node JS is Running on the port: ", port);
});
