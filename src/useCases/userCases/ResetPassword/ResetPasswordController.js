const ResetPasswordCase = require("./ResetPasswordCase");

module.exports = {
  async handle(req, res) {
    const { email } = req.body;

    try {
      const resetPasswordCase = new ResetPasswordCase();
      const token = await resetPasswordCase.execute({ email });

      return res.status(200).json({ token });
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
