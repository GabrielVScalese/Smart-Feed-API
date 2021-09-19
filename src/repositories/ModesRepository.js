const Mode = require("../models/Mode");

class ModesRepository {
  async findByPetIds(petIds) {
    const modes = await Mode.findAll({
      attributes: ["mode"],
      where: {
        pet_id: petIds,
      },
    });

    return modes;
  }

  async save(mode) {
    const newMode = await Mode.create(mode);

    return newMode;
  }

  async update(petId, mode) {
    console.log("dasd");
    await Mode.update(
      { mode },
      {
        where: {
          pet_id: petId,
        },
      }
    );
  }
}

module.exports = ModesRepository;
