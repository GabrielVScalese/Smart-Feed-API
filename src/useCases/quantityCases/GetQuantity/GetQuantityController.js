const GetQuantityCase = require("./GetQuantityCase");

module.exports = {
  async handle(req, res) {
    const petId = req.params.petId;

    try {
      const getQuantityCase = new GetQuantityCase();
      const quantity = await getQuantityCase.execute(petId);

      return res.json(quantity);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
