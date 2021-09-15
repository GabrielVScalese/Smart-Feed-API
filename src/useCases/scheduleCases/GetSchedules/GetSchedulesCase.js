const SchedulesRepository = require("../../../repositories/SchedulesRepository");
const PetsRepository = require("../../../repositories/PetsRepository");

class GetSchedulesCase {
  async execute(data) {
    const petsRepository = new PetsRepository();

    const pet = await petsRepository.findById(data);

    if (!pet) throw new Error("Nonexistent pet");

    const schedulesRepository = new SchedulesRepository();

    const schedulesByPet = await schedulesRepository.findByPetId(data);

    return schedulesByPet;
  }
}

module.exports = GetSchedulesCase;
