const PetsRepository = require("../../../repositories/PetsRepository");
const CreateInformationsCase = require("../../feedCases/CreateFeed/CreateFeedCase");

class CreatePetCase {
  async execute(data) {
    const petsRepository = new PetsRepository();

    const pet = await petsRepository.save(data);

    const createInformationsCase = new CreateInformationsCase();
    await createInformationsCase.execute({
      pet_id: pet.get("id"),
      mode: "Horários",
      quantity: 50,
      schedules: [],
    });

    return pet;
  }
}

module.exports = CreatePetCase;
