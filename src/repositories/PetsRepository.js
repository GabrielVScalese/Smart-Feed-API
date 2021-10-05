const Pet = require("../models/Pet");

class PetsRepository {
  async findByUserId(userId) {
    const pets = await Pet.findAll({
      attributes: ["id", "name", "ration", "size", "device", "image"],
      where: {
        user_id: userId,
      },
    });

    return pets;
  }

  async findById(id) {
    const pet = await Pet.findOne({
      where: {
        id: id,
      },
    });

    return pet;
  }

  async save(pet) {
    const new_pet = await Pet.create(pet);

    return new_pet;
  }

  async update(pet) {
    await Pet.update(
      {
        user_id: pet["user_id"],
        name: pet["name"],
        animal: pet["animal"],
        ration: pet["ration"],
        size: pet["size"],
        device: pet["device"],
        image: pet["image"],
      },
      {
        where: {
          id: pet["id"],
        },
      }
    );
  }

  async destroy(id) {
    await Pet.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = PetsRepository;
