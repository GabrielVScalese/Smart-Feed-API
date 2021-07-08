const AuthenticateUserCase = require("./AuthenticateUserCase");

module.exports = {
  async handle(req, res) {
    const { email, password } = req.body;

    try {
      const authenticateUserCase = new AuthenticateUserCase();

      const result = await authenticateUserCase.execute({ email, password });

      return res.status(200).json(result);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
