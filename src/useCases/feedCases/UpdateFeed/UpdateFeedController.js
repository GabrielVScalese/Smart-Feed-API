const UpdateFeedCase = require("./UpdateFeedCase");

module.exports = {
  async handle(req, res) {
    const petId = req.params.petId;
    const { mode, quantity, schedules } = req.body;

    try {
      const updateFeedCase = new UpdateFeedCase();

      await updateFeedCase.execute({
        pet_id: petId,
        mode,
        quantity,
        schedules,
      });

      return res.status(200).json({ message: "Updated feed informations" });
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
