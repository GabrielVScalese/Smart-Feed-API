const Quantity = require("../models/Quantity");

class QuantitiesRepository {
  async findByPetId(petId) {
    const quantity = await Quantity.findAll({
      where: {
        pet_id: petId,
      },
    });

    console.log(petId);
    return quantity;
  }

  async save(quantity) {
    const newQuantity = await Quantity.create(quantity);

    return newQuantity;
  }
}

module.exports = QuantitiesRepository;
