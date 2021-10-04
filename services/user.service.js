const User = require("../models/user.model");
const { DbError } = require("../utils/error");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const addUser = async (userData) => {
  try {
    const findData = await User.findOne({ email: userData.email }).exec();
    if (findData) {
      throw new Error("user already exists");
    } else {
      const salt = bcrypt.genSaltSync(saltRounds);
      userData.password = bcrypt.hashSync(userData.password, salt);
      const usrObj = new User(userData);
      return usrObj.save();
    }
  } catch (err) {
    console.log(err);
    throw new DbError(err.message);
  }
};
const LoginUser = async ({email,password}) => {
  console.log("xxxxx")
  const DbUserData = await User.findOne({ email: email }).exec();
  console.log("DbUserData##", DbUserData);
  if (DbUserData) {
    const status = bcrypt.compareSync(password, DbUserData.password);
    console.log("status%%", status);
    if (status) {
      let newData = JSON.parse(JSON.stringify(DbUserData));
      console.log("newdata@@", newData);
      return newData;
    } else {
      throw new Error("user password not matched");
    }
  } else {
    throw new Error("user not exists");
  }
};

module.exports = {addUser,LoginUser};
