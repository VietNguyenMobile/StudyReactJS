// import express from "express";
const express = require("express");
// const {
//   getHomePage,
//   getCRUD,
//   postCRUD,
//   displayGetCRUD,
// } = require("../controllers/homeController");

import {
  getHomePage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
} from "../controllers/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/crud", getCRUD);
  router.post("/post-crud", postCRUD);
  router.get("/get-crud", displayGetCRUD);
  return app.use("/", router);
};

module.exports = initWebRoutes;
