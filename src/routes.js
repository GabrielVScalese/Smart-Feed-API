const express = require("express");
const routes = express.Router();

const { ensureAuthenticated } = require("./middlewares/ensureAuthenticated");
const { verifyPet } = require("./middlewares/verifyPet");

// User
const CreateUserController = require("./useCases/userCases/CreateUser/CreateUserController");
const UpdateUserController = require("./useCases/userCases/UpdateUser/UpdateUserController");
const DeleteUserController = require("./useCases/userCases/DeleteUser/DeleteUserController");
const AuthenticateUserController = require("./useCases/userCases/AuthenticateUser/AuthenticateUserController");
const ResetPasswordController = require("./useCases/userCases/ResetPassword/ResetPasswordController");
const AuthResetTokenController = require("./useCases/userCases/AuthenticateResetToken/AuthResetTokenController");
const DeleteResetTokenController = require("./useCases/userCases/DeleteResetToken/DeleteResetTokenController");
const VerifyUserController = require("./useCases/userCases/VerifyUser/VerifyUserController");

// Pet
const CreatePetController = require("./useCases/petCases/CreatePet/CreatePetController");
const UpdatePetController = require("./useCases/petCases/UpdatePet/UpdatePetController");
const DeletePetController = require("./useCases/petCases/DeletePet/DeletePetController");
const GetPetsController = require("./useCases/petCases/GetPets/GetPetsController");

// Feed
const UpdateFeedController = require("./useCases/feedCases/UpdateFeed/UpdateFeedController");
const GetFeedsController = require("./useCases/feedCases/GetFeeds/GetFeedsController");

// Consumption
const CreateConsumptionController = require("./useCases/consumptionsCases/CreateConsumption/CreateConsumptionController");
const GetConsumptionsController = require("./useCases/consumptionsCases/GetConsumptions/GetConsumptionsController");
const GetStatisticsController = require("./useCases/consumptionsCases/GetStatistics/GetStatisticsController");

// Refresh Token
const RefreshTokenController = require("./useCases/refreshTokenCases/CreateRefreshToken/RefreshTokenController");

// Routes
routes.get("/", (req, res) => {
  return res.json({ message: "Smart Feed API" });
});

routes.post("/users", CreateUserController.handle);
routes.put("/users/:id", ensureAuthenticated, UpdateUserController.handle);
routes.delete("/users/:id", ensureAuthenticated, DeleteUserController.handle);
routes.post("/users/authenticate", AuthenticateUserController.handle);
routes.post("/users/resetPassword", ResetPasswordController.handle);
routes.post("/users/verifyResetTokenId", AuthResetTokenController.handle);
routes.delete(
  "/users/deleteResetToken/:resetTokenId",
  DeleteResetTokenController.handle
);
routes.post("/users/verifyUser", VerifyUserController.handle);

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
  verifyPet,
  UpdateFeedController.handle
);
routes.get(
  "/feeds/findByOwner/:userId",
  ensureAuthenticated,
  GetFeedsController.handle
);

routes.post(
  "/consumptions",
  ensureAuthenticated,
  CreateConsumptionController.handle
);
routes.get(
  "/consumptions/findByPet/:petId",
  ensureAuthenticated,
  verifyPet,
  GetConsumptionsController.handle
);
routes.get(
  "/consumptions/statistics/:petId",
  ensureAuthenticated,
  verifyPet,
  GetStatisticsController.handle
);

routes.post("/refreshToken", RefreshTokenController.handle);

module.exports = routes;
