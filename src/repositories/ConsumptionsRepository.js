const Consumption = require("../models/Consumption");
const sequelize = require("sequelize");

class ConsumptionsRepository {
  async findByPetId(petId) {
    const consumptions = await Consumption.findAll({
      attributes: ["id", "date", "quantity"],
      where: {
        pet_id: petId,
      },
    });

    return consumptions;
  }

  async findGreaterConsumption(petId) {
    const greaterConsumption = await Consumption.findOne({
      attributes: ["date", "quantity"],
      where: {
        quantity: await Consumption.max("quantity", {
          where: {
            pet_id: petId,
          },
        }),
        pet_id: petId,
      },
    });

    return greaterConsumption;
  }

  async findSmallerConsumption(petId) {
    const smallerConsumption = await Consumption.findOne({
      attributes: ["date", "quantity"],
      where: {
        quantity: await Consumption.min("quantity", {
          where: {
            pet_id: petId,
          },
        }),
        pet_id: petId,
      },
    });

    return smallerConsumption;
  }

  async save(consumption) {
    const newConsumption = await Consumption.create(consumption);

    return newConsumption;
  }

  async getAverage(petId) {
    const consumptionAverage = await Consumption.findAll({
      attributes: [
        [sequelize.fn("avg", sequelize.col("quantity")), "consumptionAverage"],
      ],
      where: {
        pet_id: petId,
      },
    });

    return consumptionAverage[0].get("consumptionAverage");
  }
}

module.exports = ConsumptionsRepository;
