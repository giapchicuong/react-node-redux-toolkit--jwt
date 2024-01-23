"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Group_Role",
      [
        {
          groupId: 1,
          roleId: 1,
        },
        {
          groupId: 1,
          roleId: 2,
        },
        {
          groupId: 1,
          roleId: 3,
        },
        {
          groupId: 1,
          roleId: 4,
        },
        {
          groupId: 1,
          roleId: 5,
        },
        {
          groupId: 1,
          roleId: 6,
        },
        {
          groupId: 1,
          roleId: 7,
        },
        {
          groupId: 1,
          roleId: 8,
        },
        {
          groupId: 1,
          roleId: 9,
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
