const CreateConsumptionCase = require("./CreateConsumptionCase");

module.exports = {
  async handle(req, res) {
    const { pet_id, quantity, date } = req.body;

    try {
      const createConsumptionCase = new CreateConsumptionCase();

      const newConsumption = await createConsumptionCase.execute({
        pet_id,
        quantity,
        date,
      });

      return res.status(200).json(newConsumption);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
