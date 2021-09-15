const Quantity = require("../models/Quantity");

class QuantitiesRepository {
  async findByPetId(petId) {
    const quantity = await Quantity.findOne({
      where: {
        pet_id: petId,
      },
    });

    return quantity;
  }

  async save(quantity) {
    const newQuantity = await Quantity.create(quantity);

    return newQuantity;
  }
}

module.exports = QuantitiesRepository;
