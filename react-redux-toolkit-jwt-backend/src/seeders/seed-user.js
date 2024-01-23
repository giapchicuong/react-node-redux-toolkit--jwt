"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "User",
      [
        {
          email: "giapchicuong@gamil.com",
          password: "123",
          username: "giapchicuong",
          address: "HCM",
          phone: "0354438249",
          sex: 0,
          groupId: 1,
        },
        {
          email: "dinhthivietha@gamil.com",
          password: "123",
          username: "dinhthivietha",
          address: "HCM",
          phone: "0339201605",
          sex: 0,
          groupId: 2,
        },
        {
          email: "giapngocphuongdung@gamil.com",
          password: "123",
          username: "giapngocphuongdung",
          address: "HCM",
          phone: "0339933931",
          sex: 0,
          groupId: 3,
        },
        {
          email: "giapchicuong@gamil.com",
          password: "123",
          username: "giapchicuong",
          address: "HCM",
          phone: "0354438249",
          sex: 0,
          groupId: 1,
        },
        {
          email: "dinhthivietha@gamil.com",
          password: "123",
          username: "dinhthivietha",
          address: "HCM",
          phone: "0339201605",
          sex: 0,
          groupId: 2,
        },
        {
          email: "giapngocphuongdung@gamil.com",
          password: "123",
          username: "giapngocphuongdung",
          address: "HCM",
          phone: "0339933931",
          sex: 0,
          groupId: 3,
        },
        {
          email: "giapchicuong@gamil.com",
          password: "123",
          username: "giapchicuong",
          address: "HCM",
          phone: "0354438249",
          sex: 0,
          groupId: 1,
        },
        {
          email: "dinhthivietha@gamil.com",
          password: "123",
          username: "dinhthivietha",
          address: "HCM",
          phone: "0339201605",
          sex: 0,
          groupId: 2,
        },
        {
          email: "giapngocphuongdung@gamil.com",
          password: "123",
          username: "giapngocphuongdung",
          address: "HCM",
          phone: "0339933931",
          sex: 0,
          groupId: 3,
        },
        {
          email: "giapchicuong@gamil.com",
          password: "123",
          username: "giapchicuong",
          address: "HCM",
          phone: "0354438249",
          sex: 0,
          groupId: 1,
        },
        {
          email: "dinhthivietha@gamil.com",
          password: "123",
          username: "dinhthivietha",
          address: "HCM",
          phone: "0339201605",
          sex: 0,
          groupId: 2,
        },
        {
          email: "giapngocphuongdung@gamil.com",
          password: "123",
          username: "giapngocphuongdung",
          address: "HCM",
          phone: "0339933931",
          sex: 0,
          groupId: 3,
        },
        {
          email: "giapchicuong@gamil.com",
          password: "123",
          username: "giapchicuong",
          address: "HCM",
          phone: "0354438249",
          sex: 0,
          groupId: 1,
        },
        {
          email: "dinhthivietha@gamil.com",
          password: "123",
          username: "dinhthivietha",
          address: "HCM",
          phone: "0339201605",
          sex: 0,
          groupId: 2,
        },
        {
          email: "giapngocphuongdung@gamil.com",
          password: "123",
          username: "giapngocphuongdung",
          address: "HCM",
          phone: "0339933931",
          sex: 0,
          groupId: 3,
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
