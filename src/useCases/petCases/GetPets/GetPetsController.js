const GetPetsCase = require("./GetPetsCase");

module.exports = {
  async handle(req, res) {
    const userId = req.params.userId;

    try {
      const getPetsCase = new GetPetsCase();
      const pets = await getPetsCase.execute(userId);

      return res.json(pets);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
