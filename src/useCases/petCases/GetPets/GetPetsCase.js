const PetsRepository = require("../../../repositories/PetsRepository");
const UsersRepository = require("../../../repositories/UsersRepository");

const FeedsRepository = require("../../../repositories/FeedsRepository");

class GetPetsCase {
  async execute(userId) {
    const usersRepository = new UsersRepository();
    const usersAlreadyExists = await usersRepository.findById(userId);

    if (!usersAlreadyExists) throw new Error("Nonexistent owner");

    const petsRepository = new PetsRepository();
    const feedsRepository = new FeedsRepository();

    const pets = await petsRepository.findByUserId(userId);

    let result = [];
    for (let i = 0; i < pets.length; i++) {
      let pet = pets[i];
      const feed = await feedsRepository.findByPetId(pet["id"]);
      pet["feed"] = feed;

      result.push(pet);
    }

    return result;
  }
}

module.exports = GetPetsCase;
