const UsersRepository = require("../../../repositories/UsersRepository");
const PetsRepository = require("../../../repositories/PetsRepository");
const ModesRepository = require("../../../repositories/ModesRepository");
const QuantitiesRepository = require("../../../repositories/QuantitiesRepository");
const SchedulesRepository = require("../../../repositories/SchedulesRepository");

class GetFeedsCase {
  async execute(data) {
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(data);

    if (!user) throw new Error("Nonexistent user");

    const petsRepository = new PetsRepository();

    let pets = await petsRepository.findByUserId(data);
    pets = pets.map(function (pet, index) {
      return pet["id"];
    });

    const modesRepository = new ModesRepository();
    const quantitiesRepository = new QuantitiesRepository();
    const schedulesRepository = new SchedulesRepository();

    const modes = await modesRepository.findByPetIds(pets);
    const quantities = await quantitiesRepository.findByPetIds(pets);
    const petsSchedules = await schedulesRepository.findByPetIds(pets);

    const feeds = [];
    for (let i = 0; i < pets.length; i++) {
      const feed = {
        pet_id: pets[i],
        mode: modes[i].get("mode"),
        quantity: quantities[i].get("quantity"),
        schedules: petsSchedules[i],
      };

      feeds.push(feed);
    }

    return feeds;
  }
}

module.exports = GetFeedsCase;
