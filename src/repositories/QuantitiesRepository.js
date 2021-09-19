const Quantity = require("../models/Quantity");

class QuantitiesRepository {
  async findByPetIds(petIds) {
    const quantities = await Quantity.findAll({
      attributes: ["quantity"],
      where: {
        pet_id: petIds,
      },
    });

    return quantities;
  }

  async save(quantity) {
    const newQuantity = await Quantity.create(quantity);

    return newQuantity;
  }

  async update(petId, quantity) {
    await Quantity.update(
      { quantity },
      {
        where: {
          pet_id: petId,
        },
      }
    );
  }
}

module.exports = QuantitiesRepository;
