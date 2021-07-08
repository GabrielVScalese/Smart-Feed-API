const CreatePetCase = require("./CreatePetCase");

module.exports = {
  async handle(req, res) {
    const { user_id, name, animal, ration, size, device, image } = req.body;

    try {
      const createPetCase = new CreatePetCase();

      const pet = await createPetCase.execute({
        user_id,
        name,
        animal,
        ration,
        size,
        device,
        image,
      });

      return res.status(200).json(pet);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
