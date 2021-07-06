const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const PetController = require("./controllers/PetController");

routes.get("", (req, res) => {
  return res.json({ message: "Smart Feed API" });
});

// Users
routes.get("/api/users", UserController.findAll);
routes.post("/api/users", UserController.store);
routes.put("/api/users/:email", UserController.update);
routes.post("/api/auth", UserController.authenticate);
routes.delete("/api/users/:email", UserController.destroy);

// Pets
routes.get("/api/pets", PetController.findAll);
routes.get("/api/pets/:email", PetController.findByEmail);
routes.post("/api/pets", PetController.store);
routes.put("/api/pets/:id", PetController.update);
routes.delete("/api/pets/:id", PetController.destroy);

module.exports = routes;
