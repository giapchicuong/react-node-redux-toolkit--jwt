import userService from "../service/userService";
const readFunc = async (req, res) => {
  try {
    if (req.query.page && req.query.limit) {
      let page = req.query.page;
      let limit = req.query.limit;
      let data = await userService.getAllUserWithPagination(
        +page,
        +limit,
      );
      return res.status(200).json({
        EM: data.EM, //error message
        EC: data.EC, //error code
        DT: data.DT, //date
      });
    } else {
      let data = await userService.getAllUser();
      return res.status(200).json({
        EM: data.EM, //error message
        EC: data.EC, //error code
        DT: data.DT, //date
      });
    }
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //date
    });
  }
};

const createFunc = async (req, res) => {
  try {
    let data = await userService.createNewUser(req.body);
    return res.status(200).json({
      EM: data.EM, //error message
      EC: data.EC, //error code
      DT: data.DT, //date
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //date
    });
  }
};

const updateFunc = async (req, res) => {
  try {
    let data = await userService.updateUser(req.body);
    return res.status(200).json({
      EM: data.EM, //error message
      EC: data.EC, //error code
      DT: data.DT, //date
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //date
    });
  }
};

const deleteFunc = async (req, res) => {
  try {
    let data = await userService.deleteUser(req.body.id);
    return res.status(200).json({
      EM: data.EM, //error message
      EC: data.EC, //error code
      DT: data.DT, //date
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //date
    });
  }
};

const getUserAccount = async (req, res) => {
  try {
    return res.status(200).json({
      EM: "Get user account success",
      EC: 0,
      DT: {
        access_token: req.token,
        groupWithRoles: req.user.groupWithRoles,
        email: req.user.email,
        username: req.user.username,
      }, //data
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //date
    });
  }
};

module.exports = {
  readFunc,
  createFunc,
  deleteFunc,
  updateFunc,
  getUserAccount,
};
