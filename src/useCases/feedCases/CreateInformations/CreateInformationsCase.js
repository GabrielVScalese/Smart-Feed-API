const PetsRepository = require("../../../repositories/PetsRepository");
const ModesRepository = require("../../../repositories/ModesRepository");
const QuantitiesRepository = require("../../../repositories/QuantitiesRepository");
const SchedulesRepository = require("../../../repositories/SchedulesRepository");

class CreateInformationsCase {
  async execute(data) {
    const petsRepository = new PetsRepository();
    const pet = await petsRepository.findById(data["pet_id"]);

    if (!pet) throw new Error("Nonexistent pet");

    const modesRepository = new ModesRepository();
    const quantitiesRepository = new QuantitiesRepository();
    const schedulesRepository = new SchedulesRepository();

    const newMode = await modesRepository.save({
      pet_id: data["pet_id"],
      mode: data["mode"],
    });

    const newQuantity = await quantitiesRepository.save({
      pet_id: data["pet_id"],
      quantity: data["quantity"],
    });

    const schedules = await schedulesRepository.save(
      data["pet_id"],
      data["schedules"]
    );

    return {
      pet_id: data["pet_id"],
      mode: newMode.get("mode"),
      quantity: newQuantity.get("quantity"),
      schedules,
    };
  }
}

module.exports = CreateInformationsCase;
