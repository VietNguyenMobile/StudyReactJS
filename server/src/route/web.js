// import express from "express";
const express = require("express");
const {
  getHomePage,
  getCRUD,
  postCRUD,
} = require("../controllers/homeController");

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/crud", getCRUD);
  router.post("/post-crud", postCRUD);
  return app.use("/", router);
};

module.exports = initWebRoutes;
