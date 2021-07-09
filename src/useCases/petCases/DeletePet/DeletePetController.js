const DeletePetCase = require("./DeletePetCase");

module.exports = {
  async handle(req, res) {
    const id = req.params.id;

    try {
      const deletePetCase = new DeletePetCase();

      await deletePetCase.execute(id);

      return res.status(200).json({ message: "Deleted pet" });
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  },
};
