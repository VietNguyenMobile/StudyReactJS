// import db from "../models";
const db = require("../models");

const getHomePage = async (req, res) => {
  try {
    const data = await db.Users.findAll({
      attributes: ["usr_code",],
    });

    console.log("----------------------data: ", data);

    return res.render("homePage.ejs");
  } catch (e) {
    console.log("getHomePage Error: ", e);
  }
};

module.exports = {
  getHomePage,
};
