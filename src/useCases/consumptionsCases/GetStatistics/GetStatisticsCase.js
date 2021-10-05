const ConsumptionsRepository = require("../../../repositories/ConsumptionsRepository");

class GetStatisticsCase {
  async execute(data) {
    const consumptionsRepository = new ConsumptionsRepository();

    const greaterConsumption =
      await consumptionsRepository.findGreaterConsumption(data);
    const smallerConsumption =
      await consumptionsRepository.findSmallerConsumption(data);
    const consumptionAverage = await consumptionsRepository.getAverage(data);

    return {
      greaterConsumption,
      smallerConsumption,
      consumptionAverage,
    };
  }
}

module.exports = GetStatisticsCase;
