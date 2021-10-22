const DeleteResetTokenCase = require("./DeleteResetTokenCase");

module.exports = {
  async handle(req, res) {
    const resetTokenId = req.params.resetTokenId;

    try {
      const deleteResetTokenCase = new DeleteResetTokenCase();
      await deleteResetTokenCase.execute(resetTokenId);

      return res.status(200).json({ message: "Deleted reset token id" });
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected erro" });
    }
  },
};
