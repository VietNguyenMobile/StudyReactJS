import bcrypt from "bcryptjs";
const db = require("../models/index");
const salt = bcrypt.genSaltSync(10);

const createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = await hashUserPassword(data.password);
      console.log("createNewUser data: ", data);
      console.log("hashPassword: ", hashPassword);
      await db.User.create({
        email: data.email,
        password: hashPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === "1" ? true : false,
        // image: data.image,
        roleId: data.roleId,
        // positionId: data.positionId,
      });
      resolve("ok create new user success");
    } catch (e) {
      reject(e);
    }
  });
};

const hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

const getAllUser = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = db.User.findAll({
        raw: true,
      });
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

const getUserById = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await db.User.findOne({
        where: { id: userId },
        raw: true,
      });
      // console.log("getUserById users: ", users);
      if (users) {
        resolve(users);
      } else {
        resolve([]);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateUserData = async (userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("updateUserData userData: ", userData);
      let user = await db.User.findOne({
        where: { id: userData.id },
      });
      console.log("updateUserData user: ", user);
      if (user) {
        user.firstName = userData.firstName;
        user.lastName = userData.lastName;
        user.address = userData.address;
        console.log("user updated: ", user);
        await user.save();

        let allUsers = await db.User.findAll({
          raw: true,
        });
        console.log("allUsers: ", allUsers);
        resolve(allUsers);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createNewUser,
  getAllUser,
  getUserById,
  updateUserData,
};
