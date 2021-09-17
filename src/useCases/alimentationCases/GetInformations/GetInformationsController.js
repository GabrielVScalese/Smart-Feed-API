const GetInformationsCase = require("./GetInformationsCase");

module.exports = {
  async handle(req, res) {
    const petId = req.params.petId;

    try {
      const getInformationsCase = new GetInformationsCase();

      const informations = await getInformationsCase.execute(petId);

      return res.json(informations);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
