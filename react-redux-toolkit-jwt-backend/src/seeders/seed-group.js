"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Group",
      [
        {
          name: "guest",
          description: "guest",
        },
        {
          name: "admin",
          description: "admin",
        },
        {
          name: "product manager",
          description: "product manager",
        },
        {
          name: "leader",
          description: "leader",
        },
        {
          name: "developer",
          description: "developer",
        },
        {
          name: "tester",
          description: "tester",
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
