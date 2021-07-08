const Pet = require("../models/Pet");

class PetsRepository {
  async save(pet) {
    const new_pet = await Pet.create(pet);

    return new_pet;
  }
}

module.exports = PetsRepository;
