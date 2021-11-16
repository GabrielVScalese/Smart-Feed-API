const ConsumptionsRepository = require("../../../repositories/ConsumptionsRepository");

class GetStatisticsCase {
  async execute(data) {
    const consumptionsRepository = new ConsumptionsRepository();

    const consumptions = await consumptionsRepository.findByPetId(data);

    if (consumptions.length == 0)
      throw Error("Without consumptions for statistics");

    const minDate = new Date(consumptions[0]["date"]);
    const maxDate = new Date(consumptions.pop()["date"]);

    const diffDays = maxDate.getDate() - minDate.getDate() + 1;

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
