const express = require("express");
const routes = express.Router();
const CreateUserController = require("./useCases/CreateUser/CreateUserController");
const UpdateUserController = require("./useCases/UpdateUser/UpdateUserController");
const DeleteUserController = require("./useCases/DeleteUser/DeleteUserController");
const AuthenticateUserController = require("./useCases/AuthenticateUser/AuthenticateUserController");
const { ensureAuthenticated } = require("./middlewares/ensureAuthenticated");

routes.get("", (req, res) => {
  return res.json({ message: "Smart Feed API" });
});

routes.post("/users", CreateUserController.handle);
routes.put("/users/:id", ensureAuthenticated, UpdateUserController.handle);
routes.delete("/users/:id", ensureAuthenticated, DeleteUserController.handle);
routes.post("/users/authenticate", AuthenticateUserController.handle);

module.exports = routes;
