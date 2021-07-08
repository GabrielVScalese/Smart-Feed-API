const PetsRepository = require("../../../repositories/PetsRepository");

class CreatePetCase {
  async execute(data) {
    const petsRepository = new PetsRepository();

    const pet = await petsRepository.save(data);

    return pet;
  }
}

module.exports = CreatePetCase;
