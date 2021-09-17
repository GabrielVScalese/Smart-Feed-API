const PetsRepository = require("../../../repositories/PetsRepository");
const CreateInformationsCase = require("../../alimentationCases/CreateInformations/CreateInformationsCase");

class CreatePetCase {
  async execute(data) {
    const petsRepository = new PetsRepository();

    const pet = await petsRepository.save(data);

    // const createInformationsCase = new CreateInformationsCase();
    // await createInformationsCase.execute({
    //   pet_id: pet.get("id"),
    //   mode: "Aproximação",
    //   quantity: 50,
    //   schedules: [],
    // });

    return pet;
  }
}

module.exports = CreatePetCase;
