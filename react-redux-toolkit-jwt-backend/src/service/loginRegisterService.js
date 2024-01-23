import db from "../models/index";
import checkValidService from "./checkValidService";
import { getGroupWithRoles } from "./jwtService";
import JWTAction from "../middleware/JWTAction";
import { Op } from "sequelize";

const registerNewUser = async (rawUserData) => {
  try {
    let isEmailExist = await checkValidService.checkEmailExist(
      rawUserData.email
    );
    if (isEmailExist) {
      return {
        EM: "The email is already exist",
        EC: 1,
      };
    }
    let isPhoneExist = await checkValidService.checkPhoneExist(
      rawUserData.phone
    );
    if (isPhoneExist) {
      return {
        EM: "The phone is already exist",
        EC: 1,
      };
    }
    let hasPass = checkValidService.hashUserPassword(rawUserData.password);

    let user = await db.User.create({
      email: rawUserData.email,
      phone: rawUserData.phone,
      username: rawUserData.username,
      password: hasPass,
      address: rawUserData.address,
      sex: rawUserData.sex,
      groupId: 1,
    });
    if (user) {
      return {
        EM: "A user is created successfully",
        EC: 0,
      };
    } else {
      return {
        EM: "Fail to register user",
        EC: 0,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Some thing went wrong in service ...",
      EC: -2,
    };
  }
};

const handleUserLogin = async (rawUserData) => {
  try {
    let user = await db.User.findOne({
      where: {
        [Op.or]: [
          { email: rawUserData.valueLogin },
          { phone: rawUserData.valueLogin },
        ],
      },
    });
    if (user) {
      let isCorrectPassword = checkValidService.checkPassword(
        rawUserData.password,
        user.password
      );
      if (isCorrectPassword) {
        let groupWithRoles = await getGroupWithRoles(user);
        let payload = {
          email: user.email,
          username: user.username,
          groupWithRoles,
        };
        let token = JWTAction.createJwt(payload);
        return {
          EM: "Login successfully",
          EC: 0,
          DT: {
            access_token: token,
            email: user.email,
            username: user.username,
            groupWithRoles: groupWithRoles,
          },
        };
      }
    }

    return {
      EM: "Your email/phone number or password is incorrect!",
      EC: 1,
      DT: "",
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Some thing went wrong in service ...",
      EC: -2,
    };
  }
};

module.exports = {
  registerNewUser,
  handleUserLogin,
};
