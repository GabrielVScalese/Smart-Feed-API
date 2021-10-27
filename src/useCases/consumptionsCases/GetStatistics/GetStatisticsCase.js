const ConsumptionsRepository = require("../../../repositories/ConsumptionsRepository");

class GetStatisticsCase {
  async execute(data) {
    const consumptionsRepository = new ConsumptionsRepository();

    const consumptions = await consumptionsRepository.findByPetId(data);

    if (consumptions.length == 0)
      throw Error("Without consumptions for statistics");

    const minDate = new Date(consumptions[0]["date"]);
    const maxDate = new Date(consumptions.pop()["date"]);

    const diffTime = Math.abs(maxDate - minDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const greaterConsumption =
      await consumptionsRepository.findGreaterConsumption(data);
    const smallerConsumption =
      await consumptionsRepository.findSmallerConsumption(data);
    const consumptionAverage = await consumptionsRepository.getAverage(data);

    return {
      greaterConsumption,
      smallerConsumption,
      consumptionAverage,
      diffDays,
    };
  }
}

module.exports = GetStatisticsCase;
