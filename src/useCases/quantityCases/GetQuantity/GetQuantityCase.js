const QuantitiesRepository = require("../../../repositories/QuantitiesRepository");
const PetsRepository = require("../../../repositories/PetsRepository");

class GetQuantityCase {
  async execute(data) {
    const petsRepository = new PetsRepository();

    const pet = await petsRepository.findById(data);

    if (!pet) throw new Error("Nonexistent pet");

    const quantitiesRepository = new QuantitiesRepository();
    const quantity = await quantitiesRepository.findByPetId(data);

    return quantity;
  }
}

module.exports = GetQuantityCase;
