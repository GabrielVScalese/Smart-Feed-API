const PetsRepository = require("../../../repositories/PetsRepository");

class UpdatePetCase {
  async execute(data) {
    const petsRepository = new PetsRepository();

    const petAlreadyExists = await petsRepository.findById(data["id"]);

    if (!petAlreadyExists) throw new Error("Nonexistent pet");

    await petsRepository.update(data);
  }
}

module.exports = UpdatePetCase;
