const db = require("../models/index");
import {
  createNewUser,
  getAllUser,
  getUserById,
  updateUserData,
} from "../services/CRUDServices";

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

const displayGetCRUD = async (req, res) => {
  try {
    // const message = await createNewUser(req.body);
    // console.log("message: ", message);
    const users = await getAllUser();
    // console.log("users: ", users);
    // return res.send("get crud from server side");
    return res.render("displayCRUD.ejs", {
      dataTable: users,
    });
  } catch (e) {}
};

const getEditCRUD = async (req, res) => {
  try {
    // console.log("req.query: ", req.query);
    // console.log("getEditCRUD:  ", req.query.id);
    const userId = req.query.id;
    if (userId) {
      const userData = await getUserById(userId);
      console.log("userData: ", userData);
      return res.render("editCRUD.ejs", {
        userData,
      });
    } else {
      return res.send("User not found!");
    }
  } catch (e) {}
};

const putCRUD = async (req, res) => {
  try {
    // console.log("req: ", req);
    const allUserData = await updateUserData(req.body);
    console.log("putCRUD allUserData: ", allUserData);
    return res.render("displayCRUD.ejs", {
      dataTable: allUserData,
    });
  } catch (e) {}
};

module.exports = {
  getHomePage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  putCRUD,
};
