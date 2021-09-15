const GetModeCase = require("./GetModeCase");

module.exports = {
  async handle(req, res) {
    const petId = req.params.petId;

    try {
      const getModeCase = new GetModeCase();

      const mode = await getModeCase.execute(petId);

      return res.json(mode);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
