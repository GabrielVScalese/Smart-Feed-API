const QuantitiesRepository = require("../../../repositories/QuantitiesRepository");
const PetsRepository = require("../../../repositories/PetsRepository");

class CreateQuantityCase {
  async execute(data) {
    const petsRepository = new PetsRepository();

    const pet = await petsRepository.findById(data["pet_id"]);

    if (!pet) throw new Error("Nonexistent pet");

    const quantitiesRepository = new QuantitiesRepository();
    const quantity = await quantitiesRepository.findByPetId(data["pet_id"]);

    if (quantity.length == 1) throw new Error("Pet already has quantity");

    const newQuantity = await quantitiesRepository.save(data);

    return newQuantity;
  }
}

module.exports = CreateQuantityCase;
