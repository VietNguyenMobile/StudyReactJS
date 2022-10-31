// import db from "../models";
const db = require("../models/index");

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

module.exports = {
  getHomePage,
};
