const User = require("../models/User");
const { hash, compare } = require("bcryptjs");

module.exports = {
  async findAll(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const { name, email, password } = req.body;

    const passwordHash = await hash(password, 8);

    const user = await User.create({
      name: name,
      email: email,
      password: passwordHash,
      verified: false,
    });

    return res.status(200).send(user);
  },

  async update(req, res) {
    const _email = req.params.email;

    const { name, email, password } = req.body;

    const passwordHash = await hash(password, 8);

    await User.update(
      { name, email, passwordHash },
      {
        where: {
          email: _email,
        },
      }
    );

    return res.status(200).send({ message: "Updated user" });
  },

  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    const passwordMatch = await compare(password, user["password"]);

    if (!passwordMatch)
      return res.status(401).send({ message: "Unauthorized user" });

    return res.status(200).send({ message: "Authorized user" });
  },

  async delete(req, res) {
    const email = req.params.email;

    await User.destroy({ where: { email: email } });

    return res.status(200).send({ message: "Deleted user" });
  },
};
