const ModesRepository = require("../repositories/ModesRepository");
const QuantitiesRepository = require("../repositories/QuantitiesRepository");
const SchedulesRepository = require("../repositories/SchedulesRepository");

class FeedsRepository {
  async findByPetId(petId) {
    const modesRepository = new ModesRepository();
    const quantitiesRepository = new QuantitiesRepository();
    const schedulesRepository = new SchedulesRepository();

    const mode = await modesRepository.findByPetId(petId);
    const quantity = await quantitiesRepository.findByPetId(petId);
    const schedules = await schedulesRepository.findByPetId(petId);

    return {
      mode: mode,
      quantity: quantity,
      schedules: schedules,
    };
  }
}

module.exports = FeedsRepository;
