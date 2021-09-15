const Mode = require("../models/Mode");

class ModesRepository {
  async findByPetId(petId) {
    const mode = await Mode.findOne({
      where: {
        pet_id: petId,
      },
    });

    return mode;
  }

  async save(mode) {
    const newMode = await Mode.create(mode);

    return newMode;
  }
}

module.exports = ModesRepository;
