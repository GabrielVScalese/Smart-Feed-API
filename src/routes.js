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

const CreateModeController = require("./useCases/modeCases/CreateMode/CreateModeController");
const GetModeController = require("./useCases/modeCases/GetMode/GetModeController");

const CreateQuantityController = require("./useCases/quantityCases/CreateQuantity/CreateQuantityController");
const GetQuantityController = require("./useCases/quantityCases/GetQuantity/GetQuantityController");

const CreateScheduleController = require("./useCases/scheduleCases/CreateSchedule/CreateScheduleController");
const GetSchedulesController = require("./useCases/scheduleCases/GetSchedules/GetSchedulesController");

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

routes.post("/modes", ensureAuthenticated, CreateModeController.handle);
routes.get("/modes/:petId", ensureAuthenticated, GetModeController.handle);

routes.post(
  "/quantities",
  ensureAuthenticated,
  CreateQuantityController.handle
);
routes.get(
  "/quantities/:petId",
  ensureAuthenticated,
  GetQuantityController.handle
);

routes.post("/schedules", ensureAuthenticated, CreateScheduleController.handle);
routes.get(
  "/schedules/:petId",
  ensureAuthenticated,
  GetSchedulesController.handle
);

routes.post("/refreshToken", RefreshTokenController.handle);

module.exports = routes;
