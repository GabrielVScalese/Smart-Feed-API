const ModesRepository = require("../../../repositories/ModesRepository.js");
const QuantitiesRepository = require("../../../repositories/QuantitiesRepository");
const SchedulesRepository = require("../../../repositories/SchedulesRepository");

class UpdateFeedCase {
  async execute(data) {
    const modesRepository = new ModesRepository();
    const quantitiesRepository = new QuantitiesRepository();
    const schedulesRepository = new SchedulesRepository();

    await modesRepository.update(data["pet_id"], data["mode"]);
    await quantitiesRepository.update(data["pet_id"], data["quantity"]);
    await schedulesRepository.update(data["pet_id"], data["schedules"]);
  }
}

module.exports = UpdateFeedCase;
