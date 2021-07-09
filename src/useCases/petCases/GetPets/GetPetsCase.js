const PetsRepository = require("../../../repositories/PetsRepository");
const UsersRepository = require("../../../repositories/UsersRepository");

class GetPetsCase {
  async execute(userId) {
    const usersRepository = new UsersRepository();
    const usersAlreadyExists = await usersRepository.findById(userId);

    if (!usersAlreadyExists) throw new Error("Nonexistent owner");

    const petsRepository = new PetsRepository();

    const pets = await petsRepository.findByUserId(userId);

    return pets;
  }
}

module.exports = GetPetsCase;
