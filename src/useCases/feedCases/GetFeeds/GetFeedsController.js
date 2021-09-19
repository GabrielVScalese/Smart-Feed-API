const GetFeedsCase = require("./GetFeedsCase");

module.exports = {
  async handle(req, res) {
    const userId = req.params.userId;

    try {
      const getFeedsCase = new GetFeedsCase();

      const feeds = await getFeedsCase.execute(userId);

      return res.json(feeds);
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
