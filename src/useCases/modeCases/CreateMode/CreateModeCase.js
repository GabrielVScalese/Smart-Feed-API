const ModesRepository = require("../../../repositories/ModesRepository");
const PetsRepository = require("../../../repositories/PetsRepository");

class CreateModeCase {
  async execute(data) {
    const petsRepository = new PetsRepository();

    const pet = await petsRepository.findById(data["pet_id"]);

    if (!pet) throw new Error("Nonexistent pet");

    const modesRepository = new ModesRepository();

    const mode = await modesRepository.findByPetId(data["pet_id"]);

    if (mode) throw new Error("Pet already has mode");

    const newMode = await modesRepository.save(data);

    return newMode;
  }
}

module.exports = CreateModeCase;
