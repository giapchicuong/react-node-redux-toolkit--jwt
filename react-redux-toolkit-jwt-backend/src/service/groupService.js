import db from "../models/index";

const getAllGroup = async () => {
  try {
    let groups = await db.Group.findAll({
      attributes: ["id", "name", "description"],
    });
    if (groups) {
      return {
        EM: "Get group success",
        EC: 0,
        DT: groups,
      };
    } else {
      return {
        EM: "Get group fail",
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

const createNewGroup = async (groups) => {
  try {
    if (!groups.name) {
      return {
        EM: "Error with empty Group Name",
        EC: 1,
        DT: "name",
      };
    }
    let currentGroups = await db.Group.findAll({
      attributes: ["name", "description"],
    });
    await db.Group.create(groups);
    return {
      EM: `Create group succeeds`,
      EC: 0,
      DT: groups,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Some thing went wrong in service...",
      EC: -2,
    };
  }
};
const updateGroup = async (group) => {
  try {
    if (!group.name) {
      return {
        EM: "Error with empty Group Name",
        EC: 1,
        DT: "name",
      };
    }
    let currentGroup = await db.Group.findOne({
      where: { id: group.id },
    });
    if (currentGroup) {
      await currentGroup.update({
        name: group.name,
        description: group.description,
      });
      return {
        EM: "A group edited successfully",
        EC: 0,
        DT: group,
      };
    } else {
      return {
        EM: "Group not found",
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
const deleteGroup = async (id) => {
  try {
    let group = await db.Group.findOne({
      where: { id: id },
    });
    if (group) {
      await group.destroy();
      return {
        EM: "Delete group succeed",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "Group not found",
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
module.exports = {
  getAllGroup,
  createNewGroup,
  updateGroup,
  deleteGroup,
};
