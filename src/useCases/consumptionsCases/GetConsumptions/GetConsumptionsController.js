const GetConsumptionsCase = require("./GetConsumptionsCase");

module.exports = {
  async handle(req, res) {
    const petId = req.params.petId;

    try {
      const getConsumptionsCase = new GetConsumptionsCase();

      const consumptions = await getConsumptionsCase.execute(petId);

      return res.json(consumptions);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
