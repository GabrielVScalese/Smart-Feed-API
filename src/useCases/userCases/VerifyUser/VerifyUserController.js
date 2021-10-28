const VerifyUserCase = require("./VerifyUserCase");

module.exports = {
  async handle(req, res) {
    const { email } = req.body;

    try {
      const verifyUserCase = new VerifyUserCase();
      await verifyUserCase.execute({ email });

      return res.status(200).json({ message: "Verified user" });
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
