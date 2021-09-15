const ModesRepository = require("../../../repositories/ModesRepository");
const PetsRepository = require("../../../repositories/PetsRepository");

class GetModeCase {
  async execute(data) {
    const petsRepository = new PetsRepository();

    const pet = await petsRepository.findById(data);

    if (!pet) throw new Error("Nonexistent pet");

    const modesRepository = new ModesRepository();
    const mode = modesRepository.findByPetId(data);

    return mode;
  }
}

module.exports = GetModeCase;
