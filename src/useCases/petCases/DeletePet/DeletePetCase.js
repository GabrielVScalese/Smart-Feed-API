const PetsRepository = require("../../../repositories/PetsRepository");

class DeletePetCase {
  async execute(id) {
    const petsRepository = new PetsRepository();
    const petAlreadyExists = await petsRepository.findById(id);

    if (!petAlreadyExists) throw new Error("Nonexistent pet");

    await petsRepository.destroy(id);
  }
}

module.exports = DeletePetCase;
