const ResetTokenCase = require("./AuthResetTokenCase");

module.exports = {
  async handle(req, res) {
    const { resetTokenId } = req.body;

    try {
      const resetTokenCase = new ResetTokenCase();
      const decoded = await resetTokenCase.execute({ resetTokenId });

      return res.status(200).json(decoded);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
