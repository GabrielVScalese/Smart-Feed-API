const CreateQuantityCase = require("./CreateQuantityCase");

module.exports = {
  async handle(req, res) {
    const { pet_id, quantity } = req.body;

    try {
      const createQuantityCase = new CreateQuantityCase();

      const newQuantity = await createQuantityCase.execute({
        pet_id,
        quantity,
      });

      return res.json(newQuantity);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected Error" });
    }
  },
};
