const PetsRepository = require("../../../repositories/PetsRepository");
const ConsumptionsRepository = require("../../../repositories/ConsumptionsRepository");

class CreateConsumptionCase {
  async execute(data) {
    const consumptionsRepository = new ConsumptionsRepository();

    const newConsumption = await consumptionsRepository.save(data);

    return newConsumption;
  }
}

module.exports = CreateConsumptionCase;
