const UpdatePetCase = require("./UpdatePetCase");

module.exports = {
  async handle(req, res) {
    const id = req.params.id;
    const { user_id, name, animal, ration, size, device, image } = req.body;

    try {
      const updatePetCase = new UpdatePetCase();

      await updatePetCase.execute({
        id,
        user_id,
        name,
        animal,
        ration,
        size,
        device,
        image,
      });

      return res.status(200).json({ message: "Updated pet" });
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
