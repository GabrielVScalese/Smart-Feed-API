const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const PetController = require("./controllers/PetController");

// routes.get("", (req, res) => {
//   return res.json({ message: "Smart Feed API" });
// });

// Users
routes.get("/users", UserController.findAll);
routes.post("/users", UserController.store);
routes.put("/users/:email", UserController.update);
routes.post("/auth", UserController.authenticate);
routes.delete("/users/:email", UserController.destroy);

// Pets
routes.get("/pets", PetController.findAll);
routes.get("/pets/findByEmail/:email", PetController.findByEmail);
routes.post("/pets", PetController.store);
routes.put("/pets/:id", PetController.update);
routes.delete("/pets/:id", PetController.destroy);

module.exports = routes;
