const DeleteUserCase = require("./DeleteUserCase");

module.exports = {
  async handle(req, res) {
    const id = req.params.id;

    try {
      const deleteUserCase = new DeleteUserCase();

      await deleteUserCase.execute(id);

      return res.status(200).json({ message: "Deleted user" });
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
