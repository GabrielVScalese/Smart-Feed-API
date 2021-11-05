const UpdateUserCase = require("./UpdateUserCase");

module.exports = {
  async handle(req, res) {
    const id = req.params.id;
    const user = req.body;
    user["id"] = id;

    try {
      const updateUserCase = new UpdateUserCase();

      await updateUserCase.execute(user);

      return res.status(200).json({ message: "Updated user" });
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
