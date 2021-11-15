const FeedsRepository = require("../../../repositories/FeedsRepository");
const PetsRepository = require("../../../repositories/PetsRepository");

class GetPetCase {
  async execute(data) {
    const petsRepository = new PetsRepository();
    const pet = await petsRepository.findById(data["petId"]);

    const feedsRepository = new FeedsRepository();
    const feed = await feedsRepository.findByPetId(data["petId"]);

    pet["feed"] = feed;

    return pet;
  }
}

module.exports = GetPetCase;
