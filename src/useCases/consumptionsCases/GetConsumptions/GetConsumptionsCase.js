const ConsumptionsRepository = require("../../../repositories/ConsumptionsRepository");

class GetConsumptionsCase {
  async execute(data) {
    const consumptionsRepository = new ConsumptionsRepository();
    const consumptions = await consumptionsRepository.findByPetId(data);

    return consumptions;
  }
}

module.exports = GetConsumptionsCase;
