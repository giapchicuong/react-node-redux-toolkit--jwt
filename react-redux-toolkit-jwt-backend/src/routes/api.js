import express from "express";
const router = express.Router();
import userController from "../controller/userController";
import { checkUserJwt, checkUserPermission } from "../middleware/JWTAction";
import loginRegisterController from "../controller/loginRegisterController";
import groupController from "../controller/groupController";
import roleController from "../controller/roleController";
const initApiRoutes = (app) => {
  router.all("*", checkUserJwt, checkUserPermission);
  router.post("/register", loginRegisterController.handleRegister);
  router.post("/login", loginRegisterController.handleLogin);
  router.post("/logout", loginRegisterController.handleLogout);
  router.get("/account", userController.getUserAccount);

  // Users
  router.get("/user/read", userController.readFunc);
  router.post("/user/create", userController.createFunc);
  router.put("/user/update", userController.updateFunc);
  router.delete("/user/delete", userController.deleteFunc);

  // Groups
  router.get("/group/read", groupController.readFunc);
  router.post("/group/create", groupController.createFunc);
  router.put("/group/update", groupController.updateFunc);
  router.delete("/group/delete", groupController.deleteFunc);

  // Roles
  router.get("/role/read", roleController.readFunc);
  router.post("/role/create", roleController.createFunc);
  router.put("/role/update", roleController.updateFunc);
  router.delete("/role/delete", roleController.deleteFunc);
  router.get("/role/by-group/:groupId", roleController.readRoleByGroup);
  router.post("/role/assign-to-group", roleController.handleAssignRoleToGroup);

  return app.use("/api/v1/", router);
};

export default initApiRoutes;
