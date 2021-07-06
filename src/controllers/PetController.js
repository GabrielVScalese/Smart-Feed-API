const Pet = require("../models/Pet");

module.exports = {
  async findAll(req, res) {
    const pets = await Pet.findAll();

    return res.json(pets);
  },

  async store(req, res) {
    const { userId, name, animal, ration, size, device, image } = req.body;

    console.log(userId);
    const pet = await Pet.create({
      user_id: userId,
      name: name,
      animal: animal,
      ration: ration,
      size: size,
      device: device,
      image: image,
    });

    return res.status(200).send(pet);
  },
};
