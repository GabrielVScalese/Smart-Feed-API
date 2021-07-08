const express = require("express");
const routes = express.Router();

const { ensureAuthenticated } = require("./middlewares/ensureAuthenticated");

const CreateUserController = require("./useCases/userCases/CreateUser/CreateUserController");
const UpdateUserController = require("./useCases/userCases/UpdateUser/UpdateUserController");
const DeleteUserController = require("./useCases/userCases/DeleteUser/DeleteUserController");
const AuthenticateUserController = require("./useCases/userCases/AuthenticateUser/AuthenticateUserController");

const CreatePetController = require("./useCases/petCases/CreatePet/CreatePetController");

routes.get("", (req, res) => {
  return res.json({ message: "Smart Feed API" });
});

routes.post("/users", CreateUserController.handle);
routes.put("/users/:id", ensureAuthenticated, UpdateUserController.handle);
routes.delete("/users/:id", ensureAuthenticated, DeleteUserController.handle);
routes.post("/users/authenticate", AuthenticateUserController.handle);

routes.post("/pets", CreatePetController.handle);

module.exports = routes;
