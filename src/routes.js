const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const PetController = require("./controllers/PetController");

routes.get("", (req, res) => {
  return res.json({ message: "Smart Feed API" });
});

// Users
routes.get("/api/users", UserController.findAll);
routes.post("/api/users/insert", UserController.store);
routes.put("/api/users/update/:email", UserController.update);
routes.post("/api/users/authenticate", UserController.authenticate);
routes.delete("/api/users/delete/:email", UserController.delete);

// Pets
routes.get("/api/pets", PetController.findAll);
routes.get("/api/pets/:email", PetController.findByEmail);
routes.post("/api/pets/insertPet", PetController.store);
routes.put("/api/pets/update/:id", PetController.update);
routes.delete("/api/pets/delete/:id", PetController.delete);

module.exports = routes;
