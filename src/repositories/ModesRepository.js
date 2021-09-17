const Mode = require("../models/Mode");

class ModesRepository {
  async findByPetId(petId) {
    const mode = await Mode.findOne({
      attributes: ["mode"],
      where: {
        pet_id: petId,
      },
    });

    return mode.get("mode");
  }

  async save(mode) {
    const newMode = await Mode.create(mode);

    return newMode;
  }

  async update(petId, mode) {
    await Mode.update(mode, {
      where: {
        pet_id: petId,
      },
    });
  }
}

module.exports = ModesRepository;
