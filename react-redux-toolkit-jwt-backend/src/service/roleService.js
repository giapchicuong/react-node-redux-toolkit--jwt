import db from "../models/index";

const getAllRole = async () => {
  try {
    let roles = await db.Role.findAll({
      attributes: ["id", "url", "description"],
    });
    if (roles) {
      return {
        EM: "Get role success",
        EC: 0,
        DT: roles,
      };
    } else {
      return {
        EM: "Get role fail",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Some thing went wrong in service...",
      EC: -2,
    };
  }
};

const createNewRole = async (rawUserData) => {
  try {
    if (!rawUserData.url) {
      return {
        EM: "Error with empty Role Name",
        EC: 1,
        DT: "url",
      };
    }
    let role = await db.Role.create(rawUserData);
    if (role) {
      return {
        EM: `Create role succeeds`,
        EC: 0,
        DT: role,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Some thing went wrong in service...",
      EC: -2,
    };
  }
};
const updateRole = async (rawUserData) => {
  try {
    if (!rawUserData.url) {
      return {
        EM: "Error with empty Role Url",
        EC: 1,
        DT: "url",
      };
    }
    let role = await db.Role.findOne({
      where: { id: rawUserData.id },
    });
    if (role) {
      await role.update({
        url: rawUserData.url,
        description: rawUserData.description,
      });
      return {
        EM: "A role edited successfully",
        EC: 0,
        DT: role,
      };
    } else {
      return {
        EM: "Role not found",
        EC: 2,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Some thing went wrong in service...",
      EC: -2,
    };
  }
};
const deleteRole = async (id) => {
  try {
    let role = await db.Role.findOne({
      where: { id: id },
    });
    if (role) {
      await role.destroy();
      return {
        EM: "Delete role succeed",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "Role not found",
        EC: 2,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Some thing went wrong in service...",
      EC: -2,
    };
  }
};

const getRoleByGroup = async (id) => {
  try {
    let roles = await db.Group.findOne({
      where: { id: id },
      attributes: ["id", "name", "description"],
      include: {
        model: db.Role,
        attributes: ["id", "url", "description"],
        through: { attributes: [] },
      },
    });
    if (roles) {
      return {
        EM: "Get Roles by group success",
        EC: 0,
        DT: roles,
      };
    } else {
      return {
        EM: "Not found any roles",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Some thing went wrong in service...",
      EC: -2,
    };
  }
};
const assignRoleToGroup = async (data) => {
  try {
    await db.Group_Role.destroy({
      where: { groupId: +data.groupId },
    });
    await db.Group_Role.bulkCreate(data.groupRoles);
    return {
      EM: "Assign role to group succeeds",
      EC: 0,
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Some thing went wrong in service...",
      EC: -2,
    };
  }
};
module.exports = {
  getAllRole,
  createNewRole,
  updateRole,
  deleteRole,
  getRoleByGroup,
  assignRoleToGroup,
};
