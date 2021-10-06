const PetsRepository = require("../../../repositories/PetsRepository");
const ConsumptionsRepository = require("../../../repositories/ConsumptionsRepository");

class CreateConsumptionCase {
  async execute(data) {
    const petsRepository = new PetsRepository();
    const pet = await petsRepository.findById(data["pet_id"]);

    if (!pet) throw Error("Nonexistent pet");

    const consumptionsRepository = new ConsumptionsRepository();

    const newConsumption = await consumptionsRepository.save(data);

    return newConsumption;
  }
}

module.exports = CreateConsumptionCase;
