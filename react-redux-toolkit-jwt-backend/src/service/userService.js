import db from "../models/index";
import {
  hashUserPassword,
  checkEmailExist,
  checkPhoneExist,
} from "./checkValidService";

const getAllUser = async () => {
  try {
    let users = await db.User.findAll({
      attributes: ["id", "email", "username", "address", "phone", "sex"],
      include: { model: db.Group, attributes: ["id", "name", "description"] },
    });
    if (users) {
      return {
        EM: "Get data success",
        EC: 0,
        DT: users,
      };
    } else {
      return {
        EM: "Get data success",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(e);
    return {
      EM: "Some thing went wrong in service ...",
      EC: -2,
    };
  }
};

const getAllUserWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    const { count, rows } = await db.User.findAndCountAll({
      attributes: ["id", "username", "email", "phone", "sex", "address"],
      include: { model: db.Group, attributes: ["id", "name", "description"] },
      offset: offset,
      limit: limit,
      order: [["id", "ASC"]],
    });
    let totalPages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: totalPages,
      users: rows,
    };
    return {
      EM: "Get Pagination successfully ...",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(e);
    return {
      EM: "Some thing went wrong in service ...",
      EC: -2,
    };
  }
};

const createNewUser = async (rawUserData) => {
  try {
    // check email are exists
    let isEmailExits = await checkEmailExist(rawUserData.email);
    if (isEmailExits) {
      return {
        EM: "The email is already exist",
        EC: 1,
        DT: "email",
      };
    }
    // check phone are exists
    let isPhoneExist = await checkPhoneExist(rawUserData.phone);
    if (isPhoneExist) {
      return {
        EM: "The phone is already exist",
        EC: 1,
        DT: "phone",
      };
    }
    // Hash password
    let hashPass = hashUserPassword(rawUserData.password);
    // create new user
    let data = await db.User.create({
      ...rawUserData,
      password: hashPass,
    });
    if (data) {
      return {
        EM: "Create new user successfully",
        EC: 0,
        DT: data,
      };
    } else {
    }
  } catch (error) {
    console.log(e);
    return {
      EM: "Some thing went wrong in service ...",
      EC: -2,
    };
  }
};

const updateUser = async (rawUserData) => {
  try {
    if (!rawUserData.groupId) {
      return {
        EM: "Error with empty GroupId",
        EC: 1,
        DT: "group",
      };
    }
    let user = await db.User.findOne({
      where: { id: rawUserData.id },
    });
    if (user) {
      await user.update({
        username: rawUserData.username,
        address: rawUserData.address,
        sex: rawUserData.sex,
        groupId: rawUserData.groupId,
      });
      return {
        EM: "A user edited successfully",
        EC: 0,
        DT: user,
      };
    } else {
      return {
        EM: "User not found",
        EC: 2,
        DT: [],
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

const deleteUser = async (id) => {
  try {
    let user = await db.User.findOne({
      where: { id: id },
    });
    if (user) {
      await user.destroy();
      return {
        EM: "Delete user succeeds",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "User not exist.",
        EC: 2,
        DT: [],
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
module.exports = {
  getAllUser,
  getAllUserWithPagination,
  createNewUser,
  updateUser,
  deleteUser,
};
