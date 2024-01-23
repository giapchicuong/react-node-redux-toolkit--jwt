"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Role",
      [
        {
          url: "/user/read",
          description: "get all user",
        },
        {
          url: "/user/create",
          description: "create new user",
        },
        {
          url: "/user/update",
          description: "update user",
        },
        {
          url: "/user/delete",
          description: "delete user",
        },
        {
          url: "/role/read",
          description: "get all role",
        },
        {
          url: "/role/create",
          description: "create new role",
        },
        {
          url: "/role/update",
          description: "update role",
        },
        {
          url: "/role/delete",
          description: "delete role",
        },
        {
          url: "/group/read",
          description: "get all group",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
