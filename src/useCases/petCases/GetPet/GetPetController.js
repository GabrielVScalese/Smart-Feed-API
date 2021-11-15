const GetPetCase = require("./GetPetCase");

module.exports = {
  async handle(req, res) {
    const petId = req.params.petId;

    try {
      const getPetCase = new GetPetCase();
      const pet = await getPetCase.execute({ petId });

      return res.json(pet);
    } catch (err) {
      return { message: err.message || "Unexpected error" };
    }
  },
};
