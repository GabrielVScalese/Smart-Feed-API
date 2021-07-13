const RefreshTokenCase = require("./RefreshTokenCase");

module.exports = {
  async handle(req, res) {
    const { id } = req.body;

    try {
      const refreshTokenCase = new RefreshTokenCase();

      const result = await refreshTokenCase.execute({ id });

      return res.json(result);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
