const ResetTokenCase = require("./ResetTokenCase");

module.exports = {
  handle(req, res) {
    const { token } = req.body;

    try {
      const resetTokenCase = new ResetTokenCase();
      const decoded = resetTokenCase.execute({ token });

      return res.status(200).json({ decoded });
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
