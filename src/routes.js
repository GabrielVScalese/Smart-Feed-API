const express = require("express");
const routes = express.Router();

const { ensureAuthenticated } = require("./middlewares/ensureAuthenticated");

const CreateUserController = require("./useCases/userCases/CreateUser/CreateUserController");
const UpdateUserController = require("./useCases/userCases/UpdateUser/UpdateUserController");
const DeleteUserController = require("./useCases/userCases/DeleteUser/DeleteUserController");
const AuthenticateUserController = require("./useCases/userCases/AuthenticateUser/AuthenticateUserController");

const CreatePetController = require("./useCases/petCases/CreatePet/CreatePetController");
const UpdatePetController = require("./useCases/petCases/UpdatePet/UpdatePetController");
const DeletePetController = require("./useCases/petCases/DeletePet/DeletePetController");
const GetPetsController = require("./useCases/petCases/GetPets/GetPetsController");

const UpdateInformationsController = require("./useCases/feedCases/UpdateInformations/UpdateInformationsController");
const GetInformationsController = require("./useCases/feedCases/GetInformations/GetInformationsController");

const RefreshTokenController = require("./useCases/refreshTokenCases/CreateRefreshToken/RefreshTokenController");

routes.get("", (req, res) => {
  return res.json({ message: "Smart Feed API" });
});

routes.post("/users", CreateUserController.handle);
routes.put("/users/:id", ensureAuthenticated, UpdateUserController.handle);
routes.delete("/users/:id", ensureAuthenticated, DeleteUserController.handle);
routes.post("/users/authenticate", AuthenticateUserController.handle);

routes.post("/pets", ensureAuthenticated, CreatePetController.handle);
routes.put("/pets/:id", ensureAuthenticated, UpdatePetController.handle);
routes.delete("/pets/:id", ensureAuthenticated, DeletePetController.handle);
routes.get(
  "/pets/findByOwner/:userId",
  ensureAuthenticated,
  GetPetsController.handle
);

routes.put(
  "/feeds/:petId",
  ensureAuthenticated,
  UpdateInformationsController.handle
);
routes.get(
  "/feeds/:petId",
  ensureAuthenticated,
  GetInformationsController.handle
);

routes.post("/refreshToken", RefreshTokenController.handle);

module.exports = routes;
