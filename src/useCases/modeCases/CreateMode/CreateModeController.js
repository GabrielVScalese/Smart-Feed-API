const CreateModeCase = require("./CreateModeCase");

module.exports = {
  async handle(req, res) {
    const { pet_id, mode } = req.body;

    try {
      const createModeCase = new CreateModeCase();

      const newMode = await createModeCase.execute({ pet_id, mode });

      return res.json(newMode);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
