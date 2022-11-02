const db = require("../models/index");
import { createNewUser } from "../services/CRUDServices";

const getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll();

    console.log("----------------------data: ", data);

    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log("getHomePage Error: ", e);
  }
};

const getCRUD = async (req, res) => {
  try {
    return res.render("crud.ejs");
  } catch (e) {}
};

const postCRUD = async (req, res) => {
  try {
    const message = await createNewUser(req.body);
    console.log("message: ", message);
    return res.send("post crud from server side");
  } catch (e) {}
};

module.exports = {
  getHomePage,
  getCRUD,
  postCRUD,
};
