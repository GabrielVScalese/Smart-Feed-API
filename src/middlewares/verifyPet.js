const PetsRepository = require("../repositories/PetsRepository");

module.exports = {
  async verifyPet(req, res, next) {
    const petId = req.params.petId;

    const petsRepository = new PetsRepository();
    const pet = await petsRepository.findById(petId);

    if (!pet) return res.status(400).json({ message: "Nonexistent pet" });

    return next();
  },
};
