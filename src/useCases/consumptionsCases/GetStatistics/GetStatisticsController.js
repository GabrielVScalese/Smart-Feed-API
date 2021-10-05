const GetStatisticsCase = require("./GetStatisticsCase");
const GetConsumptionAverage = require("./GetStatisticsCase");

module.exports = {
  async handle(req, res) {
    const pet_id = req.params.petId;

    try {
      const getStatisticsCase = new GetStatisticsCase();
      const statistics = await getStatisticsCase.execute(pet_id);

      return res.json(statistics);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
