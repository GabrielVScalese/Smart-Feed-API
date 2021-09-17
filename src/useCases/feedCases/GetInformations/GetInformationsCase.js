const PetsRepository = require("../../../repositories/PetsRepository");

const ModesRepository = require("../../../repositories/ModesRepository");
const QuantitiesRepository = require("../../../repositories/QuantitiesRepository");
const SchedulesRepository = require("../../../repositories/SchedulesRepository");

class GetInformationsCase {
  async execute(data) {
    const petsRepository = new PetsRepository();

    const pet = await petsRepository.findById(data);

    if (!pet) throw new Error("Nonexistent pet");

    const modesRepository = new ModesRepository();
    const quantitiesRepository = new QuantitiesRepository();
    const schedulesRepository = new SchedulesRepository();

    const mode = await modesRepository.findByPetId(data);
    const quantity = await quantitiesRepository.findByPetId(data);
    const schedules = await schedulesRepository.findByPetId(data);

    return {
      pet_id: data,
      mode,
      quantity,
      schedules,
    };
  }
}

module.exports = GetInformationsCase;
