const User = require("../models/User");
const { hash, compare } = require("bcryptjs");

module.exports = {
  async findAll(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    try {
      const { name, email, password } = req.body;

      const passwordHash = await hash(password, 8);

      const user = await User.create({
        name: name,
        email: email,
        password: passwordHash,
        verified: false,
      });

      return res.status(200).send(user);
    } catch (err) {
      return res.status(401).send({ message: "Error for insert user" });
    }
  },

  async update(req, res) {
    try {
      const _email = req.params.email;

      const { name, email, password } = req.body;

      const user = await User.findOne({
        where: {
          email: _email,
        },
      });

      if (user == null)
        return res.status(401).send({ message: "Invalid user" });

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
    } catch (err) {
      return res.status(401).send({ message: "Error for update user" });
    }
  },

  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (user == null)
      return res.status(401).send({ message: "Unauthorized user" });

    const passwordMatch = await compare(password, user["password"]);

    if (!passwordMatch)
      return res.status(401).send({ message: "Unauthorized user" });

    return res.status(200).send({ message: "Authorized user" });
  },

  async delete(req, res) {
    const email = req.params.email;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (user == null)
      return res.status(401).send({ messsage: "Invalid credential" });

    await User.destroy({ where: { email: email } });

    return res.status(200).send({ message: "Deleted user" });
  },
};
