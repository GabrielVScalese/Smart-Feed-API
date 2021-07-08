const UpdateUserCase = require("./UpdateUserCase");

module.exports = {
  async handle(req, res) {
    const id = req.params.id;
    const { name, email, password } = req.body;

    try {
      const updateUserCase = new UpdateUserCase();

      await updateUserCase.execute({ id, name, email, password });

      return res.status(200).json({ message: "Updated user" });
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
