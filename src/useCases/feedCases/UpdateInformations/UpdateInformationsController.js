const UpdateInformationsCase = require("./UpdateInformationsCase");

module.exports = {
  async handle(req, res) {
    const petId = req.params.petId;
    const { mode, quantity, schedules } = req.body;

    try {
      const updateInformationsCase = new UpdateInformationsCase();

      await updateInformationsCase.execute({
        pet_id: petId,
        mode,
        quantity,
        schedules,
      });

      return res
        .status(200)
        .json({ message: "Updated alimentation informations" });
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
