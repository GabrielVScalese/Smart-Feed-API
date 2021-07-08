const express = require("express");
const routes = express.Router();
const CreateUserController = require("./useCases/CreateUser/CreateUserController");
const AuthenticateUserController = require("./useCases/AuthenticateUser/AuthenticateUserController");

routes.get("", (req, res) => {
  return res.json({ message: "Smart Feed API" });
});

routes.post("/users", CreateUserController.handle);
routes.post("/auth", AuthenticateUserController.handle);

module.exports = routes;
