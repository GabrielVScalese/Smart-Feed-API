const GetSchedulesCase = require("./GetSchedulesCase");

module.exports = {
  async handle(req, res) {
    const petId = req.params.petId;

    try {
      const getSchedulesCase = new GetSchedulesCase();

      const schedulesByPet = await getSchedulesCase.execute(petId);

      return res.json(schedulesByPet);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
