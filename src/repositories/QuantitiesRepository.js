const Quantity = require("../models/Quantity");

class QuantitiesRepository {
  async findByPetId(petId) {
    const quantity = await Quantity.findOne({
      attributes: ["quantity"],
      where: {
        pet_id: petId,
      },
      raw: true,
    });

    return quantity["quantity"];
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
