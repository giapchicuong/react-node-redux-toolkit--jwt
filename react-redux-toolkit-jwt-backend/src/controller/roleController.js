import {
  getAllRole,
  createNewRole,
  updateRole,
  deleteRole,
  getRoleByGroup,
  assignRoleToGroup,
} from "../service/roleService";

const readFunc = async (req, res) => {
  try {
    let data = await getAllRole();
    if (data) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};
const createFunc = async (req, res) => {
  try {
    let data = await createNewRole(req.body);
    if (data) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};
const updateFunc = async (req, res) => {
  try {
    let data = await updateRole(req.body);
    if (data) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};
const deleteFunc = async (req, res) => {
  try {
    let data = await deleteRole(req.body.id);
    if (data) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};
const readRoleByGroup = async (req, res) => {
  try {
    let id = req.params.groupId;
    let data = await getRoleByGroup(id);
    if (data) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};

const handleAssignRoleToGroup = async (req, res) => {
  try {
    let data = await assignRoleToGroup(req.body);
    if (data) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};
module.exports = {
  readFunc,
  createFunc,
  updateFunc,
  deleteFunc,
  readRoleByGroup,
  handleAssignRoleToGroup,
};
