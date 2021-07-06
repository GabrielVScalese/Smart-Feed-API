const Pet = require("../models/Pet");
const User = require("../models/User");

module.exports = {
  async findAll(req, res) {
    const pets = await Pet.findAll();

    return res.json(pets);
  },

  async findByEmail(req, res) {
    const email = req.params.email;

    const user = await User.findOne({ where: { email: email } });

    const pets = await Pet.findAll({ where: { user_id: user["id"] } });

    return res.json(pets);
  },

  async store(req, res) {
    const { userId, name, animal, ration, size, device, image } = req.body;

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

  async update(req, res) {
    const id = req.params.id;
    const { name, animal, ration, size, device, image } = req.body;

    await Pet.update(
      { name, animal, ration, size, device, image },
      { where: { id: id } }
    );

    return res.status(200).send({ message: "Updated pet" });
  },

  async delete(req, res) {
    const id = req.params.id;

    await Pet.destroy({ where: { id: id } });

    return res.status(200).send({ message: "Deleted pet" });
  },
};
